const mongoose = require('mongoose');
const Student  = require('../models/studentdata')

const getStudents = async (req, res) => {
    console.log("paams are", req.params.pathname)
    try {
        const student = await Student.find({library: req.params.pathname});
        
        res.status(200).json(student);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const createStudent =  async (req, res) => {
    const body = req.body
    console.log("createstudent body is",body);

    const newstudent = new Student({
        name:body.name,
        library: body.library,
        booksBorrowed: body.booksBorrowed,
        history: body.history
    })
    console.log("new student is", newstudent)
    try {
        await newstudent.save();
        res.status(201).json(newstudent);
    } catch(error) {
        console.log("error is", error)
        res.status(400).json({ message : error.message});
    }
}

const deleteStudent = async (req, res) => {
    console.log("function runs", req.params.id)
    try {
        await Student.findByIdAndDelete(req.params.id)
        return res.status(204).end()
    } catch (e) {
        console.log("error is", e)
        return response.status(403).json({ error: 'some error' })
    }
}

const updateStudent = async (req, res) => {
    const body = req.body
    const newStudent = {
        name:body.name,
        library: body.library,
        booksBorrowed:body.booksBorrowed,
        bookHistory: body.bookHistory
    }

    try{
        await Student.findByIdAndUpdate(req.params.id, newStudent)
        return res.status(204).json(newStudent)
    } catch (e) {
        console.log("error is", e)
        return response.status(403).json({ error: 'some error' })
    }
}

exports.createStudent = createStudent
exports.getStudents = getStudents
exports.deleteStudent = deleteStudent
exports.updateStudent = updateStudent