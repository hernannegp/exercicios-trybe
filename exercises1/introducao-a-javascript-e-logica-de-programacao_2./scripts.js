
//Exercicio 4

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media;
for (index of numbers) {
  soma += index;
}
media = soma/numbers.length
console.log(media)
if (media > 20){
    console.log('A media é maior que 20');
}else{
    console.log('A media é menor que 20');
}
