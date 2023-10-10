const express = require('express');
const bookRout = require('./routes/book.js');

const app = express();

app.use(express.json()); //define que a aplicação aceita body do tipo json

app.use('/books', bookRout);

const port = 8000;

app.listen(port, () => {
  console.log('listening');
});