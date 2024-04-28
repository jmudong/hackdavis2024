const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const PORT = process.env.PORT || 8080;

const app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://allisonpeng10:1VahcvwwcYyff9kN@cluster0.5epcco7.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Step 3

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}


// HTTP request logger
app.use(morgan('tiny'));




app.listen(PORT, console.log(`Server is starting at ${PORT}`));