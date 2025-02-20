# JavaScript Type Coercion Bug

This repository demonstrates a common JavaScript bug related to type coercion and its impact on arithmetic operations.

## Bug Description
JavaScript's dynamic typing system can lead to unexpected behavior when operating on mixed data types.  This example showcases how passing a string to a function expecting a number results in NaN (Not a Number).

## Bug Solution
The solution involves adding explicit type checking or conversion to ensure that all operands in arithmetic operations are of the expected numerical type.  This prevents type coercion from producing unintended results.

## How to Run
1. Clone the repository.
2. Open `bug.js` to see the erroneous code.
3. Open `bugSolution.js` to see the corrected code.
4. Run each file in a JavaScript environment (e.g., Node.js) to observe the different outputs.