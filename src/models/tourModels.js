//eslint-disable-next-line
const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true
  },
  durations: {
    type: Number,
    required: [true, 'A tour must have a duration']
  },
  rating: {
    type: Number,
    default: 4.5,
    min: 1,
    max: 5
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price']
  },
  maxgroupSize: {
    type: Number,
    required: [true, 'A tour must have a group size']
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficulty level'],
    enum: {
      values: ['easy', 'medium', 'difficult'],
      message: 'Difficulty level must be either easy, medium, or difficult'
    }
  }
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
