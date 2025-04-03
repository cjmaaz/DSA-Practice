import { Stack } from '../dataStructures/stack.js';
import { display } from '../utils/display.js';

export function runBasicStackDemo() {
  document.getElementById('output').innerHTML = '';
  display('=== Basic Stack Demo ===');
  
  const stack = new Stack();
  
  display('Pushing elements: 1, 2, 3');
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  display('Current stack:');
  display(stack.items);
  
  display('Popping element: ' + stack.pop());
  
  display('Peek at top element: ' + stack.peek());
  
  display('Stack size: ' + stack.size());
  
  display('Is stack empty? ' + stack.isEmpty());
  
  display('Clearing stack...');
  stack.clear();
  
  display('Is stack empty now? ' + stack.isEmpty());
}

export function runBracketMatcherDemo() {
  document.getElementById('output').innerHTML = '';
  display('=== Bracket Matcher Demo ===');
  
  function isValidBrackets(str) {
    const stack = new Stack();
    const brackets = {
      '(': ')',
      '[': ']',
      '{': '}'
    };
    
    for (let char of str) {
      if (brackets[char]) {
        stack.push(char);
      } else {
        if (Object.values(brackets).includes(char)) {
          const lastOpen = stack.pop();
          if (brackets[lastOpen] !== char) {
            return false;
          }
        }
      }
    }
    
    return stack.isEmpty();
  }
  
  const testCases = [
    '()',
    '()[]{}',
    '(]',
    '([)]',
    '{[]}'
  ];
  
  testCases.forEach(test => {
    display(`Testing "${test}": ${isValidBrackets(test)}`);
  });
}