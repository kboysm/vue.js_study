const express = require("express");
const createError = require("http-errors");
const router = express.Router();
const crypto = require("crypto");
const axios = require('axios')
const multer = require('multer');
let upload = multer({ dest: 'uploads/userImg/' })
let fs = require('fs');
let filePath = 'C:/Users/admin/Desktop/vue.js/vue.js_study/vuejs_nodejs_testProject/back/uploads/userImg/89d1afdb627ac1387c62c7a0d26ed332';
router.post('/userImage', upload.single('upLoadImage'), (req, res) => {
    res.send('Uploaded! : ' + req.file); // object를 리턴함
    console.log(req.file)
})
router.get('/userImage', (req, res) => {
    console.log('dd')
    fs.unlinkSync(filePath); //파일을 삭제 시킴
})
module.exports = router;
