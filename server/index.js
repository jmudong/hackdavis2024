const path = require("path");
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const express = require("express");
const bodyParser = require('body-parser');
require('./database');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());
app.use(cors())

// Step 2
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://allisonpeng10:1VahcvwwcYyff9kN@cluster0.5epcco7.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

// API
const users = require('/api/users');
app.use('/api/users', users)

app.use(express.static(path.join(__dirname, '../build')));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '../build'));
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});