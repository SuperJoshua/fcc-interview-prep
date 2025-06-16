"use strict";

// I tried for hours to solve this mathematically, but, while I fancied that there was a pattern, I didn't see it. So, I decided to brute-force it, and still failed to come up with an algorithm -- though it came close to Heap's algorithm, which I discovered later. Given a couple more days, maybe I would have had something working (and ugly), but I'll just implement Heap's algorithm, instead.
function permAlone(string) {
   if (string.length < 2) {
      return string.length
   }
   
   const array = string.split("")
   let permutations = []
   
   permute(array.length, array)
   
   function permute(k, A) {
      if (k == 1) {
         permutations.push(A.join(""))
      }
      else {
         permute(k - 1, A)
         
         for (let i = 0; i < k - 1; i += 1) {
            if (k % 2) {
               [A[0], A[k - 1]] = [A[k - 1], A[0]]
            }
            else {
               [A[i], A[k - 1]] = [A[k - 1], A[i]]
            }
            
            permute(k - 1, A)
         }
      }
   }

   return permutations.filter(a => {
      if (a.length < 2) {
         return true
      }
      
      let [i, j] = [0, 1]
      while (j < a.length) {
         if (a[i] == a[j]) {
            return false
         }
         
         [i, j] = [i + 1, j + 1]
      }
      
      return true
   }).length
}
