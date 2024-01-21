const comments = require('./data');
const fs = require('fs');

const getHome = (req, res) => {
    fs.readFile('./comment-form.html', (err, data) => {
        if(err){
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Server Error while loading HTML-file');
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    });
};

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

// Get all comments
const getComments = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify(comments));
}; 

// Post comment
const postComment = (req, res) => {
    let comment = '';
    //console.log(req.headers)

    // Data must have JSON formate
    if(req.headers['content-type'] === 'application/json'){

        req.on('data', (chunk) => {
            comment += chunk;
        })
    
        req.on('end', () => {
            comments.push(JSON.parse(comment));
            res.statusCode = 200;
            return res.end('Comment data was received');
        })
    } else {
        res.statusCode = 400;
        return res.end('Data must have JSON formate');
    }
}; 

// Wrong URL Warning
const wrongURL = (req, res) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h1> Wrong URL </h1>`);
    return res.end();
}; 

module.exports = {
    getHTML,
    getText,
    getComments,
    postComment,
    wrongURL,
    getHome
};