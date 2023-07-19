const express = require('express');
const router = express.Router();
const actorsController = require('../controllers/actorscontrollers');

// Actors routes
router.get('/actors', actorsController.getAllActors);
router.post('/actors', actorsController.createActor);
router.put('/actors/:id', actorsController.updateActor);
router.delete('/actors/:id', actorsController.deleteActor);

module.exports = router;
