// const order = {
//     name: 'Rafael Andrade',
//     phoneNumber: '11-98763-1416',
//     address: {
//     street: 'Rua das Flores',
//     number: '389',
//     apartment: '701',
//     },
//     order: {
//     pizza: {
//         margherita: {
//         amount: 1,
//         price: 25,
//         },
//         pepperoni: {
//         amount: 1,
//         price: 20,
//         }
//     },
//     drinks: {
//         coke: {
//         type: 'Coca-Cola Zero',
//         price: 10,
//         amount: 1,
//         }
//     },
//     delivery: {
//         deliveryPerson: 'Ana Silveira',
//         price: 5,
//     }
//     },
//     payment: {
//     total: 60,
//     },
// };
// const customerInfo = (order) => {
//     const deliveryName = order.order.delivery.deliveryPerson
//     const name = order.name
//     const telefone = order.phoneNumber
//     const rua = order.address.street
//     const N = order.address.number
//     const apartamento = order.address.apartment
//     console.log(`Olá ${deliveryName}, entrega para ${name}, telefone: ${telefone}, ${rua}, N ${N}, AP ${apartamento}`) 
// }
// customerInfo(order);
// const orderModifier = (order) => {
//     const name = order.name = 'Luiz Silva'
//     const coquinhaGelada = order.order.drinks.coke.type
//     const payment = order.payment.total = 50
//     console.log(`Olá ${name}, o total do seu pedido de muzzarella, calabresa e ${coquinhaGelada} é ${payment},00$`)
// }
// orderModifier(order);

// parte 2 

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã', 
};
const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// const newTurn = (object, key, value) => {object[key] = value}
// newTurn(lesson2, 'turno', 'manhã')
// console.log(lesson2);

// exercicio 2
// const showKeys = (object) => Object.keys(object)
// console.log(showKeys(lesson2))
//e exercicio 3
// const sizeObject = (object) => Object.keys(object).length
// console.log(sizeObject(lesson2))
// exercicio 4
// const valuesInObject = (object) => Object.values(object)
// console.log(valuesInObject(lesson2))
// exercicio 5
//    const allLessons = Object.assign({}, {lesson1, lesson2, lesson3}); // Para passar 3 objetos pra um, essa é a estrutura!!
//     console.log(allLessons)
// exercicio 6
// const allStudents = (object) => {
//     let result = 0;
//     const array = Object.keys(object);
//     for (i in array) {
//         result += object[array[i]].numeroEstudantes;
//     }
//     return result;
// }
// console.log(allStudents(allLessons))
// exercicio 7
// const positionValues = (object, position) => Object.values(object)[position]
// console.log(positionValues(lesson1, 0))
// exercicio 8
const verifyPair = (object, key, value) => {
    const objeto = Object.entries(object)
    let trueOrFalse = false
    for (index in objeto) {
        if (objeto[index][0] === key && objeto[index][1] === value){
            trueOrFalse = true 
        }    
    }
    return trueOrFalse;
}
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Matemática'));
