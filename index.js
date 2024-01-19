const http = require('http');

const PORT = 1000;

const comments = [
    {
      id: 100,
      text: 'First',
      author: 'AuthorName1'  
    },
    {
      id: 200,
      text: 'Second',
      author: 'AuthorName2'  
    },
    {
      id: 300,
      text: 'Third',
      author: 'AuthorName3'  
    },
];

// Create Server
const server = http.createServer((req, res) => {
    //console.log(res.statusCode);
    //console.log(req);

    // Main Page URL-Path
    if(req.url === '/main' || req.url === '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(`<h1>Status Code: ${res.statusCode} </h1>`);
        return res.end();
    }

    // Text Page URL-Path
    if(req.url === '/text'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(`<p>Some Text</p>`);
        return res.end();
    }

    // JSON URL-Path
    if(req.url === '/jsonapp'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'applicatiob/json');
        return res.end(JSON.stringify(comments));
    }

    // Wrong URL Warning
    if(req.url !== '/main'){
        res.setHeader('Content-Type', 'text/html');
        res.write(`<h1> Wrong URL </h1>`);
        return res.end();
    }
    
});

server.listen(PORT, () => {
    console.log(`Server was launched on port ${PORT} `);
});