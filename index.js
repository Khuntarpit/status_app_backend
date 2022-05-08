const express = require("express");
const mongoose = require("mongoose");
const route = require("./route");
const path = require("path");
const cors = require("cors");
const app = express();

mongoose
  .connect(
    "mongodb+srv://yihac30272:maI26mzcoKF6gZEJ@cluster0.6hofs.mongodb.net/QuoteMaker"
  )
  .then(() => {
    console.log("Database connection successfully");
  })
  .catch(() => {
    console.log("Database connection failed");
  });

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use("/public", express.static('public'));

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
