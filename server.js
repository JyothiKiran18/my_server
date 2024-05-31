const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const getTimestamp = require('./timestamp');
require('dotenv').config();



const app = express();
const port = 3000;
app.use(bodyParser.json());



// Create a connection to the database
const connection = mysql.createConnection({
  host: process.env.DB_HOST_IP,
  user: process.env.DB_HOST,
  password: process.env.DB_HOST_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_HOST_PORT
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to the database');
});




app.get('/', (req, res) => {
    console.log("HIIIIII!!!");
    res.send("HELLO WORLD");
})

// Define a route to handle POST requests
app.post('/insertRecords', (req, res) => {
    const data = req.body;
    const id = data.id
    const email = data.email
    const phoneNo = data.phoneNumber
    

    let timestamp = getTimestamp();
    console.log(timestamp);
    
    const newRecord = {
        id : id,
        email : email,
        phoneNumber : phoneNo,
        linkedId : null,
        linkPrecedence : 'primary',
        createdAt : timestamp,
        updatedAt : timestamp,
        deletedAt : null
    }

    connection.query('INSERT INTO contacts SET ?', newRecord, function(err, results) {
        if (err) {
          console.error('Error inserting record:', err);
          return;
        }
        console.log('Inserted record with ID:', results.insertId);
        console.log(email + " " + phoneNo);
        res.send("RECORDS INSERTED");
      });
});



// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

