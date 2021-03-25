// exercicio 1
// const assert = require('assert');

// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }

//   return a + b;
// }

// assert.strictEqual(sum(4, 5), (9), 'O resultado de 4 + 5 é 9')
// assert.strictEqual(sum(0, 0), (0), '0 + 0 é igual a 0')
// assert.strictEqual(sum(4, "8", (10)))
// exercicio 2
// const assert = require('assert');

// function myRemove(arr, item) {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (item !== arr[index]) {
//       newArr.push(arr[index]);
//     }
//   }
//   return newArr;
// }
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4])
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4])
// assert.deepStrictEqual( myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4])

// const myList = [5, 7, 9, 10, 11]
// myRemove(myList, 5)
// assert.deepStrictEqual(myList, [5, 7, 9, 10, 11])
// exercicio 3
