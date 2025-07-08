import http from "http";

function customServer() {
  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200);
      res.end("Hello, my world!!");
    } else if (req.url === "/about") {
      res.writeHead(200);
      res.end("This is Zlata's mini server");
    } else {
      res.writeHead(404);
      res.end("404 Not Found");
    }
  });

  server.listen(3000, () => console.log("Server is listening on port 3000..."));
}

customServer();
