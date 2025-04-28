import { display } from "utils/display";

function firstOccurance(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let targetIndex = -1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) {
      targetIndex = mid;
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return targetIndex;
}

export default function testFirstOccurance() {
  document.getElementById('output').innerHTML = '';
  display("____Testing firstOccurance Function____");

  const testCases = [
    { arr: [1, 3, 3, 3, 3, 6, 10, 10, 10, 100], target: 3, expected: 1 },
    { arr: [1, 3, 3, 3, 3, 6, 10, 10, 10, 100], target: 2, expected: -1 },
    // Edge case: empty array.
    { arr: [], target: 4, expected: -1 },
    // Edge case: single-element array where the element matches the target.
    { arr: [5], target: 5, expected: 0 },
    // Edge case: single-element array where the element does not match the target.
    { arr: [7], target: 3, expected: -1 },
    // Test: all elements are the same; the first occurrence is at index 0.
    { arr: [2, 2, 2, 2], target: 2, expected: 0 },
    // Test: target appears at the end; still, we need the first occurrence.
    { arr: [1, 2, 3, 4, 5, 5, 5], target: 5, expected: 4 },
    // Test with negative numbers.
    { arr: [-10, -3, -3, -2, 0, 1, 4], target: -3, expected: 1 },
    // Tricky: array with no occurrence of the target.
    { arr: [1, 2, 4, 4, 4, 7, 8, 9], target: 5, expected: -1 },
    { arr: [], target: 5, expected: -1 }, // Empty array
    { arr: [5], target: 5, expected: 0 }, // Single element found
    { arr: [5], target: 3, expected: -1 }, // Single element not found
    { arr: [3, 3, 3], target: 3, expected: 0 }, // All elements match
    { arr: [2, 3, 4], target: 2, expected: 0 }, // Target at start
    { arr: [2, 3, 4], target: 4, expected: 2 }, // Target at end
    { arr: [1, 3, 5], target: 3, expected: 1 }, // Middle element
    { arr: [1, 3, 3, 5], target: 3, expected: 1 }, // Duplicates around target
    { arr: [1, 3, 3, 3, 3, 6, 10, 10, 10, 100], target: 3, expected: 1 }, // Problem example
    { arr: [1, 2, 4, 5], target: 3, expected: -1 }, // Target between elements
    { arr: [5, 6, 7], target: 3, expected: -1 }, // Target smaller than all
    { arr: [5, 6, 7], target: 8, expected: -1 }, // Target larger than all
    { arr: [1, 2, 3, 3, 3], target: 3, expected: 2 }, // First occurrence in middle
    { arr: [1, 3, 5, 7], target: 3, expected: 1 }, // Even-length first half
    { arr: [1, 3, 5, 7], target: 5, expected: 2 }, // Even-length second half
    { arr: [2, 4, 6, 8, 10], target: 6, expected: 2 }, // Odd-length middle
    { arr: [0, 0, 1, 2, 3], target: 0, expected: 0 }, // Duplicates at start
    { arr: [1, 4, 6], target: 5, expected: -1 }, // Target between elements
    { arr: [1, 3, 3, 4, 4, 4, 5], target: 4, expected: 3 }, // Multi-duplicate group
    { arr: [1, 2, 3, 4, 5, 5, 5, 5], target: 5, expected: 4 }, // Long sequence
    { arr: [3, 4, 5, 5, 5], target: 5, expected: 2 }, // First occurrence in middle
    { arr: [1, 2, 2, 2, 3, 4], target: 2, expected: 1 }, // Early duplicates
    { arr: [5, 5, 5, 5], target: 5, expected: 0 }, // All duplicates
    { arr: [5, 5, 5, 5], target: 6, expected: -1 }, // Larger than all
    { arr: [2, 2], target: 2, expected: 0 }, // Two elements
    { arr: [2, 2], target: 1, expected: -1 }, // Smaller than all
    { arr: [1, 1, 2, 2, 3], target: 2, expected: 2 }, // First occurrence after smaller
    { arr: [10, 20, 30], target: 15, expected: -1 }, // Not present
    { arr: [10, 20, 30], target: 25, expected: -1 }, // Not present
    { arr: [1, 3, 5, 7, 9], target: 1, expected: 0 }, // First element
    { arr: [1, 3, 5, 7, 9], target: 9, expected: 4 }, // Last element
    { arr: [1, 3, 5, 7, 9], target: 5, expected: 2 }, // Middle element
    { arr: [1, 1, 1, 1, 1], target: 1, expected: 0 }, // All elements match
  ];

  // Run each test case.
  testCases.forEach(({ arr, target, expected }) => {
    try {
      const result = firstOccurance(arr, target);
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
