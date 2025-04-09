import Stack from "../../dataStructures/stack";
import { display } from "../../utils/display";

export default function runBasicStackDemo() {
  document.getElementById('output').innerHTML = '';
  display('___ Basic Stack Demo __');

  const stack = new Stack();
  display(`Should be empty: ${stack.isEmpty()}`);

  display('Pushing elements: 1, 2, 3');
  stack.push(1);
  stack.push(2);
  stack.push(3);

  display(`Poping top item 3: ${stack.pop()}`);

  display(`Top element should be 2: ${stack.peek()}`);
}