const express = require('express');
const router = express.Router();
const actorsAPIController = require('../../controllers/api/actorsAPIController');

router.get('/actors', actorsAPIController.list);
router.get('/actors/:id', actorsAPIController.detail);
router.get('/actors/:id/movies', actorsAPIController.actorMovies);

router.post('/actors/create', actorsAPIController.create);
router.put('/actors/update/:id', actorsAPIController.update);
router.delete('/actors/delete/:id', actorsAPIController.destroy);

module.exports = router;