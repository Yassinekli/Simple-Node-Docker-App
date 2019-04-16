const express = require('express');
const app = express();
const {db} = require('./db/db');

app.get('/', (req, res) => {
    db.connect()
    .then(()=>res.sendFile(__dirname + '/views/index.html'))
    .catch(()=>res.redirect('/error'))
});

app.get('/error', (req, res) => {
    res.sendFile(__dirname + '/views/error.html');
});

const port = 3000;
app.listen(port, () => console.log(`App listening`));