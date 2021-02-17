/*

Find the maximum possible height of the stacks such that all of the stacks are exactly the same height. 
This means you must remove zero or more cylinders from the top of zero or more of the three stacks until they are all the same height, then return the height.

*/

function equalStacksNaive(h1, h2, h3) {
  let s1 = 0;
  let s2 = 0;
  let s3 = 0;
  let height = 0;

  while(h1.length > 0 || h2.length > 0 || h3.length > 0) {
    s1 = h1.reduce((prev, curr) => prev + curr, 0);
    s2 = h2.reduce((prev, curr) => prev + curr, 0);
    s3 = h3.reduce((prev, curr) => prev + curr, 0);
    if(s1 === s2 && s2 === s3) {
      return s1;
    }
    if(s1 > s2 || s1 > s3) {
      h1 = h1.slice(1, h1.length);
    }
    if(s2 > s1 || s2 > s3) {
      h2 = h2.slice(1, h2.length);
    }
    if(s3 > s1 || s3 > s2) {
      h3 = h3.slice(1, h3.length);
    }
  }

  return height;
}

function equalStacks(h1, h2, h3) {
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;

  for(let i = h1.length - 2; i >= 0 ; i--) {
    h1[i] += h1[i+1];
  }
  for(let i = h2.length - 2; i >= 0 ; i--) {
    h2[i] += h2[i+1];
  }
  for(let i = h3.length - 2; i >= 0 ; i--) {
    h3[i] += h3[i+1];
  }
  
  while(h1.length - p1 > 0 && h2.length - p2 > 0 && h3.length - p3 > 0) {
    let s1 = h1[p1];
    let s2 = h2[p2];
    let s3 = h3[p3];
    if(s1 === s2 && s2 === s3) {
      return s1;
    }
    if(s1 > s2 || s1 > s3) {
      p1++;
    }
    if(s2 > s1 || s2 > s3) {
      p2++;
    }
    if(s3 > s1 || s3 > s2) {
      p3++;
    }
  }

  return 0;
}



let h1 = [3, 2, 1, 1, 1];
let h2 = [4, 3, 2];
let h3 = [1, 1, 4, 1];
console.log(equalStacks(h1, h2, h3))

let h4 = [1, 1, 1, 1, 2]
let h5 = [3, 7]
let h6 = [1, 3, 1]
console.log(equalStacks(h4, h5, h6))