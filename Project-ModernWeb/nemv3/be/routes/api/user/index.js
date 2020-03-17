var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const User = require('../../../models/users')
const multer = require('multer')
const imgConvert = require('base64-img')
const fs = require('fs')
const sharp = require('sharp')
const imageDataUri = require('image-data-uri')

router.post('/', multer({ dest: 'public/' }).single('bin') ,(req, res, next) => {
  console.log(req.body)
  console.log(req.file)
  
  // imgConvert.base64(req.file.path, (err, fd) => {
  //   if (err) return next(err)
  //   // console.log(fd)
  //   fs.writeFileSync('public/xxx.txt', fd)
  // })
  // res.status(204).send()


  sharp(req.file.path)
  .rotate()
  .resize(200,200)
  .toBuffer()
  .then( data =>{
    const d = imageDataUri.encode(data,'png')
    res.send(d)

  })
  .catch( err => next(err))

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