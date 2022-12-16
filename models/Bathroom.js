const mongoose = require('mongoose');

const BathroomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  rating: {
    type: String,
    required: true
  }
});

module.exports = Bathroom = mongoose.model('bathroom', BathroomSchema);