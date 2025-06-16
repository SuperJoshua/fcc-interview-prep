"use strict";

// get the nth number in the Fibonacci sequence

// This is apparently a poorly optimized solution, but it is quite lovely in its simplicity.
function fib_rec(n) {
   return n <= 1 ? n : fib(n-1) + fib(n-2)
}
