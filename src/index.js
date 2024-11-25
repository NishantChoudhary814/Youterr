// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

//asynchronous code return promise
connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log("Server is running at Port ",process.env.PORT);
    })
})
.catch((err)=>{
    console.log("MONGODB CONNECTION FAILED !!! ",err);
})


/*

import mongoose, { connect } from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";
const app = express();

//make IIFI
(async ()=>{
    try {
        //waiting to connect DB and assign it name as DB_NAME
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        
        //checking if express is connected or not
        app.on("error",(error)=>{
            console.log("Error: ",error);
            throw error;
        })

        //express app listening on some port
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("Error: ",error);
        throw error
    }
})()

*/