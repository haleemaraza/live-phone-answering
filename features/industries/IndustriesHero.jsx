import Link from 'next/link'

// All colours, sizes and animation timings are copied verbatim from the
// page's original markup.
const PILLS = [
  { label: 'Medical & Healthcare', icon: 'icon-heart', tone: 'before:text-red-500' },
  { label: 'Legal Firms', icon: 'icon-scale', tone: 'before:text-blue-500' },
  { label: 'Real Estate', icon: 'icon-home', tone: 'before:text-amber-500' },
  { label: 'IT & Tech', icon: 'icon-desktop', tone: 'before:text-purple-500' },
  { label: 'Small Business', icon: 'icon-briefcase', tone: 'before:text-[#8CA365]' },
]

const STATS = [
  { value: '20+', label: 'Industries' },
  { value: 'HIPAA', label: 'Compliant' },
  { value: '98.5%', label: 'Satisfaction' },
]

const BLOBS = [
  {
    className: '-top-20 -left-16 w-[350px] h-[350px] bg-[#8CA365]/15 opacity-70',
    style: { animation: 'blobMorph 12s ease-in-out infinite', borderRadius: '42% 58% 55% 45% / 56% 42% 58% 44%' },
  },
  {
    className: 'top-1/3 -right-20 w-[280px] h-[280px] bg-[#295657]/10 opacity-60',
    style: { animation: 'blobMorph 15s ease-in-out infinite 3s', borderRadius: '55% 45% 42% 58% / 44% 56% 44% 56%' },
  },
  {
    className: '-bottom-16 left-1/3 w-[320px] h-[320px] bg-[#8CA365]/10 opacity-50',
    style: { animation: 'blobMorph 18s ease-in-out infinite 6s', borderRadius: '45% 55% 58% 42% / 58% 44% 42% 58%' },
  },
]

const DOTS = [
  { className: 'top-10 right-[12%] w-3 h-3 bg-[#295657]/35', style: { animation: 'blobFloat 5s ease-in-out infinite' } },
  { className: 'top-1/3 left-[8%] w-2.5 h-2.5 bg-[#8CA365]/40', style: { animation: 'blobFloat 4s ease-in-out infinite 1.5s' } },
  { className: 'bottom-24 right-[15%] w-2 h-2 bg-[#8CA365]/30', style: { animation: 'blobFloat 6s ease-in-out infinite 2.5s' } },
]

// The mint gradient, 48px grid and diagonal hatch were three stacked divs;
// their opacities are baked into each colour's alpha so the result matches.
const SECTION_BACKGROUND = {
  backgroundImage: [
    'linear-gradient(rgba(41,86,87,0.04) 1px, transparent 1px)',
    'linear-gradient(90deg, rgba(41,86,87,0.04) 1px, transparent 1px)',
    'repeating-linear-gradient(135deg, rgba(41,86,87,0.03), rgba(41,86,87,0.03) 1px, transparent 1px, transparent 40px)',
    'linear-gradient(160deg, #c6ecb5 0%, #d4f1c4 20%, #e2f5d8 40%, #eef8e8 60%, #f5fbf2 80%, #ffffff 100%)',
  ].join(','),
  backgroundSize: '48px 48px, 48px 48px, 600px 600px, auto',
  backgroundPosition: '0 0, 0 0, 100% 0, 0 0',
  backgroundRepeat: 'repeat, repeat, no-repeat, no-repeat',
}

const rise = (delay) => ({ animation: `blobFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) ${delay} both` })

export default function IndustriesHero() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 px-4 md:px-8"
      style={SECTION_BACKGROUND}
      aria-label="Industries we serve"
    >
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none" aria-hidden="true">
        {BLOBS.map((blob) => (
          <div key={blob.className} className={`absolute ${blob.className}`} style={blob.style}></div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <p
          className="icon-mask icon-building inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm text-[#295657] rounded-full text-sm font-semibold px-5 py-2 mb-6 shadow-sm border border-white/50"
          style={rise('0s')}
        >
          Industries We Serve
        </p>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-extrabold text-[#1a2e35] leading-[1.1] tracking-tight"
          style={rise('0.1s')}
        >
          Trained For Your Exact Workflow &amp; Industry
        </h1>

        <p className="text-base sm:text-lg text-[#3d5c42] mt-5 max-w-2xl mx-auto leading-relaxed" style={rise('0.2s')}>
          Our receptionists are trained in your specific industry terminology, compliance requirements, and call-handling
          protocols — so every caller gets a knowledgeable, professional response.
        </p>

        <ul className="flex flex-wrap justify-center gap-3 mt-8 list-none" style={rise('0.3s')}>
          {PILLS.map((pill) => (
            <li
              key={pill.label}
              className={`icon-mask ${pill.icon} ${pill.tone} flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-white/60 text-sm font-semibold text-[#34414A]`}
            >
              {pill.label}
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10" style={rise('0.4s')}>
          <Link prefetch={false}
            href="/contact-us"
            className="inline-flex justify-center items-center bg-[#34414A] hover:bg-[#2a353c] text-white font-bold py-3.5 px-9 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 text-center"
          >
            Get Started Now &rarr;
          </Link>
          <a
            href="#industries"
            className="inline-flex justify-center items-center bg-white/80 backdrop-blur-sm border-2 border-[#34414A]/20 text-[#34414A] hover:bg-white font-bold py-3.5 px-9 rounded-xl transition-all hover:-translate-y-0.5 text-center shadow-sm"
          >
            View All Industries
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-10" style={rise('0.5s')}>
          <p className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-bold text-[#34414A]">24/7 Live Agents</span>
          </p>

          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="text-2xl font-extrabold text-[#34414A]">{stat.value}</span>
              <p className="text-xs text-[#5a6c6e] font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {DOTS.map((dot) => (
        <div key={dot.className} className={`absolute rounded-full z-[2] ${dot.className}`} style={dot.style} aria-hidden="true"></div>
      ))}

      <div
        className="absolute bottom-0 left-0 right-0 h-20 z-[3]"
        style={{ background: 'linear-gradient(180deg, transparent 0%, #ffffff 100%)' }}
        aria-hidden="true"
      ></div>
    </section>
  )
}
