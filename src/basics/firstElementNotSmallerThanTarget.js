import { display } from "@/utils/display";

function findElementNotSmallerThanTarget(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let boundary = -1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] >= target) {
      boundary = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return boundary;
}

export default function testFindElementNotSmallerThanTarget() {
  document.getElementById('output').innerHTML = '';
  display("____Find Element Not Smaller Than Target____");

  const testCases = [
    // Basic test: target 2 is less than 3 at index 1
    { arr: [1, 3, 3, 5, 8, 8, 10], target: 2, expected: 1 },
    // When target is between duplicate values: target 7 returns first value >= 7, which is at index 4 (8)
    { arr: [1, 3, 3, 5, 8, 8, 10], target: 7, expected: 4 },
    // When target equals the last element in the array
    { arr: [1, 3, 3, 5, 8, 8, 10], target: 10, expected: 6 },
    // When target is less than the first element in the array
    { arr: [1, 3, 3, 5, 8, 8, 10], target: 0, expected: 0 },
    // Test with duplicate elements: target equals duplicate value at the start
    { arr: [2, 2, 2, 3, 4, 5], target: 2, expected: 0 },
    // Test with negative numbers:
    // For target -6 in [-10, -5, 0, 1, 2, 3], first element >= -6 is -5 at index 1.
    { arr: [-10, -5, 0, 1, 2, 3], target: -6, expected: 1 },
    // For target 1 in [-10, -5, 0, 1, 2, 3]
    { arr: [-10, -5, 0, 1, 2, 3], target: 1, expected: 3 },
    // Single-element array where the element is greater than the target
    { arr: [5], target: 1, expected: 0 },
    // Single-element array where the element equals the target
    { arr: [5], target: 5, expected: 0 },
    // All elements are the same (duplicates)
    { arr: [4, 4, 4, 4], target: 4, expected: 0 },
    // Mixed negative numbers, zeros, and positives.
    { arr: [-3, -1, -1, 0, 0, 1, 2], target: 0, expected: 3 },
    // Target falls between duplicates: first element >= 3 in this array is 4 at index 4.
    { arr: [1, 2, 2, 2, 4, 5, 6], target: 3, expected: 4 },
    // Two-element array: target 2 in [1,4] returns index 1
    { arr: [1, 4], target: 2, expected: 1 },
    // Target equal to the first element in a simple array
    { arr: [1, 2, 3, 4, 5], target: 1, expected: 0 }
  ];
  testCases.forEach(({ arr, target, expected }) => {
    try {
      const result = findElementNotSmallerThanTarget(arr, target);
      if (result === expected) {
        display(`PASSED for array: [${arr}] with target: ${target}`, 'pass');
        display(`Result returned: ${result}`);
      } else {
        display(`FAILED for array: [${arr}] with target: ${target}`, 'fail');
        display(`Expected: ${expected} but got: ${result}`, 'fail');
      }
    } catch (err) {
      display(`ERROR for array: [${arr}] with target: ${target} - ${err.message}`, 'error');
    }
  });
}
