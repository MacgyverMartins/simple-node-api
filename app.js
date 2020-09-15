var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mediasRouter = require('./routes/medias');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/medias', mediasRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  return res.status(404).end()
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  const error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).send(error)
});

module.exports = app;
