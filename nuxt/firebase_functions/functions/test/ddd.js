
const express = require('express');
const cors = require('cors');

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// Add middleware to authenticate requests
// app.use(myMiddleware);

// build multiple CRUD interfaces:
app.get('/:id', (req, res) => res.send('dddget'+req.params.id));
app.post('/', (req, res) => res.send('dddpost'));
app.put('/:id', (req, res) => res.send('dddput'+req.params.id));
app.delete('/:id', (req, res) => res.send('ddddel'+req.params.id));
app.get('/', (req, res) => res.send('dddget *'));

// Expose Express API as a single Cloud Function:
// exports.widgets = functions.https.onRequest(app);
module.exports =app