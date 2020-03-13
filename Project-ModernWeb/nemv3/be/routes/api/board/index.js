var express = require('express')
var createError = require('http-errors')
var router = express.Router();
const Board = require('../../../models/boards')

router.get('/read/:name', (req, res, next) => {
  const name = req.params.name
  console.log("board/read/"+name)
  Board.findOne({ name })
    .then(r => {
      res.send({ success: true, d: r, token: req.token })
    })
    .catch(e => {
      res.send({ success: false, msg: e.message })
    })
})

router.get('/list', (req, res, next) => {
  Board.find().sort({ lv: -1 })
    .then(rs => {
      res.send({ success: true, ds: rs, token: req.token })
    })
    .catch(e => {
      res.send({ success: false, msg: e.message })
    })
})
router.all('*', function(req, res, next) {
  next(createError(404, '그런 api 없어'));
});

module.exports = router;