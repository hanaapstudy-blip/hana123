const http = require("http");
const { add } = require("./app");

const server = http.createServer((req, res) => {
  res.end("2 + 3 = " + add(2, 3));
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("Server running on port", PORT);
});