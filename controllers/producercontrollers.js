const Producer = require('../model/producers');

// Controller for handling CRUD operations on producers
const producersController = {
  getAllProducers: async (req, res) => {
    try {
      const producers = await Producer.find();
      res.json(producers);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch producers.' });
    }
  },

  createProducer: async (req, res) => {
    try {
      const producer = new Producer(req.body);
      await producer.save();
      res.json(producer);
    } catch (error) {
      res.status(500).json({ message: 'Failed to create a producer.' });
    }
  },

  updateProducer: async (req, res) => {
    try {
      const { id } = req.params;
      const producer = await Producer.findByIdAndUpdate(id, req.body, { new: true });
      res.json(producer);
    } catch (error) {
      res.status(500).json({ message: 'Failed to update a producer.' });
    }
  },

  deleteProducer: async (req, res) => {
    try {
      const { id } = req.params;
      await Producer.findByIdAndDelete(id);
      res.json({ message: 'Producer deleted successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete a producer.' });
    }
  }
};

module.exports = producersController;
