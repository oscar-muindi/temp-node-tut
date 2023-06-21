const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(`
  <h1>Ooops!</h1>
  <p>We can't find the page you are looking for.<br/><a href="/">Back to home page</a></p>
  `);
});

server.listen(5000);
