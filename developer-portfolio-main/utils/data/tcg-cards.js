// Pokemon TCG Pocket Card Collection
// Add your cards here - you can update this anytime

export const tcgCards = [
  {
    id: 1,
    name: "Charizard ex",
    set: "Pokemon TCG Pocket",
    rarity: "Secret Rare",
    type: "Fire",
    cardNumber: "A1-284",
    imageUrl: "https://static.dotgg.gg/pokepocket/card/A1-284.webp",
    quantity: 1,
    condition: "Mint",
    notes: "Gold Charizard ex",
  },
  {
    id: 2,
    name: "Mewtwo ex",
    set: "Pokemon TCG Pocket",
    rarity: "Secret Rare",
    type: "Psychic",
    cardNumber: "A1-286",
    imageUrl: "https://static.dotgg.gg/pokepocket/card/A1-286.webp",
    quantity: 1,
    condition: "Mint",
    notes: "Gold Mewtwo",
  },
  {
    id: 3,
    name: "Ho-Oh ex",
    set: "Pokemon TCG Pocket",
    rarity: "Secret Rare",
    type: "Fire",
    cardNumber: "A4-240",
    imageUrl: "https://static.dotgg.gg/pokepocket/card/A4-240.webp",
    quantity: 1,
    condition: "Mint",
    notes: "Gold Ho-Oh",
  },
];

// Helper function to get cards by set
export function getCardsBySet(set) {
  return tcgCards.filter((card) => card.set === set);
}

// Helper function to get unique sets
export function getUniqueSets() {
  return [...new Set(tcgCards.map((card) => card.set))];
}

// Helper function to get cards by type
export function getCardsByType(type) {
  return tcgCards.filter((card) => card.type === type);
}

// Helper function to get unique types
export function getUniqueTypes() {
  return [...new Set(tcgCards.map((card) => card.type))];
}

// Helper function to get unique rarities
export function getUniqueRarities() {
  return [...new Set(tcgCards.map((card) => card.rarity))];
}

// Get total card count
export function getTotalCardCount() {
  return tcgCards.reduce((sum, card) => sum + card.quantity, 0);
}
