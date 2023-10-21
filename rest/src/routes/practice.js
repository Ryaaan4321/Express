const express= require("express");
const userPractice=express.Router();

userPractice.post('/fuc1',(req,res)=>{
    res.send("hummmmmm (❁´◡`❁)")
});
userPractice.post('/fuc12',(req,res)=>{
    res.send("ammmmmmmmm (❁´◡`❁)")
});

module.exports=userPractice;