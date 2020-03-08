var express = require('express');
const jwt = require('jsonwebtoken');
const cfg = require('../../../config/conf')
var router = express.Router();
var createError = require('http-errors'); //상단에 추가

router.use('/sign', require('./sign'))
router.use('/manage', require('./manage'))


const verifyToken = (t) => {
  return new Promise((resolve, reject) => {
    if(!t) resolve({id:'guest', name:'손님', lv:3})
    if((typeof t)==='String') reject(new Error('문자가 아닌 토큰입니다.'))
    if(t.length <10) resolve({id: 'guest', name:'손님', lv:3})
    jwt.verify(t, cfg.secretKey, (err, v) => {
      if (err) reject(err)
      resolve(v)
    })
  })
}
router.all('*', function(req, res, next) {
  // 토큰 검사
  console.log(req.headers)
  const token = req.headers.authorization
  verifyToken(token)
    .then(v => {
      req.user =v
      next()
    })
    .catch(e =>{
     res.send({ success: false, msg: e.message })})  
});
router.use('/page', require('./page'))
router.all('*', function(req, res, next) {
  // 또 검사해도 됨
  if (req.user.lv > 2) return res.send({ success: false, msg: '권한이 없습니다.' })
  next()
})
router.use('/test', require('./test'))
router.all('*', function(req, res, next) {
  // 또 검사해도 됨
  if (req.user.lv > 0) return res.send({ success: false, msg: '권한이 없습니다.' })
  next()
})
router.use('/user', require('./user'))

router.all('*', function(req, res, next) {
  next(createError(404, '그런 api 없어'));
});
module.exports = router;
