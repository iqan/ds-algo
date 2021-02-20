/**
 * 
 *  selection sort - O(n^2)
 * 
 */

const selectionSort = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    let low = i;
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[low]) {
          low = j;
      }
    }
    if(i !== low) {
      [arr[low], arr[i]] = [arr[i], arr[low]];
    }
  }
  return arr;
}

console.log(selectionSort([1,5,89,23,2,4,6,3]));