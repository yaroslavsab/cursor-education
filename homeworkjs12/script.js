function renderCharacters({ name, birth_year, gender }) {

    const userTemplate = `
    <div class="character">
    <h2 class="character_title"><span>Ім'я:</span> ${name}</h2>
    <p class="year">Рік народження: ${birth_year}</p>
    <span>стать: ${gender}</span>
    </div>
    `;
    document.body.innerHTML += userTemplate;
}

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    getSwapi()
})

function fetchCharacters(character) {
    fetch(character)
        .then((res) => res.json())
        .then((character) => {
            renderCharacters(character)
        })
}

function getSwapi() {
    fetch("https://swapi.dev/api/films/2")
        .then((res) => res.json())
        .then((films) => {
            films.characters.forEach(character => {
                fetchCharacters(character)
            });
        })

}


