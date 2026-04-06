// PokéAPI wrapper function for fetching Pokemon data
export async function fetchPokemonData(nameOrId) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nameOrId.toLowerCase()}`
    );

    if (!response.ok) {
      throw new Error('Pokemon not found');
    }

    const data = await response.json();

    return {
      id: data.id,
      name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
      imageUrl:
        data.sprites.other['official-artwork'].front_default ||
        data.sprites.front_default ||
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      type: data.types.map((t) => t.type.name),
      height: data.height,
      weight: data.weight,
      abilities: data.abilities.map((a) => a.ability.name),
      baseStats: {
        hp: data.stats.find((s) => s.stat.name === 'hp')?.base_stat || 0,
        attack: data.stats.find((s) => s.stat.name === 'attack')?.base_stat || 0,
        defense: data.stats.find((s) => s.stat.name === 'defense')?.base_stat || 0,
        spAtk: data.stats.find((s) => s.stat.name === 'special-attack')?.base_stat || 0,
        spDef: data.stats.find((s) => s.stat.name === 'special-defense')?.base_stat || 0,
        speed: data.stats.find((s) => s.stat.name === 'speed')?.base_stat || 0,
      },
    };
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
    throw error;
  }
}
