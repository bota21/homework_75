const express = require('express');
const app = express();
const cipher = require('./cipher');
const db = require('./fileDb');

const port = 8000;

db.init();

app.use(express.json());
app.use('/cipher', cipher(db));

app.listen(port, () => {
    console.log('Server started at ' + port);
})