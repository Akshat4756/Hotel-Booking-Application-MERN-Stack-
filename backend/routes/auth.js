import express from 'express';
import { verify } from '../utilities/verifyToken.js';

const Router=express.Router();

Router.get('/checkauthentication',verify,async(req,res,next)=>{
    console.log(req);
    res.send("Hey congrats you are authenticated");
})

export default Router;