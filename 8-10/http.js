const myHttp = require("http");

const server = myHttp.createServer((req, res) => {
  if (req.method == "GET" && req.url == "/hey") {
     return res.end("Hello.");
  } else {
    return res.end("Different url.");
  }
});

server.listen(8000, () => {
  console.log("server running on port 8000.");
});