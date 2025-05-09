import './style.css'
import { display } from 'utils/display.js'
import { runTestBasicStack, runTestBalancedParentheses, runTestInfixToPostfix, runTestEvaluatePostfixExpression, runTestMinStack } from '@/demos/stackExamplePkg.js'
import { runTestBubbleSort, runTestInsertionSort, runTestSelectionSort } from '@/demos/sortExamplePkg.js'
import { runTestBinarySearch } from '@/demos/algorithmExamplePkg.js'
import { runTestFindFirstTrue, runTestFindElementNotSmallerThanTarget, runTestFirstOccurrence, runTestFindSquareRoot } from '@/demos/binarySearchExamplePkg.js';
import { runTestRemoveDuplicates } from '@/demos/twoPointerExamplePkg.js';


document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="sidebar">
      <h2>Data Structures</h2>
      <button id="clearOutput">Clear Output</button>
      <!-- Binary Search -->
      <div class="dropdown">
        <button onclick="this.nextElementSibling.classList.toggle('show')" class="dropbtn">Binary Search</button>
        <div class="dropdown-content">
          <button id="findFirstTrue">Find First True</button>
          <button id="findFirstElementNotSmallerThanTarget">Find First Element Not Smaller Than Target</button>
          <button id="findFirstOccurrence">Find Element in Sorted Array with Duplicates</button>
          <button id="findSquareRoot">Square Root Estimation Without Builtin Fn</button>
        </div>
      </div>
      <!-- Two Pointers -->
      <div class="dropdown">
        <button onclick="this.nextElementSibling.classList.toggle('show')" class="dropbtn">Two Pointers</button>
        <div class="dropdown-content">
          <button id="removeDuplicates">Remove Duplicates</button>
        </div>
      </div>
      <!-- Stack -->
      <div class="dropdown">
        <button onclick="this.nextElementSibling.classList.toggle('show')" class="dropbtn">Stack</button>
        <div class="dropdown-content">
          <button id="basicStackDemo">Basic Stack</button>
          <button id="basicValidParentheses">Basic Valid Parentheses</button>
          <button id="basicInfixToPostfix">Basic Infix To Postfix</button>
          <button id="basicEvaluatePostfixExpression">Basic Evaluate Postfix Expression</button>
          <button id="basicMinStack">Basic Min Stack</button>
        </div>
      </div>
      <!-- Sorting -->
      <div class="dropdown">
        <button onclick="this.nextElementSibling.classList.toggle('show')" class="dropbtn">Sorting</button>
        <div class="dropdown-content">
          <button id="bubbleSort">Bubble Sort</button>
          <button id="insertionSort">Insertion Sort</button>
          <button id="selectionSort">Selection Sort</button>
        </div>
      </div>
      <!-- Algorithms -->
      <div class="dropdown">
        <button onclick="this.nextElementSibling.classList.toggle('show')" class="dropbtn">Algorithms</button>
        <div class="dropdown-content">
          <button id="binarySearch">Binary Search</button>
        </div>
      </div>
    </div>
    <div class="content">
      <h1>DSA Practice</h1>
      <div id="output"></div>
    </div>
  </div>
`

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let dropdown of dropdowns) {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    }
  }
}

document.getElementById('clearOutput').addEventListener('click', () => {
  document.getElementById('output').innerHTML = '';
  display('Output cleared');
});

// Two Pointers
document.getElementById('removeDuplicates').addEventListener('click', runTestRemoveDuplicates);

// Binary Search
document.getElementById('findFirstTrue').addEventListener('click', runTestFindFirstTrue);
document.getElementById('findFirstElementNotSmallerThanTarget').addEventListener('click', runTestFindElementNotSmallerThanTarget);
document.getElementById('findFirstOccurrence').addEventListener('click', runTestFirstOccurrence);
document.getElementById('findSquareRoot').addEventListener('click', runTestFindSquareRoot);

// Stack Demos
document.getElementById('basicStackDemo').addEventListener('click', runTestBasicStack);
document.getElementById('basicValidParentheses').addEventListener('click', runTestBalancedParentheses);
document.getElementById('basicInfixToPostfix').addEventListener('click', runTestInfixToPostfix);
document.getElementById('basicEvaluatePostfixExpression').addEventListener('click', runTestEvaluatePostfixExpression);
document.getElementById('basicMinStack').addEventListener('click', runTestMinStack);

// Sorting
document.getElementById('bubbleSort').addEventListener('click', runTestBubbleSort);
document.getElementById('insertionSort').addEventListener('click', runTestInsertionSort);
document.getElementById('selectionSort').addEventListener('click', runTestSelectionSort);


// Algorithms
document.getElementById('binarySearch').addEventListener('click', runTestBinarySearch);