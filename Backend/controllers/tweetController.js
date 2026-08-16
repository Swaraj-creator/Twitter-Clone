import { Tweet } from "../models/tweetSchema";

export const CreateTweet = async ( req, res ) => {
    try {
        const {description, id} = req.body;
        if(!description || !id) {
            return res.status(401).json({
                message: "Fields are required",
                responseCode: "101",
                success: false
            });
        }

        const tweet = await Tweet.create({
            description,
            userId: id
        });
        return res.status(201).json({
            message: "Tweet created successfully",
            responseCode: "120",
            success: true,
            tweet: tweet
        });

    } catch (error) {
        return res.status(401).json({
            message: "Some error occured",
            responseCode: "104",
            success: false
        });
    }
}