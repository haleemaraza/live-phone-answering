import Link from 'next/link'

const STEPS = [
  { number: '01', title: 'Welcome', body: 'Greet every caller with a friendly, personal welcome and make them feel valued from the start. This creates a stronger connection between you and your clients.' },
  { number: '02', title: 'Understand', body: "Listen carefully, understand what the caller needs, and collect their contact details and important information. We make sure every caller gets the attention they deserve." },
  { number: '03', title: 'Follow Through', body: "Send your team a clear call summary with the caller's request and any next steps, so they can follow up without missing important details. Every inquiry gets the attention it needs, even after the call ends." },
]

// The waveform is one <path> built at build time rather than ~48 <div> bars,
// so the whole graphic costs two elements instead of fifty.
const BAR_HEIGHTS = [6, 11, 18, 24, 14, 8, 20, 28, 12, 22, 9, 16, 26, 11, 7, 19]
const WAVEFORM = Array.from({ length: 48 }, (_, i) => {
  const height = BAR_HEIGHTS[i % BAR_HEIGHTS.length]
  return `M${i * 5 + 2} ${16 - height / 2}v${height}`
}).join('')

export default function CallExperience() {
  return (
    <section className="w-full bg-white py-20 md:py-24" aria-labelledby="call-experience-heading">
      <div className="site-container">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <p className="icon-mask icon-bolt inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#6b8a3e] rounded-full text-sm font-semibold px-4 py-1.5 mb-5">
            Every call matters. Every customer counts.
          </p>
          <h2
            id="call-experience-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] leading-tight tracking-tight mb-5"
          >
            Better Calls. Happier Customers. 
            <br className="hidden sm:block" />Less Work for Your Team.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
Give every caller a warm welcome, quick answers, and the right support. We make sure no customer is left waiting and every call is handled with care.          </p>
        </div>


        <div className="bg-[#f2f9ee] rounded-3xl p-6 sm:p-8 lg:p-12">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,300px)_1fr] gap-10 lg:gap-16 items-center">
            {/* Supplied as one rendered card. The copy baked into it is
                carried in the alt text so it is still read and indexed. */}
            <img
              src="/images/call-card.webp"
              srcSet="/images/call-card-300.webp 300w, /images/call-card.webp 416w"
              sizes="(max-width: 1024px) 280px, 300px"
              alt="Oak &amp; Pine Services receiving an incoming inquiry: the caller says they need a quick fix for a plumbing issue, and a real person answers for a quick response"
              width={416}
              height={600}
              loading="lazy"
              decoding="async"
              className="relative z-10 mx-auto w-full max-w-[300px] h-auto"
            />

            <div className="relative">
              {/* No connector rails or lead-in lines here on purpose: the
                  numbered circles carry the sequence on their own. */}
              <ol className="relative list-none">
                {STEPS.map((step) => (
                  <li key={step.number} className="relative flex items-start gap-5 pb-9 last:pb-0">
                    <span
                      className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#8CA365]/40 bg-white text-xs font-bold text-[#295657]"
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>
                    <span className="min-w-0 pt-1">
                      <span className="block text-lg font-bold text-[#34414A]">{step.title}</span>
                      <span className="mt-1 block text-sm text-gray-600 leading-relaxed">{step.body}</span>
                    </span>
                  </li>
                ))}
              </ol>

              <div className="mt-2 flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
                <span
                  className="icon-mask icon-report [--icon-size:1.25rem] h-11 w-11 flex-shrink-0 rounded-xl bg-[#295657] text-white flex items-center justify-center"
                  aria-hidden="true"
                ></span>
                <span className="min-w-0 flex-grow">
                  <span className="block text-sm font-bold text-[#34414A]">New Service Request</span>
                  <span className="block text-xs text-gray-500 mt-0.5">Plumbing repair | Customer requested a callback</span>
                </span>
                <span
                  className="icon-mask icon-check [--icon-size:1.125rem] h-7 w-7 flex-shrink-0 rounded-full bg-[#8CA365]/15 text-[#6b8a3e] flex items-center justify-center"
                  aria-hidden="true"
                ></span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            prefetch={false}
            href="/contact-us"
            className="inline-flex items-center gap-2 text-[#34414A] font-semibold hover:text-[#8CA365] transition-colors"
          >
            
Let's create a better call experience for your business &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
