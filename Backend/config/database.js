import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path: "../.env"
});

const databaseConnection = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("mongodb connected");
    })
    .catch((error) => {
        console.error(error);
    });
}

export default databaseConnection;