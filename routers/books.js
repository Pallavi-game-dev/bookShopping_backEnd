const express = require('express');
const router = express.Router();
const bookDataSchema = require('../models/book.js');


router.get('/',async(req,res)=>{
    try{
        const books = await bookDataSchema.find();
        const resObj = {
            status:true,
            messasge:"List of Books List",
            books:books
        }
        res.json(books);
    }catch(err){
        const resObj = {
            status:false,
            messasge:"Something went wrong",
           
        }
        res.json(resObj);
    }
});

router.get('/:id',async(req,res)=>{
    try{
        const book = await bookDataSchema.findById(req.params.id);
        const resObj = {
            status:true,
            messasge:"details of book ",
            books:book
        }
        res.json(resObj);
    }catch(err){
        const resObj = {
            status:false,
            messasge:"Something went wrong",
           
        }
        res.json(resObj);
    }
});

router.post('/',async(req,res)=>{
    const bookData = new bookDataSchema({
        title:req.body.title,
        img:req.body.img,
        author:req.body.author,
        seller:req.body.seller,
        price:req.body.price,
        discount:req.body.discount,
        category:req.body.category,
        description:req.body.description,
        infomation:req.body.infomation,
        quantity:req.body.quantity
    })
    try{
        const data = await bookData.save();
        const resObj = {
            status:true,
            messasge:"details of book successfully saved ",
            
        }
        res.json(resObj);
    }catch(err){
        const resObj = {
            status:false,
            messasge:"Something went wrong",
           
        }
        res.json(resObj);
    }
});

router.patch('/:id',async(req,res)=>{
    try{
        const book = await bookDataSchema.findById(req.params.id);
        parameter = Object.keys(req.body)[0];
        book[parameter] = req.body[parameter];
        const a = await book.save();
        const resObj = {
            status:true,
            messasge:"book deatils upadted successfully"
        }
        res.json(resObj);
    }catch(err){
        const resObj = {
            status:false,
            messasge:"Something went wrong",
           
        }
        res.json(resObj);
    }
});

router.delete('/:id',async(req,res)=>{
    try{
        const book = await bookDataSchema.findById(req.params.id);
        const a = await book.deleteOne()
        const resObj = {
            status:true,
            messasge:"book deleted successfully",
            book:a
        }
        res.json(resObj);
    }catch(err){
        const resObj = {
            status:false,
            messasge:"Something went wrong",
           
        }
        res.json(resObj);
    }
});

module.exports = router;