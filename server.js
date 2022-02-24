const http = require('http');
const url = require('url');
const mysql = require('mysql');

const endPointRoot = '/comp4537/labs/5/';
const headers =
{    
    'Content-Type': 'text/html; charset=utf-8',
    'Access-Control-Allow-Origin': '*'
};

// Create db connection
const con = mysql.createConnection(
{
    host: 'localhost',
    user: 'lab5',
    password: 'lab5123',
    database: 'lab5'
});

// Create server
const server = http.createServer(function(req, res)
{
    const q = url.parse(req.url, true);
    const pathname = q.pathname.toLowerCase();

    res.writeHead(200, headers);
    res.end("server lab 5 response");

    // connect to db
    con.connect(function(err)
    {
        if (err) 
        {
            throw err;
        }

        console.log("Connected");
    });

}
).listen(8083, "localhost");
