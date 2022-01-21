const express = require('express');
const router = express.Router();
const apiGenresController = require('../../controllers/api/apiGenresController');

router.get('/genres', apiGenresController.list);
router.get('/genres/:id', apiGenresController.detail);
router.get('/genres/:id/movies', apiGenresController.genreMovies);

module.exports = router;