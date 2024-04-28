const mongoose = require('mongoose');
const connection = "mongodb+srv://allisonpeng10:1VahcvwwcYyff9kN@cluster0.5epcco7.mongodb.net/";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));