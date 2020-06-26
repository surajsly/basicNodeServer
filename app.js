// setting up my first node server.

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  //process.exit();
});

server.listen(3000);
