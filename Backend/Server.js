const express = require('express');
const app = express();
const PORT = 4578
const mongoose = require('mongoose');
 
mongoose.connect("mongodb+srv://neongt2003:9745558302@cluster0.os5f3lx.mongodb.net/")
   .then(()=>{console.log("mongoose connected successfully")})
   .catch(()=>{console.log("error connecting to MongoseDB")})


app.get('/',(req,res)=>{
    res.send('server is running')
})

app.get('/about',(req,res)=>{
    res.send('About')
})
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})

