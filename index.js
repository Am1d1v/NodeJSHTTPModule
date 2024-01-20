const http = require('http');
const {getHTML, getText, getComments, postComment, wrongURL, getHome} = require('./handlers');

// Server Port
const PORT = 1000;


// Create Server
const server = http.createServer((req, res) => {

    if(req.method = 'GET' || req.url === '/'){
        return getHome(req, res)
    }

    // Main Page URL-Path
    if(req.url === '/main' || req.url === '/'){
        return getHTML(req, res);
    }

    // Text Page URL-Path
    if(req.method === 'GET' && req.url === '/text'){
        return getText(req, res);
    }

    // Comments GET Method
    if(req.method === 'GET' && req.url === '/comments'){
        return getComments(req, res);
    }

    // Comments POST Method
    if(req.method === 'POST' && req.url === '/comments'){
        return postComment(req, res);
    }

    // Wrong URL Warning and statusCode 404
    if(req.url !== '/main'){
        return wrongURL(req, res);
    }
    
});

server.listen(PORT, () => {
    console.log(`Server was launched on port ${PORT} `);
});