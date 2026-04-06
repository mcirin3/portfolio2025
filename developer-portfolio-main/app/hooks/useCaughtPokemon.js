// Hook to manage caught Pokemon with localStorage persistence
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'caught-pokemon';

export function useCaughtPokemon() {
  const [caughtPokemon, setCaughtPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setCaughtPokemon(JSON.parse(saved));
      }
    } catch (error) {
      console.error('Failed to load caught Pokemon:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save to localStorage whenever caught Pokemon changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(caughtPokemon));
    }
  }, [caughtPokemon, isLoading]);

  const addPokemon = (pokemon) => {
    setCaughtPokemon((prev) => {
      // Check if already caught
      if (prev.some((p) => p.id === pokemon.id)) {
        return prev;
      }
      return [...prev, pokemon];
    });
  };

  const removePokemon = (pokemonId) => {
    setCaughtPokemon((prev) => prev.filter((p) => p.id !== pokemonId));
  };

  const updatePokemon = (pokemonId, updates) => {
    setCaughtPokemon((prev) =>
      prev.map((p) => (p.id === pokemonId ? { ...p, ...updates } : p))
    );
  };

  const getSortedPokemon = (sortBy = 'date') => {
    const sorted = [...caughtPokemon];
    switch (sortBy) {
      case 'name':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'level':
        return sorted.sort((a, b) => b.level - a.level);
      case 'date':
      default:
        return sorted.sort(
          (a, b) => new Date(b.caughtDate).getTime() - new Date(a.caughtDate).getTime()
        );
    }
  };

  return {
    caughtPokemon: getSortedPokemon(),
    addPokemon,
    removePokemon,
    updatePokemon,
    isLoading,
    totalCaught: caughtPokemon.length,
  };
}
