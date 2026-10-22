import Link from 'next/link'
import LogoMarquee from '@/components/LogoMarquee'

const TOOLS = [
  {
    icon: 'icon-calendar',
    title: 'Calendar & booking',
    body: 'Check scheduling options for your calendar and booking rules.',
    place: 'lg:col-start-1 lg:row-start-1',
  },
  {
    icon: 'icon-users',
    title: 'Customer records',
    body: 'Discuss how caller details can reach your existing CRM.',
    place: 'lg:col-start-1 lg:row-start-2',
  },
  {
    icon: 'icon-chat',
    title: 'Messages & updates',
    body: 'Agree on how your team receives call summaries and follow-ups.',
    place: 'lg:col-start-3 lg:row-start-1',
  },
  {
    icon: 'icon-sliders',
    title: 'A setup that fits',
    body: 'Confirm supported connections and any manual steps.',
    place: 'lg:col-start-3 lg:row-start-2',
  },
]

// One <svg> holds all four connectors and their end dots, so the whole
// diagram costs nine elements instead of a div per line.
const CONNECTORS = [
  'M430 170C380 150 345 120 300 112',
  'M430 230C380 250 345 280 300 288',
  'M570 170C620 150 655 120 700 112',
  'M570 230C620 250 655 280 700 288',
]
const DOTS = [
  [300, 112],
  [300, 288],
  [700, 112],
  [700, 288],
]

export default function ToolsConnect() {
  return (
    <section className="w-full bg-[#f7fbf5] py-20 md:py-24" aria-labelledby="tools-heading">
      <div className="site-container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="icon-mask icon-share inline-flex items-center gap-2 bg-white text-[#4a7a3e] rounded-full text-sm font-semibold px-5 py-2 mb-6 shadow-sm border border-white/60">
            Connected to the way you work
          </p>
          <h2
            id="tools-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] leading-tight tracking-tight mb-5"
          >
            Bring Calls, Calendars,
            <br className="hidden sm:block" /> and Customer Details Together.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Explore how receptionist support can fit your existing tools and keep your team informed.
          </p>
        </div>

        {/* fade matches this section's background so the strip edges dissolve */}
        <LogoMarquee fade="#f7fbf5" className="mb-14" />

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
          <svg
            className="hidden lg:block absolute inset-0 h-full w-full text-[#8CA365]/50"
            viewBox="0 0 1000 400"
            preserveAspectRatio="none"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            {CONNECTORS.map((d) => (
              <path key={d} d={d} vectorEffect="non-scaling-stroke" />
            ))}
            {DOTS.map(([cx, cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" fill="#8CA365" stroke="none" />
            ))}
          </svg>

          <div className="relative z-10 order-first lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-2 flex flex-col items-center rounded-3xl bg-white border border-gray-200/70 shadow-md px-8 py-10">
            {/* Headset drawn inline rather than loaded as an image: it scales
                cleanly, themes with the palette, and costs no request. */}
            <svg
              viewBox="0 0 120 120"
              className="h-28 w-28 rounded-3xl bg-[#eef6e8] p-4"
              role="img"
              aria-label="Headset representing your reception team"
            >
              <defs>
                <linearGradient id="vr-band" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#c8dcb4" />
                  <stop offset="1" stopColor="#8CA365" />
                </linearGradient>
                <linearGradient id="vr-cup" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#a6bd83" />
                  <stop offset="1" stopColor="#3f5c3a" />
                </linearGradient>
              </defs>
              <path
                d="M20 70V58a40 40 0 0180 0v12"
                fill="none"
                stroke="url(#vr-band)"
                strokeWidth="11"
                strokeLinecap="round"
              />
              <rect x="10" y="58" width="22" height="36" rx="11" fill="url(#vr-cup)" />
              <rect x="88" y="58" width="22" height="36" rx="11" fill="url(#vr-cup)" />
              <path
                d="M99 94c0 10-9 16-19 16"
                fill="none"
                stroke="#4e6b45"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <circle cx="78" cy="110" r="6" fill="#8CA365" />
            </svg>
            <p className="mt-6 text-sm font-semibold text-[#34414A]">Your reception team</p>
          </div>

          <ul role="list" className="contents">
            {TOOLS.map((tool) => (
              <li
                key={tool.title}
                className={`relative z-10 grid grid-cols-[auto_1fr] items-start gap-4 rounded-3xl bg-white border border-gray-200/70 shadow-md p-6 ${tool.place}`}
              >
                <span
                  className={`icon-mask ${tool.icon} [--icon-size:1.75rem] row-span-2 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eef6e8] text-[#295657]`}
                  aria-hidden="true"
                ></span>
                <h3 className="text-base font-bold text-[#34414A]">{tool.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{tool.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 border-t border-gray-200/70 pt-8">
          <p className="text-lg font-bold text-[#34414A] flex-shrink-0">Have a tool in mind?</p>
          <p className="text-sm text-gray-500 flex-grow sm:border-l sm:border-gray-200 sm:pl-6">
            Tell us what you use so we can check compatibility.
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="inline-flex items-center justify-center gap-2 flex-shrink-0 rounded-xl bg-[#0f2925] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#153b33]"
          >
            Check My Tools &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
