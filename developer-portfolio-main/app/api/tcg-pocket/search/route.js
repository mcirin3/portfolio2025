import { NextResponse } from "next/server";

const DOTGG_POCKET_CARDS_URL = "https://api.dotgg.gg/cgfw/getcards?game=pokepocket";
const CACHE_TTL_MS = 1000 * 60 * 60;

let cachedCards = null;
let cacheTime = 0;

async function getCards() {
  const now = Date.now();
  if (cachedCards && now - cacheTime < CACHE_TTL_MS) {
    return cachedCards;
  }

  const response = await fetch(DOTGG_POCKET_CARDS_URL, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch TCG Pocket cards");
  }

  const cards = await response.json();
  cachedCards = cards;
  cacheTime = now;
  return cards;
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const name = (searchParams.get("name") || "").trim().toLowerCase();

    if (!name) {
      return NextResponse.json({ cards: [] }, { status: 200 });
    }

    const cards = await getCards();
    const results = cards
      .filter((card) => {
        if (!card || card.type !== "Pokemon" || String(card.has_image) !== "1") {
          return false;
        }
        return card.name.toLowerCase().includes(name);
      })
      .slice(0, 20)
      .map((card) => ({
        id: card.id,
        name: card.name,
        set: card.set_name,
        rarity: card.rarity || "Unknown",
        type: card.color || "Normal",
        cardNumber: card.id,
        imageUrl: `https://static.dotgg.gg/pokepocket/card/${card.id}.webp`,
      }));

    return NextResponse.json({ cards: results }, { status: 200 });
  } catch (error) {
    console.error("TCG search failed:", error);
    return NextResponse.json(
      { error: "Card search failed" },
      { status: 500 }
    );
  }
}
