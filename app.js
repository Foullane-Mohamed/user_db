const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const db = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'Foullane1996@',
database: 'users_db'
});
db.connect((err) => {
if (err) throw err;
console.log('Connected to database');
});
app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
});
app.post('/register', (req, res) => {
const { nom, email, password } = req.body;
const sql = 'INSERT INTO users (nom, email, password) VALUES (?, ?, ?)';
db.query(sql, [nom, email, password], (err, result) => {
if (err) throw err;
res.send('User registered');
});
});
app.listen(3000, () => {
console.log('Server started on http://localhost:3000');
});