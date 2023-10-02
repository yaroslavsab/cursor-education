function getRandomChinese(length) {
    return new Promise((resolve) => {
        let result = '';
        let i = 0;

        const generateCharacter = () => {
            const currentTime = Date.now();
            const lastFiveDigits = (currentTime % 100000).toString();
            const charCode = parseInt(lastFiveDigits, 10);
            const chineseCharacter = String.fromCharCode(charCode);
            result += chineseCharacter;

            i++;

            if (i < length) {
                setTimeout(generateCharacter, 50);
            } else {
                resolve(result);
            }
        };

        generateCharacter();
    });
}

// Приклад використання:
getRandomChinese(4).then((randomChinese) => {
    console.log(randomChinese);
});
