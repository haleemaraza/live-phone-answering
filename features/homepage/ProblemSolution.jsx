// Comparison card icons are the page's original inline SVGs, kept verbatim so
// the three cards render exactly as they did before.
const CARDS = [
  {
    title: 'Traditional Voicemail',
    cardClassName: 'bg-white rounded-xl p-8 border border-gray-200 text-center opacity-80 flex flex-col',
    titleClassName: 'font-bold text-xl text-gray-800 mb-4',
    listClassName: 'text-gray-600 text-sm space-y-2',
    icon: (
      <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
        />
      </svg>
    ),
    points: ['High abandonment rates', 'Delays service delivery', 'Results in endless phone tag'],
  },
  {
    title: 'Automated AI Bots',
    cardClassName: 'bg-white rounded-xl p-8 border border-gray-200 text-center opacity-80 flex flex-col',
    titleClassName: 'font-bold text-xl text-gray-800 mb-4',
    listClassName: 'text-gray-600 text-sm space-y-2',
    icon: (
      <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
        <circle cx="9" cy="9" r="1" fill="currentColor" />
        <circle cx="15" cy="9" r="1" fill="currentColor" />
      </svg>
    ),
    points: ['Frustrating for urgent issues', 'Struggles with nuance & accents', 'Feels impersonal to high-value leads'],
  },
  {
    title: 'Live Receptionists',
    cardClassName: 'bg-white rounded-xl p-8 border-2 border-[#8CA365] text-center shadow-xl relative flex flex-col',
    titleClassName: 'font-bold text-xl text-[#34414A] mb-4',
    listClassName: 'text-gray-700 font-medium space-y-2',
    badge: 'Top Choice',
    icon: (
      <svg className="w-12 h-12 text-[#8CA365] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    points: ['Empathetic & adaptable', 'Captures 100% of lead details', 'Callers feel valued & heard'],
  },
]

// The frame (border, padding, shadow) sits on the <img> itself rather than a
// wrapper div, so each row costs one element less.
const FRAME =
  'w-full max-w-[300px] mx-auto h-auto rounded-2xl border border-gray-200 bg-white p-2 shadow-sm'

export default function ProblemSolution() {
  return (
    <section className="bg-slate-50 py-20 px-4" id="compare" aria-labelledby="compare-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <p className="icon-mask icon-bolt inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#6b8a3e] rounded-full text-sm font-semibold px-4 py-1.5 mb-5">
            The Problem &amp; The Fix
          </p>
          <h2
            id="compare-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] tracking-tight mb-4"
          >
            Why Businesses Switch to Live Phone Answering
          </h2>
          <p className="text-lg text-gray-600">
            Most callers who hit voicemail never call back. Here's what a live answering service really does, what that silence costs you, and how real receptionists compare to voicemail and AI bots.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 md:gap-10 items-center">
            <img
              src="/images/office-receptionists-640.webp"
              srcSet="/images/office-receptionists-640.webp 640w, /images/office-receptionists.webp 1024w"
              alt="US-based live phone answering receptionists taking business calls in an office"
              width={640}
              height={640}
              loading="lazy"
              decoding="async"
              sizes="300px"
              className={FRAME}
            />
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#34414A] mb-4 border-l-4 border-[#8CA365] pl-4">
                What is Live Phone Answering?
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                A live answering service helps businesses stay available, build trust, and capture more leads without
                adding the cost of hiring full-time reception staff. It hires real people or smart virtual receptionists
                to answer your business calls when customers contact you.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6 md:gap-10 items-center">
            <div className="md:order-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#34414A] mb-4 border-l-4 border-[#8CA365] pl-4">
                The Hidden Cost of a Missed Call
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                When a potential client hears a beep instead of a voice,{' '}
                <strong className="font-bold text-[#34414A]">80% will simply hang up and call your competitor.</strong>{' '}
                The cost of missed calls isn&apos;t just a minor inconvenience&#8212;it represents thousands of dollars in lost
                revenue and a damaged brand reputation.
              </p>
            </div>
            <img
              src="/images/missed-calls.webp"
              srcSet="/images/missed-calls-300.webp 300w, /images/missed-calls.webp 600w"
              alt="Desk phone stacked with missed call notifications"
              width={600}
              height={600}
              loading="lazy"
              decoding="async"
              sizes="300px"
              className={`${FRAME} md:order-2`}
            />
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#34414A] text-center mb-10">
            Live Receptionists vs. Voicemail vs. AI Bots What Callers Actually Want
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {CARDS.map((card) => (
              <div key={card.title} className={card.cardClassName}>
                {card.badge && (
                  <span className="bg-[#8CA365] text-white text-xs font-bold px-3 py-1 rounded-full absolute -top-3 -right-3 shadow-md">
                    {card.badge}
                  </span>
                )}
                {card.icon}
                <h4 className={card.titleClassName}>{card.title}</h4>
                <ul className={card.listClassName}>
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
