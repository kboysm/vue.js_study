var createError = require('http-errors');
var express = require('express');
var router = express.Router();

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

/* GET home page. */
router.get('/', function(req, res, next) {
  let reqres = req.query.userName;
  res.send({user:us , userName:reqres});
});
router.post('/', function(req, res, next) {
  let reqres = req.body.userName;
  res.send({success : true ,msg : 'post ok', userName:reqres});
});
router.put('/', function(req, res, next) {
  let reqres = req.body.userName;
  res.send({success : true ,msg : 'put ok', userName:reqres});
});
router.delete('/', function(req, res, next) {
  let reqres = req.body.userName;
  res.send({success : true ,msg : 'delete ok', userName:reqres});
});











router.get('/yy', function(req, res, next) {
  res.send({msg:'yy page',a:1});
});
router.get('*', function(req, res, next) {
  next(createError(404,'api가 없습니다.'));
});

module.exports = router;
 