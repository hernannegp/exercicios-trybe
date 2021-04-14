// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';
window.onload = () => fetchJoke();

const fetchJoke = () => {
    const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    };

    fetch(API_URL, myObject)
        .then(response => response.json()).then((data) => document.getElementById('jokeContainer').innerText = data.joke)
};

const sumRandom = () => {
    const myCalc = Array.from(Array(10), () => Math.floor(Math.random() * 50) + 1)
    .map((number) => number ** 2)
    myCalc.reduce((value, curr) => value + curr)
    if (myCalc < 8000) throw new Error();
    return myCalc
}

const sumFromRandomArray = (sum) => [2, 3, 5, 10].map((number) => sum / number).reduce((acc, curr) => acc + curr, 0)

const fetchPromise = async () => {
    try {
        const sum = await sumRandom();
        const sumFromSum = await sumFromRandomArray(sum);
    } catch (error) {
        console.log('É mais de oito mil! Essa promise deve estar quebrada!')
    }
}