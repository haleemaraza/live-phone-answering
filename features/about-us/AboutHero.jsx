import Link from 'next/link'
import { LockIcon, ShieldCheckIcon, StarIcon } from './icons'

const STATS = [
  { value: '3–5', label: 'Years in Business', valueClass: 'text-[#8CA365]' },
  { value: '10,000+', label: 'Businesses Served', valueClass: 'text-[#34414A]' },
  { value: '1M+', label: 'Calls Answered', valueClass: 'text-[#34414A]' },
  { value: '4.9', label: 'Google Rating', valueClass: 'text-amber-500', star: true },
]

const FLOATING_DOTS = [
  { className: 'top-8 right-8 sm:top-4 sm:right-12 w-3 h-3 bg-[#8CA365] opacity-60', delay: null },
  { className: 'bottom-16 left-4 sm:bottom-12 sm:left-8 w-2.5 h-2.5 bg-[#295657] opacity-50', delay: '1s' },
  { className: 'top-1/3 -left-2 sm:left-2 w-2 h-2 bg-[#8CA365]/70 opacity-40', delay: '2s' },
]

export default function AboutHero() {
  return (
    <section
      className="relative overflow-hidden bg-white min-h-[70vh] flex items-center py-12 sm:py-16"
      aria-label="About Live Phone Answering"
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#8CA365]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>

      <div className="site-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col items-start z-10">
          <p className="inline-flex items-center gap-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold px-4 py-1 mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
            </span>
            Who Is Live Phone Answering?
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#34414A] leading-tight mt-4 md:mt-6">
            About Live Phone Answering — The Human Team Behind Every Call
          </h1>

          <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-xl">
            As a leading live phone answering company, we&apos;ve spent the last 3–5 years becoming the voice US businesses trust to
            never miss a call. We are HIPAA certified, BBB accredited, and built on a single belief: every caller deserves a real
            human.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <Link prefetch={false}
              href="/contact-us"
              className="inline-flex justify-center items-center bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-transform hover:-translate-y-1 text-center"
            >
              Get Started Now
            </Link>
            <Link prefetch={false}
              href="/how-it-works"
              className="inline-flex justify-center items-center bg-white border-2 border-[#34414A] text-[#34414A] hover:bg-slate-50 font-bold py-3 px-8 rounded-lg transition-colors text-center"
            >
              See How It Works
            </Link>
          </div>

          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 border-t border-gray-200 pt-8 mt-8 w-full">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dd className={`text-3xl sm:text-4xl font-black mb-1 animate-countUp ${stat.valueClass} ${stat.star ? 'flex items-center gap-2' : ''}`}>
                  {stat.value}
                  {stat.star && <StarIcon />}
                </dd>
                <dt className="text-xs text-gray-500 font-bold uppercase tracking-wider">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative w-full z-10 mt-8 lg:mt-0 flex items-center justify-center min-h-[500px] lg:min-h-[600px]">
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

          <img
            src="/images/office-receptionists.webp"
            alt="Live Phone Answering receptionists working together in the office"
            width={1024}
            height={1024}
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            className="absolute right-0 top-10 w-4/5 h-[400px] lg:h-[450px] object-cover rounded-3xl shadow-xl border-2 border-gray-100 z-10 transition-transform duration-700 hover:-translate-y-2"
          />
          <img
            src="/images/zoom-gallery-view.webp"
            alt="Remote receptionists meeting on a video call"
            width={1024}
            height={1024}
            loading="lazy"
            decoding="async"
            className="absolute left-0 bottom-8 w-3/5 h-[220px] lg:h-[250px] object-cover rounded-2xl shadow-lg border-2 border-white z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500"
          />

          <p
            className="absolute right-0 sm:-right-2 top-28 bg-white/90 backdrop-blur-sm rounded-xl shadow-md px-3 py-2 flex items-center gap-2 animate-fadeUp z-30 border border-[#8CA365]/20"
            style={{ animationDelay: '0.8s' }}
          >
            <ShieldCheckIcon className="w-5 h-5 text-blue-500" />
            <span className="text-xs font-bold text-[#34414A]">Verified US Team</span>
          </p>

          <div
            className="absolute bottom-2 left-0 sm:left-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-md px-3 py-2 animate-fadeUp z-30 border border-[#8CA365]/20 flex items-center gap-2"
            style={{ animationDelay: '1.2s' }}
          >
            <span className="w-8 h-8 rounded-lg bg-[#8CA365]/10 flex items-center justify-center shrink-0">
              <LockIcon className="w-4 h-4 text-[#8CA365]" />
            </span>
            <span>
              <span className="block text-[0.65rem] text-gray-500 font-medium">Compliance</span>
              <span className="block text-sm font-extrabold text-[#34414A]">HIPAA Certified</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
