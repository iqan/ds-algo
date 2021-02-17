/*

Rotate a 2D array

*/

const rotateOutOfPlace = (arr) => {
  let newArray = [];
  for(let i = 0; i < arr.length; i++) {
    newArray[i] = [];
  }
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      let newindex = rotateIndices(i, j, arr.length - 1);
      newArray[newindex[0]][newindex[1]] = arr[i][j];
    }
  }
  return newArray;
}

const rotate = (arr) => {
  for(let i = 0; i < Math.ceil(arr.length/2); i++) {
    for(let j = 0; j < Math.floor(arr.length/2); j++) {
      let temp = [-1,-1,-1,-1];
      let current = [i,j];
      for(let k = 0; k < 4; k++) {
        temp[k] = arr[current[0]][current[1]];
        current = rotateIndices(current[0], current[1], arr.length - 1);
      }
      for(let k = 0; k < 4; k++) {
        arr[current[0]][current[1]] = temp[(k+3) % 4];
        current = rotateIndices(current[0], current[1], arr.length - 1);
      }
    }
  }
  return arr;
}

const rotateIndices = (i, j, n) => [j, n - i];

let o1 = rotate([[1,2,3], [4,5,6], [7,8,9]]);
let o2 = rotateOutOfPlace([[1,2,3], [4,5,6], [7,8,9]]);
console.log('o1', o1);
console.log('o2', o2);