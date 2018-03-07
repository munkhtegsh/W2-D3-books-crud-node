const express = require('express');
const bodyParser = require('body-parser');

const bc = require('./controllers/books_controller');

const app = express();

app.use(bodyParser.json());

app.get('/api/books', bc.read)
app.post('/api/books', bc.create)
app.put('/api/books/:id', bc.update) //don't forget the "api/:id"
app.delete('/api/books/:id', bc.delete) //don't forget the "api/:id"

app.listen(3001, () => {
    console.log('Listening port 3001');
});