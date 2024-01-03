const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const calendersRouter = require('./routes/calenders'); // 추가

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/calenders', calendersRouter); // 추가

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use('/api', (req, res, next) => {
  console.error(404, req.url);
  res.status(404).json({error: {message: '존재하지 않는 API입니다.'}});
});

// error handler
app.use((err, req, res, next) => {
  const error = {
    message: err.message || '요청을 처리할 수 없습니다. 잠시 후 다시 요청해 주시기 바랍니다.',
    code: err.code,
  };
  res.status(err.status || 500).json({error});
});

module.exports = app;
