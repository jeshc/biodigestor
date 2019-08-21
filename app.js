var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var lecturasRouter = require('./routes/lecturas');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/lecturas', lecturasRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// mongodb fesaragon:wP4I5n6RVM295whV
// mongodb+srv://fesaragon:wP4I5n6RVM295whV@cluster0-p1uhr.gcp.mongodb.net/test?retryWrites=true&w=majority
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://fesaragon:wP4I5n6RVM295whV@cluster0-p1uhr.gcp.mongodb.net/biodigestor?retryWrites=true&w=majority', { useNewUrlParser: true });

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
