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
    { arr: [1, 2, 3, 4, 5], target: 1, expected: 0 },
    { arr: [1, 3, 3, 5, 8, 8, 10], target: 2, expected: 1 }, // Example case
    { arr: [2, 4, 6], target: 2, expected: 0 }, // Target is first element
    { arr: [1, 3, 5], target: 3, expected: 1 }, // Target is middle element
    { arr: [5, 5, 5], target: 5, expected: 0 }, // All elements equal to target
    { arr: [1, 4, 6, 8], target: 5, expected: 2 }, // Target between elements
    { arr: [5, 6, 7], target: 3, expected: 0 }, // Target smaller than all
    { arr: [1, 2, 3], target: 3, expected: 2 }, // Target is last element
    { arr: [1, 2, 2, 2, 3], target: 2, expected: 1 }, // Duplicates around target
    { arr: [5], target: 5, expected: 0 }, // Single element equal to target
    { arr: [5], target: 3, expected: 0 }, // Single element larger than target
    { arr: [1, 3, 3, 3, 5], target: 3, expected: 1 }, // Multiple duplicates
    { arr: [2, 3, 4, 5], target: 2, expected: 0 }, // First element
    { arr: [1, 3, 5, 7], target: 5, expected: 2 }, // Even-length middle
    { arr: [2, 4, 6, 8], target: 4, expected: 1 }, // Even-length first half
    { arr: [1, 2, 3, 4, 5], target: 3, expected: 2 }, // Odd-length middle
    { arr: [2, 2], target: 2, expected: 0 }, // Two duplicates
    { arr: [1, 1, 2, 2, 3], target: 2, expected: 2 }, // First occurrence after smaller elements
    { arr: [1, 2, 4, 5, 6], target: 3, expected: 2 }, // Target between elements
    { arr: [3, 4, 5, 6], target: 1, expected: 0 }, // All elements larger
    { arr: [0, 0, 1, 2, 3], target: 0, expected: 0 }, // Multiple zeros
    { arr: [10, 20, 30], target: 15, expected: 1 }, // Target in between
    { arr: [10, 20, 30], target: 25, expected: 2 }, // Target in between higher
    { arr: [5, 5, 5, 5], target: 5, expected: 0 }, // All elements same as target
    { arr: [1, 3, 5, 7, 9], target: 6, expected: 3 }, // First >= is 7
    { arr: [1, 3, 5, 7, 8, 10], target: 9, expected: 5 }, // Target near end
    { arr: [1, 3, 5, 7, 8, 10], target: 10, expected: 5 }, // Target is last
    { arr: [10], target: 10, expected: 0 }, // Single element
    { arr: [1, 4, 5], target: 2, expected: 1 }, // First >= is 4
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
