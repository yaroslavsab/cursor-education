function renderCharacters() {

}



function fetchCharacters(character) {
    fetch(character)
        .then((res) => res.json())
        .then((character) => {
            console.log(character.name)
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