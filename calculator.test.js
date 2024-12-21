import calculator from "./calculator";

test('2 + 2 should be equal to 4', () => {
    expect(calculator.add(2, 2)).toBe(4);
})

test('10 - 4 should be equal to 6', () => {
    expect(calculator.subtract(10, 4)).toBe(6);
})

test('10 / 2 should be equal to 5', () => {
    expect(calculator.divide(10, 2)).toBe(5);
})

test('2 * 5 should be equal to 10', () => {
    expect(calculator.multiply(2, 5)).toBe(10);
})
