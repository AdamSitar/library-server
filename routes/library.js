const express = require("express");
const library_Act = require("../controllers/library");
const libraryRouter = express.Router();

libraryRouter.get('/', library_Act.getAllLibraries);
libraryRouter.post('/', library_Act.createLibrary);
libraryRouter.delete('/:id', library_Act.deleteLibrary)
//router.patch('/students/:roll', student_Act.updatestudent);
//router.delete('/students/:roll', student_Act.deletestudent);

module.exports = libraryRouter;