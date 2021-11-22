const { shuffleArray } = require('./utils')


describe('shuffleArray should', () => {
    let arr = [1, 2, 3, 4]
    let result = shuffleArray(arr)

    test('shuffleArray should return array', () => {
        expect(Array.isArray(result)).toBe(true)
    })


    test('shuffleArray should be the same length', () => {
        expect(result.length).toEqual(arr.length)
    })
})