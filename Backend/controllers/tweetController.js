import { Tweet } from "../models/tweetSchema.js";
import { User } from "../models/userSchema.js";

export const CreateTweet = async ( req, res ) => {
    try {
        const {description, userId} = req.body;
        if(!description || !userId) {
            return res.status(401).json({
                message: "Fields are required",
                responseCode: "101",
                success: false
            });
        }

        const tweet = await Tweet.create({
            description,
            userId: userId
        });
        return res.status(201).json({
            message: "Tweet created successfully",
            responseCode: "120",
            success: true,
            tweet: tweet
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Some error occured",
            responseCode: "104",
            success: false
        });
    }
}
export const DeleteTweet = async ( req, res ) => {
    try {
        const {id} = req.params;
        await Tweet.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Tweet deleted Successfully",
            responseCode: "111",
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Some error occured",
            responseCode: "104",
            success: false
        });
    }
}

export const LikeOrUnlikeTweet = async ( req, res ) => {
    const userId = req.body.userId;
    const tweetId = req.params.id;
    const tweet = await Tweet.findById(tweetId);

    try {
        if(tweet.likes.includes(userId)) {
            //dislike
            await Tweet.findByIdAndUpdate(tweetId, {$pull: {likes: userId}});
            return res.status(200).json({
                message: "Unliked"
            });
        } else {
            //like
            await Tweet.findByIdAndUpdate(tweetId, {$push: {likes: userId}});
            return res.status(200).json({
                message: "Liked"
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Some error occured",
            responseCode: "104",
            success: false
        });
    }
}

export const Bookmark = async ( req, res ) => {
    const userId = req.body.userId;
    const tweetId = req.params.id;
    const tweet = await Tweet.findById(tweetId);

    try {
        if(tweet.bookmarks.includes(userId)) {
            await Tweet.findByIdAndUpdate(tweetId, {$pull: {bookmarks: userId}});
            await User.findByIdAndUpdate(userId, {$pull: {bookmarks: tweetId}});
            return res.status(200).json({
                message: "Removed from bookmarks"
            });
        } else {
            await Tweet.findByIdAndUpdate(tweetId, {$push: {bookmarks: userId}});
            await User.findByIdAndUpdate(userId, {$push: {bookmarks: tweetId}});
            return res.status(200).json({
                message: "Bookmarked"
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Some error occured",
            responseCode: "104",
            success: false
        });
    }
}

export const SetViewCount = async ( req, res ) => {
    const userId = req.body.userId;
    const tweetId = req.params.id;
    const tweet = await Tweet.findById(tweetId);

    try {
        if(!tweet) {
            return res.status(404).json({
                message: "Tweet not found",
                responseCode: "105",
                success: false
            });
        }
    
        await Tweet.findByIdAndUpdate(tweetId, {viewCount: parseInt(tweet.viewCount) + 1});
        return res.status(200).json({
            message: `Views = ${parseInt(tweet.viewCount) + 1}`
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Some error occured",
            responseCode: "104",
            success: false
        });
    }
}

export const GetAllTweets = async ( req, res ) => {
    try {
        const id = req.params.id;
        const loggedInUser = await User.findById(id).select("-password -bookmarks -email");
        const userIds = [id, ...loggedInUser.following];
        // const loggedInUserTweets = await Tweet.find({userId: id});
        // const followingUserTweets = await Promise.all(loggedInUser.following.map((otherUsersId) => {
        //     return Tweet.find({userId: otherUsersId});
        // }));
        const tweets = await Tweet.find({
            userId: { $in: userIds }
        });
        const tweetData = tweets.map((tweet) => {
            const data = tweet.toObject();
            data.isBookmarked = data.bookmarks.includes(id);
            data.bookmarksCount = data.bookmarks.length;
            delete data.bookmarks;
            return data;
        });
        return res.status(200).json({
            tweets: tweetData
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Some error occured",
            responseCode: "104",
            success: false
        });
    }
}