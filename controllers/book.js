const { getAllBooks, getBookById, addBook, modifyBook, removeBook } = require('../services/book');

function getBooks(req, res) {
  try {
    const books = getAllBooks();
    res.send(books);
  } catch (e) {
    res.status(500);
    res.send(e.message);
  }
}

function getBook(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      const book = getBookById(id);
      res.send(book);
    } else {
      res.status(422);
      res.send('Id inválido!')
    }
  } catch (e) {
    res.status(500);
    res.send(e.message);
  }
}

function postBook(req, res) {
  try {
    if (req.body.nome && req.body.id) {
      addBook(req.body);
      res.status(201); //criado com sucesso
      res.send('Livro inserido com sucesso!');
    } else {
      res.status(422);
      res.message('Dados inválidos!');
    }
  } catch (e) {
    res.status(500);
    res.send(e.message);
  }
}

function patchBook(req, res) {
  try {
    const id = req.params.id;
    const body = req.body;

    if (id && Number(id)) {
      modifyBook(body, id);
      res.send('Livro modificado com sucesso!')
    } else {
      res.status(422);
      res.send('Id inválido!')
    }
  } catch (e) {
    res.status(500);
    res.send(e.message);
  }
}

function deleteBook(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {;
      removeBook(id);
      res.send('Livro removido com sucesso!');
    } else {
      res.status(422);
      res.send('Id inválido!')
    }
  } catch (e) {
    res.status(500);
    res.send(e.message);
  }
}

module.exports = {
  getBooks,
  getBook,
  postBook,
  patchBook,
  deleteBook
}