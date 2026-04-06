// @flow strict
"use client";

import { useEffect, useMemo, useState } from "react";
import TCGCard from "./tcg-card";
import { tcgCards } from "@/utils/data/tcg-cards";

const STORAGE_KEY = "tcg-collection-v1";

export default function TCGCollectionManager() {
  const [collection, setCollection] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("rarity-desc");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setCollection(JSON.parse(saved));
      } else {
        setCollection(tcgCards);
      }
    } catch (error) {
      console.error("Failed to load TCG collection:", error);
      setCollection(tcgCards);
    } finally {
      setIsReady(true);
    }
  }, []);

  useEffect(() => {
    if (!isReady) {
      return;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(collection));
  }, [collection, isReady]);

  const filteredCards = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) {
      return collection;
    }

    return collection.filter((card) => {
      return [card.name, card.set, card.rarity, card.type, card.cardNumber]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(q));
    });
  }, [collection, searchQuery]);

  const totalCardCount = useMemo(() => {
    return collection.reduce((sum, card) => sum + (Number(card.quantity) || 0), 0);
  }, [collection]);

  const sortedCards = useMemo(() => {
    const rarityRank = {
      "crown rare": 100,
      "immersive rare": 90,
      "secret rare": 85,
      "shiny super rare": 80,
      "super rare": 70,
      "double rare": 60,
      rare: 40,
      uncommon: 30,
      common: 20,
      "art rare": 0,
    };

    const getRarityRank = (card) => {
      const rarity = (card.rarity || "").toLowerCase();
      const notes = (card.notes || "").toLowerCase();
      const isGold = rarity.includes("gold") || notes.includes("gold") || rarity === "crown rare";

      if (isGold) {
        return 110;
      }

      return rarityRank[rarity] ?? 50;
    };

    const cards = [...filteredCards];

    if (sortBy === "name-asc") {
      return cards.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortBy === "name-desc") {
      return cards.sort((a, b) => b.name.localeCompare(a.name));
    }

    if (sortBy === "rarity-asc") {
      return cards.sort((a, b) => {
        const aRank = getRarityRank(a);
        const bRank = getRarityRank(b);
        return aRank - bRank;
      });
    }

    return cards.sort((a, b) => {
      const aRank = getRarityRank(a);
      const bRank = getRarityRank(b);
      return bRank - aRank;
    });
  }, [filteredCards, sortBy]);

  return (
    <section className="space-y-8">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 lg:p-6">
        <h2 className="mb-4 text-xl font-bold text-white">Collection</h2>
        <div className="mb-4 grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
          <input
            type="text"
            placeholder="Search by name, number, set, type, rarity..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="md:col-span-2 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white appearance-none focus:outline-none focus:border-[var(--primary-color)]"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", color: "white" }}
          >
            <option value="rarity-desc" style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>
              Rarity: High to Low
            </option>
            <option value="rarity-asc" style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>
              Rarity: Low to High
            </option>
            <option value="name-asc" style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>
              Name: A to Z
            </option>
            <option value="name-desc" style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>
              Name: Z to A
            </option>
          </select>
          <div className="text-sm text-white/70">
            {isReady ? `${filteredCards.length} shown / ${totalCardCount} total cards` : "Loading..."}
          </div>
        </div>

        {sortedCards.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedCards.map((card) => (
              <TCGCard key={card.id} card={card} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-white/60">No cards match your search.</div>
        )}
      </div>
    </section>
  );
}
