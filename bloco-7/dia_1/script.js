// exercicio 1
const testingScope = (escopo) => {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo`
      console.log(ifScope)
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope)
    }
  }
  testingScope(true)

  // exercicio 2
  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  console.log(`${oddsAndEvens.sort((a, b) => a - b)}`);

  // parte 2
  // Exercicio 1
  const factorialNumber = (num) => {
      if (num == 0 || num == 1) {
      return 1;
    }
      for (let i = num - 1; i >= 1; i--) {
      num *= i
    }
    return num
  }
  console.log(factorialNumber(7))
  // exercicio 2
