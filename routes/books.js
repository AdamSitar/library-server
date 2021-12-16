const express = require("express");
const book_Act = require("../controllers/books");
const bookRouter = express.Router();

bookRouter.get('/:pathname', book_Act.getAllBooks);
bookRouter.post('/', book_Act.createBook);
bookRouter.delete('/:id', book_Act.deleteBook)
bookRouter.put('/:id', book_Act.updateBook)
//router.patch('/students/:roll', student_Act.updatestudent);
//router.delete('/students/:roll', student_Act.deletestudent);

module.exports = bookRouter;