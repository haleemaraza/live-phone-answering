import Link from 'next/link'

const TRUST_POINTS = [
  'No lock-in contracts or hidden fees',
  '100% US-based, highly trained receptionists',
  '24/7/365 coverage, including holidays',
]

const INDUSTRIES = [
  { value: 'home-services', label: 'Home Services & Contractors' },
  { value: 'legal', label: 'Legal' },
  { value: 'medical', label: 'Medical & Healthcare' },
  { value: 'real-estate', label: 'Real Estate' },
  { value: 'other', label: 'Other' },
]

const FIELD_CLASS =
  'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8CA365] focus:bg-white transition-all'

const THEMES = {
  dark: {
    section: 'bg-[#0f2925]',
    heading: 'text-white',
    subheading: 'text-green-400',
    body: 'text-slate-300',
    point: 'text-white',
    divider: 'border-slate-600',
    callout: 'text-slate-300',
    phone: 'text-white hover:text-[#8CA365]',
  },
  light: {
    section: 'bg-white border-t border-gray-100',
    heading: 'text-[#34414A]',
    subheading: 'text-[#8CA365]',
    body: 'text-gray-600',
    point: 'text-[#34414A]',
    divider: 'border-gray-200',
    callout: 'text-gray-600',
    phone: 'text-[#34414A] hover:text-[#8CA365]',
  },
}

function CheckIcon() {
  return (
    <svg className="text-[#8CA365] w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function ContactFormSection({ theme = 'dark' }) {
  const t = THEMES[theme]

  return (
    <section className={`${t.section} py-14 sm:py-24 relative overflow-hidden`} id="contact" aria-labelledby="contact-heading">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {theme === 'dark' ? (
          <>
            <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#8CA365]/40 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 -right-20 w-[700px] h-[700px] bg-[#00cc7a]/20 rounded-full blur-[150px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#215153]/60 rounded-full blur-[120px]"></div>
          </>
        ) : (
          <>
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#8CA365]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 -left-20 w-96 h-96 bg-[#295657]/5 rounded-full blur-3xl"></div>
          </>
        )}
      </div>

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2
              id="contact-heading"
              className={`text-3xl sm:text-4xl md:text-5xl font-bold ${t.heading} leading-tight mb-4 md:mb-6`}
            >
              Get Started Today  No Credit Card, No Contract
            </h2>
            <p className={`text-xl font-medium ${t.subheading} mb-6`}>Set up takes less than 5 minutes. Cancel anytime.</p>
            <p className={`${t.body} text-lg leading-relaxed mb-10 max-w-lg`}>
              Ready to stop missing leads and start growing your business? Experience the difference a professional, 24/7 US-based
              team makes.
            </p>

            <ul className="flex flex-col gap-4 list-none">
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className={`${t.point} font-medium`}>{point}</span>
                </li>
              ))}
            </ul>

            <div className={`border-t ${t.divider} my-8 w-3/4`}></div>

            <p className={`${t.callout} text-lg`}>
              Prefer to talk first? Call us at{' '}
              <a href="tel:8574531055" className={`font-bold ${t.phone} transition-colors`}>
                (857) 453-1055
              </a>
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl relative">
            <h3 className="text-2xl font-bold text-[#34414A] mb-2">Create Your Account</h3>
            <p className="text-gray-500 text-sm mb-8">
              Fill out the details below and our onboarding team will reach out in minutes.
            </p>

            <form id="contact-form" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1 md:col-span-2">
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  autoComplete="name"
                  className={FIELD_CLASS}
                  required
                />
              </div>

              <div className="col-span-1">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@company.com"
                  autoComplete="email"
                  className={FIELD_CLASS}
                  required
                />
              </div>

              <div className="col-span-1">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(555) 000-0000"
                  autoComplete="tel"
                  inputMode="tel"
                  className={FIELD_CLASS}
                  required
                />
              </div>

              <div className="col-span-1 md:col-span-2">
                <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Industry
                </label>
                <select id="industry" name="industry" className={FIELD_CLASS} required defaultValue="">
                  <option value="" disabled>
                    Select Industry
                  </option>
                  {INDUSTRIES.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-span-1 md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-[#8CA365] hover:bg-[#7a8f57] text-white font-bold text-lg py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1 mt-8"
                >
                  Submit Request
                </button>
                <p className="text-xs text-gray-400 mt-4 text-center">
                  By submitting, you agree to our Terms of Service and{' '}
                  <Link prefetch={false} href="/privacy-policy" className="underline hover:text-gray-600">
                    Privacy Policy
                  </Link>
                  . We never sell your data.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
