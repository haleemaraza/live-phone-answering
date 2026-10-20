'use client'

import Link from 'next/link'
import { useState } from 'react'

// Every panel ships in the HTML and the inactive ones are only `hidden`, so the
// copy behind tabs 2 and 3 is still crawled and indexed.
const TABS = [
  {
    id: 'evenings',
    icon: 'icon-moon',
    label: 'Evenings & Overnight',
    eyebrow: 'Evenings & overnight',
    titleTop: 'Clock out.',
    titleBottom: "We'll take the next call.",
    body: 'Give callers a helpful human response after closing, with clear instructions for messages, inquiries, and on-call requests.',
    rows: [
      { icon: 'icon-chat', label: 'Message taking', body: 'Capture the details for your next business day.' },
      { icon: 'icon-users', label: 'New inquiries', body: 'Give potential customers a clear next step.' },
      { icon: 'icon-phone', label: 'On-call requests', body: 'Follow your agreed escalation instructions.' },
    ],
    cta: { href: '/contact-us', label: 'Plan my evening coverage' },
    pill: 'Your evening, uninterrupted',
    image: '/images/after-hours-evening.webp',
    // this artwork already carries the pill and the message card
    bakedOverlay: true,
    alt: 'A receptionist taking an evening call at a desk after office hours',
    card: { title: 'New service inquiry captured', body: 'Details ready for office follow-up' },
  },
  {
    id: 'weekends',
    icon: 'icon-calendar',
    label: 'Weekends',
    eyebrow: 'Weekends',
    titleTop: 'Saturday and Sunday.',
    titleBottom: 'Still answered.',
    body: 'Weekend callers reach a real person who follows your instructions, so Monday starts with context instead of a backlog.',
    rows: [
      { icon: 'icon-chat', label: 'Weekend messages', body: 'Collected in the format your team expects.' },
      { icon: 'icon-users', label: 'New inquiries', body: 'Captured while your office is closed.' },
      { icon: 'icon-phone', label: 'Urgent escalations', body: 'Routed by the rules you set out.' },
    ],
    cta: { href: '/contact-us', label: 'Plan my weekend coverage' },
    pill: 'Your weekend, covered',
    image: '/images/scheduling-receptionist.webp',
    alt: 'A receptionist handling weekend calls for a closed office',
    card: { title: 'Weekend callback logged', body: 'Ready for your Monday review' },
  },
  {
    id: 'holidays',
    icon: 'icon-building',
    label: 'Holidays & Closures',
    eyebrow: 'Holidays & closures',
    titleTop: 'Closed for the day.',
    titleBottom: 'Open to your callers.',
    body: 'Set your holiday dates and planned closures in advance, and callers still hear a helpful human response instead of a recording.',
    rows: [
      { icon: 'icon-chat', label: 'Closure greeting', body: 'Explains when your team is back.' },
      { icon: 'icon-users', label: 'New inquiries', body: 'Held for your first day back.' },
      { icon: 'icon-phone', label: 'Urgent routing', body: 'Passed on if you have asked us to.' },
    ],
    cta: { href: '/contact-us', label: 'Plan my holiday coverage' },
    pill: 'Your closures, planned ahead',
    image: '/images/real-human-empathy-live-phone-answering-service.webp',
    alt: 'A receptionist answering a call during a scheduled office closure',
    card: { title: 'Holiday message captured', body: 'Queued for your return' },
  },
]

export default function AfterHoursCoverage() {
  const [active, setActive] = useState(TABS[0].id)

  return (
    <section className="w-full bg-[#fcfcf4] px-4 py-14 md:py-16 lg:px-[5%]" aria-labelledby="coverage-heading">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:gap-16">
          <div>
            <p className="icon-mask icon-clock [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
              Coverage that fits your hours
            </p>
            <h2
              id="coverage-heading"
              className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight text-[#1a2e35]"
            >
              Coverage From Closing Time
              <br />
              <span className="text-[#295657]">Until Your Team Returns</span>
            </h2>
          </div>
          <p className="text-[0.95rem] leading-relaxed text-gray-600 lg:pt-7">
            Plan support around your opening hours, time zone, and scheduled closures.
          </p>
        </div>

        {/* One column per tab, so the active underline spans its full third the
            way the reference does. Buttons are direct children of the tablist —
            an <li> in between orphans them from the role. */}
        <div
          role="tablist"
          aria-label="After-hours coverage options"
          className="mt-7 grid grid-cols-1 border-b border-gray-300/60 sm:grid-cols-3"
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              id={`coverage-tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={active === tab.id}
              aria-controls={`coverage-panel-${tab.id}`}
              onClick={() => setActive(tab.id)}
              className={`icon-mask ${tab.icon} [--icon-size:1.25rem] -mb-px flex items-center gap-3.5 border-b-2 pb-3 pt-2 text-[0.95rem] font-semibold transition-colors ${
                active === tab.id
                  ? 'border-[#8CA365] text-[#295657]'
                  : 'border-transparent text-gray-600 hover:text-[#295657]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-gray-200/80 bg-white/50 p-4 sm:p-5">
          {TABS.map((tab) => (
            <div
              key={tab.id}
              id={`coverage-panel-${tab.id}`}
              role="tabpanel"
              aria-labelledby={`coverage-tab-${tab.id}`}
              hidden={active !== tab.id}
            >
              {/* The grid sits on an inner element on purpose: a display utility
                  on the panel itself outranks the browser's [hidden] rule and
                  would leave every tab visible at once. */}
              <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.18fr)] lg:gap-8">
                <div className="px-1 py-1 sm:px-3">
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[#566e34]">{tab.eyebrow}</p>
                  <h3 className="mt-1.5 text-2xl font-extrabold leading-[1.12] tracking-tight text-[#1a2e35] sm:text-[2.1rem]">
                    {tab.titleTop}
                    <br />
                    <span className="text-[#295657]">{tab.titleBottom}</span>
                  </h3>
                  <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-gray-600">{tab.body}</p>

                  <ul className="mt-5 list-none divide-y divide-gray-200/80 border-b border-gray-200/80">
                    {tab.rows.map((row) => (
                      <li
                        key={row.label}
                        className="grid grid-cols-[auto_minmax(0,8.5rem)_minmax(0,1fr)] items-center gap-3 py-2.5"
                      >
                        <span
                          className={`icon-mask ${row.icon} [--icon-size:1.4rem] text-[#295657]`}
                          aria-hidden="true"
                        ></span>
                        <span className="text-[0.9rem] font-bold text-[#34414A]">{row.label}</span>
                        <span className="text-[0.82rem] leading-snug text-gray-600">{row.body}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    prefetch={false}
                    href={tab.cta.href}
                    className="icon-mask icon-arrow-right [--icon-size:0.9rem] mt-4 inline-flex flex-row-reverse items-center gap-2.5 text-[0.9rem] font-bold text-[#295657] underline underline-offset-4 transition-colors hover:text-[#8CA365]"
                  >
                    {tab.cta.label}
                  </Link>
                </div>

                <div className="relative">
                  <img
                    src={tab.image}
                    alt={tab.alt}
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/2] w-full rounded-xl object-cover"
                  />

                  {!tab.bakedOverlay && (
                    <p className="icon-mask icon-moon [--icon-size:0.9rem] absolute top-3.5 left-3.5 inline-flex items-center gap-2 rounded-lg bg-[#0f2925]/80 backdrop-blur-sm px-3 py-1.5 text-[0.8rem] font-medium text-white">
                      {tab.pill}
                    </p>
                  )}

                  {!tab.bakedOverlay && (
                    <div className="absolute bottom-3.5 right-3.5 left-3.5 rounded-lg bg-white/95 backdrop-blur-sm px-4 py-3 shadow-lg sm:left-auto sm:w-[21rem]">
                      <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-gray-500">
                        Illustrative message
                      </p>
                      <div className="mt-1 flex items-center gap-3">
                        <span
                          className="icon-mask icon-phone [--icon-size:1.3rem] flex-shrink-0 text-[#295657]"
                          aria-hidden="true"
                        ></span>
                        <span className="min-w-0 flex-grow">
                          <span className="block text-[0.9rem] font-bold leading-tight text-[#34414A]">
                            {tab.card.title}
                          </span>
                          <span className="mt-0.5 block text-[0.8rem] text-gray-500">{tab.card.body}</span>
                        </span>
                        <span
                          className="icon-mask icon-check [--icon-size:0.9rem] flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#eef6e8] text-[#566e34]"
                          aria-hidden="true"
                        ></span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          <p className="mt-4 flex flex-col items-center justify-center gap-x-4 gap-y-1 border-t border-gray-200/80 pt-3.5 text-center sm:flex-row sm:divide-x sm:divide-gray-300/70">
            <span className="icon-mask icon-moon [--icon-size:0.9rem] inline-flex items-center gap-2 text-[0.8rem] font-semibold text-[#295657]">
              Coverage follows your agreed schedule.
            </span>
            <span className="text-[0.78rem] text-gray-600 sm:pl-4">
              Confirm hours and holiday arrangements during setup.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
