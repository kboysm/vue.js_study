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

/////////////////////////////////////// mongoose //////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////// jwt /////////////////////////////////////////
var jwt = require('jsonwebtoken');
const key = 'veryNiceKey'
// var token = jwt.sign({ name: 'lsm',email:'oop@naver.com' }, key);

// var decoded = jwt.verify(token, key);
// console.log(decoded) // 출력 결과 : { name: 'lsm', email: 'oop@naver.com', iat: 1582795982 } 
// // iat는 발행한 시간을 의미
// console.log(new Date(decoded.iat * 1000))//날짜 시간정보 출력

///////////////////////////////////////////////////////////////////////////////

////////////////////////// 콜백 ////////////////////////////////////

// const foo = (v,cb) =>{
//   if(v>1) return cb(new Error('abcd'))
//   setTimeout(()=>{
//     cb(null,v+1)
//   },3000)
// }
// foo(1,(err,r)=>{
// if(err) return console.error(err.message)
// console.log(r)
// });

// User.findOne({name:'aaa', age:15},(err,u)=>{
//   if(err) return console.error(err.message)
//   if(!u){
//     console.log(u) //null
//     User.create({name:'aaa',age:15},(err,cu)=>{
//       if(err) return console.error(err.message)
//       console.log(cu);
//       jwt.sign({name:cu.name,age:cu.age},key,(err,token)=>{
//         if(err) return console.error(err.message)
//         console.log(token)
//         jwt.verify(token,key,(err,v)=>{
//           if(err) return console.error(err.message)
//           console.log(v)
//         })
//       })
//     })
//   }
//   else {
//     console.log(u)
//     const user =u
//     User.update({_id:u._id},{$inc:{age:1}},(err,ur)=>{ //$inc는 해당 {속성:값} -> 속성값에 +1 더해준다는 의미
//       if(err) return console.error(err.message)
//       console.log(ur)
//       jwt.sign({name:user.name,age:user.age+1},key,(err,token)=>{
//         if(err) return console.error(err.message)
//         console.log(token)
//         jwt.verify(token,key,(err,v)=>{
//           if(err) return console.error(err.message)
//           console.log(v)
//         })
//       })
//     })
//   }
// })

                                    // promise //
const signToken = (u,k)=>{
  return new Promise((resolve,reject)=>{
    jwt.sign({name:u.name , age:u.age},k,(err,token)=>{
      if(err) reject(err)
      resolve(token)
    })
  })
}
const verifyToken = (t,k) =>{
  return new Promise((resolve,reject)=>{
    jwt.verify(t,k,(err,v)=>{
      if(err) reject(err)
      resolve(v)
    })
  })
}


let user
User.findOne({name:'aaa'})
  .then((u)=>{
    if(!u) return User.create({name:'aaa',age:12}) //이녀석도 프라미스이기 때문에 아래then으로 넘어감
    return Promise.resolve(u)
  })
  .then((u)=>{
    user =u
    return User.update({_id:u._id},{$inc:{age:1}})
  })
  .then((r)=>{
    if(!r.nModified) throw new Error('수정된 것이 없어요')
    user.age++
    return signToken(user,key)
  })
  .then((token)=>{
    return verifyToken(token,key)
  })
  .then(v=>console.log(v))
  .catch((err)=>{
    console.error(err.message)
  })


//예전에는 주로 이렇게 코드를 작성했으니 요즘에는 이렇게 하지 않는다!
//왜 ? promise때문에
/////////////////////////////////////////////////////////////////////////////////////
