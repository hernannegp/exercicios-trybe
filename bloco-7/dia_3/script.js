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
// const assert = require('assert');

// function myRemoveWithoutCopy(arr, item) {
//   for (let index = 0, len = arr.length; index < len; index += 1) {
//     if (arr[index] === item) {
//       arr.splice(index, 1);
//       index -= 1;
//       len -= 1;
//     }
//   }

//   return arr;
// }
// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4])
// // assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4])
// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4])

//  const myList = [5, 7, 9, 10, 11]
//  myRemoveWithoutCopy(myList, 5)
//  assert.deepStrictEqual(myList, [7, 9, 10, 11])
// exercicio 4
// const assert = require('assert');

// function myFizzBuzz(num) {
//   if (typeof num !== 'number') return false;
//   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//   if (num % 3 === 0) return 'fizz';
//   if (num % 5 === 0) return 'buzz';
//   return num;
// }
// assert.strictEqual(myFizzBuzz(15), "fizzbuzz")
// assert.strictEqual(myFizzBuzz(9), "fizz")
// assert.strictEqual(myFizzBuzz(20), "buzz")
// assert.strictEqual(myFizzBuzz(4), 4)
// assert.strictEqual(myFizzBuzz("4"), false)
// exercicio 5
// const assert = require('assert');

// const obj1 = {
// title: 'My Title',
// description: 'My Description',
// };

// const obj2 = {
// description: 'My Description',
// title: 'My Title',
// };

// const obj3 = {
// title: 'My Different Title',
// description: 'My Description',
// };
// assert.deepStrictEqual(obj1, obj2)
// assert.notDeepStrictEqual(obj1, obj3)
// assert.notDeepStrictEqual(obj2, obj3)
// parte 2
// exercicio 1
// const assert = require('assert');
// const addOne = (array) => {
//     const newArr = []
//     for (let index = 0; index < array.length; index += 1){
//         newArr.push(array[index] + 1)
//     }
//     return newArr
// }

// const myArray = [31, 57, 12, 5];
// const unchanged = [31, 57, 12, 5];
// const expected = [32, 58, 13, 6];
// const output = addOne(myArray);
// console.log(addOne(myArray))
// assert.strictEqual(typeof addOne, 'function');
// assert.deepStrictEqual(output, expected);
// assert.deepStrictEqual(myArray, unchanged);
// exercicio 2
const assert = require('assert');
const wordLengths = (strings) => {
    const numberArray = []
    if (strings > numberArray) {
        strings = [3, 6, 10, 5]
        numberArray.push(strings)
    }
    return numberArray
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];
assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);