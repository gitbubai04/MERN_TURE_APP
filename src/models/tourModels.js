//eslint-disable-next-line
const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
    trim: true
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration']
  },
  rating: {
    type: Number,
    default: 4.5,
    min: 1,
    max: 5
  },
  ratingsAverage: {
    type: Number,
    default: 4.5
  },
  ratingsQuantity:{
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price']
  },
  maxGroupSize: {
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
  },
  priceDiscount: {
    type: Number,
    default: 0
  },
  summary: {
    type: String,
    required: [true, 'A tour must have a summary'],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'A tour must have a cover image']
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now()
  },
  startDates:[Date]
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
