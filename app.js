require("dotenv").config();
const connectDB = require("./config/database")
const express = require("express");
const auth = require("./middleware/auth");
const cors = require('cors')

const app =express()

const corsOptions = {
  origin: '*',
  credentials: true, // access-control-allow-credentials:true
  optionSuccessStatus: 200
}

// Connect to database
connectDB()

app.use (express.json())
app.use(cors(corsOptions)) // Use this after the variable declaration

//define routes

app.get('/', auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
})
app.use('/', require('./routes/users'))


module.exports = app
