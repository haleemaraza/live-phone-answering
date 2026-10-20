'use client'

import Link from 'next/link'
import { useState } from 'react'

// Deep green with a soft bloom out of the top-left, written inline so no
// arbitrary-value class can silently fail to compile.
const SECTION_BACKGROUND = {
  backgroundImage: [
    'radial-gradient(65% 55% at 14% 0%, rgba(84,146,108,0.38) 0%, rgba(12,38,27,0) 62%)',
    'linear-gradient(155deg, #124131 0%, #0e3024 48%, #0b2419 100%)',
  ].join(','),
}

// Only the trigger step and the summary line actually differ between flows, so
// those are the only things that swap. Repeating all four cards per flow would
// put three near-identical copies of the same copy in the page.
const FLOWS = [
  {
    id: 'busy',
    label: 'Busy line',
    trigger: {
      body: 'Your staff have the first opportunity to answer. If every line is already in use, your forwarding rule activates.',
      pill: 'Busy-line rule',
      pillIcon: 'icon-phone',
    },
    summary: 'Your office rings first. Calls arriving while every line is in use follow your overflow routing rules.',
  },
  {
    id: 'no-answer',
    label: 'No answer',
    trigger: {
      body: 'Your staff have the first opportunity to answer. If the call remains unanswered, your forwarding rule activates.',
      pill: 'No-answer rule',
      pillIcon: 'icon-clock',
    },
    summary: 'Your office rings first. Unanswered calls follow your overflow routing rules.',
  },
  {
    id: 'break',
    label: 'Planned break',
    trigger: {
      body: 'Your staff have the first opportunity to answer. During a break you have scheduled in advance, your forwarding rule activates.',
      pill: 'Scheduled rule',
      pillIcon: 'icon-calendar',
    },
    summary: 'Your office rings first. Calls during a planned break follow your overflow routing rules.',
  },
]

const STEPS = [
  {
    number: '01',
    icon: 'icon-phone',
    title: 'Customer Calls You',
    body: 'Customers dial your existing business number. Calls reach your team first through your agreed phone setup.',
    pill: 'Incoming call',
    pillIcon: 'icon-phone',
  },
  {
    number: '02',
    icon: 'icon-phone-forward',
    title: 'Your Team Answers First',
    isTrigger: true,
  },
  {
    number: '03',
    icon: 'icon-headset',
    title: 'We Answer in Your Name',
    body: "A live receptionist uses your greeting, understands the caller's request, and follows your approved instructions.",
    pill: 'How can I help you today?',
    pillIcon: 'icon-chat',
    active: true,
  },
  {
    number: '04',
    icon: 'icon-doc-check',
    title: 'You Receive the Details',
    body: 'Caller details and the next step reach your team through your agreed delivery method, ready for follow-up.',
    pill: 'Call summary',
    pillIcon: 'icon-check-circle',
  },
]

export default function OverflowWorkflow() {
  const [flowId, setFlowId] = useState('no-answer')
  const flow = FLOWS.find((item) => item.id === flowId)

  return (
    <section
      className="relative w-full overflow-hidden px-4 py-14 md:py-16 lg:px-[5%]"
      style={SECTION_BACKGROUND}
      aria-labelledby="overflow-workflow-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="icon-mask icon-refresh [--icon-size:1rem] inline-flex items-center gap-2 bg-white/10 text-[#a8c47d] rounded-full text-sm font-semibold px-4 py-1.5">
            Your team first. Backup when needed.
          </p>
          <h2
            id="overflow-workflow-heading"
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] tracking-tight text-white"
          >
            How Our Overflow Call
            <br />
            Answering Service Works
          </h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-white/65">
            Your number. Your greeting. A clear next step for every forwarded call.
          </p>
        </div>

        {/* A choice between three mutually exclusive options that updates the
            page in place, so it is a radiogroup rather than a tablist. */}
        <div className="mt-6 flex flex-col items-center">
          <p id="flow-label" className="text-[0.72rem] text-white/45">
            Explore your call flow
          </p>
          <div
            role="radiogroup"
            aria-labelledby="flow-label"
            className="mt-2.5 flex flex-wrap justify-center gap-1 rounded-full border border-white/10 bg-[#0b2419]/70 p-1.5"
          >
            {FLOWS.map((item) => (
              <button
                key={item.id}
                type="button"
                role="radio"
                aria-checked={flowId === item.id}
                onClick={() => setFlowId(item.id)}
                className={`flex items-center gap-2.5 rounded-full px-5 py-2 text-[0.85rem] font-semibold transition-colors ${
                  flowId === item.id ? 'bg-[#8CA365] text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                <span
                  className={`h-3 w-3 flex-shrink-0 rounded-full border-2 ${
                    flowId === item.id ? 'border-[#0f2925] bg-[#ffffff]' : 'border-white/40'
                  }`}
                  aria-hidden="true"
                ></span>
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <ol className="mt-7 grid list-none grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li key={step.number} className="relative">
              <div
                className={`relative flex h-full flex-col items-center rounded-2xl px-6 pb-4 pt-12 text-center shadow-lg ${
                  step.active ? 'border-4 border-[#8CA365] bg-[#eef5e2]' : 'bg-[#F8F9F4]'
                }`}
              >
                <span
                  className="absolute -top-4 left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-[#17352a] text-[0.78rem] font-bold  border-2 border-white text-white"
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                {step.active && (
                  <span className="absolute right-3 top-7 rounded-full bg-[#8CA365]/25 px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[#3f5a26]">
                    Active step
                  </span>
                )}

                <span
                  className={`icon-mask ${step.icon} [--icon-size:3rem] text-[#6b8a3e]`}
                  aria-hidden="true"
                ></span>

                <h3 className="mt-2.5 text-[0.98rem] font-bold leading-tight text-[#1a2e35]">{step.title}</h3>

                {step.isTrigger ? (
                  // Every flow's wording stays in the HTML; only visibility changes.
                  <span className="mt-2 block w-full flex-grow">
                    {FLOWS.map((item) => (
                      <span key={item.id} hidden={item.id !== flowId}>
                        <span className="block text-[0.82rem] leading-[1.45] text-gray-600">{item.trigger.body}</span>
                      </span>
                    ))}
                  </span>
                ) : (
                  <p className="mt-2 flex-grow text-[0.82rem] leading-[1.45] text-gray-600">{step.body}</p>
                )}

                {step.isTrigger ? (
                  <span className="mt-3 block w-full">
                    {FLOWS.map((item) => (
                      <span key={item.id} hidden={item.id !== flowId}>
                        <span className="flex w-full items-center justify-center gap-1.5 rounded-full bg-[#e5ebda] px-3 py-2.5">
                          <span
                            className={`icon-mask ${item.trigger.pillIcon} [--icon-size:0.9rem] text-[#295657]`}
                            aria-hidden="true"
                          ></span>
                          <span className="text-[0.78rem] font-semibold t">{item.trigger.pill}</span>
                        </span>
                      </span>
                    ))}
                  </span>
                ) : (
                  <p
                    className={`mt-3 flex w-full items-center justify-center  gap-1.5 rounded-full px-3 py-2.5 ${
                      step.active ? 'bg-[#dfecc9] ' : 'bg-[#e5ebda]'
                    }`}
                  >
                    <span
                      className={`icon-mask ${step.pillIcon} [--icon-size:0.9rem] flex-shrink-0 text-[#295657]`}
                      aria-hidden="true"
                    ></span>
                    <span
                      className={`text-[0.78rem] font-semibold text-[#1a2e35] ${step.active ? 'italic' : ''}`}
                    >
                      {step.active ? `“${step.pill}”` : step.pill}
                    </span>
                  </p>
                )}
              </div>

              {index < STEPS.length - 1 && (
                <svg
                  className="absolute left-full top-[20%] hidden h-3 w-8 -translate-y-1/2 lg:block"
                  viewBox="0 0 24 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M0 6h14" stroke="#8CA365" strokeWidth="1.6" strokeDasharray="3 3" />
                  <path
                    d="M14 2.5L18.5 6 14 9.5"
                    stroke="#8CA365"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </li>
          ))}
        </ol>

        <div
          className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-x-5 gap-y-2 rounded-xl border border-white/10 bg-[#0b2419]/60 px-6 py-3.5 text-center sm:flex-row sm:justify-center"
          aria-live="polite"
        >
          <p className="flex items-center gap-2.5 text-[0.85rem] font-semibold text-white">
            <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#a8c47d]" aria-hidden="true"></span>
            Selected: {flow.label}
          </p>
          <span className="hidden h-4 w-px bg-white/15 sm:block" aria-hidden="true"></span>
          <p className="text-[0.82rem] text-white/60">{flow.summary}</p>
        </div>

        <div className="mt-8 text-center">
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3 text-[0.9rem] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Discuss My Call Flow
          </Link>
          <p className="mt-3 text-[0.75rem] text-white/40">
            Forwarding options depend on your phone system and service plan.
          </p>
        </div>
      </div>
    </section>
  )
}
