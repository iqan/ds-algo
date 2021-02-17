let calc = 0
let cache = {};

function fibonacci(n) {
  if(n in cache) {
    return cache[n];
  }
  calc++;
  if (n < 2) {
    cache[n] = n;
    return n;
  }
  var o = fibonacci(n - 1) + fibonacci(n - 2);
  cache[n] = o;
  return o;
}

let res = fibonacci(8);
console.log('res', res);
console.log('calc', calc);
let x = [1,2,3,4,5,8,1,2,3,4];
console.log(Math.max(...x));