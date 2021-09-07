var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
  day: {
    type: Date,
    default: new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter a name for workout type",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter the name of this workout",
      },
      duration: {
        type: Number,
        required: "Enter an amount",
      },
      weight: {
        type: Number,
        required: "Enter an amount",
      },
      reps: {
        type: Number,
        required: "Enter an amount",
      },
      sets: {
        type: Number,
        required: "Enter an amount",
      },
    },
  ],
});

var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
