const express = require('express');

const app = express();

app.use(express.json());

app.post('/_jsonPost', (req, res) => {
    console.log(req.body)
    res.sendStatus(200)
});

app.listen(process.env.PORT || 7000);