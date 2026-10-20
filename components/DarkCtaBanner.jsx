import Link from 'next/link'

// Shared dark call-to-action banner. Class strings are unchanged from the
// original markup on each page; only the copy and links vary.
export default function DarkCtaBanner({ heading, body, points, primary, secondary, headingId = 'dark-cta-heading' }) {
  return (
    <section className="bg-[#0f2925] py-14 sm:py-24 px-4 relative overflow-hidden" aria-labelledby={headingId}>
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#8CA365]/40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 -right-20 w-[700px] h-[700px] bg-[#00cc7a]/20 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#215153]/60 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2
          id={headingId}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 md:mb-6"
        >
          {heading}
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">{body}</p>

        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10 list-none">
          {points.map((point) => (
            <li
              key={point}
              className="icon-mask icon-check [--icon-size:1.25rem] flex items-center gap-2 text-white font-medium text-sm before:text-[#8CA365]"
            >
              {point}
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link prefetch={false}
            href={primary.href}
            className="w-full sm:w-auto inline-flex justify-center items-center bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-[#8CA365]/30 transition-all hover:-translate-y-1 text-lg"
          >
            {primary.label}
          </Link>
          <Link prefetch={false}
            href={secondary.href}
            className="w-full sm:w-auto inline-flex justify-center items-center bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 font-bold py-4 px-10 rounded-xl transition-all hover:-translate-y-1 text-lg"
          >
            {secondary.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
