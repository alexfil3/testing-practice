function reverseString(str) {
    if (typeof str !== 'string') return 'Please enter a string';
    if (str.trim() === '') return 'Your string should not be empty';
    
    return str.split('').reverse().join('');
}

export default reverseString;