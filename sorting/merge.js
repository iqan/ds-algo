/**
 * 
 *  merge sort - O(n logn) - space O(n)
 * 
 */

const merge = (arr1, arr2) => {
  let merged = [];
  let first = 0;
  let second = 0;

  while(first < arr1.length && second < arr2.length) {
    if (arr1[first] < arr2[second]) {
      merged.push(arr1[first]);
      first++;
    } else {
      merged.push(arr2[second]);
      second++;
    }
  }

  while(first < arr1.length) {
    merged.push(arr1[first]);
    first++;
  }

  while(second < arr2.length) {
    merged.push(arr2[second]);
    second++;
  }

  return merged;
}

const mergeSort = (arr) => {
  if(arr.length === 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([1,5,89,23,2,4,6,3]));