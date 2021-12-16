const express = require('express');
const http = require('http')
require("dotenv").config();
const mongoose = require('mongoose');
const cors = require('cors');
const studentRouter = require("./routes/students.js");
const bookRouter = require('./routes/books.js');
const libraryRouter = require('./routes/library.js');

const app = express();

const url = `CONNECTION STRING`
mongoose.connect(url,{useNewUrlParser: true})
.then(()=> {
    console.log("connected to mongoDb")
})
.catch((e) => {
    console.log("Error is", e)
})



const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use('/students',studentRouter)
app.use('/books',bookRouter)
app.use('/libraries',libraryRouter)

const server = http.createServer(app)

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })
