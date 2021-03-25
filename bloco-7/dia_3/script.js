// exercicio 1
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.strictEqual(sum(4, 5), (9), 'O resultado de 4 + 5 é 9')
assert.strictEqual(sum(0, 0), (0), '0 + 0 é igual a 0')
assert.strictEqual(sum(4, "8", (10)))
