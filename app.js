const http = require('http');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const hostname = '127.0.0.1';
module.exports = {
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
  port: process.env.PORT
}
const port = process.env.PORT || 8000;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: "Hello, this is the node server for the 1Up Health challenge!" });
})

app.get('/api', (req, res) => {
  res.json({ message: 'This is an endpoint.' });
})

app.get('/api/getAllPatients', (req, res) => {
  let db = new sqlite3.Database('./db/1up.db', sqlite3.OPEN_READONLY, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the 1up local SQlite database.');
  }); 
  let sql = "SELECT * FROM patient_everything_data";
  db.get(sql, [], (err, result) => {
    if(err) {
      return console.error(err.message);
    }
    console.log(result);
    res.send({ allPatients: result });
  });

  db.close((err) => {
    if (err) {
    return console.error(err.message);
    }
    console.log('Close the database connection.');
  });
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});