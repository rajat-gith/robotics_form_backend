const User = require("../models/userModel");

const userController = {
  createUser: async (req, res) => {
    const { name, email, hor, branch, phoneNumber, year } = req.body;

    if (!name || !email || !hor || !branch || !phoneNumber || !year) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newEntry = new User({ name, email, hor, branch, phoneNumber, year });

    try {
      const savedEntry = await newEntry.save();
      return res.status(201).json(savedEntry);
    } catch (err) {
      return res.status(500).json({ error: "Failed to save entry." });
    }
  },

  getAllUsers: (req, res) => {
    User.find({}, (err, users) => {
      if (err) {
        return res.status(500).json({ error: "Failed to retrieve entries." });
      }
      return res.json(entries);
    });
  },
};

module.exports = userController;
