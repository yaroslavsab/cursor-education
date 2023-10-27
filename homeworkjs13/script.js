import './styles/main.scss';


function* infiniteGenerator() {
    let init = 1;
    for (let i = 0; i < Infinity; i++) {
        init += 1;
        yield init
    }

}

const idGenerator = infiniteGenerator();

function* newFontGenerator(initialSize) {
    let fontSize = initialSize;
    while (true) {
        const command = yield fontSize;
        if (command === "up") {
            fontSize += 2;
        } else if (command === "down") {
            fontSize -= 2;
        }
    }
}



const fontGenerator = newFontGenerator(14);
console.log(fontGenerator.next("up").value);    // 14
console.log(fontGenerator.next("up").value);    // 16
console.log(fontGenerator.next("up").value);    // 18
console.log(fontGenerator.next().value);        // 18
console.log(fontGenerator.next("down").value);  // 16
console.log(fontGenerator.next("down").value);  // 14
console.log(fontGenerator.next("down").value);  // 12
console.log(fontGenerator.next().value);        // 