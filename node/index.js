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

const sql1 = `CREATE TABLE IF NOT EXISTS people(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))`
connection.query(sql1)
console.log('Certified that people table exists.')

const sql2 = `INSERT INTO people(name) values('Wesley')`
connection.query(sql2)
console.log('Added another person to people.')
connection.end()

getPeople = async function(connection){
    return new Promise(function(resolve, reject){
        connection.query(
            "SELECT id, name FROM people", 
            function(err, rows){                                                
                if(rows === undefined){
                    reject(new Error("Error reading people"));
                }else{
                    resolve(rows);
                }
            }
        )}
    )}

app.get('/', (req,res) => {
    const conn = mysql.createConnection(config)
    
    if(req.method == 'GET'){
        if(req.url == '/'){
            res.setHeader('Content-type', 'text/html');
            getPeople(conn)
            .then(function(results){
                html = "<h1>Full Cycle Rocks!</h1>"
                html += "<h2>"+results.length+" people found</h2>"
                html += "<ul>"
                for (var i in results) html += "<li>" + results[i].id + " " +results[i].name + "</li>";
                html += "</ul>"
                res.end(html);
            })
            .catch(function(err){
                console.log("Promise rejection error: "+err);
                res.end("<h1>ERROR</h1>")
            })
        }
    }
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})