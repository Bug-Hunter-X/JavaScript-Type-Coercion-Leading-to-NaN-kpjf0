function foo(a, b) {
  // Explicit type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Invalid input: Both arguments must be numbers';
  }
  return a + b;
}

function bar(a, b) {
  // Explicit type checking and conversion
  a = parseFloat(a);
  b = parseFloat(b);
  if (isNaN(a) || isNaN(b)){
    return 'Invalid input: Both arguments must be numbers';
  }
  return foo(a, b) * 2;
}

console.log(bar(2, 3)); // Output: 10
console.log(bar(2, '3')); // Output: 10
console.log(bar('a', 3)); //Output: Invalid input: Both arguments must be numbers