const express = require("express");
const Book = require("../models/book"); // Make sure the path is correct

const router = express.Router();

module.exports = router;

// Create a new book
router.post("/books", async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    publicationYear: req.body.publicationYear,
    genre: req.body.genre,
    pages: req.body.pages,
    publisher: req.body.publisher,
    ISBN: req.body.ISBN,
    summary: req.body.summary,
  });

  try {
    const bookToSave = await book.save();
    res.status(200).json(bookToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all books
router.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a book by ID
router.get("/books/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a book by ID
router.patch("/books/:id", async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  const options = { new: true };

  try {
    const book = await Book.findByIdAndUpdate(id, updatedData, options);
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a book by ID
router.delete("/books/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findByIdAndDelete(id);
    res.send(`Document with title ${book.title} has been deleted.`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
