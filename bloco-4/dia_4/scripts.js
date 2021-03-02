function repetidor (numeros) {
  let repetiçao = 0;
  let contador = 0;
  let numeroMaisRepetido = 0;
  for (let index in numeros) {
    let verificador = numeros[index];
    for (let index2 in numeros) {
      if (verificador === numeros[index2]) {
        contador++;
      }
    }
    if (contador > repetiçao) {
      verificador = contador;
      numeroMaisRepetido = index;
    }
    contador = 0;
  }
  return numeros[numeroMaisRepetido];
}
console.log (repetidor([9,5,7,4,3,4]))