// 1- we will use express library
const express = require('express');
// 2- create an instance from express
const app = express();
// 5- We will use filesystem

const books = require('./routes/books');
// 4- Route - Main Page
/*
* this route runs and prints "Route Works" on screen
*/
app.use('/books', books);



// app.get('/', (req, res) => {
//     fs.readFile('db/user.json', 'utf8', (error, data) => {
//         console.log('Listing...');
//         res.send(data);
//     });
// });

// // 4- Routes For JSON CRUD Operations
// // Create
// app.post('/users', (req, res) => {

//     readFile(data => {
//         const newUserId = Object.keys(data).length + 1;

//         // add the new user
//         data[newUserId.toString()] = req.body;

//         writeFile(JSON.stringify(data, null, 2), () => {
//             res.status(200).send('new user added');
//         });
//     },true);
// });    

// // Read
// app.get('/read', (req, res) => {
    
// });

// // Update
// app.get('/update', (req, res) => {
   
// });

// // Delete
// app.get('/delete', (req, res) => {
    
// });

// // notFound
// app.get('*', (req, res) => {
//     res.send('Whats Wrong With You');
// });


// 3- Create server and Run
const server = app.listen(3000, () => {
    console.log('Server Up and Runs on Port 3000');
});