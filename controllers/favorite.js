const { getAllFavoriteBooks, insertFavorite, deleteFavorite } = require("../services/favorite");

function getFavorites() {
  try {
    const favorites = getAllFavoriteBooks;
    res.send(favorites)
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postFavorite(req, res) {
  try {
    insertFavorite(req.params.id);
    res.status(200);
    res.send("Livro marcado como favorito!");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteFavorite() {
  try {
    if (req.params.id && Number(req.param.id)) {
      deleteFavorite(req.params.id);
      res.send("Livro removido dos favoritos!");
    } else {
      res.status(422);
      res.send("Id inválido")
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
    
  }
}

module.export = {
  getFavorites,
  postFavorite,
  deleteFavorite
}