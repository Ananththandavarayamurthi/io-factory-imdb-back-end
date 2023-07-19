const express = require('express');
const router = express.Router();
const producersController = require('../controllers/producercontrollers');

// Producers routes
router.get('/producers', producersController.getAllProducers);
router.post('/producers', producersController.createProducer);
router.put('/producers/:id', producersController.updateProducer);
router.delete('/producers/:id', producersController.deleteProducer);

module.exports = router;
