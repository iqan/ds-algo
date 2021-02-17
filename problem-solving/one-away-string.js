/*

Given two string, check if they are one-away. i.e. Addition/deletion/replacement any operation done once can equal strings

*/

const oneAway = (a,b) => {
  let operations = 0;
  if(a.length === b.length) {
    for(let i = 0; i < a.length; i++) {
      if(a[i] !== b[i]) {
        operations++;
      }
    }
  } else {
    let long = [];
    let short = [];
    if(a.length > b.length) {
      long = a;
      short = b;
    } else {
      long = b;
      short = a;
    }
    if(long.length - short.length > 1) return false;
    let j = 0;
    for(let i = 0; i < long.length; i++) {
      if(long[i] !== short[i-j]) {
        operations++;
        j++;
      }
    }
  }
  return operations === 1;
}

console.log("abd", "abc", oneAway("abd", "abc"));
console.log("abcde", "abce", oneAway("abcde", "abce"));
console.log("abc", "abce", oneAway("abc", "abce"));
console.log("abcde", "abfgh", oneAway("abcde", "abfgh"));
console.log("abcdeaaaa", "abfgh", oneAway("abcdeaaaa", "abfgh"));