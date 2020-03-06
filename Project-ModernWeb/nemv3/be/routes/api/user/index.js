var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const User = require('../../../models/users');

router.get('/', function(req, res, next) {
  console.log('get요청 옴')
 User.find()
  .then(r => {
    res.send({ success: true, users: r })
  })
  .catch(e => {
    res.send({ success: false })
  })
});

router.post('/', (req, res, next) => {
  console.log(req.body)
  const { name, age } = req.body
  const u = new User({ name, age })
  u.save()
    .then(r => {
      res.send({ success: true, msg: r })
    })
    .catch(e => {
      res.send({ success: false, msg: e.message })
    })
})
router.put('/:id', (req, res, next) => {
  const id = req.params.id
  const { name, age } = req.body
  User.updateOne({ _id: id }, { $set: { name, age }})
    .then(r => {
      res.send({ success: true, msg: r })
    })
    .catch(e => {
      res.send({ success: false, msg: e.message })
    })
  // res.send({ success: true, msg: 'put ok' })
})

router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  User.deleteOne({ _id: id })
    .then(r => {
      res.send({ success: true, msg: r })
    })
    .catch(e => {
      res.send({ success: false, msg: e.message })
    })
  res.send({ success: true, msg: 'del ok' })
})


router.all('*', function(req, res, next) {
  next(createError(404, '그런 api 없어'));
});

module.exports = router;