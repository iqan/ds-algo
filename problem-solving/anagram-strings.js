/*

Given 2 strings, check they are anagram, i.e. same char and frequency matches

*/

function validAnagram(str1, str2){
  if(str1.length !== str2.length) {
      return false;
  }
  let storage = {};
  for(let c of str1) {
      storage[c] = ++storage[c] || 1;
  }
  for(let c of str2) {
      if(storage[c]) {
          storage[c]--;
          if(storage[c] < 0) {
              return false;
          }
      } else {
          return false;
      }
  }
  return true;
}

console.log(validAnagram('hello', 'olehl'));
console.log(validAnagram('', ''));