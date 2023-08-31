
function getRandomArray(length, min, max) {
    let array = [];
    for (let i = 0; i < length; i++) {
        let rand = Math.floor(Math.random() * (max - min) + min);
        array[i] = rand;
    }
    return array;

}

console.log("getRandomArray - ", getRandomArray(15, 1, 100));

