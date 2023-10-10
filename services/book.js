const fs = require('fs');
let books = JSON.parse(fs.readFileSync('books.json'));

function getAllBooks() {
  return books;
}

function getBookById(id) {
  return books.find(book => parseInt(book.id) == id);
}

function addBook(book) {
  fs.writeFileSync('books.json', JSON.stringify([...books, book]));
}

function modifyBook(changes, id) {
  const index = books.findIndex(book => book.id == id);

  //usando spread de ambos, verifica-se as diferenças e faz-se um merge dos objetos
  books[index] = {...books[index], ...changes};

  fs.writeFileSync('books.json', JSON.stringify(books))
}

function removeBook(id) {
  const index = books.findIndex(book => book.id == id);
  books.splice(index, 1);
  fs.writeFileSync('books.json', JSON.stringify(books));
}

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  modifyBook,
  removeBook
}