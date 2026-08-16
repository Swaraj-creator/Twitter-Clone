import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config({
    path: "../.env"
});

const isAuthenticated = async ( req, res, next ) => {
    try {
        const {token} = res.cookies;
        console.log(token);
        if(!token) {
            return res.status(401).json({
                message: "User not authenticated",
                responseCode: "109",
                success: false
            });
        }

        const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log(decode);
        req.user = decode.id;
        next();
    } catch (err) {
        return res.status(401).json({
            message: "Some error occured",
            responseCode: "104",
            success: false
        });
    }
}