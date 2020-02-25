var createError = require('http-errors');
var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({msg:'test /'});
});

router.get('*', function(req, res, next) {
  next(createError(404,'api가 없습니다.'));
});

module.exports = router;
 