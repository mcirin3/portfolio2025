// @flow strict
"use client";

import { useState } from "react";
import { fetchPokemonData } from "../../utils/pokeapi";
import PokemonTypeBadge from "../helper/pokemon-type-badge";

export default function PokemonSearch({ onAddPokemon, alreadyCaught }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [previewPokemon, setPreviewPokemon] = useState(null);
  const [level, setLevel] = useState(25);
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) {
      setError("Please enter a Pokemon name or ID");
      return;
    }

    setIsLoading(true);
    setError("");
    setPreviewPokemon(null);

    try {
      const pokemonData = await fetchPokemonData(searchQuery);
      
      if (alreadyCaught.includes(pokemonData.id)) {
        setError("You've already caught this Pokemon!");
        return;
      }

      setPreviewPokemon(pokemonData);
    } catch (err) {
      setError("Pokemon not found. Try another name or ID!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCatch = () => {
    if (previewPokemon) {
      onAddPokemon({
        id: previewPokemon.id,
        name: previewPokemon.name,
        imageUrl: previewPokemon.imageUrl,
        type: previewPokemon.type,
        level: level,
        location: location || undefined,
        caughtDate: new Date().toISOString(),
        notes: notes || undefined,
      });

      // Reset form
      setSearchQuery("");
      setPreviewPokemon(null);
      setLevel(25);
      setLocation("");
      setNotes("");
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-6 lg:p-8 mb-12">
      <h2 className="text-2xl font-bold text-white mb-6">Catch a Pokémon</h2>

      <form onSubmit={handleSearch} className="space-y-4">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search by name or ID (e.g. 'pikachu' or '25')"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[var(--primary-color)] transition-colors"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--primary-color)] via-[var(--accent-color)] to-[var(--secondary-color)] text-white font-semibold disabled:opacity-50 transition-all hover:shadow-lg"
          >
            {isLoading ? "Searching..." : "Search"}
          </button>
        </div>

        {error && (
          <p className="text-red-400 text-sm">{error}</p>
        )}
      </form>

      {previewPokemon && (
        <div className="mt-8 space-y-6">
          {/* Pokemon Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-white/5 border border-white/10">
              <img
                src={previewPokemon.imageUrl}
                alt={previewPokemon.name}
                className="w-40 h-40 object-contain mb-4"
              />
              <h3 className="text-2xl font-bold text-white mb-3">
                {previewPokemon.name}
              </h3>
              <div className="flex gap-2 mb-4">
                {previewPokemon.type.map((type) => (
                  <PokemonTypeBadge key={type} type={type}>
                    {type}
                  </PokemonTypeBadge>
                ))}
              </div>
              <p className="text-white/60 text-sm">
                #{previewPokemon.id.toString().padStart(3, '0')}
              </p>
            </div>

            {/* Catch Details Form */}
            <div className="space-y-4">
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  Level
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={level}
                  onChange={(e) => setLevel(parseInt(e.target.value) || 1)}
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[var(--primary-color)]"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  Location (optional)
                </label>
                <input
                  type="text"
                  placeholder="Where did you catch it?"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[var(--primary-color)]"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  Notes (optional)
                </label>
                <textarea
                  placeholder="Any memorable details about this Pokemon?"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[var(--primary-color)] resize-none"
                />
              </div>

              <button
                type="button"
                onClick={handleCatch}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white font-bold uppercase tracking-wider hover:shadow-lg transition-all"
              >
                ✓ Catch {previewPokemon.name}!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
