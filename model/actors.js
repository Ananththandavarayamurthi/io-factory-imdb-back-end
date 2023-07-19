const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  dob: { type: Date, required: true },
  bio: { type: String,required:true }
});

const Actor = mongoose.model('Actor', actorSchema);

module.exports = Actor;