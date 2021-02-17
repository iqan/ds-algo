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

let input = 8;
let res = fibonacci(input);
console.log('input', input);
console.log('res', res);
console.log('calc', calc);