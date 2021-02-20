/**
 * 
 *  bubble sort and optimized bubble sort - O(n^2)
 * 
 */

const bubble = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if(arr[j] > arr[j+1]) {
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr;
}

const bubbleOptimized = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i; j++) {
        if(arr[j] > arr[j+1]) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            swapped = true;
        }
    }
    if(!swapped) break;
  }
  return arr;
}


console.log(bubble([1,5,89,23,2,4,6,3]));
console.log(bubbleOptimized([1,2, 3, 5, 6, 4]));