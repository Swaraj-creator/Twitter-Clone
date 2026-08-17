import express from "express";
import { Logout, Register, Login, GetMyProfile } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/logout", Logout);
router.get("/profile/:id", GetMyProfile);

export default router;