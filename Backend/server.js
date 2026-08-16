import express from 'express'
import dotenv from 'dotenv';
import databaseConnection from './config/database.js';

dotenv.config({
    path: ".env"
});

databaseConnection();

const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("server listening at port:", PORT);
});