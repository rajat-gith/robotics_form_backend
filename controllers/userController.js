const User = require("../models/userModel");

const userController = {
  createUser: async (req, res) => {
    const { name, email, hallOfResidence, branch, phoneNumber, year } =
      req.body;

    if (
      !name ||
      !email ||
      !hallOfResidence ||
      !branch ||
      !graduationYear ||
      !phoneNumber
    ) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newEntry = new User({
      name,
      email,
      hallOfResidence,
      branch,
      graduationYear,
      phoneNumber,
    });

    try {
      const savedEntry = await newEntry.save();
      return res.status(201).json(savedEntry);
    } catch (err) {
      return res.status(500).json({ error: "Failed to save entry." });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const entries = await User.find({});
      return res.json(entries);
    } catch (err) {
      return res.status(500).json({ error: "Failed to retrieve entries." });
    }
  },
};

module.exports = userController;
