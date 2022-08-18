const port = process.env.PORT || 4000
const express = require('express')
var cors = require('cors')
const app = express()
var mysql      = require('mysql');
var bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var connection = mysql.createConnection({
    host     : 'remotemysql.com',
    user     : 'MgCEspKABp',
    password : 'W3iohxgdyL',
    database : 'MgCEspKABp'
  });

  
app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/check', (req, res) => {
    connection.query('SELECT * FROM user', function (error, results, fields) {
        if (error) throw error;
        res.json(results)
    });
})

app.post('/register', (req, res) => {
    res.json(req.body)
})

app.listen(port, () => {
    console.log(`React app listening on port ${port}`)
  })