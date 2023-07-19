const Movie = require('../model/movies');
const Actor =require("../model/actors");
const Producer=require('../model/producers')

// Controller for handling CRUD operations on movies
const moviesController = {
  getAllMovies: async (req, res) => {
    try {
      const movies = await Movie.find().populate('producer', 'name').populate('actors','name');
      res.json(movies);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch movies.' });
    }
  },

  createMovie: async (req, res) => {
    try {
      const { name, yearOfRelease, producer, actors,poster,plot } = req.body;
  
      // Check if the producer exists in the database by name
      let existingProducer = await Producer.findOne({ name: producer });
      if (!existingProducer) {
        return res.status(400).send({message:"Producer is not existing in data basse"})
        
      }
  
      // Filter actors to check for existing ones
      const existingActors = await Actor.findOne({ name: actors });
      if (!existingActors) {
        return res.status(400).send({message:"Actor is not existing in data basse"})
       } 
  
      // Now, all actors and the producer are available in the database
      // Create the movie using the existing producer name and actors' names
      const movie = new Movie({
        name,
        yearOfRelease,
        producer: existingProducer._id,
        actors: existingActors._id,
        plot,
        poster,
      });
  
      await movie.save();
      res.status(201).json(movie);
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Server Error' });
    }
  },

  updateMovie: async (req, res) => {
    try {
      const { id } = req.params;
      const movie = await Movie.findByIdAndUpdate(id, req.body, { new: true });
      if (!movie) {
        return res.status(404).json({ message: 'Movie not found.' });
      }
      res.json(movie);
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Failed to update a movie.' });
    }
  },

  deleteMovie: async (req, res) => {
    try {
      const { id } = req.params;
      await Movie.findByIdAndDelete(id);
      res.json({ message: 'Movie deleted successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete a movie.' });
    }
  }
};

module.exports = moviesController;
