

// Функція для генерації 25 квадратів
function generateBlocks() {
    for (let i = 0; i < 25; i++) {
        const container = document.getElementById('container');
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
        container.style.width = '250px';
    }
}

// Функція для зміни кольору квадрату на випадковий
function changeColor(square) {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Генерація випадкового кольору
    square.style.backgroundColor = randomColor;
}

// Функція для зміни кольору всіх квадратів на випадковий
function changeColors() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        changeColor(square);
    });
}

// Функція для генерації квадратів та зміни їх кольору кожну секунду
function generateBlocksInterval() {
    generateBlocks();
    setInterval(changeColors, 1000);
}

// Викликаємо функцію для початку генерації квадратів та зміни їх кольору кожну секунду
generateBlocksInterval();
