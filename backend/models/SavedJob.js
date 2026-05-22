const mongoose = require("mongoose");

const savedJobSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
  },

  company: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  salary: {
    type: String,
    required: true,
  },

}, {
  timestamps: true,
});

module.exports = mongoose.model(
  "SavedJob",
  savedJobSchema
);