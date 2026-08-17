import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config({
    path: "../.env"
});

const isAuthenticated = async ( req, res, next ) => {
    try {
        const {token} = req.cookies;
        if(!token) {
            return res.status(401).json({
                message: "User not authenticated",
                responseCode: "109",
                success: false
            });
        }

        const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decode.userId;
        next();
    } catch (err) {
        return res.status(401).json({
            message: "Some error occured",
            responseCode: "104",
            success: false
        });
    }
}

export default isAuthenticated;