import { User } from "../models/userSchema.js";
import dotenv from "dotenv"
import bcryptjs from "bcryptjs"
import jwt, { decode } from "jsonwebtoken"

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
        return res.status(500).json({
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
                message: "Invalid email or password",
                responseCode: "105",
                success: false
            });
        }

        if(!await bcryptjs.compare(password, user.password)) {
            return res.status(401).json({
                message: "Invalid email or password",
                responseCode: "106",
                success: false
            });
        }

        const token = await jwt.sign({userId: user._id}, process.env.JWT_SECRET_KEY, {expiresIn: "10d"});
        return res.status(200)
        .cookie("token", token, {expiresIn: "10d", httpOnly: true})
        .json({
            message: "Login successful",
            responseCode: "103",
            success: true
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Some error occured",
            responseCode: "104",
            success: false
        });
    }
}

export const Logout = async ( req, res ) => {
    return res.cookie("token", "", {expiresIn: new Date(Date.now())})
    .json({
        message: "User logged out",
        responseCode: 110,
        success: true
    });
}

export const GetProfile = async ( req, res ) => {
    try {
        const token = req.cookies.token;
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        let userId = decoded.userId;
        const fetchedId = req.params.id;
        const isMe = (userId == fetchedId) ? true : false;

        userId = (userId == fetchedId) ? userId : fetchedId;
        let user = await User.findById(userId).select("-password");

        if (!user) {
            return res.status(404).json({
                message: "Unable to fetch user data"
            });
        }
    
        user = {
            name: user.name,
            username: user.username,
            followers: user.followers,
            following: user.following,
            joinedDate: user.createdAt,
            isMe: isMe
        }
        if (isMe) {
            user.email = user.email;
            user.bookmarks = user.bookmarks;
        }

        return res.status(200).json({
            message: "User data fetched successfully",
            user: user
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

export const GetOtherUsers = async ( req, res ) => {
    const userId = req.params.id;
    try {
        let otherUsers = await User.find({_id: {$ne: userId}}).select("-password -email -bookmarks");
    
        if (!otherUsers) {
            return res.status(404).json({
                message: "Unable to fetch Other users"
            });
        }
    
        return res.status(200).json({
            message: "Users fetched successfully",
            users: otherUsers
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

export const FollowUnfollowUser = async ( req, res ) => {
    try {
        const token = req.cookies.token;
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const myId = decoded.userId;
        const userId = req.params.id;
        if (myId == userId) {
            return res.status(403).json({
                message: "You cant follow yourself",
                success: false
            });
        }
        const myData = await User.findById(myId).select("following");
        const userData = await User.findById(userId).select("name followers");

        if (!userData || !myData) {
            return res.status(404).json({
                message: "Unable to fetch Other users"
            });
        }

        if (myData.following.includes(userId)) {
            await User.findByIdAndUpdate(myId, {$pull:{following: userId}});
            await User.findByIdAndUpdate(userId, {$pull:{followers: myId}});
            return res.status(200).json({
                message: "Unfollowed" + userData.name,
                success: true
            });
        } else {
            await User.findByIdAndUpdate(myId, {$addToSet:{following: userId}});
            await User.findByIdAndUpdate(userId, {$addToSet:{followers: myId}});
            return res.status(200).json({
                message: "Followed" + userData.name,
                success: true
            });
        }

        return res.status(401).json({
            message: "Unable to follow",
            success: false
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