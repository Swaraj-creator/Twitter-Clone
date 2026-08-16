import { User } from "../models/userSchema.js";
import dotenv from "dotenv"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

dotenv.config({
    path: "../.env"
});

export const Register = async ( req, res ) => {
    try {
        const {name, username, email, password} = req.body;
        if (!name || !username || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                responseCode: "101",
                success: false
            });
        }

        let user = await User.findOne({ email });
        if(user) {
            return res.status(401).json({
                message: "User already exists",
                responseCode: "102",
                success: false
            });
        }

        const hashedPassword = await bcryptjs.hash(password, Number(process.env.HASHING_STRENGTH));
        
        user = await User.create({
            name,
            username,
            email,
            password: hashedPassword
        });
        return res.status(201).json({
            message: "Account created successfully",
            responseCode: "100",
            success: true
        });
    } catch (err) {
        console.log(err);
        res.status(401).json({
            message: "Some error occured",
            responseCode: "104",
            success: false
        });
    }
}

export const Login = async ( req, res ) => {
    try {
        const { email, password } = req.body;
        if(!email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                responseCode: "101",
                success: false
            });
        }

        let user = await User.findOne({ email });
        if(!user) {
            return res.status(404).json({
                message: "User not found",
                responseCode: "105",
                success: false
            });
        }

        if(!await bcryptjs.compare(password, user.password)) {
            return res.status(401).json({
                message: "Wrong password",
                responseCode: "106",
                success: false
            });
        }

        const token = await jwt.sign({userId: user._id}, process.env.TOKEN_KEY, {expiresIn: "10d"});
        return res.status(201)
        .cookie("token", token, {maxAge: 10 * 24 * 60 * 60 * 1000, httpOnly: true})
        .json({
            message: "Login successful",
            responseCode: "103",
            success: true
        });

    } catch (err) {
        console.log(err);
        res.status(401).json({
            message: "Some error occured",
            responseCode: "104",
            success: false
        });
    }
}