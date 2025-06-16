"use strict";

function selection_sort(array) {
   let length = array.length
   if (length < 2) {
      return array
   }
   
   for (let i = 0; i < length; i += 1) {
      let current_min_i = i
      for (let j = i + 1; j < length; j += 1) {
         if (array[j] < array[current_min_i]) {
            current_min_i = j
         }
      }
      
      if (i != current_min_i) {
         [array[i], array[current_min_i]] = [array[current_min_i], array[i]]
      }
   }
 
   return array
}
