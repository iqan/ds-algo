/**
 * 
 *  quick sort - O(n logn) - space O(n)
 * 
 */

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

const getPivot = (arr, start, end) => {
  let pivot = arr[start];
  let index = start;
  for(let i = start + 1; i <= end; i++) {
    if(pivot > arr[i]) {
      index++;
      swap(arr, index, i);
    }
  }
  swap(arr, start, index);
  return index;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if(left >= right) return;
  let p = getPivot(arr, left, right);
  quickSort(arr, left, p - 1);
  quickSort(arr, p + 1, right);
  return arr;
}

console.log(quickSort([1,5,89,23,2,4,6,3]));