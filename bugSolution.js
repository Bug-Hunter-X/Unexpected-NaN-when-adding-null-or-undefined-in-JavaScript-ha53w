function foo(a, b) {
  // Check for null or undefined values before performing the addition
  a = a === null || a === undefined ? 0 : a;
  b = b === null || b === undefined ? 0 : b;

  return a + b;
}

console.log(foo(undefined, 5)); // 5
console.log(foo(null, 5)); // 5
console.log(foo(1, null)); // 1