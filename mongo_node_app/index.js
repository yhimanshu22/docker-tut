const mongoose = require('mongoose');
const express = require('express');


MONGODB_URL = "mongodb://mymongo:27017/testup"

const app = express();

mongoose
.connect(MONGODB_URL)
.then(()=>{
    console.log('database connected');
})
.catch(()=>{
    console.log('error in database connection');
})

app.get('/',(req,res)=>{
    res.json({
        message:"you are visiting root"
    })
})


app.listen(8000,()=>{
    console.log(`server is running ..........`);
})