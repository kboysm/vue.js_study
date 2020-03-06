var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors') // 상단 아무곳이나 추가
var app = express();
app.use(cors()) // api 위에서 사용하겠다고 선언


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api',require('./routes/api'))
app.use(express.static(path.join(__dirname, '../', 'fe', 'dist')));



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
  res.send({ msg : err.message});
});

module.exports = app;

const mongoose = require('mongoose')
// const userSchema = new mongoose.Schema({
//   name: { type: String, default: '', unique: true, index: true },
//   age: { type: Number, default: 1 }
// })
// const User = mongoose.model('User', userSchema)
mongoose.connect('mongodb://localhost:27017/nemv',{ useUnifiedTopology: true,  useNewUrlParser: true  }, (err) => {
   if (err) return console.error(err)
   console.log('mongoose connected!')
//   //  User.create({ name: '하하' })
//   //   .then(r => console.log(r))
//   //   .catch(e => console.error(e))
//   // User.find()
//   // .then(r => console.log(r))
//   // .catch(e => console.error(e))
//   // User.updateOne({ _id: '5e62164e1fe85107c85463a6' }, { $set: { age: 34 } })
//   //  .then(r => {
//   //    console.log(r)
//   //    console.log('updated')
//   //    return User.find()
//   //  })
//   //  .then(r => console.log(r))
//   //  .catch(e => console.error(e))

//    User.deleteOne({ name: '하하' })
//    .then(r => {
//      console.log(r)
//      console.log('removed')
//      return User.find()
//    })
//    .then(r => console.log(r))
//    .catch(e => console.error(e))
})