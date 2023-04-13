const express = require('express');
const router = express.Router();
const usermetadataSchema = require('../models/user_metadata.js');

router.get('/', async (req, res) => {
    try {
        const books = await usermetadataSchema.find();
        const resObj = {
            status: true,
            messasge: "List of user List",
            books: books
        }
        res.json(books);
    } catch (err) {
        const resObj = {
            status: false,
            messasge: "Something went wrong",

        }
        res.json(resObj);
    }
});
    router.post('/', async (req, res) => {
        let userMetaDataDetails = new usermetadataSchema({
            userID: req.body.userID,
            cart: req.body.cart,
            wishlist: req.body.wishlist,
            buyproducts: req.body.buyproducts
        })
        try {
            const user = await userMetaDataDetails.save();
            const resObj = {
                status: true,
                messasge: "details of user successfully saved ",

            }
            res.json(resObj);
        } catch (error) {
            const resObj = {
                status: false,
                message: "Something went Wrong"
            }
            res.json(resObj);
        }
    });

    router.patch('/:id',async(req,res)=>{
        try{
            const data = await usermetadataSchema.findById(req.params.id);
            parameter = Object.keys(req.body)[0];
            data[parameter] = req.body[parameter];
     
            // data.cart = req.body.cart;
            const a = await data.save();
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

module.exports = router;