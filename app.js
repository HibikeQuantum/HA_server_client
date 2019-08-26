var createError = require('http-errors');
var express = require('express');
var app = express();
const cors = require('cors');
app.use(cors({credential:true, origin:'*'}));

require('./model/db');
const User = require('./model/user');
const Route = express.Route;

app.listen(5000, ()=> {
  console.log("START <5000>");
})
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

User.countDocuments({}, (err, count) => {
  if (count === 0) {
    console.log("데이터 초기화");
    require('./model/init')
  }
})

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');

app.use('/', indexRouter);
app.use('/user', usersRouter);

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
