const mongoose = require('mongoose');
const Library = require('../models/librarydata')

const getAllLibraries = async (req, res) => {
    try {
        const libraries = await Library.find();
        
        res.status(200).json(libraries);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}


const createLibrary =  async (req, res) => {
    const body = req.body
    console.log(body);

    const newLibrary = new Library({
        name:body.name
    })
    try {
        await newLibrary.save();
        res.status(201).json(newLibrary);
    } catch(error) {
        res.status(400).json({ message : error.message});
    }
}

const deleteLibrary = async (req, res) => {
    console.log("function runs", req.params.id)
    try {
        await Library.findByIdAndDelete(req.params.id)
        return res.status(204).end()
    } catch (e) {
        console.log("error is", e)
        return response.status(403).json({ error: 'some error' })
    }
}

exports.createLibrary = createLibrary
exports.getAllLibraries = getAllLibraries
exports.deleteLibrary = deleteLibrary