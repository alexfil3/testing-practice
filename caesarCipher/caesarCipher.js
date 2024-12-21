function caesarCipher(str, shift) {
    let res = '';

    for (let i = 0; i < str.length; i++) {
        let ascii = str.charCodeAt(i);

        if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
            ascii += shift;

            if ((ascii > 90 && str[i] <= 'Z') || ascii > 122) {
                ascii -= 26;
            }
        }

        res += String.fromCharCode(ascii);
    }

    return res;
}

export default caesarCipher;