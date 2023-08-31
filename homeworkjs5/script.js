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
    let average = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = numbers[i] + sum;
    }

    return sum / numbers.length;
}

console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
