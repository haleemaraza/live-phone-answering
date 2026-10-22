// Colours and sizes copied verbatim from the page's original markup.
const STATS = [
  { value: '20+', label: 'Industries Served', icon: 'icon-building', tone: 'bg-[#8CA365]/10 text-[#8CA365]' },
  { value: 'HIPAA', label: 'Fully Compliant', icon: 'icon-shield-check', tone: 'bg-[#295657]/10 text-[#295657]' },
  { value: '98.5%', label: 'Client Satisfaction', icon: 'icon-smile', tone: 'bg-[#8CA365]/10 text-[#8CA365]' },
  { value: '<4', label: 'Rings to Answer', icon: 'icon-bolt', tone: 'bg-[#295657]/10 text-[#295657]' },
]

export default function TrustStats() {
  return (
    <section
      className="py-16 md:py-20 bg-slate-50 relative overflow-hidden font-sans border-t border-gray-100"
      aria-labelledby="trust-stats-heading"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-[#8CA365]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-16 w-80 h-80 bg-[#295657]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="site-container relative z-10">
        <div className="text-center mb-14 reveal">
          <p className="icon-mask icon-shield-check inline-flex items-center gap-2 bg-[#295657]/10 text-[#295657] rounded-full text-sm font-semibold px-4 py-1.5 mb-5">
            Trusted Across Industries
          </p>
          <h2 id="trust-stats-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] tracking-tight">
            Why Businesses Trust Us With Their Calls
          </h2>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 list-none">
          {STATS.map((stat) => (
            <li
              key={stat.label}
              className="bg-white rounded-2xl p-6 md:p-8 text-center border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 reveal"
            >
              <span
                className={`icon-mask ${stat.icon} [--icon-size:1.75rem] w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 ${stat.tone}`}
                aria-hidden="true"
              ></span>
              <p className="text-3xl md:text-4xl font-extrabold text-[#34414A]">{stat.value}</p>
              <p className="text-sm text-gray-500 font-medium mt-1">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
