const fs = require('fs')

function readFileSync(){  // callback dong bo
    const content = fs.readFileSync('./src/greeting.txt')
    console.log('SYNC CONTENT: ', content.toString())   // la callback chu ko phai function nen khong return dc
  }
  
  function readFileASync(){ // callback khong dong bo
    fs.readFile('./src/greeting.txt',(err,data) => {
      if(err) throw err;
      console.log('ASYNC CONTENT: ',data.toString())
    })
  }
  
  function readFileName(){
    console.log('FILENAME: ', __filename)
  }
  
  function readDirName(){
    console.log('DIRNAME', __dirname)
  }

  module.exports = {
    readFileSync,
    readFileASync,
    readFileName,
    readDirName
  }