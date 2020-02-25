var createError = require('http-errors');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const us =[
    {
      name:'길용성',
      age:14,
      show:false
    },
    {
      name:'김민우',
      age:15,
      show:false
    },
    {
      name:'주금만',
      age:19,
      show:false
    },
    
  ]
  res.send({user:us});
});
router.get('/yy', function(req, res, next) {
  res.send({msg:'yy page',a:1});
});
router.get('*', function(req, res, next) {
  next(createError(404,'api가 없습니다.'));
});

module.exports = router;
 