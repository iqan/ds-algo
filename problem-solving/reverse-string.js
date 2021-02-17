/*

Implement a function that reverses a string using recursion!

*/

function reverseString(str) {
  if (str.length == 1) {
    return str.charAt(0);
  }
  return reverseString(str.substring(1)) + str.charAt(0);
}

reverseString('yoyo mastery')
//should return: 'yretsam oyoy'