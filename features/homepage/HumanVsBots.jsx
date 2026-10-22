'use client'

import { useState } from 'react'

const TABS = [
  {
    id: 'human-tab-1',
    tab: 'Real Human Empathy',
    pill: { text: 'Instant Connection', className: 'bg-green-50 text-green-dark' },
    pillIcon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Build Trust With Every Caller',
    body: 'A real receptionist can understand tone, urgency, and customer needs in a way automated systems often cannot. We help callers feel heard, supported, and confident that your business will follow up.',
    bullets: [
      'Calm frustrated or urgent callers with a real conversation.',
      'Create a professional first impression for every new lead.',
    ],
    image: '/images/real-human-empathy-live-phone-answering-service.webp',
    alt: 'Live receptionist providing real human empathy during a business phone answering call',
  },
  {
    id: 'human-tab-2',
    tab: 'Zero Bot Frustration',
    pill: { text: 'Better Caller Experience', className: 'bg-amber/10 text-amber' },
    pillIcon: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636',
    title: 'Avoid the Frustration of Automated Menus',
    body: 'Many callers hang up when they reach confusing phone menus, voicemail, or robotic responses. Our live answering team helps callers get the support they need without forcing them through a frustrating automated process.',
    bullets: ['Reduce abandoned calls from voicemail and phone menus.', 'Help callers reach the right next step faster.'],
    image: '/images/zero-bot-frustration-live-answering-service.webp',
    alt: 'Live phone answering service connecting callers to a real receptionist instead of automated bots',
  },
  {
    id: 'human-tab-3',
    tab: 'Higher Close Rates',
    pill: { text: 'More Calls Into Customers', className: 'bg-green-50 text-green-dark' },
    pillIcon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    title: 'Turn More Conversations Into Opportunities',
    body: 'When calls are answered quickly and professionally, your business has a better chance of capturing the lead, booking the appointment, or routing the customer to the right person before they call a competitor.',
    bullets: ['Capture caller details while interest is high.', 'Help more calls become booked appointments or qualified leads.'],
    image: '/images/higher-close-rates-live-phone-answering-service.webp',
    alt: 'Live receptionist capturing a new lead and booking an appointment to improve close rates',
  },
]

const TAB_BASE = 'px-6 py-3 rounded-full font-bold text-sm sm:text-base border-2 transition-all'
const TAB_ON = 'bg-green text-white border-transparent shadow-md'
const TAB_OFF = 'bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:text-navy'

function CheckIcon() {
  return (
    <svg className="w-6 h-6 text-green shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function HumanVsBots() {
  const [activeId, setActiveId] = useState(TABS[0].id)

  return (
    <section className="bg-slate-50 py-14 sm:py-24" aria-labelledby="human-vs-bots-heading">
      <div className="site-container">
        <h2
          id="human-vs-bots-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] text-center mb-6 max-w-4xl mx-auto leading-tight"
        >
          Real Human Receptionists. No Frustrating Bots.
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto text-lg leading-relaxed">
          When customers call your business, they want to speak with someone who listens, understands, and helps them quickly. Our
          live phone answering service gives callers a real human experience, so your business can build trust, capture more leads,
          and avoid the frustration of voicemail or automated phone menus.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Why human receptionists beat bots">
          {TABS.map((item) => {
            const selected = item.id === activeId
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`tab-${item.id}`}
                aria-selected={selected}
                aria-controls={item.id}
                onClick={() => setActiveId(item.id)}
                className={`${TAB_BASE} ${selected ? TAB_ON : TAB_OFF}`}
              >
                {item.tab}
              </button>
            )
          })}
        </div>

        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden min-h-[400px]">
          {/* All three panes stay in the HTML and are hidden with CSS.
              Rendering only the active one would keep the other two out of the
              page source, so search engines would never see that content. */}
          {TABS.map((item) => (
            <div
              key={item.id}
              id={item.id}
              role="tabpanel"
              aria-labelledby={`tab-${item.id}`}
              className={`${
                item.id === activeId ? '' : 'hidden '
              }grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-opacity duration-500`}
            >
              <div>
                <p className={`inline-flex items-center gap-2 px-3 py-1 text-sm font-bold rounded-full mb-6 ${item.pill.className}`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.pillIcon} />
                  </svg>
                  {item.pill.text}
                </p>
                <h3 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 leading-tight">{item.title}</h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">{item.body}</p>
                <ul className="space-y-4">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-4">
                      <CheckIcon />
                      <span className="text-gray-700 font-medium">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-2xl relative border-4 border-gray-50">
                <img
                  src={item.image}
                  alt={item.alt}
                  width={1200}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-[#34414A] font-bold text-xl flex items-center justify-center gap-3">
          <span className="text-2xl" aria-hidden="true">
            🇺🇸
          </span>
          100% US-Based Receptionists. Fully Trained &amp; Ready to Answer.
        </p>
      </div>
    </section>
  )
}
