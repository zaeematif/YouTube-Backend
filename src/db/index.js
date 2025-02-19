import dotenv from 'dotenv'

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


dotenv.config({
    path: "./env"
})

const connectionDB = async () => {
  try {
    //connect with the database
    const connectionInstance = await mongoose.connect(`{process.env.MONGODB_URL}/${DB_NAME}`);

    console.log(`\n MongoDB connected. DB Host: ${connectionInstance.connection.host}`);
    
  } catch (error) {
    console.log("MONGODB CONNECTION : ", error);
    //node provides this feature to exit any application
    process.exit(1);
  }
};

export default connectionDB;
