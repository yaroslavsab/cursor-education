document.addEventListener('DOMContentLoaded', function () {
    const second = document.getElementById('second');

    function renderCharacters({ name, birth_year, gender }) {

        const filmTemplate = `
    <div class="character">
    <h2 class="character_title"><span>Ім'я:</span> ${name}</h2>
    <p class="year">Рік народження: ${birth_year}</p>
    <span>стать: ${gender}</span>
    </div>
    `;
        second.innerHTML += filmTemplate;
    }

    const btn = document.querySelector('#refresh_button');
    btn.addEventListener('click', () => {
        second.innerHTML = '';
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
                    fetchCharacters(character);
                });
            })
    }

    function renderPlanet({ name, diameter, population }) {
        const planetTemplate = `
        <div class="character">
        <h2 class="character_title"><span>Ім'я:</span> ${name}</h2>
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

        console.log(resp.results);
    }

    const nextbtn = document.querySelector('#next_button');
    nextbtn.addEventListener('click', () => {
        second.innerHTML = '';
        getPlanet()
    })

});

