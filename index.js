const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config()
const cors = require('cors');
const actorsRoutes = require('./Routes/actorRoutes');
const moviesRoutes = require('./Routes/moviesRoutes');
const producersRoutes = require('./Routes/producersRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
const MONGODB_URI = process.env.MONGO_URL; 
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB.');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
  });

// Routes
app.use('/api', actorsRoutes);
app.use('/api', moviesRoutes);
app.use('/api', producersRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.`);
});
