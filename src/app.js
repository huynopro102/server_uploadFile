// server.js
require('dotenv').config();
const express = require('express');


const app = express();
app.use(express.json());



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server CDN đang chạy trên cổng ${PORT}`);
});


module.exports = app;