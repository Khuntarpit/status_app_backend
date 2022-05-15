const express = require("express");
const mongoose = require("mongoose");
const route = require("./route");
const cors = require("cors");
const app = express();
require('dotenv').config();

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Database connection successfully");
  })
  .catch((e) => {
    console.log(`e`, e)
    console.log("Database connection failed");
  });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", route);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Quote maker</h1>");
});

app.listen(8000, () => {
  console.log("Server started");
});
