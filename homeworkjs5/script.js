/*
1.Створіть функцію getRandomArray(length, min, max) – яка
повертає масив випадкових цілих чисел. У функції є параметри: length -
довжина масиву, min – мінімальне значення цілого числа, max – максимальне
значення цілого числа.
Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3,
2]*/


function getRandomArray(length, min, max) {
    let array = [];
    for (let i = 0; i < length; i++) {
        let rand = Math.floor(Math.random() * (max - min) + min);
        array[i] = rand;
    }
    return array;

}
console.log("getRandomArray - ", getRandomArray(15, 1, 100));

/*
3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне
всіх переданих в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4*/

function getAverage(...numbers) {
    let sum = 0;
    numbers.map((number) => {
        if (Number.isInteger(number)) {
            sum += number;
        }
        return sum;
    });
    return sum / numbers.length;

}

console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

/*
5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа
передані як аргументи функції.
Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]*/

function filterEvenNumbers(...numbers) {

    return numbers.filter((number) => {
        return number % 2 !== 0;
    })
}

console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6, 8));

/*
6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість
чисел більших
Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3
*/

function countPositiveNumbers(...numbers) {
    let count = 0;
    numbers.map((number) => {

        if (number > 0) {
            count++;
        }
        return count;
    });
    return count;
}

console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6, 5, -2));

/*
7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи
в масиві та залишить тільки ті, які діляться на ціло на 5
Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]
*/

const getDividedByFive = (...numbers) => numbers.filter((number) => number % 5 === 0);


console.log(getDividedByFive(6, 25, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

/*
8. Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2)
замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно
розбити масив на слова за допомогою функції .split(" "), після чого масив
необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте
можливість розширювати cписок цих слів у майбутньому.
Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing
kidding?"
Приклад: replaceBadWords("Holy shit!") -> "Holy ***!"
Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"
*/

function replaceBadWords(inputString) {
    const badWords = ["shit", "fuck"];

    function replaceWord(match) {
        return '*'.repeat(match.length);
    }

    const regex = new RegExp(badWords.join('|'), 'gi');

    const updatedString = inputString.replace(regex, replaceWord);

    return updatedString;
}

const inputString = "It's bullshit!";
const result = replaceBadWords(inputString);
console.log(result);

/*
Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні
склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди
видаляються. Рядок приводится до нижнього регістру.
Приклад: divideByThree("Commander) -> ["com", "man", "der"]
Приклад: divideByThree("live") -> ["liv", "e"]
*/

function divideByThree(word) {
    const lowerCaseWord = word.toLowerCase();
    const letters = lowerCaseWord.split('').filter(char => char !== ' ');
    const syllables = [];

    letters.map((letter, index) => {
        if (index % 3 === 0) {
            syllables.push(letter);
        } else {
            syllables[syllables.length - 1] += letter;
        }
    });

    return syllables;
}

const word1 = "Commander";
const result1 = divideByThree(word1);
console.log(result1); 