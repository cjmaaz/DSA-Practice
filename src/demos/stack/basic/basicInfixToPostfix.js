import Stack from "../../../dataStructures/stack";
import { display } from "../../../utils/display";

function infixToPostfixConverter(n) {
  const stack = new Stack();
  return stack.size();
}

export default function testInfixToPostfix() {
  document.getElementById('output').innerHTML = '';
  display("_____Infix To Postfix____");
  const expr = "a+b*(c^d-e)";
  const arr = expr.split("");
  let res = infixToPostfixConverter(arr);
  display(res);
}