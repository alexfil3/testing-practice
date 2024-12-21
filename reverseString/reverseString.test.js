import reverseString from "./reverseString";

test('return value should be a string', () => {
    expect(reverseString(9)).toBe('Please enter a string');
})

test('string can not be empty', () => {
    expect(reverseString('')).toBe('Your string should not be empty');
})

test('string can not be filled only with gaps', () => {
    expect(reverseString('    ')).toBe('Your string should not be empty');
})

test('return value should be a string', () => {
    expect(reverseString('9')).toBe('9');
})

test('should return a string of the same length', () => {
    expect(reverseString('Lemon').length).toBe(5);
})

test('string should be reversed', () => {
    expect(reverseString('rat')).toBe('tar');
})