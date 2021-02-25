//Exercicio 6 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = 0;

for (let index of numbers){
    if (index % 2 == 1){
        impares++
    }
}
if(impares > 0){
    console.log('numeros impares  :', impares )
}else{
    console.log('Não impares')
}