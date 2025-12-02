import "./css/globals.scss";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#060914]">
      <div className="relative flex flex-col items-center gap-6">
        <div className="flame-track">
          <div className="flame-fill">
            <div className="ember ember-1" />
            <div className="ember ember-2" />
            <div className="ember ember-3" />
          </div>
          <div className="flame-glow" />
        </div>
        <p className="text-sm uppercase tracking-[0.2em] text-white/70">
          Loading
          <span className="inline-block animate-ellipsis ml-1">...</span>
        </p>
      </div>
    </div>
  );
}
