import express from 'express';

const app = express();
app.get('/', (req, res) => {
    res.send('Main page is here to stay')
});

app.get('/random', (req, res) => {
    res.send(Math.floor(Math.random() * Math.floor(100)));
});