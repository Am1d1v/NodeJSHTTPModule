const http = require('http');

const PORT = 1000;

// Create Server
const server = http.createServer((req, res) => {
    //console.log(res.statusCode);
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h1>Status Code: ${res.statusCode} </h1>`);
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server was launched on port ${PORT} `);
});