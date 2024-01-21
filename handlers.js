const comments = require('./data');
const fs = require('fs');
const qs = require('querystring');

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

    res.setHeader('Content-Type', 'text/plain');

    if(req.headers['content-type'] === 'application/x-www-form-urlencoded'){
        let body = '';

        // Receive Comment Data
        req.on('data', (chunk) => {
            body += chunk.toString();
        })

        // Push new comment in comments array
        req.on('end', () => {
            const comment = qs.parse(body);
            comments.push(comment);
            return res.end('Comment data was received');
        })

    // Data must have JSON formate
    } else if(req.headers['content-type'] === 'application/json'){

        let comment = '';
        // Receive Comment Data
        req.on('data', (chunk) => {
            comment += chunk;
        })
    
        // Push new comment in comments array
        req.on('end', () => {
            res.statusCode = 200;
           return comments.push(JSON.parse(comment));
        })
        return res.end('Comment data was received');

    } else {

        res.statusCode = 400;
        return res.end('Data must have JSON formate or as form');
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