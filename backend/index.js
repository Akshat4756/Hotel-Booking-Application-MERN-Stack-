import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import hotel from './routes/hotels.js';
import user from './routes/users.js';
import cookieParser from 'cookie-parser';
import auth from './routes/auth.js';

const app=express();

dotenv.config();
const port=process.env.PORT;
//to connect to the mongo db
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

//middlewares
app.use(cookieParser());
app.use(express.json());
app.use("/Hotel/",hotel);
app.use('/Users/',user);
app.use('/auth/',auth);


app.use((err,req,res,next)=>{
    console.log(err);
    return res.status(500).json(err);
})


app.listen(port,()=>{
    console.log('Connected to '+ port);
    connect();
})
