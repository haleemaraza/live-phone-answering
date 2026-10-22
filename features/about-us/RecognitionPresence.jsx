// Class strings are copied verbatim from the page's original markup. The one
// change is the backdrop: the #0B1120 block and its blurred spotlight orb are
// replaced by a photograph with the same navy tone laid over it.
const LOGOS = [
  {
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    path: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  },
  {
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    path: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z',
  },
  {
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    path: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
  },
  {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: true,
    path: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
]

const PLAQUES = [
  {
    title: 'Upholding the Highest Industry Standards',
    body: 'As active participants in regional business networks and B2B service associations, we stay at the absolute forefront of operational best practices. By engaging with industry leaders and continuously refining our protocols, we ensure our clients always receive a service level that exceeds standard industry benchmarks.',
    iconPath:
      'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: 'Empowering Local Business Growth',
    body: 'We believe that local service businesses are the backbone of the economy. Beyond our daily call-answering operations, we dedicate time, insights, and resources to entrepreneurial networks. Our mission extends to helping contractors, legal professionals, and service owners scale their operations, capture more leads, and create local jobs.',
    iconPath: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
  },
]

const PLAQUE_CLASSNAME =
  'group relative p-10 rounded-3xl bg-slate-800/40 backdrop-blur-2xl border border-slate-700/50 hover:bg-slate-800/60 hover:border-[#8CA365]/60 transition-all duration-500 overflow-hidden shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#8CA365]/10 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500'

export default function RecognitionPresence() {
  return (
    <section className="bg-[#0B1120] py-32 relative overflow-hidden" aria-labelledby="recognition-heading">
      <img
        src="/images/hand.jpg"
        alt=""
        aria-hidden="true"
        width={736}
        height={414}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0B1120]/80" aria-hidden="true"></div>

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col">
            <p className="inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#8CA365] text-xs font-bold px-4 py-1.5 rounded-full mb-8 border border-[#8CA365]/20 uppercase tracking-widest w-max">
              Industry Recognition
            </p>

            <h2
              id="recognition-heading"
              className="block text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-6 leading-tight tracking-tight"
            >
              Recognition &amp; Industry Presence &mdash; Rooted in the Business Community
            </h2>

            <p className="text-slate-400 mb-12 text-lg leading-relaxed">
              True authority isn&apos;t just about the calls we answer; it&apos;s about the communities we support and
              the industry standards we actively uphold.
            </p>

            <div>
              <p className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-6">
                Recognized By &amp; Associated With
              </p>
              <div className="flex flex-wrap gap-8 items-center opacity-60" aria-hidden="true">
                {LOGOS.map((logo) => (
                  <svg
                    key={logo.path}
                    className="h-8 w-auto object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 cursor-default brightness-200 text-white"
                    fill={logo.fill}
                    stroke={logo.stroke ? 'currentColor' : undefined}
                    strokeWidth={logo.stroke ? '2' : undefined}
                    viewBox={logo.viewBox}
                  >
                    <path
                      strokeLinecap={logo.stroke ? 'round' : undefined}
                      strokeLinejoin={logo.stroke ? 'round' : undefined}
                      d={logo.path}
                    />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          <ul className="lg:col-span-7 flex flex-col gap-8 list-none">
            {PLAQUES.map((plaque) => (
              <li key={plaque.title} className={PLAQUE_CLASSNAME}>
                <div
                  className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#8CA365] to-transparent opacity-50 group-hover:opacity-100 transition-opacity"
                  aria-hidden="true"
                ></div>

                <div
                  className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#8CA365] mb-8 group-hover:-translate-y-1 group-hover:shadow-[0_0_20px_rgba(140,163,101,0.2)] transition-all duration-500 relative z-10"
                  aria-hidden="true"
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={plaque.iconPath} />
                  </svg>
                </div>

                <h3 className="block text-2xl font-bold text-white mb-4 leading-snug tracking-wide relative z-10">
                  {plaque.title}
                </h3>

                <p className="text-slate-400 text-base leading-relaxed relative z-10 group-hover:text-slate-300 transition-colors">
                  {plaque.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
