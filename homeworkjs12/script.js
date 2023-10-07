document.addEventListener('DOMContentLoaded', function () {
    const second = document.getElementById('second');

    function renderCharacters({ name, birth_year, gender }) {

        const filmTemplate = `
    <div class="character">
    <h2 class="character_title"><span>Ім'я персонажа:</span> ${name}</h2>
    <p class="year">Рік народження: ${birth_year}</p>
    <span>стать: ${gender}</span>
    </div>
    `;
        second.innerHTML += filmTemplate;
    }

    const input_number = document.querySelector('#film_number');
    let inputValue = "";
    input_number.addEventListener('input', e => {
        inputValue = e.target.value;
    })
    const btn = document.querySelector('#refresh_button');
    btn.addEventListener('click', () => {
        second.innerHTML = '';
        getSwapi(inputValue)
    })

    function fetchCharacters(character) {
        fetch(character)
            .then((res) => res.json())
            .then((character) => {
                renderCharacters(character)
            })
    }

    function getSwapi(id) {
        fetch(`https://swapi.dev/api/films/${id}`)
            .then((res) => res.json())
            .then((films) => {
                films.characters.forEach(character => {
                    fetchCharacters(character);
                });
            })
    }

    function renderPlanet({ name, diameter, population }) {
        const planetTemplate = `
        <div class="character">
        <h2 class="character_title"><span>Назва планети</span> ${name}</h2>
        <p class="year">Діаметр: ${diameter}</p>
        <span>Населення: ${population}</span>
        </div>
        `;
        second.innerHTML += planetTemplate;
    }

    async function getPlanet() {
        const request = await fetch('https://swapi.dev/api/planets');
        const resp = await request.json();
        resp.results.forEach(planet => {
            renderPlanet(planet);
        })

    }

    const nextbtn = document.querySelector('#next_button');
    nextbtn.addEventListener('click', () => {
        second.innerHTML = '';
        getPlanet()
    })

});

