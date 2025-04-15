import Stack from "../../../dataStructures/stack";
import { display } from "../../../utils/display";

export default function testBasicStack() {
  document.getElementById('output').innerHTML = '';
  display('___ Basic Stack Demo __');

  const stack = new Stack();
  display(`Should be empty: ${stack.isEmpty}`);

  display('Pushing elements: 1, 2, 3');
  stack.push(1);
  stack.push(2);
  stack.push(3);

  display(`Poping top item 3: ${stack.pop()}`);

  display(`Top element should be 2: ${stack.peek()}`);

  display(`Pushing element 7 : ${stack.push(7)}`);

  display(`To String: ${stack.toString()}`);

  display(`Popping: ${stack.pop()}`);

  display(`Popping: ${stack.pop()}`);

  display(`Popping: ${stack.pop()}`);

  display(`Popping: ${stack.pop()}`);

  display(`Empty: ${stack.isEmpty}`);
}