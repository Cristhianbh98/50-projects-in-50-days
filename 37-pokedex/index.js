const pokeContainer = document.getElementById('poke-container')
const pokemonCount = 150

const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#b198d7',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5'
}

const mainTypes = Object.keys(colors)

const fetchPokemons = async () => {
  for(let i = 1; i <= pokemonCount; i++) {
    await getPokemon(i)
  }
}

const getPokemon = async id => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data  = await response.json()

  createPokemonCard(data)
}

const createPokemonCard = pokemon => {
  const pokemonEl = document.createElement('div')
  pokemonEl.classList.add('pokemon')

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
  const id = pokemon.id.toString().padStart(3, '0')
  const types = pokemon.types.map(type => type.type.name)
  
  const type = mainTypes.find(type => types.indexOf(type) > -1)
  const color = colors[type]

  pokemonEl.style.backgroundColor = color

  const pokemonInnerHtml = `
    <div class="img-container">
      <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}"/>
    </div>

    <div class="info">
      <span class="number">#${id}</span>
      <h3 class="name">${name}</h3>
      <small class="type">Type: <span>${type}</span></small>
    </div>
  `

  pokemonEl.innerHTML = pokemonInnerHtml

  pokeContainer.appendChild(pokemonEl)
}

fetchPokemons()
