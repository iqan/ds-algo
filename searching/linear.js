/**
 * 
 * linear search - O(n)
 * 
 */

function linearSearch(arr, item){
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === item) return i;
  }
  return -1;
}

console.log(linearSearch([1,2,3,4,5,6,7], 2));
console.log(linearSearch([1,2,3,4,5,6,7], 1));
console.log(linearSearch([1,2,3,4,5,6,7], 7));
console.log(linearSearch([1,2,3,4,5,6,7], 10));