const exercises = require('./randomNumber')

describe('Testes exercicio 4', () => {
    it('implementando novas funções parte 1', () => {
        exercises.part1 = jest.fn().mockImplementation((a) => a.toLowerCase())
        exercises.part1('GIOVANNI MALDONADO')

        expect(exercises.part1('BANANINHA')).toBe('bananinha');
        expect(exercises.part1).toBeCalled();
        expect(exercises.part1).toBeCalledWith('GIOVANNI MALDONADO')
        expect(exercises.part1).toBeCalledTimes(2)
    })

    it('implementando novas funções parte 2', () => {
        exercises.part2 = jest.fn().mockImplementation((str) => str.charAt(str.length -1))
        exercises.part2('Banana')

        expect(exercises.part2('Mamão')).toBe('o')
        expect(exercises.part2).toBeCalled();
        expect(exercises.part2).toBeCalledWith('Banana')
        expect(exercises.part2).toBeCalledTimes(2)
    })

    it('Implementando novas funções parte 3', () => {
        exercises.part3 = jest.fn().mockImplementation((a, b, c) => a.concat(b, c))
        exercises.part3('V','Q','V')

        expect(exercises.part3('V', 'Q', 'V')).toBe('VQV')
        expect(exercises.part3).toBeCalled()
        expect(exercises.part3).toBeCalledWith('V','Q','V')
        expect(exercises.part3).toBeCalledTimes(2)
    })

    exercises.part1 = jest.fn().mockReset

    it('Voltando as funções originais parte 1', () => {
        exercises.part1 = jest.fn().mockImplementation((letter) => letter.toUpperCase())
        exercises.part1('Banana')

        expect(exercises.part1('Banana')).toBe('BANANA')
        expect(exercises.part1).toBeCalled();
        expect(exercises.part1).toBeCalledWith('Banana')
        expect(exercises.part1).toBeCalledTimes(2)
    })

    exercises.part2 = jest.fn().mockReset

    it('Voltando as funções originais parte 2', () => {
        exercises.part2 = jest.fn().mockImplementation((str) => str.charAt(0))
        exercises.part2('Banana')

        expect(exercises.part2('banana')).toBe('b')
        expect(exercises.part2).toBeCalled
        expect(exercises.part2).toBeCalledWith('Banana')
        expect(exercises.part2).toBeCalledTimes(2)
    })

    exercises.part3 = jest.fn().mockReset

    it('Voltando as funções originais parte 3', () => {
        exercises.part3 = jest.fn().mockImplementation((a, b) => a.concat(b))
        exercises.part3('Try', 'be')

        expect(exercises.part3('VQ','V')).toBe('VQV')
        expect(exercises.part3).toBeCalled
        expect(exercises.part3).toBeCalledWith('Try', 'be')
        expect(exercises.part3).toBeCalledTimes(2)
    })
})
