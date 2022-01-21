const express = require('express');
const router = express.Router();
const apiMoviesController = require('../../controllers/api/apiMoviesController');

router.get('/movies', apiMoviesController.list);
router.get('/movies/:id', apiMoviesController.detail);

router.get('/movies/recomended/:rating', apiMoviesController.recomended);
router.post('/movies/create', apiMoviesController.create);
router.put('/movies/update/:id', apiMoviesController.update);
router.delete('/movies/delete/:id', apiMoviesController.destroy);

module.exports = router; 