const express = require("express");
const app = express();
// const {greeting} = require('./user')

app.get("/", (req, res) => res.send("This App is running properly !"));

module.exports = app;
