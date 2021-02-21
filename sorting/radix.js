/**
 * 
 *  radix sort - O(n*k) - space O(n+k) - k = max digits in num in array
 *  push value at digit into a bucket and repeat for largest length of num
 */

const getDigit = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;

const getDigitCount = (num) => num === 0 ? 1 : Math.floor(Math.log10(num)) + 1;

const getMostDigits = (arr) => {
  let max = 0;
  for(let i = 0; i < arr.length; i++) {
    max = Math.max(max, getDigitCount(arr[i]));
  }
  return max;
};

const radixSort = (arr) => {
  let maxDigits = getMostDigits(arr);

  for(let i = 0; i < maxDigits; i++) {
    let bucket = new Array(10);
    for(let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      if(bucket[digit]) {
        bucket[digit].push(arr[j]);
      } else {
        bucket[digit] = [arr[j]];
      }      
    }
    arr = [].concat(...bucket);
  }

  return arr.filter(x => x);
}

console.log(radixSort([1,4,2,3]));
console.log(radixSort([1,5,89,23,2,4,6,3]));