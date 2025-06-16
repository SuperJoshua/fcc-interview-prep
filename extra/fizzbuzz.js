"use strict";

function fizzbuzz(start, end) {
   let result = []
   for (let n = start; n <= end; n += 1) {
      if (!(n % 15)) {result.push("FizzBuzz")}
      else if (!(n % 3)) {result.push("Fizz")}
      else if (!(n % 5)) {result.push("Buzz")}
      else {result.push(n)}
   }
   
   return result.join(" ")
}
