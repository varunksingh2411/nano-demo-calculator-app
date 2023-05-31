const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {

    return res.send('Hello world!');
});

baseRouter.post('/add', (req, res) => {
    const {first,second}=req.body;
    let ans=first+second;
    res.json({ "result": ans });
});


baseRouter.post('/subtract', (req, res) => {
    const {first,second}=req.body;
    let ans=first-second;
    res.json({ "result": ans });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});