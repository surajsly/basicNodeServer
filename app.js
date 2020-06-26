// setting up my first node server.

const http = require("http");

const server = http.createServer((req, res) => {
  //console.log(req.url, req.method, req.headers);
  //process.exit();
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>suraj</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input name='message'type='text'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>suraj</title></head>");
  res.write("<body><h1>hellow from my nodeJs server</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
