function IndiceDeMaiorValor(inteiros) {
    let indiceMaior = 0;
    for (let indice in inteiros) {
      if (inteiros[indiceMaior] < inteiros[indice]) {
        indiceMaior = indice;
      }
    }
    return indiceMaior;
  }
  
  console.log(IndiceDeMaiorValor([2, 3, 6, 7, 10, 1])); 