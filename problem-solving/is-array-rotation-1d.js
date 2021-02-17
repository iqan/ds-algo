/*

Given two arrays, check if they are rotation of eachother. i.e. rotating one array will equal second array.

*/

const isRotation = (arr1, arr2) => {
  if(arr1.length !== arr2.length) return false;
  let matchIndexInSecond = -1;
  for(let i = 0; i < arr1.length; i++) {
    if(arr2[i] === arr1[0]) {
      matchIndexInSecond = i;
      break;
    }
  }
  if(matchIndexInSecond === -1) return false;
  for(let i = 0; i < arr2.length; i++) {
    index = ((i + matchIndexInSecond) % arr1.length);
    if(arr1[i] !== arr2[index]) {
      return false;
    }
  }
  return true;
}

console.log(isRotation([1,2,3,4,5,6,7],[4,5,6,7,1,2,3]));
console.log(isRotation([1,9,3,4,5,6,7],[4,5,6,7,1,9,3]));
console.log(isRotation([1,9,3,4,5,6,7],[4,5,6,7,1,9]));