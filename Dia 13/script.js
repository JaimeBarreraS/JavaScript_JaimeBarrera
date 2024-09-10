function MostrarPokemon(id) {
    let url = 'https://deckofcardsapi.com/api/deck/cmiu0thbiaf8/draw/?count=52';
    fetch(url)
    .then(res => res.json())
    .then(Data => {
        let image = document.getElementById("Image");
        
        let gifUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${Data.id}.gif`;
        image.innerHTML = `<img class="poke" src="${gifUrl}" alt="${Data.name}">`;
        
        let Name = document.getElementById("PokeName");
        Name.innerHTML = `<p id="numero">${Data.id+'-'}</p><p id="name">${Data.name}</p>`;
        
    })
}