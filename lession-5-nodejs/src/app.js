const http = require('http');   // import modules cua nguoi khac

const modules = require('./modules')  // import modules cua minh

const {    // cach import vao
  readFileSync,
  readFileASync,
  readFileName,
  readDirName
} = modules

const hostname = '127.0.0.1';   // IP web sever
const port = 3000;

// function readFileSync(){  // callback dong bo
//   const content = fs.readFileSync('./src/greeting.txt')
//   console.log('SYNC CONTENT: ', content.toString())   // la callback chu ko phai function nen khong return dc
// }

// function readFileASync(){ // callback khong dong bo
//   fs.readFile('./src/greeting.txt',(err,data) => {
//     if(err) throw err;
//     console.log('ASYNC CONTENT: ',data.toString())
//   })
// }

// function readFileName(){
//   console.log('FILENAME: ', __filename)
// }

// function readDirName(){
//   console.log('DIRNAME', __dirname)
// }

const server = http.createServer((req, res) => {   // create sever
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  // console.log(`Server running at http://${hostname}:${port}/`);
  console.log('START')

  // // BLOCKING
  readFileSync()
  
  // NON-BLOCKING
  readFileASync()

  readFileName()
  readDirName()

  console.log('END')
});