"use strict";

function quicksort(array) {
   let length = array.length
   if (length < 2) {
      return array
   }

   const pivot_value = array.at(-1)
   let pivot_index = 0
   for (let i = 0; i < length; i += 1) {
      if (array[i] <= pivot_value) {
         [array[i], array[pivot_index]] = [array[pivot_index], array[i]]
         pivot_index += 1
      }
   }
   
   return quicksort(array.slice(0, pivot_index - 1)).concat(quicksort(array.slice(pivot_index - 1)))
}
