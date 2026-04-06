// Pokemon Type Badge Component
export default function PokemonTypeBadge({ type, children }) {
  return (
    <span className={`type-badge type-${type?.toLowerCase() || 'normal'}`}>
      {children || type}
    </span>
  );
}
