import Link from 'next/link'

const QUESTIONS = [
  {
    icon: 'icon-user',
    title: 'Who Is Calling?',
    body: 'Name, callback number, and email when relevant.',
  },
  {
    icon: 'icon-report',
    title: 'What Do They Need?',
    body: 'Service requested, location, and the reason for the enquiry.',
  },
  {
    icon: 'icon-check-circle',
    title: 'Does the Enquiry Fit?',
    body: 'Answers to your approved questions about service area, requirements, and timeframe.',
  },
  {
    icon: 'icon-arrow-right',
    title: 'What Happens Next?',
    body: 'Transfer outcome, callback request, and the agreed follow-up destination.',
  },
]

const STAGES = [
  { label: 'Capture', title: 'Record the enquiry', body: 'Who called and what they need.' },
  { label: 'Qualification', title: 'Check your criteria', body: 'Apply your agreed intake rules.' },
  { label: 'Follow-up', title: 'Make the next move', body: 'Your team takes the agreed next step.' },
]

export default function LeadCaptureDetails() {
  return (
    <section
      className="w-full bg-[#faf9f4] px-4 py-14 md:py-16 lg:px-[5%]"
      aria-labelledby="lead-capture-details-heading"
    >
      <div className="mx-auto max-w-6xl">
        <p className="icon-mask icon-report [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
          Clear details. Informed follow-up.
        </p>
        <h2
          id="lead-capture-details-heading"
          className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
        >
          The Lead Details Your Team
          <br />
          Needs to Follow Up
        </h2>
        <p className="mt-3 max-w-4xl text-[0.95rem] leading-relaxed text-gray-600">
          Know who called, what they need, and what should happen next. We collect the information agreed for your
          business and organize it for your team.
        </p>

        <div className="mt-8 grid grid-cols-1 items-start gap-9 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:gap-12">
          <ul className="flex h-full list-none flex-col divide-y divide-gray-300/50">
            {QUESTIONS.map((question, index) => (
              <li key={question.title} className={`flex flex-1 items-center gap-4 py-4 ${index === 0 ? 'lg:pt-0' : ''}`}>
                <span
                  className={`icon-mask ${question.icon} [--icon-size:1.2rem] flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#f0efe7] text-[#1b4332]`}
                  aria-hidden="true"
                ></span>
                <span className="min-w-0">
                  <span className="block text-[1rem] font-bold leading-snug text-[#1a2e35]">{question.title}</span>
                  <span className="mt-1 block text-[0.84rem] leading-relaxed text-gray-600">{question.body}</span>
                </span>
              </li>
            ))}
          </ul>

          <div>
            <img
              src="/images/lead-capture-summary.webp"
              alt="An illustrative lead summary for a medical appointment enquiry: callback requested today, appointment request for a new patient consultation, patient status first-time caller, reason for call asking about appointment availability, contact details name and callback number captured, and the next step for your team, practice team to follow up"
              width={1100}
              height={764}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full rounded-xl shadow-lg"
            />

            {/* The example is medical, so it is explicitly not advice or a booking. */}
            <p className="mt-2.5 text-[0.76rem] text-gray-500">
              Example only. No medical advice or appointment confirmation.
            </p>
          </div>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-6 rounded-xl bg-[#f2f1ea] px-6 py-6 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-gray-300/60">
          {STAGES.map((stage, index) => (
            <div key={stage.label} className={index > 0 ? 'sm:pl-8' : 'sm:pr-8'}>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#5f7a3a]">{stage.label}</p>
              <p className="mt-1.5 text-[1.15rem] font-extrabold text-[#1a2e35]">{stage.title}</p>
              <p className="mt-1 text-[0.84rem] text-gray-600">{stage.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.8rem] text-gray-600">
            Qualification checks are included only where agreed in your plan.
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.9rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#1d4b37] px-6 py-3.5 text-[0.88rem] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#164032]"
          >
            Customize My Lead Intake
          </Link>
        </div>
      </div>
    </section>
  )
}
