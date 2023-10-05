require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const mongoUrl= process.env.MONGO_URL
const app = express();
const port = 8080;

app.use(bodyParser.json());

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Use the entry routes
app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
