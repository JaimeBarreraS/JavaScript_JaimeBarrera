let pokemonId = 1; // ID inicial del Pokémon que se muestra al cargar la página

document.getElementById("Next").addEventListener("click", function() {
    pokemonId++;
    MostrarPokemon(pokemonId);
});

document.getElementById("Prev").addEventListener("click", function() {
    if (pokemonId > 1) {
        pokemonId--;
        MostrarPokemon(pokemonId);
    }
});

document.getElementById("Find").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        pokemonId = parseInt(document.getElementById("Find").value, 10);
        MostrarPokemon(pokemonId);
    }
});

function MostrarPokemon(id) {
    let url = "https://pokeapi.co/api/v2/pokemon/" + id;
    fetch(url)
    .then(res => res.json())
    .then(Data => {
        let image = document.getElementById("Image");
        // URL del GIF del Pokemon
        let gifUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${Data.id}.gif`;
        image.innerHTML = `<img class="poke" src="${gifUrl}" alt="${Data.name}">`;
        // Mostrar el nombre y numero del pokemon
        let Name = document.getElementById("PokeName");
        Name.innerHTML = `<p id="numero">${Data.id+'-'}</p><p id="name">${Data.name}</p>`;
        // Añadir y reproducir el sonido del Pokemon
        let audioUrl = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${Data.id}.ogg`;
        let audioElement = new Audio(audioUrl);
        audioElement.play(); // Reproduce el audio del pokemon
    })
}