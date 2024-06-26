const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');
const Movie = require('./models/MovieSchema'); // Ensure this path is correct

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = 'mongodb+srv://hannah:CVTG5P1cDF1bT5mi@moviedb.jwl4icy.mongodb.net/ITPE4%2DDB?retryWrites=true&w=majority&appName=MovieDB';
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Create a new movie
app.post('/movies', async (req, res) => {
    const newMovie = new Movie(req.body);
    try {
        const movie = await newMovie.save();
        res.status(201).json(movie);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all movies
app.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a movie by ID
app.get('/movies/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        res.json(movie);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a movie by ID
app.put('/movies/:id', async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        res.json(movie);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete a movie by ID
app.delete('/movies/delete/:id', async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        res.json({ message: 'Movie deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
