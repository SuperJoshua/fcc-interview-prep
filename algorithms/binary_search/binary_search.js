"use strict";

function binary_search(array, value) {
   let path = []
   
   let left = 0
   let right = array.length - 1
   while (left <= right) {
      const i = Math.floor((left + right) / 2)
      const x = array[i]
      path.push(x)
      if (x == value) {
         break
      }
      else if (x < value) {
         left = i + 1
      }
      else {
         right = i - 1
      }
   }
   
   if (path.at(-1) != value) {
      return "Value Not Found"
   }
   
   return path
}
