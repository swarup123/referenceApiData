const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("../routes");

/**
 * Express instance
 * @public
 */
const app = express();

// Helmet helps you secure your Express apps by setting various HTTP headers.
app.use(helmet());

// parse body params and attache them to req.body
app.use(bodyParser.json({ limit: "10mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "10mb",
    extended: true,
    parameterLimit: 100000,
  })
);

// enable CORS - Cross Origin Resource Sharing
app.use(cors({ credentials: true, origin: true }));

app.disable("x-powered-by");

// mount api v1 routes
app.use("/api/", routes);

module.exports = app;
