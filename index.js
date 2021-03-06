import http from 'http';
import fetchApi from './fetch.js';
import axiosBody from './axiostest.js';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello, world\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    // console.log(fetchApi);
    // fetchApi();
    axiosBody();
});
