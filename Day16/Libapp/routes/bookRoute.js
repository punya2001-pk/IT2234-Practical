const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const filterData = require('../service/commonService');

//2. Filter the books by their genre.
router.get('/filter/:genre', async(req, res) => {
    try{
        const genre = req.params.genre;
        const results = await Book.find({genre : genre})
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

//All books
router.get('/', async(req, res) => {
    try{
        const results = await Book.find()
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
router.get('/common/:genre', async(req, res) => {
    const genre = req.params.genre;
    await filterData(req, res, Book, 'genre', genre);
});

module.exports=router