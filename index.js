const express = require('express');

const app = express();

app.post('/', (req, res) => {
    res.json("It's Work");
});

app.listen(8080);