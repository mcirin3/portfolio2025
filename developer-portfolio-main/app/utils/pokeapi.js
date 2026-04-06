// Utility to fetch Pokemon data from PokéAPI
export async function fetchPokemonData(nameOrId) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nameOrId.toString().toLowerCase()}`
    );
    
    if (!response.ok) {
      throw new Error('Pokemon not found');
    }

    const data = await response.json();

    return {
      id: data.id,
      name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
      imageUrl: data.sprites.other['official-artwork'].front_default || 
                data.sprites.front_default,
      type: data.types.map((t) => t.type.name),
      height: data.height,
      weight: data.weight,
      abilities: data.abilities.map((a) => a.ability.name),
      baseStats: {
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        spAtk: data.stats[3].base_stat,
        spDef: data.stats[4].base_stat,
        speed: data.stats[5].base_stat,
      },
    };
  } catch (error) {
    console.error('Failed to fetch Pokemon:', error);
    throw error;
  }
}
