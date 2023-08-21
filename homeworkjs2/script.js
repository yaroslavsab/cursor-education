let n = +prompt("Введіть початкове ціле число n");
if (isNaN(n)) {
    alert("Число n не підходить");
} else {
    Math.round(n);
}

let m = +prompt("Введіть кінцеве ціле число m");
if (isNaN(m)) {
    alert("Число m не підходить");
} else {
    Math.round(m);
}
let pair = confirm("Чи пропускати пані числа?");

let sum = 0;
let parni = 0;

for (let i = n; i <= m; i++) {
    if (pair && i % 2 === 0) {
        parni += i;
    } else {
        sum += i;
    }
}




console.log(sum);
console.log(parni)