function analyzeArray(arr) {
    let average = arr.reduce((acc, num) => acc + num, 0) / arr.length;

    return {
        average,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
    }
}

export default analyzeArray;