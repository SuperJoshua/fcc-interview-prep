"use strict";

function factorial(n) {
   let x = 1
   for (let i = n; i > 0; i -= 1) {
      x *= i
   }
   
   return x
}

// This is apparently a poorly optimized solution, but it is quite lovely in its simplicity.
function factorial_rec(n) {
   return n < 2 ? 1 : n * factorial(n - 1)
}
