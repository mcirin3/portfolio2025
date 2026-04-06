// Pokédex-style Card Component
export default function PokedexCard({ id, title, types = [], content, children }) {
  const formattedId = String(id).padStart(3, '0');

  return (
    <div className="pokedex-card scanlines">
      <div className="pokedex-card-header">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <div className="flex flex-wrap gap-2">
            {types?.map((type) => (
              <span key={type} className={`text-badge type-badge type-${type?.toLowerCase()}`}>
                {type}
              </span>
            ))}
          </div>
        </div>
        <div className="text-right">
          <div className="pokedex-card-id">#{formattedId}</div>
        </div>
      </div>
      <div className="pokedex-card-body">
        {children || content}
      </div>
    </div>
  );
}
