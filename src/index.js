// require('dotenv').config();
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();
























/*
import mongoose, { mongo } from "mongoose";
import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${proccess.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", error => {
      console.log("ERROR", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log("port listening on ", process.env.PORT);
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
})();
*/
