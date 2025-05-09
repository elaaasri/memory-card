// get random 20 pokemons :
const getRandomPokemons = (data) => {
  const randomPokemons = [];
  for (let i = 0; i < 20; i++) {
    const randomIndex = Math.floor(Math.random() * data.results.length);
    randomPokemons.push(data.results[randomIndex]);
  }
  return randomPokemons;
};
// fetch and get pokemon cards (name and img):
const fetchAndGetPokemonsCards = (randomPokemons) => {
  const promises = randomPokemons.map(async (pokemon) => {
    const res = await fetch(pokemon.url);
    const data = await res.json();
    return {
      name: data.name,
      img: data.sprites.front_default,
      isClicked: false,
    };
  });
  return Promise.all(promises);
};
// fetch pokemon api promise chain :
const fetchPokemonApi = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  const randomPokemons = getRandomPokemons(data);
  const pokemonCards = await fetchAndGetPokemonsCards(randomPokemons);
  console.log(pokemonCards);
  return pokemonCards;
};

export default fetchPokemonApi;
