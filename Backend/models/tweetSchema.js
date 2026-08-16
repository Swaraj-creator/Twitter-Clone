import mongoose from "mongoose";

const TweetSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    likes: {
        type: Array,
        default: []
    },
    bookmarks: {
        type: Array,
        default: []
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},
{
    timestamps: true
});

export const Tweet = mongoose.model("Tweet", TweetSchema);