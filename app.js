require("dotenv").config();
const connectDB = require("./config/database")
const express = require("express");
const auth = require("./middleware/auth");


const app =express()

// Connect to database
connectDB()

app.use (express.json())

//define routes

app.get('/', auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
})
app.use('/', require('./routes/users'))


module.exports = app
