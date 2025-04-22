import testBasicStack from '@/demos/stack/basic/basicStack';
import testBalancedParentheses from '@/demos/stack/basic/basicValidParantheses';
import testInfixToPostfix from '@/demos/stack/basic/basicInfixToPostfix';
import testEvaluatePostfixExpression from '@/demos/stack/basic/basicEvaluatePostfixExpression';
import testMinStack from '@/demos/stack/basic/basicMinStack';

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