var express = require('express')
var createError = require('http-errors')
var router = express.Router();
const Board = require('../../../models/boards')
const Article = require('../../../models/articles')



router.post('/:_board',(req,res,next)=>{
  const _board = req.params._board
  if(!_board) return res.send({ success:false , msg: '보드를 지정해주세요'})
  const {title, content} = req.body
  
  Board.findOne({_id:_board})
    .then(r=>{
        if(!r) throw new Error('게시판 없음')
        if(r.lv<req.user.lv) throw new Error('권한 없음')
        const atc = {
            title : title,
            content,
            _board,
            ip:req.ip,
            _user:null
        }
        if(req.user._id) atc._user = req.user._id
        return Article.create(atc)
    })
    .then(r =>{
        res.send({ success: true, d: r, token: req.token })

    })
    .catch(e => {
      res.send({ success: false, msg: e.message })
    })
})


router.get('/:_board',(req,res,next)=>{
    const _board = req.params._board

    const f = {}
    if (_board) f._board = _board

    Article.find({_board}).populate('_user','-pwd')
    .then(rs =>{
        res.send({ success: true, d: rs, token: req.token })

    })
    .catch(e => {
      res.send({ success: false, msg: e.message })
    })
})

router.put('/:_id',(req,res,next)=>{
    if(!req.user._id) return res.send({ success:false , msg : '손님은 수정이 안됌'})
    const _id = req.params._id

    Article.findById(_id)
    .then(r =>{
       if(!r) throw new Error('게시물 없음 ')
       if(r._user.toString() !== req.user._id) throw new Error('본인 작성이 아님')
        return Article.findOneAndUpdate({_id}, {$set:req.body},{new :true})
    })
    .catch(e => {
      res.send({ success: false, msg: e.message })
    })
})

router.delete(':_id',(req,res,next)=>{
    if(!req.user._id) return res.send({ success:false , msg : '손님은 삭제가 안됌'})
    const _id = req.params._id

    Article.findById(_id).populate('_user','lv')
    .then(r =>{
       if(!r) throw new Error('게시물 없음 ')
       if(r._user){
       if(r._user._id.toString() !== req.user._id) {
        if(r._user.lv < req.user.lv) throw new Error('권한 없음')
        }
       }
        return Article.deleteOne({_id})
    })
    .then(r =>{
        res.send({ success:true , token:req.token})
    })
    .catch(e => {
      res.send({ success: false, msg: e.message })
    })
})

router.all('*', function(req, res, next) {
  next(createError(404, '그런 api 없어'));
});

module.exports = router;