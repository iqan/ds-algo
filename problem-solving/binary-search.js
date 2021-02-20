/**
 * 
 * binary search in sorted array
 * 
 */

function binarySearch(arr, item){
  let left = 0;
  let right = arr.length - 1;
  while(left <= right) {
      let medium = Math.floor((right + left) / 2);
      if(item === arr[medium]) return medium;
      if(item < arr[medium]) {
          right = medium - 1;
      } else {
          left = medium + 1;
      }
  }
  return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7], 2));
console.log(binarySearch([1,2,3,4,5,6,7], 1));
console.log(binarySearch([1,2,3,4,5,6,7], 7));
console.log(binarySearch([1,2,3,4,5,6,7], 10));