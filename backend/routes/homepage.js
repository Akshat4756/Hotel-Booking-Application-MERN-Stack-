import express from 'express';
const Router=express.Router();

Router.get('/Intro',(req,res)=>{
    try {
        console.log('hi');
        res.status(200).send('Hi, I am Akshat dwivedi!');
    } catch (error) {
        console.log(error);
    }
    
})
export default Router
//here we are exporting Router 