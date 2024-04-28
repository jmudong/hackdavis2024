// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 8080;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://allisonpeng10:1VahcvwwcYyff9kN@cluster0.5epcco7.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

// Define Mongoose Schema for "apartment" documents
const apartmentSchema = new mongoose.Schema({
    text: String,
    price: Number,
    link: String,
    available: Boolean
});

// Create Mongoose Model for "apartment"
const Apartment = mongoose.model('Apartment', apartmentSchema);

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// HTTP request logger
app.use(morgan('tiny'));

// Route to fetch apartments from MongoDB
app.get('/api/apartments', async (req, res) => {
    try {
        const apartments = await Apartment.find();
        res.json(apartments);
    } catch (error) {
        console.error('Error fetching apartments:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => console.log(`Server is starting at ${PORT}`));
