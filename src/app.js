if (process.env.NODE_ENV != "production")
  // eslint-disable-next-line global-require,import/no-extraneous-dependencies
  require('dotenv').config()

const express = require("express");
const createError = require("http-errors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// eslint-disable-next-line import/no-extraneous-dependencies
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// eslint-disable-next-line import/extensions,import/no-unresolved
app.use("/api/v1/public", require("./routes"));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) =>{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
module.exports = app;