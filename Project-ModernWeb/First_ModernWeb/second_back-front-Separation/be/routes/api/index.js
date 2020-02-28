var createError = require('http-errors');
var express = require('express');
var router = express.Router();
router.use('/test',require('./test'));
router.use('/user',require('./user'));
router.use('/sign',require('./sign'));
/* GET home page. */
router.get('/hello', function(req, res, next) {
  res.send({msg:'hello',a:1});
});
router.get('/yy', function(req, res, next) {
  res.send({msg:'yy page',a:1});
});
router.get('*', function(req, res, next) {
  next(createError(404,'api가 없습니다.'));
});

module.exports = router;
 