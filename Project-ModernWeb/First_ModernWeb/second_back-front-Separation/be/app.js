var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

var app = express();
// 화면 engine을 ejs로 설정
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use('/api',require('./routes/api'));
app.use(express.static(path.join(__dirname,'../','fe','dist')));


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
  res.send({msg:err.message})
});

module.exports = app;
const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);
const User = require('./models/users')
mongoose.connect('mongodb://localhost:27017/nemv',{ useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
  if(err) return console.error(err)
  

  // User.create({name:'하하'}).then(r => console.log(r)).catch(e =>console.log(e));
  // User.find().then(r => console.log(r)).catch(e =>console.log(e));
  // User.updateOne({_id: '5e558e93f3591a191418b293'},{$set:{age:25}})
  // .then(r =>{ console.log(r)
  //   console.log('updated');
  //   return User.find()
  // })
  // .then(r => console.log(r))
  // .catch(e =>console.log(e));
  // User.deleteOne({name:'하하'}).then(r => console.log(r)).catch(e =>console.log(e));
})

var jwt = require('jsonwebtoken');
const key = 'veryNiceKey'
var token = jwt.sign({ name: 'lsm',email:'oop@naver.com' }, key);

var decoded = jwt.verify(token, key);
console.log(decoded) // 출력 결과 : { name: 'lsm', email: 'oop@naver.com', iat: 1582795982 } 
// iat는 발행한 시간을 의미
console.log(new Date(decoded.iat * 1000))//날짜 시간정보 출력