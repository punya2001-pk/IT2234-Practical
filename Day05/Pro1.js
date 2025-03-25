const express = require('express');
const app = express();
const port = 3001;

// Import modules
const student = require("./Pro2");

// Info of all students
app.get('/', (req, res) => {
    res.send(student);
});

// Info of the 3rd student
app.get('/third-student', (req, res) => {
    res.send(student.at(2)); 
});

// Find a student based on the reg number
// Run "localhost:3001/stu/2021ICT01" on Postman to get the output
app.get('/stu/:id', (req, res) => {
    const id = req.params.id;
    const result = student.find(student => student.RegNo === id);
    if (result) {
        res.send(result);
    } else {
        res.status(404).send("Student Not Found");
    }
});

// Filter students by gender
//To run nodemon " npx nodemon .\Example.js"
app.get('/stu/gender/:gen', (req, res) => {
    const gender = req.params.gen;
    const result2 = student.filter(student => student.Gender === gender);
    res.send(result2);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});
