const fs = require('fs');

const currentData = JSON.parse(fs.readFileSync('books.json'));
const book = {id:'3', nome: 'Novo livro'}

fs.writeFileSync('books.json', JSON.stringify([...currentData, book]));

console.log((JSON.parse(fs.readFileSync('books.json'))));