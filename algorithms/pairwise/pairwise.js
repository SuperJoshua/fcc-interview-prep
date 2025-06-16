"use strict";

function pairwise(arr, arg) {
   const pairs = [...arr.entries()]
   for (const [index, value] of pairs) {
      console.log(index, value)
   }
   return arg;
}
