/*

Find longest substring - sliding window

*/

const longestSubString = (str) => {
  let seen = {};
  let count = 0;
  let startIndex = 0;

  for(let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if(char in seen) {
      startIndex = seen[char];
    }
    seen[char] = i + 1;
    count = Math.max(count, i - startIndex + 1);    
  }

  return count;
}

console.log(longestSubString('hello123there'))
console.log(longestSubString('aaaaaa'))