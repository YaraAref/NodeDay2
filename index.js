const http = require("http");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 4000;
const users = {
  id: 1,
  name: "Yara",
};
const content = `
<head>
  <link rel="stylesheet" type="text/css" href="index.css" />
</head>
<body>
  <h1>Hello Node JS</h1>
  <p> Welcome to Node JS Course</p>
  <img src="./About.png" alt="Welcome"/>
</body>
`;
const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Hello World!");
      break;
    case "/users":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(users));
      break;
    case "/htmlcontent":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(JSON.stringify(content));
      break;
    case "/index.css":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/css");
      console.log("hye")
      res.end(fs.readFileSync('index.css'));
      break;
    case "/About.png":
      res.statusCode = 200;
      res.setHeader("Content-Type", "image/jpeg");
      res.end(fs.readFileSync('About.png'));
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("Page not found");
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});