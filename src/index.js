const express = require('express');
const cors = require('cors');
const {add} = require("./arithmetica")
const app = express();

const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello World! Thank you!');
});

app.listen(port);

app.get('/add/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let sum = add(n,m);
        res.json(sum);
}); 

//app.listen(port)