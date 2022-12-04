const poke_container = document.querySelector(".poke-container");
const pokemon_count = 150;
const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
};

const main_types = Object.keys(colors);

const createPokemon = function (data) {
    console.log(data);
    const html = `
		<div class="pokemon" style="background-color: ${
            colors[data.types[0].type.name]
        };">
			<div class="img-container">
				<img src="${data.sprites.front_default}" alt="">
			</div>
			<div class="info">
				<span class="number">#${data.id.toString().padStart(3, "0")}</span>
				<h3 class="name">${data.name
                    .split("")
                    .map((el, i) => (i === 0 ? el.toUpperCase() : el))
                    .join("")}</h3>
				<small class="type">Type: <span>${data.types[0].type.name}</span></small>
			</div>
		</div>
	`;

    poke_container.insertAdjacentHTML("beforeend", html);
};
const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    createPokemon(data);
};

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemon_count; i++) {
        getPokemon(i);
    }
};
const init = function () {
    fetchPokemons();
};
init();
