const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const filterData = require('../service/commonService');

//3. Filter the students by the year.

router.get('/filter/:year', async(req, res) => {
    try{
        const year = req.params.year;
        const results = await Student.find({year : year})
        if(results){
            res.status(200).json(results)
        } else {
            res.status(400).send("Sorry No Data Found");
        }
    } catch(error){
        console.error(error);
        res.status(500).send("Server Error");
    }
})

//All students
router.get('/', async(req, res) => {
    try{
        const results = await Student.find()
        if(results){
            res.status(200).json(results)
        } else {
            res.status(400).send("Sorry No Data Found");
        }
    } catch(error){
        console.error(error);
        res.status(500).send("Server Error");
    }
})

//common service
router.get('/common/:year', async(req, res) => {
    const year = req.params.year;
    await filterData(req, res, Student, 'year', year);
});


module.exports=router