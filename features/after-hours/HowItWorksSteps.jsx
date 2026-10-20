'use client'

import Link from 'next/link'
import { useState } from 'react'

// All four steps ship in the HTML and inactive ones are only `hidden`, so the
// copy behind steps 2-4 is still crawled. The HowTo schema below mirrors them.
const STEPS = [
  {
    id: 'instructions',
    number: '01',
    label: 'Set your instructions',
    titleTop: 'Your business.',
    titleBottom: 'Your call instructions.',
    body: 'Tell us when you close, how to greet callers, and what information to collect. Agree on which requests can wait and which should reach your on-call contact.',
    points: [
      { icon: 'icon-clock', label: 'Coverage hours and time zone' },
      { icon: 'icon-report', label: 'Greeting and caller questions' },
      { icon: 'icon-phone', label: 'Urgent-call contact rules' },
    ],
    cardTitle: 'Start with clear instructions',
    rows: [
      { title: 'Coverage', body: 'Outside your agreed office hours' },
      { title: 'Greeting', body: 'Welcome callers in your business name' },
      { title: 'Next steps', body: 'Record inquiries or follow on-call rules' },
    ],
    highlight: {
      icon: 'icon-headset',
      title: 'Ready for a test call',
      body: 'Check the greeting, message delivery, and routing before going live.',
    },
  },
  {
    id: 'forward',
    number: '02',
    label: 'Forward and test',
    titleTop: 'Connect your line.',
    titleBottom: 'Hear it for yourself.',
    body: 'Forward your number when you close, or on a schedule we agree together. Run a test call so you can hear the greeting and check how messages arrive.',
    points: [
      { icon: 'icon-phone-forward', label: 'Forwarding set to your schedule' },
      { icon: 'icon-headset', label: 'Test call before going live' },
      { icon: 'icon-check-circle', label: 'Message delivery confirmed' },
    ],
    cardTitle: 'Connect and check',
    rows: [
      { title: 'Forwarding', body: 'Send calls through when your office closes' },
      { title: 'Test call', body: 'Listen to the greeting end to end' },
      { title: 'Delivery', body: 'Confirm where your messages arrive' },
    ],
    highlight: {
      icon: 'icon-sliders',
      title: 'Adjust before you go live',
      body: 'Change the wording, the questions, or the routing until it sounds right.',
    },
  },
  {
    id: 'answer',
    number: '03',
    label: 'We answer your calls',
    titleTop: 'Your callers reach',
    titleBottom: 'a real person.',
    body: 'After closing, a receptionist answers in your business name, follows the instructions you set, and captures the details your team needs.',
    points: [
      { icon: 'icon-headset', label: 'Answered in your business name' },
      { icon: 'icon-question', label: 'Your questions asked in order' },
      { icon: 'icon-bell', label: 'Urgent calls routed by your rules' },
    ],
    cardTitle: 'On every call',
    rows: [
      { title: 'Greeting', body: 'Your approved welcome, every time' },
      { title: 'Questions', body: 'The details you asked us to collect' },
      { title: 'Routing', body: 'Urgent calls follow your escalation rules' },
    ],
    highlight: {
      icon: 'icon-shield-check',
      title: 'Nothing is guessed',
      body: 'If a request falls outside your instructions, we take a message instead.',
    },
  },
  {
    id: 'handoff',
    number: '04',
    label: 'Receive the handoff',
    titleTop: 'Clear notes.',
    titleBottom: 'Ready for the morning.',
    body: 'Each call arrives as a written summary through the channel you choose, so your team can pick up exactly where the caller left off.',
    points: [
      { icon: 'icon-report', label: 'A summary for every call' },
      { icon: 'icon-share', label: 'Delivered the way you prefer' },
      { icon: 'icon-bolt', label: 'Urgent items flagged for action' },
    ],
    cardTitle: 'After the call',
    rows: [
      { title: 'Summary', body: 'Who called, and what they needed' },
      { title: 'Delivery', body: 'Email, text, or straight into your CRM' },
      { title: 'Follow-up', body: 'Flagged when it needs action from you' },
    ],
    highlight: {
      icon: 'icon-sun',
      title: 'Start the day informed',
      body: 'Your team opens with context instead of a queue of voicemails.',
    },
  },
]

const OVERLAY = {
  backgroundImage: [
    // lighter bloom out of the top-left corner
    'radial-gradient(80% 70% at 0% 0%, rgba(45,99,81,0.55) 0%, rgba(15,41,37,0) 60%)',
    // solid behind the copy, thinning to the right so the photo reads through
    'linear-gradient(100deg, #0f2925 0%, #0f2925 46%, rgba(15,41,37,0.94) 64%, rgba(15,41,37,0.68) 100%)',
  ].join(','),
}

// Marks the four steps up as a HowTo so they are eligible for a step-by-step
// result in search. Mirrors exactly what is rendered.
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How After-Hours Call Answering Works',
  description: 'Set your instructions, connect your line, and give your callers a clear next step.',
  step: STEPS.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.label,
    text: step.body,
  })),
}

export default function HowItWorksSteps() {
  const [index, setIndex] = useState(0)
  const active = STEPS[index]

  return (
    <section className="relative w-full overflow-hidden bg-[#0f2925]" aria-labelledby="how-it-works-heading">
      {/* Photo sits behind two washes: a flat one that keeps the left-hand copy
          fully legible and thins out to the right so the desk stays visible, and
          a lighter bloom in the top-left corner. Written as inline gradients so
          there is no arbitrary-value class that could fail to compile. */}
      <img
        src="/images/office-receptionists.webp"
        alt=""
        aria-hidden="true"
        width={1024}
        height={1024}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-right"
      />
      <div className="absolute inset-0" style={OVERLAY} aria-hidden="true"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 md:py-14 lg:px-[5%]">
        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:gap-14">
          <div>
            <p className="icon-mask icon-bolt [--icon-size:1rem] inline-flex items-center gap-2 bg-white/10 text-[#a8c47d] rounded-full text-sm font-semibold px-4 py-1.5">
              A clear process. A confident handoff.
            </p>
            <h2
              id="how-it-works-heading"
              className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight text-white"
            >
              How After-Hours
              <br />
              Call Answering Works
            </h2>
          </div>
          <p className="text-[0.95rem] leading-relaxed text-white/70 lg:pt-8">
            Set your instructions, connect your line, and give your callers a clear next step.
          </p>
        </div>

        {/* Buttons are direct children of the tablist; the rail is drawn by each
            cell's ::after so it always starts and stops on a circle. */}
        <div
          role="tablist"
          aria-label="How after-hours call answering works"
          className="mt-7 grid grid-cols-2 gap-y-5 sm:grid-cols-4"
        >
          {STEPS.map((step, i) => (
            <button
              key={step.id}
              id={`how-tab-${step.id}`}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-controls={`how-panel-${step.id}`}
              onClick={() => setIndex(i)}
              className="group relative flex flex-col items-start pr-4 text-left after:absolute after:left-9 after:right-0 after:top-[0.9rem] after:hidden after:h-px after:bg-white/25 after:content-[''] sm:after:block sm:last:after:hidden"
            >
              <span
                className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full text-[0.7rem] font-bold transition-colors ${
                  i === index
                    ? 'bg-[#a8c47d] text-[#0f2925]'
                    : 'border border-white/40 bg-[#0f2925] text-white/75 group-hover:border-[#a8c47d]'
                }`}
              >
                {step.number}
              </span>
              <span
                className={`mt-2.5 border-b-2 pb-1.5 text-[0.9rem] transition-colors ${
                  i === index ? 'border-[#a8c47d] font-bold text-white' : 'border-transparent text-white/65'
                }`}
              >
                {step.label}
              </span>
            </button>
          ))}
        </div>

        {STEPS.map((step, i) => (
          <div
            key={step.id}
            id={`how-panel-${step.id}`}
            role="tabpanel"
            aria-labelledby={`how-tab-${step.id}`}
            hidden={i !== index}
          >
            {/* The grid lives on an inner element: a display utility on the panel
                itself outranks the browser's [hidden] rule and would show all four. */}
            <div className="grid grid-cols-1 items-start gap-7 pt-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,29rem)] lg:gap-10">
              <div>
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#a8c47d]">
                  Step {step.number}
                </p>
                <h3 className="mt-2 text-2xl font-bold leading-[1.12] tracking-tight text-white sm:text-[2.1rem]">
                  {step.titleTop}
                  <br />
                  {step.titleBottom}
                </h3>
                <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-white/70">{step.body}</p>

                <ul className="mt-5 list-none space-y-3">
                  {step.points.map((point) => (
                    <li key={point.label} className="flex items-center gap-4">
                      <span
                        className={`icon-mask ${point.icon} [--icon-size:1.15rem] flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#a8c47d]/50 text-[#a8c47d]`}
                        aria-hidden="true"
                      ></span>
                      <span className="text-[0.95rem] text-white">{point.label}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  prefetch={false}
                  href="/contact-us"
                  className="icon-mask icon-arrow-right [--icon-size:1rem] mt-6 inline-flex flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3 text-[0.95rem] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
                >
                  Talk Through My Setup
                </Link>

                <p className="mt-3 text-[0.78rem] text-white/50">Setup timing depends on your workflow.</p>
              </div>

              <div className="rounded-2xl bg-[#fbfaf3] p-5 shadow-2xl sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#566e34]">
                    Your after-hours playbook
                  </p>
                  <span className="flex-shrink-0 rounded-md border border-gray-300/70 px-2.5 py-1 text-[0.68rem] text-gray-500">
                    Illustrative setup
                  </span>
                </div>

                <h4 className="mt-2 text-xl font-extrabold text-[#1a2e35] sm:text-2xl">{step.cardTitle}</h4>

                <ol className="mt-3.5 list-none divide-y divide-gray-200/80">
                  {step.rows.map((row, rowIndex) => (
                    <li key={row.title} className="flex items-start gap-3.5 py-2.5">
                      <span
                        className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#8CA365] text-[0.72rem] font-bold text-white"
                        aria-hidden="true"
                      >
                        {rowIndex + 1}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.92rem] font-bold text-[#1a2e35]">{row.title}</span>
                        <span className="mt-0.5 block text-[0.85rem] text-gray-600">{row.body}</span>
                      </span>
                    </li>
                  ))}
                </ol>

                <div className="mt-3.5 flex items-start gap-3.5 rounded-lg border-l-[3px] border-[#8CA365] bg-[#eef3e3] px-4 py-3.5">
                  <span
                    className={`icon-mask ${step.highlight.icon} [--icon-size:1.4rem] mt-0.5 flex-shrink-0 text-[#4f6630]`}
                    aria-hidden="true"
                  ></span>
                  <span className="min-w-0">
                    <span className="block text-[0.92rem] font-bold text-[#1a2e35]">{step.highlight.title}</span>
                    <span className="mt-0.5 block text-[0.85rem] leading-relaxed text-gray-600">
                      {step.highlight.body}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-7 flex items-center justify-end gap-4">
          <button
            type="button"
            onClick={() => setIndex((i) => (i === 0 ? STEPS.length - 1 : i - 1))}
            aria-label="Previous step"
            className="icon-mask icon-arrow-left [--icon-size:1rem] flex h-10 w-10 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:border-[#a8c47d] hover:text-[#a8c47d]"
          ></button>
          <p className="text-[0.85rem] font-semibold tabular-nums text-white/80" aria-live="polite">
            {active.number} / {STEPS[STEPS.length - 1].number}
          </p>
          <button
            type="button"
            onClick={() => setIndex((i) => (i === STEPS.length - 1 ? 0 : i + 1))}
            aria-label="Next step"
            className="icon-mask icon-arrow-right [--icon-size:1rem] flex h-10 w-10 items-center justify-center rounded-full bg-[#8CA365] text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          ></button>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
    </section>
  )
}
