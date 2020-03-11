var express = require('express');
const jwt = require('jsonwebtoken');
const cfg = require('../../../config/conf')
var router = express.Router();
var createError = require('http-errors'); //상단에 추가
var moment = require('moment')
router.use('/sign', require('./sign'))
router.use('/site', require('./site'))
router.use('/register', require('./register'))
const signToken = (id, lv, name, rmb) => {
  return new Promise((resolve, reject) => {
    const o = {
      issuer: cfg.jwt.issuer,
      subject: cfg.jwt.subject,
      expiresIn: cfg.jwt.expiresIn, // 3분
      algorithm: cfg.jwt.algorithm
    }
    if (rmb) o.expiresIn = cfg.jwt.expiresInRemember // 6일
    jwt.sign({ id, lv, name, rmb }, cfg.jwt.secretKey, o, (err, token) => {
      if (err) reject(err)
      resolve(token)
    })
  })
}
const verifyToken = (t) => {
  return new Promise((resolve, reject) => {
    if (!t) resolve({ id: 'guest', name: '손님', lv: 3 })
    if ((typeof t) !== 'string') reject(new Error('문자가 아닌 토큰 입니다.'))
    if (t.length < 10) resolve({ id: 'guest', name: '손님', lv: 3 })
    jwt.verify(t, cfg.jwt.secretKey, (err, v) => {
      if (err) reject(err)
      resolve(v)
    })
  })
}

const getToken = async(t)=>{
  let vt = await verifyToken(t)
  if(vt.lv>2) return {user:vt,token:null}
  const diff = moment(vt.exp *1000).diff(moment(),'seconds')
  console.log(diff)
  if(diff >(vt.exp - vt.iat)/cfg.jwt.expiresInDiv) return {user:vt , token: null}

  const nt = await signToken(vt.id, vt.lv, vt.name,vt.rmb)
  vt=await verifyToken(nt)
  return {user:vt , token:nt}
}

router.all('*', function(req, res, next) {
  // 토큰 검사
  getToken(req.headers.authorization)
    .then(v => {
      console.log(v)
      req.user = v.user
      req.token = v.token
      next()
    })
    .catch(e => res.send({ success: false, msg: e.message }))
})

router.use('/manage', require('./manage'))
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
