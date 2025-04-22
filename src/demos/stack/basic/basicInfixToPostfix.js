import Stack from "dataStructures/Stack";
import { display } from "utils/display";

function infixToPostfixConverterWithoutAssociativity(n) {
  const stack = new Stack();
  const output = [];
  const operators = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "^": 3
  }
  for (let each of n) {
    if (each in operators) {
      if (stack.isEmpty || stack.peek() === "(" || operators[each] > operators[stack.peek()]) {
        stack.push(each);
      } else {
        while (!stack.isEmpty) {
          if (operators[stack.peek()] >= operators[each]) {
            output.push(stack.pop());
          } else {
            break;
          }
        }
        stack.push(each);
      }
    } else if (each === "(") {
      stack.push(each);
    } else if (each === ")") {
      while (stack.peek() !== "(") {
        output.push(stack.pop())
      }
      stack.pop();
    } else {
      output.push(each);
    }
  }
  while (!stack.isEmpty) {
    output.push(stack.pop());
  }
  return output;
}

function infixToPostfixConverter(n) {
  const stack = new Stack();
  const output = [];
  const opMap = {
    "+": { precedence: 1, associativity: 'left' },
    "-": { precedence: 1, associativity: 'left' },
    "*": { precedence: 2, associativity: 'left' },
    "/": { precedence: 2, associativity: 'left' },
    "^": { precedence: 3, associativity: 'right' },
  }

  for (let curr of n) {
    if (curr in opMap) {
      while (!stack.isEmpty && stack.peek() !== "(" && ((opMap[curr].associativity === 'left' && opMap[curr].precedence <= opMap[stack.peek()].precedence) || (opMap[curr].associativity === 'right' && opMap[curr].precedence < opMap[stack.peek()].precedence))) {
        output.push(stack.pop());
      }
      stack.push(curr);
    } else if (curr === "(") {
      stack.push(curr);
    } else if (curr === ")") {
      let count = 0;
      while (stack.peek() !== "(" && count < 10000) {
        output.push(stack.pop())
      }
      stack.pop();
    } else {
      output.push(curr);
    }
  }
  while (!stack.isEmpty) {
    output.push(stack.pop());
  }
  return output;
}

export default function testInfixToPostfix() {
  document.getElementById('output').innerHTML = '';
  display("____Testing Infix to Postfix Converter____");

  const testCases = [
    { input: "A+B", expected: "AB+" },
    { input: "A+B*C", expected: "ABC*+" },
    { input: "(A+B)*C", expected: "AB+C*" },
    { input: "A*(B+C)", expected: "ABC+*" },
    { input: "A+B*(C-D/E)", expected: "ABCDE/-*+" },
    { input: "A*(B+C*D)+E", expected: "ABCD*+*E+" },
    { input: "A+B-C*D/E+F", expected: "AB+CD*E/-F+" }, // tests combined operator precedence
    { input: "A^B^C", expected: "ABC^^" },       // tricky due to right-associativity of '^'
    { input: "", expected: "" },            // edge case: empty expression
    { input: "A", expected: "A" }            // trivial single operand case
  ];

  testCases.forEach(({ input, expected }) => {
    try {
      const inputArray = input.split('');
      const result = infixToPostfixConverter(inputArray);
      if (result.join('') === expected) {
        display(`PASSED for input: ${input}`, 'pass');
        display(`Above input converts to postfix: ${expected}`);
      } else {
        display(`FAILED for input: ${input}`, 'fail');
        display(`Expected: ${expected} ; Result: ${result.join('')}`, 'fail');
      }
    } catch (err) {
      display(`ERROR for input: ${input} - ${err.message}`, 'error');
    }
  });
}
