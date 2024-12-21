function capitalize(str) {
    if (typeof str !== 'string') return 'Please enter a string';
    if (str.trim() === '') return 'Your string should not be empty';

    return str[0].toUpperCase() + str.slice(1);
}

export default capitalize;