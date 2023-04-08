const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");
const mongoose = require('mongoose');
// config dot env file
dotenv.config();
const app= require('./app');

const DB = "mongodb+srv://tejasbhurbhure06:Cy2FgeHrPgRIO8KN@cluster0.f2tdxal.mongodb.net/HealthMeds?retryWrites=true&w=majority";


mongoose
    .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => console.log('DB connection successfull!'));
//port
const PORT = 3000 || process.env.PORT;

//listen server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on('unhandledRejection', err => {
  console.log('UNHANDLER REJECTION! 👨‍🚒 Shutting down...');
  console.log(err.name, err.message);
  Server.close(() => {
      process.exit(1);
  });
});


