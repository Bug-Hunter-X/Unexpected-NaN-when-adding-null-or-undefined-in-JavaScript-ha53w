# Unexpected NaN when adding null or undefined in JavaScript

This example demonstrates a common error in JavaScript related to loose typing and the addition operator.  When adding numbers to `null` or `undefined` values, the result is `NaN` (Not a Number).  This might not be the expected behavior for developers unfamiliar with this aspect of JavaScript.

The solution involves explicit checks and type coercion to handle these cases appropriately.
