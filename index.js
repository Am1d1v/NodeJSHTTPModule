const http = require('http');

const PORT = 1000;

const comments = [
    {
      "id": 100,
      "text": 'First',
      "author": 'AuthorName1'  
    },
    {
      "id": 200,
      "text": 'Second',
      "author": 'AuthorName2'  
    },
    {
      "id": 300,
      "text": 'Third',
      "author": 'AuthorName3'  
    },
];

const getHTML = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h1>Status Code: ${res.statusCode} </h1>`);
    return res.end();
}; 

const getText = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(`<p>Some Text</p>`);
    return res.end();
}; 

const getComments = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify(comments));
}; 

const wrongURL = (req, res) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h1> Wrong URL </h1>`);
    return res.end();
}; 


// Create Server
const server = http.createServer((req, res) => {

    // Main Page URL-Path
    if(req.url === '/main' || req.url === '/'){
        return getHTML(req, res);
    }

    // Text Page URL-Path
    if(req.method === 'GET' && req.url === '/text'){
        return getText(req, res);
    }

    // JSON URL-Path
    if(req.method === 'GET' && req.url === '/comments'){
        return getComments(req, res);
    }

    // Wrong URL Warning and statusCode 404
    if(req.url !== '/main'){
        wrongURL(req, res);
    }
    
});

server.listen(PORT, () => {
    console.log(`Server was launched on port ${PORT} `);
});