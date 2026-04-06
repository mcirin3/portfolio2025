// Search Pokemon TCG Pocket cards by Pokemon name and return card details with image URLs.
export async function searchTCGPocketCardsByName(pokemonName) {
  if (!pokemonName || !pokemonName.trim()) {
    return [];
  }

  const query = encodeURIComponent(pokemonName.trim());
  const response = await fetch(`/api/tcg-pocket/search?name=${query}`);
  if (!response.ok) {
    throw new Error("Failed to fetch TCG Pocket cards");
  }

  const data = await response.json();
  return data.cards || [];
}
