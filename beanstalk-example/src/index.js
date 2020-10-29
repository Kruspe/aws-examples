import express from 'express';
import http from 'http';
import path from 'path';

const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Main page is here to stay');
});
app.get('/random', (req, res) => {
    res.send(`You wanted random... Here it is ${Math.floor(Math.random() * Math.floor(100))}`);
});
app.get('/image', function(req, res) {
    const imagePath = path.resolve('./image.jpg');
    res.send("<img src='image.jpg'>Baluga</img>");
});

http.createServer(app).listen(8080, () => {
    console.log("Express server listening on port 8080");
});