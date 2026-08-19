import express from "express";
import { Logout, Register, Login } from "../controllers/authController.js";
import { Bookmark, CreateTweet, DeleteTweet, GetAllTweets, LikeOrUnlikeTweet, SetViewCount } from "../controllers/tweetController.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

router.post("/create", isAuthenticated, CreateTweet);
router.delete("/delete/:id", isAuthenticated, DeleteTweet);
router.put("/like/:id", isAuthenticated, LikeOrUnlikeTweet);
router.put("/bookmark/:id", isAuthenticated, Bookmark);
router.put("/view/:id", isAuthenticated, SetViewCount);
router.get("/getalltweets/:id", isAuthenticated, GetAllTweets);

export default router;