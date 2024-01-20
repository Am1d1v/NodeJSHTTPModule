const http = require('http');
const {getHTML, getText, getComments, wrongURL} = require('./handlers');

// Server Port
const PORT = 1000;


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
        return wrongURL(req, res);
    }
    
});

server.listen(PORT, () => {
    console.log(`Server was launched on port ${PORT} `);
});