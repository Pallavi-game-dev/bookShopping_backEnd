const express = require('express');
const router = express.Router();
const userschema = require('../models/user.js');

// API -- get,post,patch,delete

    router.get('/',async(req,res)=>{
        try{
            const books = await userschema.find();
            const resObj = {
                status:true,
                messasge:"List of Books List",
                books:books
            }
            res.json(books);
        }catch(err){
            const resObj = {
                status:false,
                messasge:"Something went wrong please try later",
            
            }
            res.json(resObj);
        }
    });
    router.post('/',async(req,res)=>{
        let userDetails  = new userschema({
            FName:req.body.FName,
            LName:req.body.LName,
            Address:req.body.Address,
            PhoneNo:req.body.PhoneNo,
            EmailId:req.body.EmailId,
            Password:req.body.Password,
        })
        try{
            const user = await userDetails.save();
            const resObj = {
                status:true,
                messasge:"details of user successfully saved ",
                user:user._id
                
            }
            res.json(user);
        }catch(error){
            const resObj = {
                status:false,
                message:"Something went Wrong"
            }
            res.json(resObj);
        }
    });

    module.exports = router;
    
