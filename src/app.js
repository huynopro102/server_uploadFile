// server.js
require('dotenv').config();
const express = require('express');


const app = express();
app.use(express.json());
app.use("/",(req,res)=>{
  res.send("Hello World")
})



module.exports = app;