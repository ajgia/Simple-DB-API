const express = require("express");
const mysql = require('mysql');

const endPointRoot = '/comp4537/labs/5/';
const acao = 'Access-Control-Allow-Origin';

const content_type = 'content-type';
const typeJSON = 'json';
const typeHTML = 'html';
const success = 'success';

const port = 8083;
const serverRunningMsg = `server running at port ${port}`;
const sqlConnectionMessage = 'mysql connected';

const host = 'localhost';
const user = 'lab5';
const password = 'lab5123';
const database = 'lab5';

const sqlSelectAll = 'select * from score';
const sqlInsertIntoScore = 'insert into score (name, score) values';

const app = express()



// Create db connection
const con = mysql.createConnection(
{
    host: host,
    user: user,
    password: password,
    database: database
});

// Connect
con.connect((err) =>
{
    if (err)
        throw err;
    console.log(sqlConnectionMessage);
});

// GET returns all records
app.get(endPointRoot, (req, res) =>
{
    let sql = sqlSelectAll;
    con.query(sql, (err, result) => 
    {
        if (err)
            throw err;
        res.set(acao, '*');
        res.type(typeJSON);
        res.send(JSON.stringify(result));
    });
});

// POST adds one record to the db
app.post(endPointRoot, (req, res) => 
{
    let name = req.query.name;
    let score = req.query.score;

    if (name && score)
    {
        let sql = `${sqlInsertIntoScore} ('${name}', ${score})`;
        con.query(sql, (err, result) =>
        {
            if (err)
                throw err;
            res.set(acao, '*');
            res.type(typeJSON);
            let resObj = {status: success, name: name, score: score};
            res.send(JSON.stringify(resObj));
        });
    }
});


app.listen(8083, () =>
{
    console.log(serverRunningMsg);
});
