const express = require('express');

const app = express();

app.use(express.json());

app.post('/_jsonPost', (req, res) => {
    res.json(req.body);
});

app.listen(process.env.PORT || 7000);