import Link from 'next/link'
import { ArrowRightIcon, PhoneIcon } from './icons'

const PIN_PATHS = [
  'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
  'M15 11a3 3 0 11-6 0 3 3 0 016 0z',
]
const GLOBE_PATH =
  'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
const PERSON_PATH = 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'

const TRUST_ITEMS = [
  { label: 'US-Based Account Management', paths: PIN_PATHS, className: 'text-gray-500' },
  { label: 'Global 24/7 Operations', paths: [GLOBE_PATH], className: 'text-gray-500' },
  { label: 'Always a Real Human', paths: [PERSON_PATH], className: 'text-[#8CA365]' },
]

export default function FinalTrustCta() {
  return (
    <section className="bg-[#0f2925] py-24 px-4 lg:px-8 relative overflow-hidden" aria-labelledby="final-cta-heading">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#8CA365]/40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 -right-20 w-[700px] h-[700px] bg-[#00cc7a]/20 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#215153]/60 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#8CA365] rounded-full mix-blend-screen filter blur-[200px] opacity-20"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-white rounded-[2rem] p-10 md:p-16 lg:p-20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-gray-100 text-center flex flex-col items-center relative overflow-hidden">
          <div
            className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#8CA365] to-transparent opacity-80"
            aria-hidden="true"
          ></div>

          <h2
            id="final-cta-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] mb-6 leading-tight tracking-tight max-w-3xl"
          >
            Ready to Work With a Phone Answering Team You Can Actually Trust?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 font-medium">
            Start your setup — or talk to our team directly.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-3xl mb-12">
            <Link prefetch={false}
              href="/pricing"
              className="w-full md:w-auto bg-[#8CA365] hover:bg-[#7a8f57] text-white font-extrabold text-lg py-4 px-10 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Get Started Now
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <a
              href="tel:8574531055"
              className="w-full md:w-auto bg-white border-2 border-[#34414A] text-[#34414A] hover:bg-slate-50 font-extrabold text-lg py-4 px-8 rounded-xl transition-colors duration-300 flex items-center justify-center gap-3"
            >
              <PhoneIcon className="w-5 h-5" />
              Talk to a Person Now: (857) 453-1055
            </a>
          </div>

          <ul className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 border-t border-gray-100 pt-8 w-full max-w-3xl list-none">
            {TRUST_ITEMS.map((item) => (
              <li key={item.label} className={`flex items-center gap-2 text-sm font-semibold uppercase tracking-wider ${item.className}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {item.paths.map((d) => (
                    <path key={d} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d} />
                  ))}
                </svg>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
