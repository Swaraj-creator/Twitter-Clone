import { User } from "../models/userSchema.js";
import { Tweet } from "../models/tweetSchema.js";
import { Preferences } from "../models/preferences.js";

const generateFeed = async (id) => {
    const loggedInUser = await User.findById(id).select("-password -bookmarks -email");
    const userIds = [id, ...loggedInUser.following];
    const preferences = await Preferences.findOne({ userId: id });

    if (!preferences) {
        const tweets = await Tweet.find({
            userId: { $in: userIds }
        })
        .sort({ createdAt: -1 })
        .limit(100);

        return tweets.map(tweet => {
            const data = tweet.toObject();

            data.isBookmarked = data.bookmarks.includes(id);
            data.bookmarksCount = data.bookmarks.length;

            delete data.bookmarks;

            return data;
        });
    }

    let finalPreferenceList = [];
    let topicName;

    preferences.interests.forEach(preference => {
        topicName = preference.topic;
        let score = (Math.log1p(preference.viewCount) * 1) +
                    (preference.watchRatio * 2) +
                    (Math.log1p(preference.likes) * 5) + 
                    (Math.log1p(preference.replies) * 7) + 
                    (Math.log1p(preference.reposts) * 6) +
                    (Math.log1p(preference.bookmarks) * 8) +
                    (Math.log1p(preference.shares) * 9) +
                    (Math.log1p(preference.profileVisits) * 4) - 
                    (Math.log1p(preference.skips) * 4);
        let delaySinceInteraction = preference.lastInteractedAt ? (Date.now() - preference.lastInteractedAt) / (1000 * 60 * 60 * 24) : 0;
        let decay = Math.exp(-preference.decayRate * delaySinceInteraction);
        const finalScore = score * decay;

        finalPreferenceList.push({
            topic: topicName,
            score: finalScore
        });
    });
    
    const preferenceMap = new Map(
        finalPreferenceList.map(preference => [
            preference.topic.toLowerCase(),
            preference.score
        ])
    );
    
    const tweets = await Tweet.find({
        userId: { $in: userIds }
    })
    .sort({createdAt: -1})
    .limit(100);

    const rankedTweets = tweets.map(tweet => {
        const data = tweet.toObject();

        // 1. Preference
        let preferenceScore = 0;

        for (const tag of data.hashTags || []) {
            const score = preferenceMap.get(tag.toLowerCase());

            if (score !== undefined) {
                preferenceScore += score;
            }
        }

        // 2. Freshness
        const ageInHours =
            (Date.now() - new Date(data.createdAt)) /
            (1000 * 60 * 60);

        const freshnessScore = Math.exp(-0.05 * ageInHours);

        // 3. Engagement
        const engagementScore =
            Math.log1p(data.likes?.length || 0) * 2 +
            Math.log1p(data.replies?.length || 0) * 3 +
            Math.log1p(data.reposts?.length || 0) * 2 +
            Math.log1p(data.bookmarks?.length || 0) * 3;

        // 4. Relationship
        let relationshipScore = 0;

        if (String(data.userId) === String(id)) {
            relationshipScore = 1;
        } else if (loggedInUser.following.includes(data.userId)) {
            relationshipScore = 0.8;
        }

        // 5. Final score
        const finalScore =
            preferenceScore * 0.50 +
            freshnessScore * 0.20 +
            engagementScore * 0.15 +
            relationshipScore * 0.15;

        data.finalScore = finalScore;

        return data;
    });

    rankedTweets.sort((a, b) => {
        return b.finalScore - a.finalScore;
    });

    const tweetData = rankedTweets.map((data) => {
        data.isBookmarked = data.bookmarks.includes(id);
        data.bookmarksCount = data.bookmarks.length;
        delete data.bookmarks;
        delete data.preferenceScore;
        delete data.finalScore;
        return data;
    });

    return tweetData;
}

export default generateFeed;