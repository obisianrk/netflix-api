const Mongoose = require("mongoose");

const userSchema = new Mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  likedMovies: Array,
});



module.exports = Mongoose.model("users", userSchema)