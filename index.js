// 1- we will use express library
const express = require('express');
// 2- create an instance from express
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors())
app.use(bodyParser.json());


// 5- We will use filesystem

const books = require('./routes/books');
app.use('/books', books);



// 3- Create server and Run
const server = app.listen(3000, () => {
    console.log('Server Up and Runs on Port 3000');
});