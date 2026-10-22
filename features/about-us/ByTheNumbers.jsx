import { LockIcon, PhoneIcon, StarIcon } from './icons'

const BUILDING_PATH =
  'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
const CLOCK_PATH = 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
const CALENDAR_PATH = 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'

function Outline({ d }) {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d} />
    </svg>
  )
}

const STATS = [
  {
    value: '1,482,904',
    label: 'Calls Answered',
    description: 'Handled with zero dropped calls since our founding.',
    icon: <PhoneIcon className="w-5 h-5" />,
  },
  {
    value: '10,243',
    label: 'Businesses Supported',
    description: 'Across all 50 US states and multiple high-ticket industries.',
    icon: <Outline d={BUILDING_PATH} />,
  },
  {
    value: '11.4 Sec',
    label: 'Average Answer Time',
    description: 'Connecting your leads to a live human in under 4 rings.',
    icon: <Outline d={CLOCK_PATH} />,
  },
  {
    value: '4.9/5',
    label: 'Across 2,145 Reviews',
    description: 'Verified Google reviews from real, growing businesses.',
    icon: <StarIcon className="w-5 h-5 fill-current" />,
    featured: true,
  },
  {
    value: '100%',
    label: 'HIPAA-Compliant',
    description: 'Bank-level encryption and secure call handling protocols.',
    icon: <LockIcon className="w-5 h-5" />,
  },
  {
    value: '4 Years',
    label: 'Uninterrupted Service',
    description: 'Day, night, weekends, and holidays—we never clock out.',
    icon: <Outline d={CALENDAR_PATH} />,
  },
]

function StatCard({ stat }) {
  return (
    <li className={stat.featured ? 'group relative bg-gradient-to-br from-[#8CA365]/15 to-[#8CA365]/5 border-2 border-[#8CA365]/60 hover:border-[#8CA365] rounded-2xl p-8 flex flex-col items-start gap-5 transition-all duration-300 overflow-hidden shadow-[0_0_30px_rgba(140,163,101,0.12)]' : 'group relative bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#8CA365]/40 rounded-2xl p-8 flex flex-col items-start gap-5 transition-all duration-300 overflow-hidden'}>
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8CA365]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        aria-hidden="true"
      ></div>

      <div className={`flex items-center gap-3 w-full ${stat.featured ? 'justify-between' : ''}`}>
        <span
          className={
            stat.featured
              ? 'w-12 h-12 rounded-xl bg-[#8CA365]/20 border border-[#8CA365]/40 flex items-center justify-center text-yellow-400 shrink-0'
              : 'w-12 h-12 rounded-xl bg-[#8CA365]/10 border border-[#8CA365]/20 flex items-center justify-center text-[#8CA365] group-hover:bg-[#8CA365] group-hover:text-white group-hover:border-[#8CA365] transition-all duration-300 shrink-0'
          }
        >
          {stat.icon}
        </span>
        {stat.featured && (
          <span className="text-xs font-bold text-[#8CA365] uppercase tracking-widest bg-[#8CA365]/10 px-3 py-1 rounded-full border border-[#8CA365]/20">
            Featured
          </span>
        )}
      </div>

      <div>
        <p className="text-4xl font-black text-white tracking-tight mb-1">{stat.value}</p>
        <p className="text-sm font-bold text-[#8CA365] uppercase tracking-wider mb-2">{stat.label}</p>
        <p className={`text-sm leading-relaxed ${stat.featured ? 'text-slate-300' : 'text-slate-400'}`}>{stat.description}</p>
      </div>
    </li>
  )
}

export default function ByTheNumbers() {
  return (
    <section className="bg-[#0f2925] py-14 sm:py-24 relative overflow-hidden" aria-labelledby="numbers-heading">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#8CA365]/40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 -right-20 w-[700px] h-[700px] bg-[#00cc7a]/20 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#215153]/60 rounded-full blur-[120px]"></div>
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        ></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(140,163,101,0.08)_0%,_transparent_70%)]"></div>
      </div>

      <div className="site-container relative z-10">
        <div className="text-center mb-16">
          <p className="inline-flex items-center gap-2 bg-[#8CA365]/10 border border-[#8CA365]/30 text-[#8CA365] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8CA365] animate-pulse inline-block" aria-hidden="true"></span>
            Live Operational Data
          </p>
          <h2
            id="numbers-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight max-w-3xl mx-auto"
          >
            Live Phone Answering by the Numbers — <span className="text-[#8CA365]">4 Years</span> of Real Results
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 list-none">
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </ul>
      </div>
    </section>
  )
}
