function renderCharacters({ name, birth_year, gender }) {
    const div = document.createElement('div');
    const h1 = document.createElement('h2');

    h1.textContent = name;

    div.append(h1);
    document.body.append(div);
    console.log(name, birth_year, gender);
}



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
            // console.log(films.characters)
            films.characters.forEach(character => {
                fetchCharacters(character)
            });
        })

}


getSwapi()