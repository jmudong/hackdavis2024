const path = require("path");
const mongoose = require('mongoose');
const morgan = require('morgan');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// Step 2
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://allisonpeng10:1VahcvwwcYyff9kN@cluster0.5epcco7.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
  res.json({ message: "hi guys iim tired" });
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});