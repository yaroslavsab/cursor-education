function getMaxDigit(number) {
    const numberStr = number.toString();
    let maxDigit = 0;
    for (let i = 0; i < numberStr.length; i++) {
        const digit = parseInt(numberStr[i]);
        if (digit > maxDigit) {
            maxDigit = digit;
        }
    }
    return maxDigit;
}

console.log("Найбільша цифра:", getMaxDigit(749283));


const getSumTax = suma => suma - (suma / 100) * 19.5;

console.log("Відсоток", getSumTax(1000));

function random(n, m) {
    return (Math.random() * (m - n) + n).toFixed(0);
}
console.log("Випадкове число ві 1 до 10 - ", random(1, 10));

function pow(n, step) {
    let count = 1;
    if (step > 0) {
        for (let i = 0; i < step; i++) {
            count *= n;
        }
    }
    return count;
}

console.log("Ступінь числа -", pow(6, 2));