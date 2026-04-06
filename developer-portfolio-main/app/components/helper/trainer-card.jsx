// Trainer Stats Card Component
export default function TrainerCard({ stats = [] }) {
  return (
    <div className="trainer-card">
      <div className="trainer-stats">
        {stats.map((stat, idx) => (
          <div key={idx} className="trainer-stat">
            <div className="trainer-stat-value">{stat.value}</div>
            <div className="trainer-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
