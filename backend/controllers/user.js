import User from "../Schema/userSchema.js"
import bcrypt from 'bcryptjs';

import { createError } from "../utilities/error.js";
import  jwt  from "jsonwebtoken";

export const register=async(req,res,next)=>{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    try {
        const newUser=new User({
            fullname:req.body.fullname,
            username:req.body.username,
            password:hash,
            email:req.body.email,
            mobile:req.body.mobile,
            address:req.body.address,
            city:req.body.city,
            state:req.body.state,
            image:req.body.image
        });
const savedUser=await newUser.save();
if(savedUser!=null){
    res.status(200).json("User has been added");
}

    } catch (error) {
        next(error);
    }
}

export const deleteuser=async(req,res,next)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('user has been deleted')
    } catch (error) {
        next(error);
    }
}

export const login=async(req,res,next)=>{
    const username=await req.body.username;
    const pwd=await req.body.password;
    try {
        // bcrypt.compare(password);
        const user= await User.findOne({username:username});
        console.log(user);
        if(!user){
            return next(createError(404,"user not found"));
        }
        const ispasswordcorrect=await bcrypt.compare(pwd,user.password);
        if(!ispasswordcorrect) return next(createError(400,"Password or Username is not correct"));
        const { password,...otherDetails }=user._doc;
        //creating jwt 
        const token=jwt.sign({id:user._id,username:user.username},process.env.JWT_SECRETKEY);
        res
        .cookie("accessToken",token,{
            httpOnly:true
        })
        .status(200).json({...otherDetails});
    } catch (error) {
        next(error);
    }
}
export const updateUser=async(req,res,next)=>{
    try {
        const updatedUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
}
export const getAllUser=async(req,res,next)=>{
    try {
        const users=await User.find();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}