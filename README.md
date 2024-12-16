# Library Management System API

This is a simple REST API built using **Node.js**, **Express.js**, and 
**MongoDB** for managing books in a library. The API allows you to add books,
borrow books, return books, and view available books.

## Table of Contents

- [Installation](#installation)
- [API Endpoints](#api-endpoints)
  - [Add a Book](#add-a-book)
  - [Borrow a Book](#borrow-a-book)
  - [Return a Book](#return-a-book)
  - [View All Available Books](#view-all-available-books)
- [Running the Application Locally](#running-the-application-locally)


## Installation

1. Clone this repository:
  ```bash
  git clone https://github.com/tamyola/libmang.git
  cd libmang

2. Install dependencies:
  npm install

3. Make sure you have MongoDB running locally, or update the connection
  string in server.js to match your MongoDB server settings.

4. Run the application:
  npm run dev
  The app will start running on http://localhost:5000.


API Endpoints:

Add a Book

Endpoint: POST /api/books/add
Description: Adds a new book to the library.
Request Body:
{
  "title": "Martin Luther had a Wife",
  "author": "William Petterson
}

Response:
{
  "message": "Book added successfully",
  "book": {
    "_id": "67600c9681fa23ea6c8377af",
    "title": "Martin Luther had a Wife",
    "author": "William Petterson",
    "isBorrowed": false
  }
}

Borrow a Book

Endpoint: PATCH /api/books/borrow/:id
Description: Marks the book as borrowed.
Parameters:
id (path parameter): The _id of the book you want to borrow.
Response:
{
  "message": "Book borrowed successfully",
  "book": {
    "_id": "67600dd181fa23ea6c8377b8",
    "title": "Sex & Sexuality",
    "author": "Reverend Busuyi",
    "isBorrowed": true
  }
}

Return a Book
Endpoint: PATCH /api/books/return/:id
Description: Marks the book as returned.
Parameters:
id (path parameter): The _id of the book you want to return.
Response:
{
  "message": "Book returned successfully",
  "book": {
    "_id": "67600dd181fa23ea6c8377b8",
    "title": "Sex & Sexuality",
    "author": "Reverend Busuyi",
    "isBorrowed": false
  }
}

View All Available Books
Endpoint: GET /api/books/available
Description: Retrieves a list of all available books that are not currently borrowed.
Response:

{
    "books": [
        {
            "_id": "67600c9681fa23ea6c8377af",
            "title": "Martin Luther had a Wife",
            "author": "William Petterson",
            "isBorrowed": false,
            "__v": 0
        },
        {
            "_id": "67600dd181fa23ea6c8377b8",
            "title": "Sex & Sexuality",
            "author": "Reverend Busuyi",
            "isBorrowed": false,
            "__v": 0
        }
    ]
}

Running the Application Locally
Clone the repository:
git clone https://github.com/tamyola/libmang.git
cd libmang

Install the dependencies:
npm install

Make sure you have MongoDB running locally, or update
the connection string in the server.js file.

Start the application with:
npm run dev
