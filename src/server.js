"use strict";

// Requires
const { req, res } = require("express");
const express = require("express");
const cors = require("cors");
const logger = require("./midlleware/logger.js");
const validator = require("./midlleware/validator.js");
const errorHandler = require("./error-handlers/500.js");
const notFound = require("./error-handlers/404.js");
const app = express();

// Express-Middleware
app.use(express.json());
app.use(cors());
app.use(logger);

// Route-level-Middleware
// app.use(validator);

// My-Routes
app.get("/", (req, res) => {
  res.send("home route");
});

app.get("/person", validator, (req, res) => {
  res.json(`the name is: ${req.query.name}`);
});

// app.get("/data", (req, res) => {
//   res.status(200).json({
//     name: "Marah",
//     email: "marahjaradat97@gmail.com",
//   });
// });

function start(port) {
  app.listen(port, () => {
    console.log(`running on port ${port}`);
  });
}

app.use(errorHandler);
app.use("*", notFound);
module.exports = {
  app: app,
  start: start,
};
