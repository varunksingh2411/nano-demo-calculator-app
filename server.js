const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('Hello world!');
});

baseRouter.post('/add', (req, res) => {
    let added = req.body.first + req.body.second;
    res.json({ "result": added });

});


baseRouter.post('/subtract', (req, res) => {
    let sub = req.body.first - req.body.second;
    res.json({ "result": sub });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});