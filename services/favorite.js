const fs = require('fs');
let favorites = JSON.parse(fs.readFileSync('favorites.json'));
let books = JSON.parse(fs.readFileSync('books.json'));

function getAllFavoriteBooks() {
  return favorites;
}

function deleteFavorite(id) {
  const index = favorites.findIndex(favorite => favorite.id == id);
  favorites.splice(index, 1);
  fs.writeFileSync('favorites.json', JSON.stringify(favorites));
}

function insertFavorite(id) {
  const book = books.find(book => book.id == id);
  fs.writeFileSync('favorites.json', JSON.stringify([...favorites, book]));
}

module.exports = {
  getAllFavoriteBooks,
  deleteFavorite,
  insertFavorite
}