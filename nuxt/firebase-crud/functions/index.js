const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
admin.initializeApp(functions.config().firebase)

const app = express()

const verifyToken = async (req, res, next) => {
    const tk = req.headers.authorization.split(' ')[1]
    const u = await admin.auth().verifyIdToken(tk)
    console.log(u)
    next()
  }
  
  app.use(cors({ origin: true }))
  app.use(verifyToken)
  app.get('/', (req, res) => res.send('abcdefg'))
exports.Widget=functions.https.onRequest(app)
exports.auth=functions.https.onRequest(require('./auth'))