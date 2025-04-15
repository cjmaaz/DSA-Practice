import testBasicStack from './stack/basic/basicStack';
import testBalancedParentheses from './stack/basic/basicValidParantheses';
import testInfixToPostfix from './stack/basic/basicInfixToPostfix';

export function runTestBalancedParentheses() {
  testBalancedParentheses();
}

export function runTestBasicStack() {
  testBasicStack();
};

export function runTestInfixToPostfix() {
  testInfixToPostfix();
}