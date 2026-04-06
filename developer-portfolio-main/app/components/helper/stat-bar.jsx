// Pokémon Stat Bar Component
export default function StatBar({ label, value = 0, maxValue = 100, type = 'primary' }) {
  const percentage = (value / maxValue) * 100;

  return (
    <div className="stat-bar">
      <div className="stat-label">{label}</div>
      <div className="stat-track">
        <div
          className="stat-fill"
          style={{
            width: `${Math.min(percentage, 100)}%`,
          }}
        />
      </div>
      <div className="text-xs font-mono text-white/70">{value}</div>
    </div>
  );
}
