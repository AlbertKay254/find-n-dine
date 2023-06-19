const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

// connect to mongodb
require("./config").intializeDatabase();

// import env variables from .env file
require("dotenv").config();

// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "1mb" }));

// define routes
app.use(require("./routes/index"));
app.use(require("./routes/register"));
app.use(require("./routes/sign-in"));
app.use(require("./routes/user"));
app.use(require("./routes/upload"));
app.use(require("./routes/review"));

app.use(async (req, res, next) => {
  console.log("Not found");
  res.send("Check url");
});

module.exports = app;
