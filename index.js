require('dotenv').config(); // Import dotenv
const express = require('express'); // Import express
const cors = require('cors'); // Import cors
const db = require('./db'); // Import the db module

const app = express();       // Create an express app
const port = 3000;           // Set the port

app.use(cors());           // Use the cors middleware
//app.use(bodyParser.json()); // Use the body-parser middleware


app.get('/', (req, res) => {
    res.send('Hello World!');
    });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});