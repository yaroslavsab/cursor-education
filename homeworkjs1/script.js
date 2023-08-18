const cola = 15.678;
const iceCreem = 123.965;
const meat = 90.2345;




console.log("Max - " + Math.max(cola, iceCreem, meat));

console.log("Min -" + Math.min(cola, iceCreem, meat));

let sum = cola + iceCreem + meat;
console.log('Suma - ' + sum);

let sumFloor = Math.floor(cola) + Math.floor(iceCreem) + Math.floor(meat);

console.log("Сума товарів заокруглена до сотень " + Math.round(sumFloor / 100) * 100);

console.log(sumFloor % 2 === 0);

console.log(500 - sum);

console.log((sum / 3).toFixed(2));

let discount = Math.random() * 10;
console.log(discount);
console.log((sum - ((sum / 100) * discount)).toFixed(2));

console.log("Чистий прибуток " + ((sum / 2) - ((sum / 100) * discount)).toFixed(0))