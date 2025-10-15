// TODO: add hover effect to cards
// TODO: on click of card, play cry sound, and show more info (height, weight, abilities, etc.)
// TODO: add pokeball spinner while loading
// TODO: add search functionality
// TODO: add mega evolution functionality
// TODO: add shiny functionality (low chance of spawning shiny, play sound effect on spawn and sparkle animation when viewed)
// TODO: make page look nicer
// TODO: add legacy cry toggle

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const fetchButton = document.getElementById("fetch-button");
const container = document.getElementById("card");
const pokemonAmount = 8;
const typeColor = {
    normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD'
}
const shinySparkle = new Audio('assets/shiny.wav');
shinySparkle.volume = 0.1;

const fetchPokeData = async () => {
    try {
        // clear previous results
        container.innerHTML = "";

        // fetch data for multiple random Pokémon
        const promises = [];
        for (let i = 0; i < pokemonAmount; i++) {
            let id = Math.floor(Math.random() * 1025) + 1;
            promises.push(fetch(apiUrl + id));
        }
        const responses = await Promise.all(promises);
        const data = await Promise.all(responses.map(response => response.json()));
        data.forEach((pokemon) => {
            generateCard(pokemon);
        })
    } catch (error) {
        console.error("An error occurred:", error);
    }
};

let generateCard = (data) => {
    let isShiny = Math.random() < 0.01; // 1% chance to be shiny

    const pokeName = (data.name.charAt(0).toUpperCase() + data.name.slice(1)).replace(/-([a-z])/g, (hyphen, nextLetter) => '-' + nextLetter.toUpperCase()); /* capitalize first letter and letters after hyphens. world's best one-liner! regex used */
    const pokeSprite = isShiny ? data.sprites.other.home.front_shiny : data.sprites.other.home.front_default;

    const statHp = data.stats[0].base_stat;
    const statAttack = Math.floor((data.stats[1].base_stat+data.stats[3].base_stat/2)); /* average of attack and special attack */
    const statDefense = Math.floor((data.stats[2].base_stat+data.stats[4].base_stat/2)); /* average of defense and special defense */
    const statSpeed = data.stats[5].base_stat;
    const pokeCry = new Audio(data.cries.legacy ? data.cries.legacy : data.cries.latest);

    if (isShiny) {
        console.log(`${pokeName} is shiny!`);
        shinySparkle.currentTime = 0;
        shinySparkle.play();
    }

    pokeCry.volume = 0.25;

    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <p class="hp"> <span>HP</span> ${statHp}</p>
        <img src="${pokeSprite}" alt='${pokeName} Sprite' />
        <h2 class="poke-name">${pokeName}</h2>
        <div class="types"></div>

        <div class="card-bottom">
            <div>
                <h3>${statAttack}</h3>
                <p>ATK</p>
            </div>
            <div>
                <h3>${statDefense}</h3>
                <p>DEF</p>
            </div>
            <div>
                <h3>${statSpeed}</h3>
                <p>SPE</p>
            </div>
        </div>
        `;

    appendCardTypes(data.types, card);
    styleCard(data.types, card, isShiny);

    container.appendChild(card);

    // play cry sound on click at a reduced volume
    card.addEventListener("click", () => {
        pokeCry.currentTime = 0;
        pokeCry.play();
        if (isShiny) {
            shinySparkle.currentTime = 0;
            shinySparkle.play();
        }
    });
};

let appendCardTypes = (types, card) => {
    types.forEach((type) => {
        let span = document.createElement("span");
        span.textContent = type.type.name;
        card.querySelector(".types").appendChild(span);
    });
};

let styleCard = (types, card, isShiny) => {
    let cardColor = typeColor[types[0].type.name];
    card.style.background = `radial-gradient(circle at 50% 0%, ${cardColor} 36%, #ffffff 36%)`;
    card.querySelectorAll(".types span").forEach((type) => {
        type.style.backgroundColor = typeColor[type.textContent];
    });
    card.style.boxShadow = isShiny ? `0 0 15px 5px gold` : `0 12px 8px rgba(0, 0, 0, 0.2)`;
};

fetchButton.addEventListener("click", fetchPokeData);