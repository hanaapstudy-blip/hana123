// // test.js

// const { add } = require("./app");

// function testAdd() {
//   if (add(2, 3) !== 5) {
//     throw new Error("Test failed: 2 + 3 should be 5");
//   }

//   if (add(-1, 1) !== 0) {
//     throw new Error("Test failed: -1 + 1 should be 0");
//   }

//   console.log("All tests passed ✅");
// }

// testAdd();

const { add } = require("./app");

test("adds 2 + 3 to equal 5", () => {
  expect(add(2, 3)).toBe(5);
});

test("adds negative numbers", () => {
  expect(add(-1, 1)).toBe(0);
});