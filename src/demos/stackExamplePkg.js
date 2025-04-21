import testBasicStack from './stack/basic/basicStack';
import testBalancedParentheses from './stack/basic/basicValidParantheses';
import testInfixToPostfix from './stack/basic/basicInfixToPostfix';
import testEvaluatePostfixExpression from './stack/basic/basicEvaluatePostfixExpression';
import testMinStack from './stack/basic/basicMinStack';

export function runTestBalancedParentheses() {
  testBalancedParentheses();
}

export function runTestBasicStack() {
  testBasicStack();
};

export function runTestInfixToPostfix() {
  testInfixToPostfix();
}

export function runTestEvaluatePostfixExpression() {
  testEvaluatePostfixExpression();
}

export function runTestMinStack() {
  testMinStack();
}