const express = require("express");
const setMiddlewares = require("./config/setMiddlewares");

const app = express();

setMiddlewares(app);

app.use(require("./routes"));

module.exports = app;
