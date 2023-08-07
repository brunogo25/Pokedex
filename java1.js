const getCharacters = async () => {
  const pokedex = [];
  for (let i = 1; i <= 150; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const response = await fetch(url);
    const res = await response.json();
    pokedex.push(res);
  }
  return pokedex;
};

const mappedCharacters = (characters) => {
  return characters.map((character) => ({
    name: character.name,
    image: character.sprites["front_default"],
    image2: character.sprites.versions['generation-v']['black-white'].animated.front_default,
    type: character.types.map((type) => type.type.name),
    id: character.id,
    height: character.height,
    weight: character.weight,
    stats: character.stats,
  }));
};





