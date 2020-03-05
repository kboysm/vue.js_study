const express= require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
app.use(cors({ origin: true }))
app.post('/signin',(req,res)=>{
    const body = req.body
    if(!body.email || !body.password || !body.token) return res.status(401).end()
    const url = 'https://www.google.com/recaptcha/api/siteverify'
    const opt ={
        secret:'',
        response:body.token,
        remoteip:req.ip
    }
    axios.post(url,JSON.stringify(opt))
        .then(r =>{
            res.send({success:true})
        })
        .catch(e =>{
            //req.status(401).end()
            res.send(e.message)
        })
})

module.exports =app