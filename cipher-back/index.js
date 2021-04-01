const express = require('express');
const cors = require('cors');
const app = express();
const cipher = require('./cipher');

const port = 8000;

app.use(cors());
app.use(express.json());
app.use('/', cipher);

app.listen(port, () => {
    console.log('Server started at ' + port);
})