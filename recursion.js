// POWER
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

// console.log(power(2, 4));

// FACTORIAL
function factorial(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

// console.log(factorial(4));

// PRODUCT OF ARRAY
function productOfArray(array) {
  if (array.length === 0) {
    return 1;
  }
  return array[0] * productOfArray(array.slice(1));
}

// console.log(productOfArray([1, 8, 5, 7]));

// RECURSIVE RANGE
function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

// console.log(recursiveRange(5));

// FIBONACCI
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(6));
