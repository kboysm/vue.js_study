var express = require('express');
var router = express.Router();
var createError = require('http-errors'); //상단에 추가


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
