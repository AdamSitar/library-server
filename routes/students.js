const express = require("express");
const student_Act = require("../controllers/students");
const studentRouter = express.Router();


studentRouter.get('/:pathname', student_Act.getStudents);
studentRouter.post('/', student_Act.createStudent);
studentRouter.delete('/:id', student_Act.deleteStudent)
studentRouter.put('/:id', student_Act.updateStudent)

module.exports = studentRouter;