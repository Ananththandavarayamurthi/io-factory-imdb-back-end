const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviecontrollers');

// Movies routes
router.get('/movies', moviesController.getAllMovies);
router.post('/movies', moviesController.createMovie);
router.put('/movies/:id', moviesController.updateMovie);
router.delete('/movies/:id', moviesController.deleteMovie);

module.exports = router;
