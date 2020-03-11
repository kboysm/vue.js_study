var express = require('express');
var createError = require('http-errors');
var router = express.Router();

router.all('*', function(req, res, next) {
  console.log(req.user)
  if (req.user.lv) return res.send({ success: false, msg: '권한이 없습니다.' })
  next()
})// 오류 때문에 주석처리 함  req.user를 인식하지 못함 ->이유 발견 : api/index.js에서 토큰 검사 전에 router.use를 해줌 즉 req.user에 객체를 담기전에 여기로 오는 코드였음 
router.use('/user', require('./user'))
router.use('/page', require('./page'))
router.use('/site', require('./site'))
router.use('/board', require('./board'))
router.all('*', function(req, res, next) {
  next(createError(404, '그런 api 없어'));
});

module.exports = router;