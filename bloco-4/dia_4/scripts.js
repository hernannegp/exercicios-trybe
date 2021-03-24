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

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contador = 0
for (let index = 0; index < numbers.length; index += 1) {
 contador += numbers[index]
}
console.log(contador)

let med = 0
let contador = 0
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1) {
  contador += numbers[index]
 med = contador / 6
} if (med > 20) {
  console.log('valor maior que 20')
} else {
  console.log ('valor menor ou igual a 20')
}
console.log(med)

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contador = 0
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > contador){
    contador = numbers[index]
  }
}
console.log(contador)
