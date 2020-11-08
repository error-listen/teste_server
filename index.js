const express = require('express');
const body_parser = require('body_parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/_jsonPost', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(process.env.PORT || 7000);