const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const express = require('express');
const cors = require('cors');

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// Add middleware to authenticate requests
// app.use(myMiddleware);

// build multiple CRUD interfaces:
app.get('/:id', (req, res) => res.send('get'+req.params.id));
app.post('/', (req, res) => res.send('post'));
app.put('/:id', (req, res) => res.send('put'+req.params.id));
app.delete('/:id', (req, res) => res.send('del'+req.params.id));
app.get('/', (req, res) => res.send('get *'));

// Expose Express API as a single Cloud Function:
exports.widgets = functions.https.onRequest(app);
exports.abc=functions.https.onRequest(require('./abc'));
exports.ddd=functions.https.onRequest(require('./test/ddd'));