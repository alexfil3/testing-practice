import capitalize from "./capitalize";

test('return value should be a string', () => {
    expect(capitalize(9)).toBe('Please enter a string');
})

test('string can not be empty', () => {
    expect(capitalize('')).toBe('Your string should not be empty');
})

test('string can not be filled only with gaps', () => {
    expect(capitalize('    ')).toBe('Your string should not be empty');
})

test('the first character must be in an Uppercase', () => {
    expect(capitalize('orange')).toBe('Orange');
})

test('should return a string of the same length', () => {
    expect(capitalize('Lemon').length).toBe(5);
})

test('should return the same string', () => {
    expect(capitalize('Moon')).toBe('Moon');
})