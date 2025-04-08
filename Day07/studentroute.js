const express=require('express');
const router=express.Router()
const studentService=require('./studentservice')

router.get('/',(req,res)=>{
    const results=studentService.getstudents()
    if(results){
        res.status(200).json(results)
    }
    else{
        res.status(404).send("Sorry,Data not found!")

    }
    //res.json(studentService.getStudents())
})

router.get('/:id',(req,res)=>{
    const id=req.params.id
    const results=studentService.getStudent(id)
    if(results){
        res.status(200).json(results)
    }
    else{
        res.status(404).send("Sorry,Data not found!")

    }
   // res.json(studentService.getStudents())
})

router.get('/gender/:gen',(req,res)=>{
    const gender=req.params.gen== 'm'?'male':'female'
    const results=studentService.getByGender(gender)
    if(results){
        res.status(200).json(results)
    }
    else{
        res.status(404).send("Sorry,Data not found!")

    }
   // res.json(studentService.getStudents())
})

module.exports= router