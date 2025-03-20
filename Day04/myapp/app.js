const express = require('express');
const app=express();
const port=3001;

app.get('/',(req,res)=>{
    res.send('Hello express Js');
});

app.get('/msg',(req,res)=>{
    res.send('Hello IT student');
});

app.listen(port,()=>{
    console.log(`Server is running on: ${port}`);
});

