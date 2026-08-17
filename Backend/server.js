import express from 'express'
import dotenv from 'dotenv';
import databaseConnection from './config/database.js';
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoutes.js'
import tweetRoute from './routes/tweetRoutes.js'

dotenv.config({
    path: ".env"
});

databaseConnection();

const app = express();
const PORT = process.env.PORT;

//middlewares
app.use(express.urlencoded({
    extends: true
}));
app.use(express.json());
app.use(cookieParser());

//apis
app.use("/api/v1/user", userRoute);
app.use("/api/v1/tweet", tweetRoute);

app.get("/home", ( req, res ) => {
    res.status(200).json({
        message: "Heyyyy"
    })
});

app.listen(PORT, () => {
    console.log("server listening at port:", PORT);
});