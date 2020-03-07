var express = require('express');
var router = express.Router();
var createError = require('http-errors'); //상단에 추가

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
router.use('/sign',require('./sign'))
router.all('*', function(req, res, next) {
  console.log('토큰 검사 하는 미들웨어')
  next();
});

router.use('/test',require('./test'))
router.use('/user', require('./user'))
router.all('*', function(req, res, next) {
  next(createError(404, '그런 api 없어'));
});
module.exports = router;
