const router = require('express').Router()

router.get('/',(req,res,next)=>{
    res.send('api/hello/index.js')
})
module.exports =router