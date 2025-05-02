import { display } from "utils/display";

function findSquareRoot(n) {
  let left = 0;
  let right = n;
  let res = -1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (mid * mid === n) {
      return mid;
    } else if (mid * mid > n) {
      res = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return res - 1;
}

export default function testFindSquareRoot() {
  document.getElementById('output').innerHTML = '';
  display('____Find Square Root Without Builtin Function____');

  const testCases = [
    { n: 16, expected: 4 },           // perfect square
    { n: 8, expected: 2 },           // non-perfect square: sqrt(8) ≈ 2.83, so 2
    { n: 1, expected: 1 },           // edge: sqrt(1) = 1
    { n: 0, expected: 0 },           // edge: sqrt(0) = 0
    { n: 2, expected: 1 },           // sqrt(2) ≈ 1.41 -> floor is 1
    { n: 3, expected: 1 },           // sqrt(3) ≈ 1.73 -> floor is 1
    { n: 4, expected: 2 },           // perfect square
    { n: 25, expected: 5 },           // perfect square
    { n: 26, expected: 5 },           // sqrt(26) ≈ 5.09 -> floor is 5
    { n: 27, expected: 5 },           // non-perfect square
    { n: 99, expected: 9 },           // sqrt(99) ≈ 9.949 -> floor is 9
    { n: 1000000, expected: 1000 },   // large perfect square
    { n: -4, expected: "error" },
    { n: 0, expected: 0 },           // Zero
    { n: 1, expected: 1 },           // Minimum positive
    { n: 2, expected: 1 },           // Small non-perfect square
    { n: 4, expected: 2 },           // Perfect square
    { n: 8, expected: 2 },           // Example case 1
    { n: 16, expected: 4 },          // Example case 2
    { n: 15, expected: 3 },          // Just below perfect square
    { n: 25, expected: 5 },          // Larger perfect square
    { n: 30, expected: 5 },          // sqrt(30) ≈ 5.477
    { n: 100, expected: 10 },        // Round number
    { n: 2147483647, expected: 46340 }, // Maximum 32-bit integer
    { n: 999999, expected: 999 },    // sqrt(999999) ≈ 999.999
    { n: 1000000, expected: 1000 },  // Exact perfect square
    { n: 3, expected: 1 },           // Small non-perfect
    { n: 6, expected: 2 },           // sqrt(6) ≈ 2.449
    { n: 10, expected: 3 },          // sqrt(10) ≈ 3.162
    { n: 144, expected: 12 },        // Perfect square
    { n: 145, expected: 12 },        // Just above perfect square
    { n: -1, expected: -1 },         // Negative input (invalid)
    { n: 123456789, expected: 11111 }, // sqrt(123456789) ≈ 11111.111
    { n: 999999999, expected: 31622 }, // sqrt(999999999) ≈ 31622.776
  ];

  testCases.forEach(({ n, expected }) => {
    try {
      const result = findSquareRoot(n);
      if (expected === "error") {
        display(`FAILED for input: ${n} - expected error to be thrown, but got result: ${result}`, 'fail');
      } else if (result === expected) {
        display(`PASSED for input: ${n}`, 'pass');
        display(`Result returned: ${result}`);
      } else {
        display(`FAILED for input: ${n}`, 'fail');
        display(`Expected: ${expected} but got: ${result}`, 'fail');
      }
    } catch (err) {
      if (expected === "error") {
        display(`PASSED for input: ${n} (expected error thrown)`, 'pass');
        display(`Error message: ${err.message}`);
      } else {
        display(`ERROR for input: ${n} - unexpected error: ${err.message}`, 'error');
      }
    }
  });
}
