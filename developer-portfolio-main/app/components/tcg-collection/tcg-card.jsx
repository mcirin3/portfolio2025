// @flow strict
"use client";

export default function TCGCard({ card }) {
  const typeColors = {
    Normal: "#A8A878",
    Fire: "#F08030",
    Water: "#6890F0",
    Electric: "#F8D030",
    Grass: "#78C850",
    Ice: "#98D8D8",
    Fighting: "#C03028",
    Poison: "#A040A0",
    Ground: "#E0C068",
    Flying: "#A890F0",
    Psychic: "#F85888",
    Bug: "#A8B820",
    Rock: "#B8A038",
    Ghost: "#705898",
    Dragon: "#7038F8",
    Dark: "#705848",
    Steel: "#B8B8D0",
    Fairy: "#EE99AC",
  };

  const rarityEmojis = {
    Common: "⚪",
    Uncommon: "◆",
    "Holo Rare": "⭐",
    "Ultra Rare": "✨",
    "Secret Rare": "💎",
  };

  const typeColor = typeColors[card.type] || "#808080";

  return (
    <div className="group relative h-full">
      {/* Card Container */}
      <div className="pokedex-card scanlines h-full flex flex-col overflow-hidden bg-gradient-to-br from-white/5 via-white/0 to-white/5 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        {/* Card Header */}
        <div className="px-4 pt-4 pb-2 flex justify-between items-start border-b border-white/10">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white truncate">{card.name}</h3>
            <p className="text-xs text-white/60">{card.set}</p>
          </div>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
            style={{ backgroundColor: typeColor }}
            title={card.type}
          >
            {card.type.charAt(0).toUpperCase()}
          </div>
        </div>

        {/* Card Image Section */}
        <div className="flex-1 flex items-center justify-center p-4 bg-gradient-to-b from-white/10 to-white/5">
          <img
            src={card.imageUrl}
            alt={card.name}
            className="max-h-64 max-w-full object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.src =
                "https://images.pokemontcg.io/base1/1.png";
            }}
          />
        </div>

        {/* Card Details */}
        <div className="px-4 py-3 border-t border-white/10 space-y-2">
          {/* Card Number & Type */}
          <div className="flex justify-between items-center">
            <p className="text-xs text-white/70 font-mono">#{card.cardNumber}</p>
            <span className="text-xs px-2 py-1 rounded-full border border-white/30 text-white/80">
              {rarityEmojis[card.rarity] || "•"} {card.rarity}
            </span>
          </div>

          {/* Condition */}
          <div className="flex justify-between items-center">
            <span className="text-xs text-white/60">Condition</span>
            <span className="text-xs font-semibold text-[var(--primary-color)]">
              {card.condition}
            </span>
          </div>

          {/* Quantity */}
          <div className="flex justify-between items-center">
            <span className="text-xs text-white/60">Qty</span>
            <span className="text-xs font-semibold">{card.quantity}x</span>
          </div>

          {/* Notes */}
          {card.notes && (
            <p className="text-xs text-white/70 italic pt-1 border-t border-white/10">
              "{card.notes}"
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
