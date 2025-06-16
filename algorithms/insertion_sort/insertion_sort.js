"use strict";

function insertion_sort(array) {
   let length = array.length
   if (length < 2) {
      return array
   }
   
   let i = 0
   while (i < length) {
      let j = i + 1
      while (j > 0 && array[j] < array[j - 1]) {
         [array[j], array[j - 1]] = [array[j - 1], array[j]]
         j -= 1
      }
      i += 1
   }
   
   return array
}
