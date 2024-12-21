import caesarCipher from "./caesarCipher";

test('from "xyz" with shift 3 we should get "abc"', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
})

test('check for case, from "HeLLo" with shift 3 we should get "KhOOr"', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})

test('check for punctuation, spaces, and other non-alphabetical characters should remain unchanged', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

test('check big shift value', () => {
    expect(caesarCipher('abc', 29)).toBe('def');
})