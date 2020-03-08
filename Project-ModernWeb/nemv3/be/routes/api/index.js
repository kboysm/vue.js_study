var express = require('express');
const jwt = require('jsonwebtoken');
const cfg = require('../../../config/conf')
var router = express.Router();
var createError = require('http-errors'); //상단에 추가
router.use('/sign', require('./sign'))

const verifyToken = (t) => {
  return new Promise((resolve, reject) => {
    jwt.verify(t, cfg.secretKey, (err, v) => {
      if (err) reject(err)
      resolve(v)
    })
  })
}
router.all('*', function(req, res, next) {
  // 토큰 검사
  const token = req.headers.authorization
  verifyToken(token)
    .then(v => {
      console.log(v)
      next()
    })
    .catch(e => res.send({ success: false, msg: e.message }))  
});

router.all('*', function(req, res, next) {  //미들웨어
  if (req.path === '/xxx') return res.send({ msg: '보안상 여긴 못와요!' })
  next()
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send( { success: true ,msg:'/api'});
});
router.get('/hello', function(req, res, next) {
  res.send( { success: true ,msg:'hello'});
});

router.use('/test',require('./test'))
router.use('/user', require('./user'))
router.all('*', function(req, res, next) {
  next(createError(404, '그런 api 없어'));
});
module.exports = router;
