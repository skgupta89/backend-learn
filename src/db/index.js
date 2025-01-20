import mongoose from "mongoose";
import { DB_NAME } from '../constants.js';  // Ensure the path and name are correct

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(connectionInstance.connection.host, 'connected');
  } catch (error) {
    console.log(error);
    process.exit(1);  
  }
};

export default connectDB;
