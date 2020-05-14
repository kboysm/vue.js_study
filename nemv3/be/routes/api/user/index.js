var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const User = require('../../../models/users')
const multer = require('multer')
const imgConvert = require('base64-img')
const fs = require('fs')
const sharp = require('sharp')
const imageDataURI = require('image-data-uri')

       
// router.post('/', multer({ dest: 'public/' }).single('test') ,(req, res, next) => {
//   // console.log(req.body)
//   // console.log(req.file)
  
//   sharp(req.file.path)
//   .resize(200,200)
//   // .crop(sharp.strategy.entropy) 이녀석이 에러의 원인이였음
//   .toBuffer()
//   .then( bf =>{
//     fs.unlinkSync(req.file.path)
//     console.log(bf)
//     res.send('12345')
//   })
//   .catch( e=>  {
//     console.log('파일에러 발생')
//     next(e)})
// })

router.post('/', multer({ dest: 'public/' }).single('bin') ,(req, res, next) => {
  
  if (!req.user._id) {
    console.log('_id가 없음')
    throw createError(401, 'xxx')
  }

  sharp(req.file.path).resize({
    width: 200,
    height: 200,
    fit: sharp.fit.cover,
    position: sharp.strategy.entropy
  }).toBuffer()
    .then(bf => {
      fs.unlinkSync(req.file.path)
      const img = imageDataURI.encode(bf, 'png')
      return User.findByIdAndUpdate(req.user._id, { $set: { img } }, { new: true }).select('-img')
      // res.send(imageDataURI.encode(bf, 'png'))
    })
    .then(r => {
      res.setHeader('Content-Type', 'text/plain')
      res.send(r._id.toString())
    })
    .catch(e => next(e))
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