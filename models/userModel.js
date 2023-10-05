const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  hallOfResidence: String,
  branch: String,
  graduationYear: Number,
  phoneNumber: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
