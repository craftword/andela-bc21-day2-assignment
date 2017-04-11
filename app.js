// declare dependent files 
var Client = require('node-rest-client').Client;
var client = new Client();
//bodyParser = require('body-parser');
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'ANDELA> '
});

rl.prompt();

rl.on('line', (line) => {
  switch(line.trim()) {
    case 'GET':
              // GET METHOD FOR PUBLIC API
              client.get("http://jsonplaceholder.typicode.com/posts/1", function (data, response) {
                  // parsed response body as js object 
                   console.log(data);
    
              });
      break;
    case 'POST':
      // POST METHOD FOR PUBLIC API
      // set content-type header and data as json in args parameter 
      var args = {
                    data: {
                            title: 'THE BIBLE',
                            body: 'MOST READ BOOK IN WORLD',
                            userId: 1
                          },
                    headers: { "Content-Type": "application/json" }
                  };
 
      client.post("http://jsonplaceholder.typicode.com/posts", args, function (data, response) {
            // parsed response body as js object 
            console.log(data);
    
       });
      break;
    case 'PUT':
     // PUT METHOD FOR PUBLIC API 
     // set content-type header and data as json in args parameter 
      var args = {
                   data: {
                           id: 1,
                           title: 'JAVASCRIPT OOP',
                           body: 'Javascript is the best subject',
                           userId: 1
                          },
                    headers: { "Content-Type": "application/json" }
                  };
   
      client.put("http://jsonplaceholder.typicode.com/posts/1", args, function (data, response) {
              // parsed response body as js object 
            console.log(data);
    
      });
      break;
    case 'PATCH':
       
      // set content-type header and data as json in args parameter 
      var args = {
                   data: {
                            title: 'PYTHON AND NODEJS'
                         },
                   headers: { "Content-Type": "application/json" }
                };
 
      client.patch("http://jsonplaceholder.typicode.com/posts/1", args, function (data, response) {
            // parsed response body as js object 
            console.log(data);
    
      });
      break;
    case 'DELETE':
      var args ={headers:{"Content-Type": "application/json"}};

      client.delete('http://jsonplaceholder.typicode.com/posts/1',args, function(data, response) { "..." });
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});