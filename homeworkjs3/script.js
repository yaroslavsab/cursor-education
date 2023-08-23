function getMaxDigit(number) {
    // Перетворюємо число на рядок, щоб працювати з окремими цифрами
    const numberStr = number.toString();

    // Ініціалізуємо змінну для збереження найбільшої цифри
    let maxDigit = 0;

    // Проходимо по кожному символу у рядку
    for (let i = 0; i < numberStr.length; i++) {
        const digit = parseInt(numberStr[i]);

        // Порівнюємо поточну цифру з найбільшою знайденою
        if (digit > maxDigit) {
            maxDigit = digit;
        }
    }

    // Повертаємо найбільшу цифру
    return maxDigit;
}

console.log("Найбільша цифра:", getMaxDigit(749283));



const getSumTax = suma => suma - (suma / 100) * 19.5;

console.log(getSumTax(1000))