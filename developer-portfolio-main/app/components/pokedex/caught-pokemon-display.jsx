// @flow strict
"use client";

import { useState } from "react";
import StatBar from "../helper/stat-bar";
import PokemonTypeBadge from "../helper/pokemon-type-badge";

export default function CaughtPokemonDisplay({
  pokemon,
  onRemove,
  onUpdate,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editLevel, setEditLevel] = useState(pokemon.level);
  const [editLocation, setEditLocation] = useState(pokemon.location || "");
  const [editNotes, setEditNotes] = useState(pokemon.notes || "");

  const handleSave = () => {
    onUpdate(pokemon.id, {
      level: editLevel,
      location: editLocation || undefined,
      notes: editNotes || undefined,
    });
    setIsEditing(false);
  };

  const caughtDate = new Date(pokemon.caughtDate);
  const formattedDate = caughtDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="pokedex-card scanlines h-full flex flex-col">
      <div className="pokedex-card-header">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-bold text-white">{pokemon.name}</h3>
            <span className="pokedex-card-id">#{pokemon.id.toString().padStart(3, "0")}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {pokemon.type.map((type) => (
              <PokemonTypeBadge key={type} type={type}>
                {type}
              </PokemonTypeBadge>
            ))}
          </div>
        </div>
      </div>

      <div className="pokedex-card-body flex-1">
        {/* Pokemon Image */}
        <div className="mb-4 flex justify-center">
          <img
            src={pokemon.imageUrl}
            alt={pokemon.name}
            className="w-32 h-32 object-contain"
          />
        </div>

        {!isEditing ? (
          <>
            {/* Display Stats */}
            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-white font-semibold">Level</span>
                <span className="text-[var(--primary-color)] text-lg">
                  {pokemon.level}
                </span>
              </div>

              {pokemon.location && (
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-sm">📍 Location</span>
                  <span className="text-white text-sm">{pokemon.location}</span>
                </div>
              )}

              <div className="flex justify-between items-center">
                <span className="text-white/70 text-sm">📅 Caught</span>
                <span className="text-white text-sm">{formattedDate}</span>
              </div>

              {pokemon.notes && (
                <div className="mt-3 p-2 bg-white/5 rounded border border-white/10">
                  <p className="text-white/80 text-xs">{pokemon.notes}</p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setIsEditing(true)}
                className="flex-1 px-3 py-2 text-xs rounded border border-[var(--primary-color)]/30 text-[var(--primary-color)] hover:bg-[var(--primary-color)]/10 transition-colors"
              >
                Edit
              </button>
              <button
                onClick={() => onRemove(pokemon.id)}
                className="flex-1 px-3 py-2 text-xs rounded border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors"
              >
                Release
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Edit Form */}
            <div className="space-y-3">
              <div>
                <label className="block text-white text-xs font-semibold mb-1">
                  Level
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={editLevel}
                  onChange={(e) => setEditLevel(parseInt(e.target.value) || 1)}
                  className="w-full px-2 py-1 text-xs rounded bg-white/10 border border-white/20 text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-white text-xs font-semibold mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={editLocation}
                  onChange={(e) => setEditLocation(e.target.value)}
                  className="w-full px-2 py-1 text-xs rounded bg-white/10 border border-white/20 text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-white text-xs font-semibold mb-1">
                  Notes
                </label>
                <textarea
                  value={editNotes}
                  onChange={(e) => setEditNotes(e.target.value)}
                  rows={2}
                  className="w-full px-2 py-1 text-xs rounded bg-white/10 border border-white/20 text-white focus:outline-none resize-none"
                />
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleSave}
                  className="flex-1 px-2 py-1 text-xs rounded bg-green-600/70 text-white hover:bg-green-600 transition-colors"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex-1 px-2 py-1 text-xs rounded bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
