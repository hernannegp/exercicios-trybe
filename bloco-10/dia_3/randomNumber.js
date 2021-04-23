const randomNumber = () => Math.floor(Math.random() * 100);

const part1 = (letter) => letter.toUpperCase();

const part2 = (string) => string.charAt(0)

const part3 = (a, b) => a.concat(b)

module.exports = { randomNumber, part1, part2, part3 };