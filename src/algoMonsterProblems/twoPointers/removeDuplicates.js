import { display } from "@/utils/display";

function removeDuplicates(arr) {
  let slow = 0;
  for (let fast = 0; fast < arr.length; fast++) {
    if (arr[fast] !== arr[slow]) {
      slow++;
      arr[slow] = arr[fast];
    }
  }
  return slow + 1;
}
export default function testRemoveDuplicates() {

  document.getElementById('output').innerHTML = '';
  display("____Testing removeDuplicates Function____");

  const testCases = [
    {
      input: [0, 0, 1, 1, 1, 2, 2],
      expectedLength: 3,
      expectedModified: [0, 1, 2],
    },
    {
      // Edge case: empty array should remain empty.
      input: [],
      expectedLength: 0,
      expectedModified: [],
    },
    {
      // Single-element array should remain unchanged.
      input: [1],
      expectedLength: 1,
      expectedModified: [1],
    },
    {
      // All elements are duplicates.
      input: [1, 1, 1, 1, 1],
      expectedLength: 1,
      expectedModified: [1],
    },
    {
      // Array with no duplicates remains the same.
      input: [1, 2, 3, 4, 5],
      expectedLength: 5,
      expectedModified: [1, 2, 3, 4, 5],
    },
    {
      // Test with negative numbers.
      input: [-3, -3, -2, -1, -1, 0, 0, 1],
      expectedLength: 5,
      expectedModified: [-3, -2, -1, 0, 1],
    },
  ];

  testCases.forEach(({ input, expectedLength, expectedModified }) => {
    const arr = [...input];
    try {
      const newLength = removeDuplicates(arr);
      let passed = newLength === expectedLength;
      if (passed) {
        for (let i = 0; i < newLength; i++) {
          if (arr[i] !== expectedModified[i]) {
            passed = false;
            break;
          }
        }
      }

      if (passed) {
        display(`PASSED for input: [${input}]`, 'pass');
        display(`New length: ${newLength}, Modified array (first ${newLength} elements): [${arr.slice(0, newLength)}]`);
      } else {
        display(`FAILED for input: [${input}]`, 'fail');
        display(
          `Expected new length ${expectedLength} with modified array: [${expectedModified}], but got new length ${newLength} with modified array: [${arr.slice(0, newLength)}]`,
          'fail'
        );
      }
    } catch (err) {
      display(`ERROR for input: [${input}] - ${err.message}`, 'error');
    }
  });
}
