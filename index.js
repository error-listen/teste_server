const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let date = [];

app.post('/_jsonPost', (req, res) => {
    date.push(req.body);
    res.sendStatus(200);
});

app.get('/get_date', (req, res) => {
    console.log(date);
    res.json(date);
});

app.listen(process.env.PORT || 7000);