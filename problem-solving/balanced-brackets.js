/*

Given strings of brackets, determine whether each sequence of brackets is balanced. If a string is balanced, return YES. Otherwise, return NO.

*/

const isBalanced  = (s) => {
  let stack = [];
  let popped = -1;

  for(let i = 0; i < s.length; i++) {
    var c = s.charAt(i);
    if(c === '[' || c === '{' || c === '(') {
      stack.push(c);
    }
    if(c === ']') {
      popped = stack.pop() || -1;
      if(popped !== '[') {
        return 'NO';
      }
    }
    if(c === ')') {
      popped = stack.pop() || -1;
      if(popped !== '(') {
        return 'NO';
      }
    }
    if(c === '}') {
      popped = stack.pop() || -1;
      if(popped !== '{') {
        return 'NO';
      }
    }
  }
  if(stack.length > 0) {
    return 'NO';
  }
  return 'YES';
}

console.log(isBalanced('{[()]}'))
console.log(isBalanced('{[(])}'))
console.log(isBalanced('{{[[(())]]}}'))
console.log(isBalanced('()(){{}}[()()]{}{}'))
console.log(isBalanced('((()))[]{[(()({[()({[]}{})]}))]}{[]}{{({}{})[{}{}]{()([()])[{()}()[[]{}()]{}{}[]()]}[[]{[]}([])]}}'))
console.log(isBalanced('{{}('))