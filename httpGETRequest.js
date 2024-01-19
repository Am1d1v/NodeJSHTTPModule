const http = require('http');

const url = 'http://jsonplaceholder.typicode.com/todos/1';

http.get(url, (res) => {
    let responseBody = '';

    res.on('data', (chunk) => {
        return responseBody += chunk;
    });

    res.on('end', () => {
        console.log(responseBody);
    });
});