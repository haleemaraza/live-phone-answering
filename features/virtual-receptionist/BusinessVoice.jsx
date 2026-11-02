import Link from 'next/link'

// Each connector is drawn on the list item itself — a ::after line reaching
// into the grid gap and a ::before dot at its end. Keeping them anchored to
// the item means they sit in the gutter and can never cross the text, which
// an absolutely-positioned stretched <svg> could not guarantee.
const CONNECTOR =
  "lg:after:absolute lg:after:top-5 lg:after:h-px lg:after:bg-[#8CA365]/60 lg:after:content-[''] lg:before:absolute lg:before:top-4 lg:before:h-2 lg:before:w-2 lg:before:rounded-full lg:before:bg-[#8CA365] lg:before:content-['']"

// 01 sits left of the image, so its line starts just past the number glyph and
// runs to the dot — otherwise it floats in the gutter, detached from the text.
const TO_RIGHT = 'lg:after:left-[5.5rem] lg:after:right-[-1.5rem] lg:before:left-[calc(100%+1.1rem)]'
// 02 and 03 have their number at the block's left edge, so the line simply
// reaches back from there into the gutter.
const TO_LEFT = 'lg:after:right-full lg:after:w-8 lg:before:right-[calc(100%+1.75rem)]'

const POINTS = [
  {
    number: '01',
    title: 'A Greeting That Sounds Like You',
    body: '“Thank you for calling ABC Services! We’re happy to help. How can we assist you today?”',
    place: `lg:col-start-1 lg:row-start-1 ${TO_RIGHT}`,
  },
  {
    number: '02',
    title: 'Clear Guidance for Each Call',
    body: '“I’d be happy to help. Let me check who is available to assist you. If they’re unavailable, I can take a message and arrange a callback.”',
    place: `lg:col-start-3 lg:row-start-1 ${TO_LEFT}`,
  },
  {
    number: '03',
    title: 'Room to Review and Refine',
    body: '“We’ve updated your call instructions. Urgent inquiries now go to your designated team member, and all other callers are offered a callback.”',
    place: `lg:col-start-3 lg:row-start-2 ${TO_LEFT}`,
  },
]

export default function BusinessVoice() {
  return (
    <section className="w-full bg-white py-20 md:py-24" aria-labelledby="business-voice-heading">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-end pb-8 border-b border-gray-200/70">
          <div>
            <p className="icon-mask icon-chat inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#6b8a3e] rounded-full text-sm font-semibold px-4 py-1.5 mb-5">
              Premium virtual receptionist service
            </p>
            <h2
              id="business-voice-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] leading-tight tracking-tight"
            >
              With Live Phone Answering
              <br className="hidden sm:block" /> Every Call is Received.
            </h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed lg:pb-2">
            Never miss a lead and keep your team focused with a professional receptionist for every call.
          </p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,380px)_1fr] gap-8 lg:gap-x-14 lg:gap-y-12 items-center py-12 lg:py-16">
          <img
            src="/images/call-playbook.webp"
            srcSet="/images/call-playbook-300.webp 300w, /images/call-playbook.webp 560w"
            sizes="(max-width: 1024px) 80vw, 360px"
            alt="Illustrated call playbook setting out your greeting, call-handling rules and review notes"
            width={560}
            height={390}
            loading="lazy"
            decoding="async"
            className="relative z-10 order-first lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-2 mx-auto w-full max-w-[300px] lg:max-w-[360px] h-auto"
          />

          <ol role="list" className="contents">
            {POINTS.map((point) => (
              <li key={point.number} className={`relative z-10 ${CONNECTOR} ${point.place}`}>
                <p className="text-4xl font-extrabold text-[#8CA365]/70" aria-hidden="true">
                  {point.number}
                </p>
                <h3 className="mt-2 text-xl font-bold text-[#34414A] leading-snug">{point.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{point.body}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-[#0f2925] px-7 py-8 sm:px-10 sm:py-9">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex-grow">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-3">
                Keep control of the details
              </p>
              <p className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                Full transparency into every call &amp; conversation.
              </p>
              <p className="mt-2 text-sm text-white/60">
                See exactly who answers your lines, review call transcripts and quality checks, and customize how
                caller details flow straight into your tools.
              </p>
            </div>
            <Link
              prefetch={false}
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 flex-shrink-0 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/15"
            >
              Let&rsquo;s Talk About Your Requirements &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
