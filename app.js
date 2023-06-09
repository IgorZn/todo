const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const connDB = require("./conf/db");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');

// Load env consts
dotenv.config({path: './conf/config.env'});


// Connect to DB
connDB()

const indexRouter = require('./routes/index');
const todoEdit = require('./routes/edit');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// // for parsing application/json
// app.use(bodyParser.json());
//
// // for parsing application/xwww-
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/* Routers */
app.use('/', indexRouter);
app.use('/edit', todoEdit);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
