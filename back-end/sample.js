/*
First make sure you have node (type node into terminal to check)
Then make sure you are in this current directory than run
node sample.js
visit localhost:5000 to see the message!
*/

const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req,res) => {
    res.statusCOde = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
});