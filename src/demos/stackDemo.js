import { Stack } from '../dataStructures/stack.js';
import { display } from '../utils/display.js';

export function runStackDemo() {
  // Clear previous output
  document.getElementById('output').innerHTML = '';
  
  display('=== Stack Demo ===');
  
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