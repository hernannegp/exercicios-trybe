// Parte 1
// Exercicio 1

const testingScope = escopo => { 
    if (escopo === true) { 
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

testingScope(true);
// Exercicio 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`${oddsAndEvens.sort((a, b) => a - b)}`);
// Parte II

// Exercicio 1
const factorial = number => {
    let result = 1
    for (let index = 1; index <= number; index += 1) {
      result *= index
    }
    return result
}

console.log(factorial(5))
// exercicio 2
const longestWord = text => {
    const word = text.split(' ');
    let longestWord = 0;
    let result = '';
    for (const wordCount of word) {
        if (wordCount.length > longestWord){
            result = wordCount;
        }
    }
    return result;
}
console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu BANANASIZE"))
// exercicio 3
let showcount = document.getElementById('showCount');
const button = document.getElementById('exercise');
let count = 0;
button.addEventListener('click', function(){
    count += 1
    showcount.innerHTML = count;
})
// exercicio 4
const array = ["Android", "iOS", "Architecture", "Teach", "Run"]

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!
      Tudo bem?`
    )
    let result = `${fun1(paramOne)}
    Minhas cinco principais habilidades são:`
    array.forEach((skill, index) =>
    result = `${result}
    - ${skill}`)
    result = `
    ${result}
    #goTrybe
    `
    return result
}

console.log(buildSkillsPhrase("Lucas")) 