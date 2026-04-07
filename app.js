const http = require("http");

function add(a, b) {
  return a + b;
}

const server = http.createServer((req, res) => {
  res.end("2 + 3 = " + add(2, 3));
});

server.listen(3000);

module.exports = { add };