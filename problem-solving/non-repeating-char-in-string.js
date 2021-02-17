/*

Given a string, return first non-repeating character

*/

const nonRepeating = (s) => {
  let arr = s.split("");
  let checker = {};
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] in checker) {
      checker[arr[i]] += 1;
    } else {
      checker[arr[i]] = 1;
    }
  }
  for(let i = 0; i < arr.length; i++) {
    if(checker[arr[i]] === 1) {
      return arr[i];
    }
  }
  return null;
}

nonRepeating("xxttzy");
nonRepeating("axxttzy");