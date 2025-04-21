import MinStack from "./minStack";
import { display } from "../../../utils/display";

function utilizeMinStack() {
  let stack = new MinStack();
  display("Utilizing MinStack:");
  try {
    stack.push(10);
    display("Pushed 10");
    stack.push(5);
    display("Pushed 5");
    stack.push(15);
    display("Pushed 15");
    display("Current min: " + stack.getMin());
    display("Top value: " + stack.peek());
    let popped = stack.pop();
    display("Popped value: " + popped);
    display("Current min after pop: " + stack.getMin());
  } catch (err) {
    display("Error: " + err.message, "error");
  }
  return stack;
}

export default function testMinStack() {
  document.getElementById('output').innerHTML = '';
  display("____Testing MinStack Class____");

  const testCases = [
    {
      description: "Basic operations",
      operations: [
        { op: "push", value: 5 },               // push 5
        { op: "getMin", expected: 5 },            // min should be 5
        { op: "push", value: 3 },               // push 3 (updates min to 3)
        { op: "getMin", expected: 3 },            // min should be 3
        { op: "push", value: 7 },               // push 7 (min remains 3)
        { op: "peek", expected: 7 },              // peek returns top value 7
        { op: "pop", expected: 7 },               // pop returns 7
        { op: "pop", expected: 3 },               // pop returns 3 (and resets min to 5)
        { op: "getMin", expected: 5 },            // min should now be 5
        { op: "pop", expected: 5 },               // pop returns 5 – now empty
        { op: "getMin", errorExpected: true }     // getMin should throw error, stack is empty
      ]
    },
    {
      description: "Invalid input push",
      operations: [
        { op: "push", value: "hello", errorExpected: true }
      ]
    }
  ];

  testCases.forEach(({ description, operations }) => {
    display(`-- Test Case: ${description} --`);
    const stack = new MinStack();
    operations.forEach((operation, index) => {
      try {
        let result;
        switch (operation.op) {
          case "push":
            stack.push(operation.value);
            result = undefined;
            break;
          case "pop":
            result = stack.pop();
            break;
          case "peek":
            result = stack.peek();
            break;
          case "getMin":
            result = stack.getMin();
            break;
          default:
            throw new Error(`Unknown operation: ${operation.op}`);
        }
        if (operation.errorExpected) {
          display(
            `FAILED op ${index + 1} (${operation.op}): Expected an error but succeeded with result ${result}`,
            "fail"
          );
        } else if (result === operation.expected || (result === undefined && operation.expected === undefined)) {
          display(
            `PASSED op ${index + 1} (${operation.op}): returned expected result ${result}`,
            "pass"
          );
        } else {
          display(
            `FAILED op ${index + 1} (${operation.op}): Expected ${operation.expected}, but got ${result}`,
            "fail"
          );
        }
      } catch (err) {
        if (operation.errorExpected) {
          display(
            `PASSED op ${index + 1} (${operation.op}) with expected error: ${err.message}`,
            "pass"
          );
        } else {
          display(
            `FAILED op ${index + 1} (${operation.op}): Unexpected error: ${err.message}`,
            "fail"
          );
        }
      }
    });
  });
  display("\n-- Utilizing MinStack in a sample use-case --");
  utilizeMinStack();
}
