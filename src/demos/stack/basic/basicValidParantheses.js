import Stack from "../../../dataStructures/Stack";
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

// * Take 1 : Unoptimized
function isBalancedParenthesesUnoptimized(n) {
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
// * Take 1 : Optimized
function isBalancedParentheses(n) {
  const stack = new Stack();
  const map = {
    "}": "{",
    "]": "[",
    ")": "("
  }
  for (let eachSymbol of n) {
    if (eachSymbol === "{" || eachSymbol === "(" || eachSymbol === "[") {
      stack.push(eachSymbol);
    } else if (eachSymbol in map) {
      if (stack.size() === 0 || stack.pop() !== map[eachSymbol]) {
        return false
      }
    } else {
      // throw new Error("Unknown Character");
      return false;
    }
  }
  return stack.size() === 0;
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
        display(`PASSED for input: ${input}`, 'pass');
        return display(`Above input is valid parentheses? : ${expected ? 'Yes' : 'No'}`);
      }
      display(`FAILED for input: ${input}`, 'fail');
      return (`Expected: ${expected} ; Result ${result}`, 'fail');
    } catch (err) {
      display(`ERROR for input: ${input} - ${err.message}`, 'error');
    }
  });
}