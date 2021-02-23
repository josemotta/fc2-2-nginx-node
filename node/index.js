const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)
console.log('Created connection.')

const sql1 = `CREATE TABLE IF NOT EXISTS people(id int not null auto-increment, name varchar(255), primary key(id))`
connection.query(sql1)
console.log('Certified that people table exists.')

const sql2 = `INSERT INTO people(name) values('Wesley')`
connection.query(sql2)
console.log('Added person to people.')

connection.end()
console.log('Closed connection.')

app.get('/', (req,res) => {
    res.send('<h1>Full Cycle Rocks!</h1>')
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})