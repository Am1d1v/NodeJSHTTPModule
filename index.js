const http = require('http');

// Create Server
const server = http.createServer((req, res) => {
    //console.log(res.statusCode);
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h1>Status Code: ${res.statusCode} </h1>`);
});

server.listen(5000);