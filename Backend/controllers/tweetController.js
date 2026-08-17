import { Tweet } from "../models/tweetSchema.js";

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
        return res.status(401).json({
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
        return res.status(401).json({
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
        return res.status(401).json({
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
            return res.status(200).json({
                message: "Removed from bookmarks"
            });
        } else {
            await Tweet.findByIdAndUpdate(tweetId, {$push: {bookmarks: userId}});
            return res.status(200).json({
                message: "Bookmarked"
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message: "Some error occured",
            responseCode: "104",
            success: false
        });
    }
}

// export const SetViewCount = async ( req, res ) => {

// }