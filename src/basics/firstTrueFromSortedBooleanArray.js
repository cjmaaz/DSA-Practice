import { display } from "@/utils/display";


function findBoundary(arr) {
  let left = 0;
  let right = arr.length - 1;
  let boundaryIndex = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid]) {
      boundaryIndex = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return boundaryIndex;
}

function findFirstTrue(arr) {
  let left = 0;
  let right = arr.length;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === true && ((mid > 0 && arr[mid - 1] === false) || (mid === 0))) {
      return mid;
    } else if (arr[mid] === false) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

export default function testFindFirstTrue() {
  document.getElementById('output').innerHTML = '';
  display("____First True in a Sorted Boolean Array / Boundary Index____");

  const testCases = [
    // Basic test: sorted boolean array, first true occurs at index 2
    { arr: [false, false, true, true, true], expected: 2 },
    // Edge case: all false values, so expected result is -1
    { arr: [false, false, false, false], expected: -1 },
    // Edge case: all true values, so first true is at index 0
    { arr: [true, true, true], expected: 0 },
    // Edge case: single element false
    { arr: [false], expected: -1 },
    // Edge case: single element true
    { arr: [true], expected: 0 },
    // Test: only two elements where second is true
    { arr: [false, true], expected: 1 },
    // Test: longer array where first true appears later
    { arr: [false, false, false, true, true, true], expected: 3 },
    // Tricky test: larger array with many falses at the beginning
    { arr: Array(100).fill(false).concat(Array(50).fill(true)), expected: 100 },
    { arr: [], expected: -1 }, // Empty array
    { arr: [false], expected: -1 }, // Single false
    { arr: [true], expected: 0 }, // Single true
    { arr: [false, false, false], expected: -1 }, // All false
    { arr: [true, true, true], expected: 0 }, // All true
    { arr: [false, true], expected: 1 }, // First true at end (even length)
    { arr: [false, false, true], expected: 2 }, // First true at end (odd length)
    { arr: [false, true, true, true], expected: 1 }, // First true in middle
    { arr: [false, false, true, true], expected: 2 }, // Even-length array, first true in middle
    { arr: [false, false, false, true], expected: 3 }, // First true at last index
    { arr: [false, false, true, true, true], expected: 2 }, // Example case
    { arr: [false, true, true, true, true], expected: 1 }, // Early true in odd-length
    { arr: [false, false, false, false, true], expected: 4 }, // Large false prefix
    { arr: [true, true, true, true], expected: 0 }, // All true (even)
    { arr: [false, false, true, true, true, true], expected: 2 }, // Even-length with mid true
    { arr: [false, true, true, true, true, true], expected: 1 }, // Even-length early true
    { arr: [false, false, false, true, true], expected: 3 }, // Larger false group
    { arr: [false, false, true, false], expected: -1, message: "Not sorted, so failed." }, // Invalid unsorted array (edge case for robustness)
  ];
  testCases.forEach(({ arr, expected, message }) => {
    try {
      // const result = findFirstTrue(arr);
      const result = findBoundary(arr);
      if (result === expected) {
        display(`PASSED for input: [${arr}]`, 'pass');
        display(`First true index: ${expected}`);
      } else {
        display(`FAILED for input: [${arr}]`, 'fail');
        display(`Expected: ${expected} but got: ${result}`, 'fail');
        if (message) {
          display(message, 'info');
        }
      }
    } catch (err) {
      display(`ERROR for input: [${arr}] - ${err.message}`, 'error');
    }
  });
}
