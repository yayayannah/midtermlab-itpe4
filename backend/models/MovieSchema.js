const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  ratings: {
    type: Number,
    required: true
  },
  genre: {
    type: [String],
    required: true
  },
  releaseYear: {
    type: Number,
    required: true,
  }

});

module.exports = Movie = mongoose.model('Movie', MovieSchema, 'MoviesDB');
