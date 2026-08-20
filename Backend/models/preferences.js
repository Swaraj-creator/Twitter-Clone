import mongoose from 'mongoose'

const PreferencesSchema = mongoose.Schema({
    userId: {
        type: String,
        unique: true
    },
    interests: [{
        topic: {
            type: String,
            required: true
        },
        viewCount: {
            type: Number,
            default: 0
        },
        watchRatio: {
            type: Number,
            default: 0
        },
        likes: {
            type: Number,
            default: 0
        },
        replies: {
            type: Number,
            default: 0
        },
        reposts: {
            type: Number,
            default: 0
        },
        bookmarks: {
            type: Number,
            default: 0
        },
        shares: {
            type: Number,
            default: 0
        },
        skips: {
            type: Number,
            default: 0
        },
        profileVisits: {
            type: Number,
            default: 0
        },
        lastViewedAt: {
            type: Date
        },
        lastInteractedAt: {
            type: Date
        },
        firstSeenAt: {
            type: Date,
            default: Date.now
        },
        decayRate: {
            type: Number,
            default: 0.05
        }
    }]
});

export const Preferences = mongoose.model("Preferences", PreferencesSchema);