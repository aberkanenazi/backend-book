const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  author: {
    required: true,
    type: String,
  },
  publicationYear: {
    required: true,
    type: Number,
  },
  genre: {
    type: String,
  },
  pages: {
    type: Number,
  },
  publisher: {
    type: String,
  },
  ISBN: {
    type: String,
    unique: true,
  },
  summary: {
    type: String,
  },
});

module.exports = mongoose.model("Book", bookSchema);
