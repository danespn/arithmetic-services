require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {add, sub, mult, div} = require("./arithmetica")
const app = express();

//const port = 3000;
app.use(cors());


if(!process.env.PORT){
    throw new Error('Please specify the port number for HTTP server.')
}

const port = process.env.PORT;


app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello World! Thank you!');
});


app.get('/add/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let sum = add(n,m);
        res.json(sum);
}); 

app.get('/sub/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let sum = sub(n,m);
        res.json(sum);
});
app.get('/mult/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let sum = mult(n,m);
        res.json(sum);
});
app.get('/div/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let sum = div(n,m);
        res.json(sum);
});



app.listen(port)