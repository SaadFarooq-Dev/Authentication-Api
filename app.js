require("dotenv").config();
const connectDB = require("./config/database")
const express = require("express");

const app =express()

// Connect to database
connectDB()

app.use (express.json())

module.exports = app
