import dotenv from 'dotenv'

import mongoose from 'mongoose'
import express from 'express'
import connectionDB from './db/index.js';

dotenv.config({
    path: "./env"
})

// const app = express();

connectionDB();

// ;(async () => {

//     try {
//         //connect with the database
//         await mongoose.connect(`{process.env.MONGODB_URL}/${DB_NAME}`);

//         //check if, express not able to communicate to DB '.on()'
//         app.on("error", (err)=>{
//             console.log(err);
//             throw err;
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listing on PORT: ${process.env.PORT}`);
            
//         })

//     } catch (error) {
//         console.log("ERROR: ", error);
//     }

// })();