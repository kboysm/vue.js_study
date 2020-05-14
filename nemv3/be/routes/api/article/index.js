var express = require('express')
var createError = require('http-errors')
var router = express.Router();
const Board = require('../../../models/boards')
const Article = require('../../../models/articles')
const Comment = require('../../../models/comments')


router.post('/:_board', (req, res, next) => {
  const _board = req.params._board
  if (!_board) return res.send({ success: false, msg: '게시판이 선택되지 않았습니다' }) // 나중에 400 bad request 처리 예제
  const { title, content } = req.body
  Board.findOne({ _id: _board })
    .then(r => {
      if (!r) return res.send({ success: false, msg: '잘못된 게시판입니다' })
      if (r.lv < req.user.lv) return res.send({ success: false, msg: '권한이 없습니다' })
      const atc = {
        title,
        content,
        _board,
        ip: '1.1.1.1',//req.ip,
        _user: null
      }
      if (req.user._id) atc._user = req.user._id
      return Article.create(atc)
    })
    .then(r => {
      res.send({ success: true, d: r, token: req.token })
    })
    .catch(e => {
      res.send({ success: false, msg: e.message })
    })
})

router.get('/read/:_id', (req, res, next) => {
  const _id = req.params._id

  let atc = {}

  Article.findByIdAndUpdate(_id, { $inc: { 'cnt.view': 1 } }, { new: true }).lean()
    .select('content cnt')
    .then(r => {
      if (!r) throw new Error('잘못된 게시판입니다')
      atc = r
      atc._comments = []
      return Comment.find({ _article: atc._id }).populate({ path: '_user', select: 'id name'}).sort({ _id: 1 }).limit(5)
    })
    .then(rs => {
      if (rs) atc._comments = rs
      res.send({ success: true, d: atc, token: req.token })
    })
    .catch(e => {
      res.send({ success: false, msg: e.message })
    })
})

router.get('/list/:_board', (req, res, next) => {
  const _board = req.params._board
  let { search, sort, order, skip, limit } = req.query
  if (!(sort && order && skip && limit)) return res.send({ success: false, msg: '잘못된 요청입니다' })
  if (!search) search = ''
  order = parseInt(order)
  limit = parseInt(limit)
  skip = parseInt(skip)
  const s = {}
  s[sort] = order

  const f = {}
  if (_board) f._board = _board
  let total = 0

  Article.countDocuments(f)//데이터 개수 구하기
    .where('title').regex(search) // title에서 search로 넘어온 값이 포함된 녀석들만 구하기
    .then(r => {
      total = r //조건을 통과한 모든 데이터 
      return Article.find(f)
        .where('title').regex(search)
        .sort(s) //order순으로 정렬
        .skip(skip)//??시작 부분을 설정함 
        .limit(limit)//출력할 갯수 
        //limit와 skip을 통해 보내줄 갯수를 제한할 수 있음 
        .select('-content') //content를 제외
        .populate('_user', '-pwd')
    })
    .then(rs => {
      console.log('lsm')
      res.send({ success: true, t: total, ds: rs, token: req.token })
    })
    .catch(e => {
      res.send({ success: false, msg: e.message })
    })
})

router.put('/:_id', (req, res, next) => {
  if (!req.user._id) return res.send({ success: false, msg: '게시물 수정 권한이 없습니다' })
  const _id = req.params._id

  Article.findOne({ _id })
    .then(r => {
      if (!r) throw new Error('게시물이 존재하지 않습니다')
      if (r._user.toString() !== req.user._id) throw new Error('본인이 작성한 게시물이 아닙니다')
      return Article.findOneAndUpdate({ _id }, { $set: req.body}, { new: true })
    })
    .then(r => {
      res.send({ success: true, d: r, token: req.token })
    })
    .catch(e => {
      res.send({ success: false, msg: e.message })
    })
})
router.delete('/:_id', (req, res, next) => {
  if (!req.user._id) return res.send({ success: false, msg: '게시물 수정 권한이 없습니다' })
  const _id = req.params._id

  Article.findOne({ _id }).populate('_user', 'lv')
    .then(r => {
      if (!r) throw new Error('게시물이 존재하지 않습니다')      
      if (!r._user) {
        if (req.user.lv > 0) throw new Error('손님 게시물은 삭제가 안됩니다')
      }
      else {
        if (r._user._id.toString() !== req.user._id) {
          if (r._user.lv < req.user.lv) throw new Error('본인이 작성한 게시물이 아닙니다')
        }        
      }      
      return Article.deleteOne({ _id })
    })
    .then(r => {
      res.send({ success: true, d: r, token: req.token })
    })
    .catch(e => {
      res.send({ success: false, msg: e.message })
    })
})

router.all('*', function(req, res, next) {
  next(createError(404, '그런 api 없어'));
});

module.exports = router;