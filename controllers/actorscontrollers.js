const Actor = require('../model/actors');

// Controller for handling CRUD operations on actors
const actorsController = {
  getAllActors: async (req, res) => {
    try {
      const actors = await Actor.find();
      res.json(actors);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch actors.' });
    }
  },

  createActor: async (req, res) => {
    try {
      const actor = new Actor(req.body);
      await actor.save();
      res.json(actor);
    } catch (error) {
      res.status(500).json({ message: 'Failed to create an actor.' });
    }
  },

  updateActor: async (req, res) => {
    try {
      const { id } = req.params;
      const actor = await Actor.findByIdAndUpdate(id, req.body, { new: true });
      res.json(actor);
    } catch (error) {
      res.status(500).json({ message: 'Failed to update an actor.' });
    }
  },

  deleteActor: async (req, res) => {
    try {
      const { id } = req.params;
      await Actor.findByIdAndDelete(id);
      res.json({ message: 'Actor deleted successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete an actor.' });
    }
  }
};

module.exports = actorsController;
