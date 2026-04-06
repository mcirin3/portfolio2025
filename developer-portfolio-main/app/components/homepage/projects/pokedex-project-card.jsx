// @flow strict

import React from 'react';
import PokemonTypeBadge from '../../helper/pokemon-type-badge';
import { skillToPokemonType } from '@/utils/data/pokemon-skill-map';

function PokedexProjectCard({ project }) {
  const projectId = String(project.id).padStart(3, '0');
  
  // Classify tools by Pokemon types
  const toolsByType = project.tools.reduce((acc, tool) => {
    const type = skillToPokemonType[tool] || 'normal';
    if (!acc[type]) acc[type] = [];
    acc[type].push(tool);
    return acc;
  }, {});

  return (
    <div className="pokedex-card scanlines h-full">
      <div className="pokedex-card-header">
        <div className="flex-1">
          <h3 className="text-lg lg:text-xl font-bold text-white mb-3">{project.name}</h3>
          <div className="flex flex-wrap gap-2 mb-2">
            {Object.entries(toolsByType).map(([type, tools]) => (
              <div key={type} className="flex gap-1 flex-wrap">
                {tools.slice(0, 2).map((tool) => (
                  <PokemonTypeBadge key={tool} type={type}>
                    {tool.split(' ')[0]}
                  </PokemonTypeBadge>
                ))}
                {tools.length > 2 && (
                  <span className="text-xs px-2 py-1 text-white/60">+{tools.length - 2}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="text-right">
          <div className="pokedex-card-id">#{projectId}</div>
        </div>
      </div>

      <div className="pokedex-card-body">
        <div className="mb-4">
          <p className="text-white text-sm leading-relaxed opacity-90">
            {project.description.substring(0, 150)}...
          </p>
        </div>

        <div className="flex items-center gap-3 pt-3 border-t border-white/10">
          <span className="text-xs text-white/60 uppercase font-mono tracking-wider">Role:</span>
          <span className="text-sm font-semibold text-[var(--primary-color)]">
            {project.role}
          </span>
        </div>

        <div className="mt-3 flex gap-2">
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
              className="text-xs px-3 py-2 rounded border border-[var(--primary-color)]/30 text-[var(--primary-color)] hover:bg-[var(--primary-color)]/10 transition-colors"
            >
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="text-xs px-3 py-2 rounded border border-[var(--secondary-color)]/30 text-[var(--secondary-color)] hover:bg-[var(--secondary-color)]/10 transition-colors"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default PokedexProjectCard;
