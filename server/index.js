require('dotenv').config()
const express = require("express")
const cors = require('cors')
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload')
const router = require('./routers/index')
const path = require("path");
const app = express()
const PORT = process.env.PORT
app.use(cors())
app.use(express.json())
app.use('/img',express.static(path.resolve(__dirname, 'static')))
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)
async function start(){
    await mongoose.connect("mongodb://localhost/pro-consult")
    app.listen(PORT,()=>console.log("hihih"))
}
start()
