import Link from "next/link";

function PageHeader({ eyebrow = "Discover", title, subtitle, ctaLabel, ctaHref, ctaTarget }) {
  return (
    <section className="relative mb-12 overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-6 shadow-[0_25px_120px_-60px_rgba(0,0,0,0.8)] sm:p-10 lg:mb-16">
      <div className="pointer-events-none absolute -left-10 -top-16 h-56 w-56 rounded-full bg-[#1d4f91]/18 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -right-14 h-56 w-56 rounded-full bg-[#d50032]/16 blur-3xl" />

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-[#d50032]">
            <span className="h-2 w-2 rounded-full bg-[#d50032] shadow-[0_0_0_6px_rgba(213,0,50,0.16)]" />
            {eyebrow}
          </div>
          <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {subtitle ? <p className="text-base text-white/70 sm:text-lg">{subtitle}</p> : null}
        </div>

        {ctaLabel && ctaHref ? (
          <Link
            href={ctaHref}
            target={ctaTarget}
            rel={ctaTarget === "_blank" ? "noreferrer" : undefined}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#d50032] via-[#e8414c] to-[#1d4f91] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_15px_80px_-35px_rgba(13,35,64,0.9)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            {ctaLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}

export default PageHeader;
