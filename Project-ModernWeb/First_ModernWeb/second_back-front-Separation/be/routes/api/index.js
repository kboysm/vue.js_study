var createError = require('http-errors');
var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')
const cfg = require('../../../config')

// const vertifyToken= (t)=> {
//   return new Promise((resolve,reject) =>{
//     jwt.verify(t,cfg.secretkey,(err,v)=>{
//       if(err) reject(err)
//       resolve(v)
//     })
//   })
// }
// router.get('*', function(req, res, next) {
//   const token = req.headers.authorization
//   vertifyToken(token)
//   .then(v=>{
//     console.log(v)
//     next()
//   })
//   .catch(e => res.send({success:false , msg:e.message}))
// });

router.use('/test',require('./test'));
router.use('/user',require('./user'));
router.use('/sign',require('./sign'));
router.use('/manage',require('./manage'));


router.get('/hello', function(req, res, next) {
  res.send({msg:'hello',a:1});
});
router.get('/yy', function(req, res, next) {
  res.send({msg:'yy page',a:1});
});
router.all('*',function(req,res,next){
  next(createError(404,'그런 api 없음'));
})



module.exports = router;
 