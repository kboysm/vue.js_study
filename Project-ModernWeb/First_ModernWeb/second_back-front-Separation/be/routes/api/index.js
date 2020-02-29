var createError = require('http-errors');
var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')
const cfg = require('../../../config')
router.use('/manage',require('./manage'));
const verifyToken = (t) => {
  return new Promise((resolve, reject) => {
    if (!t) resolve({ id: 'guest', name: '손님', lv: 3 })
    if (t.length < 10) resolve({ id: 'guest', name: '손님', lv: 3 })
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
      req.user = v
      next()
    })
    .catch(e => res.send({ success: false, msg: e.message}))
})

router.use('/test',require('./test'));
router.use('/user',require('./user'));
router.use('/sign',require('./sign'));



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
 