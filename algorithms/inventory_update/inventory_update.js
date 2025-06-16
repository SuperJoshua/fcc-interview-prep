"use strict";

function updateInventory(array_a, array_b) {
   const map_a = new Map()
   for (const pair of array_a) {
      map_a.set(pair[1], pair[0])
   }
   for (const pair of array_b) {
      if (map_a.has(pair[1])) {
         map_a.set(pair[1], map_a.get(pair[1]) + pair[0])
      } else {
         map_a.set(pair[1], pair[0])
      }
   }
   const updated_inventory = []
   for (const pair of map_a.entries()) {
      updated_inventory.push([pair[1], pair[0]])
   }
   updated_inventory.sort((a, b) => {
      if (a[1] < b[1]) {
         return -1
      } else if (a[1] > b[1]) {
         return 1
      } else {
         return 0
      }
   })
   return updated_inventory;
}
