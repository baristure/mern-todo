const express = require('express');
const httpStatus=require('http-status');
const todoRouter=express.Router();

todoRouter.post("/add",(req,res)=>{
    res.status(httpStatus.CREATED).send({message:"Todo created"});
})

module.exports=todoRouter;