import Stack from '../../../dataStructures/Stack'
import { display } from "../../../utils/display";

function evaluatePostfixExpressUnoptimized(n) {
  const stack = new Stack();
  for (let token of n) {
    if (token === "+" || token === "-" || token === "/" || token === "*") {
      const lastItem = stack.pop();
      const lastToLastItem = stack.pop();
      let temp;
      if (token === "+") {
        temp = parseFloat(lastToLastItem) + parseFloat(lastItem);
      } else if (token === "-") {
        temp = parseFloat(lastToLastItem) - parseFloat(lastItem);
      } else if (token === "/") {
        temp = parseFloat(lastToLastItem) / parseFloat(lastItem);
      } else if (token === "*") {
        temp = parseFloat(lastToLastItem) * parseFloat(lastItem);
      }
      stack.push(temp);
    } else {
      stack.push(token);
    }
  }
  return parseFloat(stack.peek());
}

function evaluatePostfixExpress(tokens) {
  const stack = new Stack();
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  for (const token of tokens) {
    if (operators.hasOwnProperty(token)) {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(operators[token](a, b));
    } else {
      stack.push(parseFloat(token));
    }
  }
  return stack.pop();
}


export default function testEvaluatePostfixExpression() {
  document.getElementById('output').innerHTML = '';
  display("____Testing Evaluate Postfix Expression____");
  const testCases = [
    { input: "2 3 1 * + 9 -", expected: -4 },           // standard example from prompt
    { input: "5 6 7 * +", expected: 47 },                 // standard example
    { input: "10 5 +", expected: 15 },                    // tricky simple addition test
    { input: "4 2 / 3 -", expected: -1 },                 // division result followed by subtraction
    { input: "3", expected: 3 },                          // single operand case
    { input: "0", expected: 0 },                          // edge case: zero as the only operand
    { input: "12 3 /", expected: 4 },                     // tests multi-digit number handling (integer division)
    { input: "15 7 1 1 + - / 3 * 2 1 1 + + -", expected: 5 }, // complex example (famous RPN sample)
    { input: "34 5 +", expected: 39 },                    // test with multiple digit operand
    { input: "100 200 + 2 / 5 * 7 +", expected: 757 }     // combined operations test
  ];
  testCases.forEach(({ input, expected }) => {
    try {
      const tokens = input.trim().split(/\s+/);
      const result = evaluatePostfixExpress(tokens);
      if (result === expected) {
        display(`PASSED for input: "${input}"`, 'pass');
        display(`Above input evaluates to: ${expected}`);
      } else {
        display(`FAILED for input: "${input}"`, 'fail');
        display(`Expected: ${expected} ; Result: ${result}`, 'fail');
      }
    } catch (err) {
      display(`ERROR for input: "${input}" - ${err.message}`, 'error');
    }
  });
}
