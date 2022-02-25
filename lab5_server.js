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

    if(con.state === 'disconnected'){
        return respond(null, { status: 'fail', message: 'server down'});
      }

    // connect to db
    con.connect(function(err)
    {
        res.write(err);
        if (err) 
        {
            throw err;
        }
        let sql = 'select * from lab5.score;'
        con.query(sql, function (err, result) {
            res.write(err);
            if (err) throw err;
            
            if (result) res.write(result);
            console.log(result);
        });

    });

    res.write('what up');
    res.end('connect done');

}
).listen(8083, "localhost");
