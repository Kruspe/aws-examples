import express from 'express';
import http from 'http';

const app = express();

app.get('/', (req, res) => {
    res.send('Main page is here to stay');
});
app.get('/random', (req, res) => {
    res.send(`You wanted random... Here it is ${Math.floor(Math.random() * Math.floor(100))}`);
});

http.createServer(app).listen(8080, () => {
    console.log("Express server listening on port 8080");
});