const mongoose = require('mongoose');
const Book = require('../models/bookdata')

const getAllBooks = async (req, res) => {
    const libName = req.params.pathname
    try {
        const books = await Book.find({library: libName});
        
        res.status(200).json(books);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}


const createBook =  async (req, res) => {
    const body = req.body
    console.log(body);

    const newBook = new Book({
        title:body.title,
        author: body.author,
        isBorrowed: body.isBorrowed,
        library: body.library
    })
    try {
        await newBook.save();
        res.status(201).json(newBook);
    } catch(error) {
        res.status(400).json({ message : error.message});
    }
}

const updateBook = async (req, res) => {
    const body = req.body
    const newBook = {
        title:body.title,
        author: body.author,
        isBorrowed: body.isBorrowed,
        library: body.library
    }

    try{
        await Book.findByIdAndUpdate(req.params.id, newBook)
        return res.status(204).json(newBook)
    } catch (e) {
        console.log("error is", e)
        return response.status(403).json({ error: 'some error' })
    }
}

const deleteBook = async (req, res) => {
    console.log("function runs", req.params.id)
    try {
        await Book.findByIdAndDelete(req.params.id)
        return res.status(204).end()
    } catch (e) {
        console.log("error is", e)
        return response.status(403).json({ error: 'some error' })
    }
}

exports.createBook = createBook
exports.getAllBooks = getAllBooks
exports.deleteBook = deleteBook
exports.updateBook = updateBook