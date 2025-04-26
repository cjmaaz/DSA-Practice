import { display } from 'utils/display';

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

export default function testBinarySearch() {
  document.getElementById('output').innerHTML = '';
  display("____Testing Binary Search____");
  const testCases = [
    // A basic test case with a small sorted array; expected unique index.
    { arr: [1, 2, 3, 4, 5], target: 3, expected: 2 },

    // Test when target is not present in the array.
    { arr: [1, 2, 3, 4, 5], target: 6, expected: -1 },

    // Edge case: empty array.
    { arr: [], target: 3, expected: -1 },

    // Edge case: single element that is the target.
    { arr: [10], target: 10, expected: 0 },

    // Edge case: single element that is not the target.
    { arr: [10], target: 5, expected: -1 },

    // Tricky case: array containing duplicates.
    // We don't insist on a particular index; we only check that the returned index is valid
    // (i.e., it isn't -1 and the element at the index equals to target).
    {
      arr: [1, 2, 2, 2, 3],
      target: 2,
      expected: (result, arr, target) => (result !== -1 && arr[result] === target)
    },

    // Test with negative numbers.
    { arr: [-10, -5, 0, 5, 10], target: -5, expected: 1 },

    // Test case using string elements.
    { arr: ["apple", "banana", "cherry", "date"], target: "cherry", expected: 2 },

    // Target lower than the smallest element.
    { arr: [2, 4, 6, 8], target: 1, expected: -1 },

    // Target greater than the largest element.
    { arr: [2, 4, 6, 8], target: 10, expected: -1 }
  ];
  testCases.forEach(({ arr, target, expected }) => {
    try {
      const result = binarySearch(arr, target);
      let passed;
      if (typeof expected === "function") {
        passed = expected(result, arr, target);
      } else {
        passed = (result === expected);
      }

      if (passed) {
        display(`PASSED for array: [${arr}] and target: ${target}`, 'pass');
        display(`Result returned: ${result}`);
      } else {
        display(`FAILED for array: [${arr}] and target: ${target}`, 'fail');
        display(`Expected: ${expected}, but got: ${result}`, 'fail');
      }
    } catch (err) {
      display(`ERROR for array: [${arr}] and target: ${target} - ${err.message}`, 'error');
    }
  });
}
