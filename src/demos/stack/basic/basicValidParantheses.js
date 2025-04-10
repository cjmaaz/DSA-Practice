import Stack from "../../../dataStructures/stack";
import { display } from "../../../utils/display";

/*

  Problem 1: Valid Parentheses
  Problem Statement: Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. A string is valid if all brackets are closed in the correct order.
  Sample Input: "()[]{}"
  Expected Output: True
  Sample Input: "([)]"
  Expected Output: False
  Tricky Input: "" → Output: True (empty string is considered valid).
  Tricky Input: "{[]}" → Output: True (nested valid brackets).

*/

function isBalancedParentheses(n) {
  const stack = new Stack();
  for (let eachSymbol of n) {
    switch (eachSymbol) {
      case "{":
        stack.push(eachSymbol);
        break;
      case "[":
        stack.push(eachSymbol);
        break;
      case "(":
        stack.push(eachSymbol);
        break;
      case "}":
        if (stack.peek() === "{") {
          stack.pop();
        } else {
          stack.push(eachSymbol);
        }
        break;
      case "]":
        if (stack.peek() === "[") {
          stack.pop();
        } else {
          stack.push(eachSymbol);
        }
        break;
      case ")":
        if (stack.peek() === "(") {
          stack.pop();
        } else {
          stack.push(eachSymbol);
        }
        break;
      default:
        throw new Error(`Symbol not recognised: ${eachSymbol}`);
    }
  }
  if (stack.isEmpty) {
    return true;
  }
  return false;
}

export default function testBalancedParentheses() {
  document.getElementById('output').innerHTML = '';
  display("____Testing Balanced Parentheses___");
  const testCases = [
    { input: "{[()]}", expected: true },
    { input: "{[(])}", expected: false },
    { input: "[", expected: false },
    { input: "", expected: true },
    { input: "()[]{}", expected: true },
    { input: "([)]", expected: false },
    { input: "", expected: true },
    { input: "{[]}", expected: true },
    { input: "((()))", expected: true },
    { input: "({[)]}", expected: false }
  ];
  testCases.forEach(({ input, expected }) => {
    try {
      const inputArray = input.split('');
      const result = isBalancedParentheses(inputArray);
      if (result === expected) {
        return display(`PASSED for input: ${input}`);
      }
      return display(`FAILED for input: ${input}`);
    } catch (err) {
      display(`ERROR for input: ${input} - ${err.message}`);
    }
  });
}