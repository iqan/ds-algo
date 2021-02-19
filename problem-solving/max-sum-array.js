/*

Find max sum for number of items in array - sliding window

*/

const maxSum = (arr, n) => {
  if(arr.length < n) return null;

  let temp = 0;
  for(let i = 0; i < n; i++) {
    temp+= arr[i];
  }

  let max = temp;
  for(let i = n; i < arr.length; i++) {
    temp = temp - arr[i-n] + arr[i];
    max = Math.max(temp, max);
  }
  return max;
}

console.log(maxSum([1,4,9,1,5,6,7], 3));
console.log(maxSum([], 3));