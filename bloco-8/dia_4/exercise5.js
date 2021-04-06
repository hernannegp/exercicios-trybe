
const assert = require('assert');

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
    return names.reduce((acc, current) =>
        acc + current.split('').reduce((acumulator, currentvalue) => {
            if (currentvalue === 'A' || currentvalue === 'a') return acumulator + 1;
                return acumulator
        }, 0),0)
}
assert.deepStrictEqual(containsA(), 20);