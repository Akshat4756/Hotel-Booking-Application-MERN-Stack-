import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import homepage from './routes/homepage.js';

const app=express();

dotenv.config();
const port=process.env.PORT;

const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGODBURL);
        console.log('Got Connected to the Db ');
    } catch (error) {
        console.log('ewww');
        console.log(error);
    }
}
mongoose.connection.on("disconnected",()=>{
    console.log("disconnect ho gya bsdk ");
})
mongoose.connection.on("connected",()=>{
    console.log("bhai ! bas kr connect ho gya ");
})
app.use("/Home/",homepage);
app.listen(port,()=>{
    console.log('Connected to '+ port);
    connect();
})
