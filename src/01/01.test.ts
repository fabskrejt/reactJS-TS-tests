import {multiply, sum} from './01'

let a: number;
let b: number;
let c: number;

beforeEach(() =>{
    a = 1;
    b = 4;
    c = 7;
})

test('sum should be correct', () =>{
    const result1 = sum(a, b)
    const result2 = sum(b, c)
    const result3 = sum(a, c)

    expect(result1).toBe(5)
    expect(result2).toBe(11)
    expect(result3).toBe(8)
})

test('multiply should be correct', () => {
    const result1 = multiply(a, b)
    const result2 = multiply(b, c)
    const result3 = multiply(a, c)

    expect(result1).toBe(4)
    expect(result2).toBe(28)
    expect(result3).toBe(7)
})