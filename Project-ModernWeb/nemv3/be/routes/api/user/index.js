var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const User = require('../../../models/users')
const multer = require('multer')
const imgConvert = require('base64-img')
const fs = require('fs')
const sharp = require('sharp')
const imageDataUri = require('image-data-uri')

       
router.post('/', multer({ dest: 'public/' }).single('test') ,(req, res, next) => {
  console.log(req.body)
  console.log(req.file)
  
  sharp(req.file.path).resize(200,200)
  .crop(sharp.strategy.entropy).toBuffer()
  .then( bf =>{
    fs.unlinkSync(req.file.path)
    console.log(bf)
    res.send('12345')
  })
  .catch( e=>  {
    console.log('파일에러 발생')
    next(e)})
})

router.delete('/', (req, res, next) => {
  res.status(204).send()
})

router.get('/', function(req, res, next) {
  User.find()
    .then(r => {
      res.send({ success: true, users: r ,token:req.token})
    })
    .catch(e => {
      res.send({ success: false })
    })
});

router.put('/:_id', (req, res, next) => {
  const _id = req.params._id
  User.updateOne({ _id }, { $set: req.body})
    .then(r => {
      res.send({ success: true, msg: r ,token:req.token})
    })
    .catch(e => {
      res.send({ success: false, msg: e.message })
    })
})

router.delete('/:_id', (req, res, next) => {
  const _id = req.params._id
  User.deleteOne({ _id })
    .then(r => {
      res.send({ success: true, msg: r ,token:req.token})
    })
    .catch(e => {
      res.send({ success: false, msg: e.message })
    })
})

router.all('*', function(req, res, next) {
  next(createError(404, '그런 api 없어'));
});

module.exports = router;