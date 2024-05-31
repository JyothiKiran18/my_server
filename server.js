const mysql = require('mysql2');
require('dotenv').config();



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


