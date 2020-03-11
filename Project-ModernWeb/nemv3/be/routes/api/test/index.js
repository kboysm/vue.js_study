var express = require('express');
var router = express.Router();
var createError = require('http-errors'); //상단에 추가


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.headers)
  res.send({ msg: 'hello', a: '괜찮아' ,token:req.token})
});
router.get('/hello', function(req, res, next) {
  res.send( { success: true ,msg:'test hello',token:req.token});
});
router.all('*', function(req, res, next) {
  next(createError(404, 'test 그런 api 없어'));
});
module.exports = router;
