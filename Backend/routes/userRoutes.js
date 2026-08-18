import express from "express";
import { Logout, Register, Login, GetProfile, GetOtherUsers, FollowUnfollowUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/logout", Logout);
router.get("/profile/:id", GetProfile);
router.get("/people/:id", GetOtherUsers);
router.put("/follow/:id", FollowUnfollowUser);

export default router;