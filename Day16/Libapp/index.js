const express = require('express');
const app =express();
const port=3001;
const mongoose = require('mongoose')

const books = require('./models/Book')
const borrrows = require('./models/Borrow')
const students = require('./models/Student')

const bookrt = require('./routes/bookRoute');
const borrowrt = require('./routes/borrowRoute');
const studentrt = require('./routes/studentRoute');
const userrt = require('./routes/userRoute');

app.use(express.json())
app.use('/Book', bookrt);
app.use('/Borrow', borrowrt);
app.use('/Student', studentrt);
app.use('/User', userrt);

mongoose.connect('mongodb://localhost:27017/libappDB').then(()=>{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);   
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})