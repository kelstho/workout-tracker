const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: {
    type: Array
  },
  totalDuration: {
    type: Number,
    default: 0
  }
});

module.exports = Workout;
