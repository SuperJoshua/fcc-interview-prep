"use strict";

function sym(...args) {
   if (args.length > 1) {
      const a = new Set(args[0])
      const b = new Set(args[1])
      return sym(...[[...a.symmetricDifference(b)]].concat(args.slice(2)))
   }
   return args.flat()
}
