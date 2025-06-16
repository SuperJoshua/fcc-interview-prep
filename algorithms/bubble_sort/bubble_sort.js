"use strict";

function bubble_sort(array) {
   let length = array.length
   if (length < 2) {
      return array
   }
   
   let swapped = false
   do {
      swapped = false
      for (let i = 1; i < length; i += 1) {
         if (array[i - 1] > array[i]) {
            [array[i - 1], array[i]] = [array[i], array[i - 1]]
            swapped = true
         }
      }
   } while (swapped)
   
   return array
}

console.log(bubble_sort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))