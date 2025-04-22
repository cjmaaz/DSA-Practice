import { display } from "../utils/display";

function bubbleSort(arrList) {
  for (let i = 0; i < arrList.length - 1; i++) {
    let noSwap = true;
    for (let j = 0; j < arrList.length - i - 1; j++) {
      if (arrList[j] > arrList[j + 1]) {
        let temp = arrList[j];
        arrList[j] = arrList[j + 1];
        arrList[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) {
      break;
    }
  }
  return arrList;
}

export default function testBubbleSort() {
  document.getElementById('output').innerHTML = '';
  display('____Bubble Sort____');
  display('O(n<sup>2</sup>)', 'fail');
  const sortedArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50
  ];
  const unsortedArray = [
    50, 12, 3, 47, 25, 17, 8, 34, 14, 2,
    40, 27, 31, 1, 49, 9, 39, 22, 45, 19,
    10, 29, 42, 6, 18, 16, 13, 32, 28, 30,
    5, 46, 7, 15, 11, 33, 35, 21, 24, 26,
    41, 38, 23, 44, 20, 37, 48, 43, 36, 4
  ];
  display('Unsorted Array:');
  display(unsortedArray.toString());
  let t1 = performance.now();
  bubbleSort(unsortedArray);
  let t2 = performance.now();
  display(`T Diff: ${t2 - t1}`);
  display('After Sorting Array:');
  display(unsortedArray.toString());
  display('Sorted Array:');
  t1 = performance.now();
  bubbleSort(sortedArray);
  t2 = performance.now();
  display(`T Diff: ${t2 - t1}`);
  display('After Sorting Sorted Array:');
  display(sortedArray.toString());
}