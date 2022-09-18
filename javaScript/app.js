const poke_container = document.getElementById('poke_container')

const number_of_pokemons = 905

function createPokemonCard(pokemon)
{
    const pokemonCard = document.createElement('div')
    pokemonCard.classList.add('pokemon')

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)


    
    const pokeInnerHTML = `
        <div class= "sprite-container">
            <img src="https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/00${pokemon.id}.png"></img>
        </div>
        ${name}
        ${pokemon.id}
    `

    pokemonCard.innerHTML = pokeInnerHTML

    poke_container.appendChild(pokemonCard)
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const pokemon = await res.json()
    createPokemonCard(pokemon)
    // console.log(pokemon)
}

const fetchPokemon = async () => {
    for(let i = 1; i<=number_of_pokemons; i++)
    {
        await getPokemon(i)
    }
}

fetchPokemon()


