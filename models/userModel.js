const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  hor: String,
  branch: String,
  phoneNumber: String,
  year: Number,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
