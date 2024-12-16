const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// Adding a book
router.post('/add', async (req, res) => {
  const { title, author } = req.body;

  try {
    const newBook = new Book({ title, author });
    await newBook.save();
    res.status(201).json({ message: 'Book added successfully', book: newBook });
  } catch (error) {
    res.status(500).json({ message: 'Error adding book', error });
  }
});

// Borrowing a book
router.patch('/borrow/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    if (book.isBorrowed) return res.status(400).json({ message: 'Book is already borrowed' });

    book.isBorrowed = true;
    await book.save();
    res.status(200).json({ message: 'Book borrowed successfully', book });
  } catch (error) {
    res.status(500).json({ message: 'Error borrowing book', error });
  }
});

// Returning a book
router.patch('/return/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    if (!book.isBorrowed) return res.status(400).json({ message: 'Book is not borrowed' });

    book.isBorrowed = false;
    await book.save();
    res.status(200).json({ message: 'Book returned successfully', book });
  } catch (error) {
    res.status(500).json({ message: 'Error returning book', error });
  }
});

// Viewing all available books
router.get('/available', async (req, res) => {
  try {
    const books = await Book.find({ isBorrowed: false });
    res.status(200).json({ books });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error });
  }
});

module.exports = router;
