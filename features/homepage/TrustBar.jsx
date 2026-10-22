const TRUSTED_BRANDS = [
  {
    name: 'ApexHealth',
    wrapClass: 'text-blue-600',
    textClass: 'text-2xl font-bold tracking-tight',
    fontFamily: 'Arial, Helvetica, sans-serif',
    paths: [{ d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z' }],
  },
  {
    name: 'Sterling & Vance LLP',
    wrapClass: 'text-slate-900',
    textClass: 'text-xl font-bold italic',
    fontFamily: "'Times New Roman', Times, serif",
    paths: [{ d: 'M4 21h16v-2H4v2zM6 10h12v7H6v-7zm13-3V5H5v2h14zM12 2L2 7h20L12 2z' }],
  },
  {
    name: 'PROFIX',
    wrapClass: 'text-orange-600',
    textClass: 'text-xl font-black uppercase tracking-tighter',
    fontFamily: 'Impact, sans-serif',
    paths: [
      { d: 'M12.55 11l-3.32-3.32c-.52-.52-1.34-.52-1.87 0-.52.52-.52 1.34 0 1.87l3.32 3.32-3.32 3.32c-.52.52-.52 1.34 0 1.87.52.52 1.34.52 1.87 0l3.32-3.32 3.32 3.32c.52.52 1.34.52 1.87 0 .52-.52.52-1.34 0-1.87L14.42 11l3.32-3.32c.52-.52.52-1.34 0-1.87-.52-.52-1.34-.52-1.87 0L12.55 11z' },
      { d: 'M12 2L2 12h3v8h14v-8h3L12 2zm0 2.83L17.17 10H6.83L12 4.83z', opacity: '0.3' },
    ],
  },
  {
    name: 'Vanguard',
    wrapClass: 'text-emerald-700',
    textClass: 'text-xl font-semibold tracking-wide',
    fontFamily: "'Century Gothic', sans-serif",
    paths: [{ d: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z' }],
  },
  {
    name: 'Meridian',
    wrapClass: 'text-indigo-700',
    textClass: 'text-xl font-light uppercase tracking-widest',
    fontFamily: "'Trebuchet MS', sans-serif",
    paths: [{ d: 'M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z' }],
  },
]

function BrandLogo({ brand }) {
  return (
    <li className={`flex items-center gap-2 transition-all duration-300 cursor-default ${brand.wrapClass}`}>
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        {brand.paths.map((p) => (
          <path key={p.d} d={p.d} opacity={p.opacity} />
        ))}
      </svg>
      <span className={brand.textClass} style={{ fontFamily: brand.fontFamily }}>
        {brand.name}
      </span>
    </li>
  )
}

function BrandTrack({ duplicate = false }) {
  return (
    <ul className="flex items-center gap-16 px-8 list-none" aria-hidden={duplicate ? 'true' : undefined}>
      {TRUSTED_BRANDS.map((brand) => (
        <BrandLogo key={brand.name} brand={brand} />
      ))}
    </ul>
  )
}

export default function TrustBar() {
  return (
    <section
      className="py-12 bg-white border-y border-slate-200 overflow-hidden relative flex flex-col items-center"
      aria-labelledby="trustbar-heading"
    >
      <h2 id="trustbar-heading" className="text-xs font-bold text-slate-400 tracking-[0.2em] uppercase mb-8 text-center site-container">
        Trusted by top professionals across healthcare, legal, and home services
      </h2>

      <div className="site-container relative w-full flex overflow-hidden group/marquee">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" aria-hidden="true"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" aria-hidden="true"></div>

        <div className="flex animate-marquee whitespace-nowrap items-center">
          <BrandTrack />
          <BrandTrack duplicate />
        </div>
      </div>
    </section>
  )
}
