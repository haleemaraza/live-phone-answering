const TRUST_ITEMS = [
  'Live call answering',
  'Appointment booking',
  'After-hours coverage',
  'CRM and call notes',
  'No long-term contract',
]

const FLOATING_DOTS = [
  { className: 'top-8 right-8 sm:top-4 sm:right-12 w-3 h-3 bg-[#8CA365] opacity-60', delay: null },
  { className: 'bottom-16 left-4 sm:bottom-12 sm:left-8 w-2.5 h-2.5 bg-[#295657] opacity-50', delay: '1s' },
  { className: 'top-1/3 -left-2 sm:left-2 w-2 h-2 bg-[#8CA365]/70 opacity-40', delay: '2s' },
]

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function LiveDot({ size = 'h-2 w-2', ping = 'bg-green-500', core = 'bg-green-600' }) {
  return (
    <span className={`relative flex ${size}`}>
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${ping} opacity-75`}></span>
      <span className={`relative inline-flex rounded-full ${size} ${core}`}></span>
    </span>
  )
}

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-white min-h-[70vh] flex items-center py-12 sm:py-16"
      aria-label="Live phone answering service introduction"
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#8CA365]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>

      <div className="site-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col items-start z-10">
          <p className="inline-flex items-center gap-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold px-4 py-1 mb-2">
            <LiveDot />
            Live Agents Available Now
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#34414A] leading-tight mt-4 md:mt-6">
            Live Phone Answering That Keeps Your Business Open 24/7
          </h1>

          <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-xl">
            Give every caller a real human response without hiring an in-house receptionist. Our live phone answering service helps
            small businesses capture leads, book appointments, route urgent calls, and manage after-hours calls with trained
            receptionists who follow your exact workflow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <a
              href="tel:8574531055"
              aria-label="Call (857) 453-1055 to get started"
              className="inline-flex justify-center items-center bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-transform hover:-translate-y-1 text-center"
            >
              Get Started Now
            </a>
            <a
              href="#pricing"
              className="inline-flex justify-center items-center bg-white border-2 border-[#34414A] text-[#34414A] hover:bg-slate-50 font-bold py-3 px-8 rounded-lg transition-colors text-center"
            >
              View Pricing Plans
            </a>
          </div>

          <ul className="flex flex-row flex-wrap gap-4 text-sm text-gray-500 mt-4 font-medium list-none">
            {TRUST_ITEMS.map((item) => (
              <li key={item} className="flex items-center gap-1">
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative w-full z-10 mt-8 lg:mt-0 flex items-center justify-center">
          <div aria-hidden="true">
            <div className="absolute w-[420px] h-[420px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-br from-[#8CA365]/20 via-[#295657]/10 to-transparent blur-2xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] rounded-full border-2 border-dashed border-[#8CA365]/15 -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_60s_linear_infinite]"></div>
            {FLOATING_DOTS.map((dot) => (
              <div
                key={dot.className}
                className={`absolute rounded-full animate-float ${dot.className}`}
                style={dot.delay ? { animationDelay: dot.delay } : undefined}
              ></div>
            ))}
          </div>

          <div
            className="absolute top-4 right-4 sm:top-2 sm:right-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-md px-3 py-2 flex items-center gap-2 animate-fadeUp z-20 border border-[#8CA365]/20"
            style={{ animationDelay: '0.8s' }}
          >
            <LiveDot size="h-2.5 w-2.5" ping="bg-green-400" core="bg-green-500" />
            <span className="text-xs font-bold text-[#34414A]">24/7 Live</span>
          </div>

          <div
            className="absolute bottom-8 left-0 sm:bottom-6 sm:left-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-md px-3 py-2 animate-fadeUp z-20 border border-[#8CA365]/20"
            style={{ animationDelay: '1.2s' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#8CA365]/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#8CA365]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[0.65rem] text-gray-500 font-medium">Calls Answered</p>
                <p className="text-sm font-extrabold text-[#34414A]">2,400+</p>
              </div>
            </div>
          </div>

          
          <img
            src="/images/hero-answering-800.webp"
            srcSet="/images/hero-answering-560.webp 560w, /images/hero-answering-800.webp 800w, /images/Phone%20Answering%20Services.webp 1122w"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 520px"
            alt="Live phone answering receptionist keeping a business open 24/7"
            width={1122}
            height={1402}
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            className="w-[90%] sm:w-full sm:max-w-lg lg:max-w-[520px] mx-auto h-auto relative z-10 rounded-b-3xl transition-transform duration-700 hover:-translate-y-3 drop-shadow-[0_20px_40px_rgba(41,86,87,0.15)]"
          />
        </div>
      </div>
    </section>
  )
}
