const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const DB_URI=process.env.DB_URI;
console.log(DB_URI)
const PORT = process.env.PORT;

mongoose
.connect(DB_URI)
.then(()=>console.log(`DB IS CONNECTED`))
.catch((error)=>console.log(`ERROR IS OCCUR ${error}`))
app.listen(()=>console.log(`SERVER IS STARTED AT THE PORT ${PORT}`))