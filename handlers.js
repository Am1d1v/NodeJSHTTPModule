const comments = require('./data');

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

    req.on('data', (chunk) => {
        comment += chunk;
    })

    req.on('end', () => {
        console.log(comment);
        res.statusCode = 200;
        return res.end('Comment data was received');
    })

}; 

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
    wrongURL
};