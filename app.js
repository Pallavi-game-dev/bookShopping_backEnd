const express = require('express');
const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/books";

const bookRoutes = require("./routers/books.js");
const userRoutes = require("./routers/user.js");
const usermetadataRoutes = require("./routers/usermetadata");

const app =  express();
mongoose.connect(url,{useNewUrlParser:true});

// connection status
const connection  = mongoose.connection;
connection.on('open',()=>{
    console.log(" Connection is DONE")
});

app.use(express.json());
// get routers
app.use('/api/books',bookRoutes);
app.use('/api/users',userRoutes);
app.use('/api/usermetadata',usermetadataRoutes);

// server started
app.listen("4000",()=>{
    console.log("server Started");
});