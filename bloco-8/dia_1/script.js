const personEmail = (name) => {
    const email = name.toLowerCase().split(' ').join('_')
    return {name, email:`${email}@trybe.com`}
}


const newEmployees = (callback) => {
    const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
    }
    return employees;
};
console.log(newEmployees(personEmail)) 

// exercicio 2

/* const numberCheck = (numberBet, numberSort) => numberBet === numberSort
const sortingResult = (numberBet) => {
    const sorting = Math.floor(Math.random() * 5)
    if (numberBet === sorting) {
        return 'parabens voce ganhou'
    }
    return 'tente novamente'
}
console.log(sortingesult(2, numberCheck)) */

const numberCheck = (numberBet, numberSort) => numberBet === numberSort
const sortingResult = (numberBet, callback) => {
    const sorting = Math.floor(Math.random() * 5)
    return callback(numberBet, sorting) ? 'Parabens voce ganhou' : 'Tente Novamente'
}
console.log(sortingResult(2, numberCheck))

// exercicio 3

const checkAnswer = correctAnswer => userAnswer => correctAnswer.toLowerCase() === userAnswer.toLowerCase()

const correctAnswer = 'higher order function';
const userAnswer = 'HIGHER ORDER FUNCTION';
/* const increment = checkAnswer(correctAnswer) */
console.log(checkAnswer(correctAnswer)(userAnswer)) 

// exercicio 4
const right_Answers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const student_Answers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (correctAnswer, studentAnswer, action) => {
    let count = 0
    for (let index = 0; index < correctAnswer.length; index += 1) {
        const actionGet = action(correctAnswer[index], studentAnswer[index])
        count += actionGet
    }
    return `A quantidade de respostas corretas é ${count}`
}

console.log(checkAnswers(right_Answers, student_Answers, (rAnswer, uAnswer) => {
    if (rAnswer === uAnswer) {
        return 1
    } if (uAnswer === 'N.A') { // exercicio feito com ajuda do gabarito 
        return 0
    }
    return -0.5
}));