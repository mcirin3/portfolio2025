// Pokémon Gym Badge Component
export default function GymBadge({ icon, label, year }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="gym-badge" title={label}>
        {icon}
      </div>
      <div className="text-center">
        <p className="text-xs font-bold text-white uppercase tracking-wide">{label}</p>
        {year && <p className="text-xs text-white/60">{year}</p>}
      </div>
    </div>
  );
}
