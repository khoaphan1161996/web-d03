const http = require('http');   // import modules

const hostname = '127.0.0.1';   // IP web sever
const port = 3000;

const server = http.createServer((req, res) => {   // create sever
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});