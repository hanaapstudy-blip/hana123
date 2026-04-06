// app.js

function add(a, b) {
  return a + b;
}

// basic usage (optional)
if (require.main === module) {
  console.log("2 + 3 =", add(2, 3));
}

module.exports = { add };