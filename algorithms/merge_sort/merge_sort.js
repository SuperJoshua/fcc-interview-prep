"use strict";

function merge(a, b) {
   const array = Array(a.length + b.length)
   
   let i = 0
   while (a.length && b.length) {
      if (a[0] <= b[0]) {
         array[i] = a[0]
         a = a.slice(1)
      }
      else {
         array[i] = b[0]
         b = b.slice(1)
      }
      
      i += 1
   }
   
   while (a.length) {
      array[i] = a[0]
      a = a.slice(1)
      i += 1
   }
   
   while (b.length) {
      array[i] = b[0]
      b = b.slice(1)
      i += 1
   }
   
   return array
}

function merge_sort(array) {
   const length = array.length
   if (length < 2) {
      return array
   }

   const half = Math.floor(length / 2)
   const a = merge_sort(array.slice(0, half))
   const b = merge_sort(array.slice(half))
   
   return merge(a, b)
}
