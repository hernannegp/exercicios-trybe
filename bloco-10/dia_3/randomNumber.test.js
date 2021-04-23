const randomNum = require('./randomNumber.js')

describe('Test randomNumber', () => {
    it('Teste se a função foi chamada, o retorno e quantas vezes foi chamada', () => {
        randomNum.randomNumber = jest.fn().mockReturnValue(10);
        
        expect(randomNum.randomNumber()).toBe(10);
        expect(randomNum.randomNumber).toHaveBeenCalled();
        expect(randomNum.randomNumber).toBeCalledTimes(1);
    })

    it('Implementando uma nova logica de divisão e conferindo o retorno', () => {
        randomNum.randomNumber = jest.fn().mockImplementation((a, b) => a / b);
        
        randomNum.randomNumber(10, 2);

        expect(randomNum.randomNumber).toBeCalled();
        expect(randomNum.randomNumber(10, 2)).toBe(5);
        expect(randomNum.randomNumber).toBeCalledTimes(2);
        expect(randomNum.randomNumber).toBeCalledWith(10, 2);
    })

    it('receba 3 parametros e retorne a multiplicação', () => {
        randomNum.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

        randomNum.randomNumber(2, 4, 6);

        expect(randomNum.randomNumber).toBeCalled();
        expect(randomNum.randomNumber(2, 6, 9)).toBe(108);
        expect(randomNum.randomNumber).toBeCalledWith(2, 4, 6);
        expect(randomNum.randomNumber).toBeCalledTimes(2);

        randomNum.randomNumber = jest.fn().mockReset

        randomNum.randomNumber = jest.fn().mockImplementation((a) => a * 2);

        randomNum.randomNumber(20);

        expect(randomNum.randomNumber(10)).toBe(20);
        expect(randomNum.randomNumber).toBeCalled();
        expect(randomNum.randomNumber).toBeCalledWith(20);
        expect(randomNum.randomNumber).toBeCalledTimes(2);
    })
})