'use client'

import Link from 'next/link'
import { useState } from 'react'

// All six bodies and all six sample greetings stay in the HTML; collapsing only
// toggles `hidden`, so none of this copy is hidden from crawlers.
const SERVICES = [
  {
    id: 'scheduling',
    number: '01',
    title: 'After Hours Appointment Scheduling',
    body: 'Our receptionists book appointments directly into your calendar and reduce scheduling delays. Trained agents follow your availability rules, confirm time zones, and send confirmations or reminders to callers, keeping your schedule current without asking staff to work overtime.',
    cta: { href: '/appointment-scheduling', label: 'Explore appointment scheduling' },
    quote: 'I can see an opening tomorrow at ten. Shall I put you down for that?',
    checks: ['Your availability rules', 'Confirmed time zones'],
  },
  {
    id: 'leads',
    number: '02',
    title: 'After Hours Lead Capture Service',
    body: 'We collect new leads, qualify them, and forward them to your team. Our agents gather contact details, basic qualifying information, and contextual notes, then route high-priority prospects to sales by email, CRM entry, or SMS alert so nobody falls through the cracks.',
    cta: { href: '/lead-capture', label: 'Explore lead capture' },
    quote: "I'll take those details now and make sure your team has them first thing tomorrow.",
    checks: ['Your qualifying questions', 'Your preferred delivery'],
  },
  {
    id: 'weekend',
    number: '03',
    title: 'Weekend and Holiday Answering Service',
    body: 'Weekend answering preserves continuity when your office is closed, so customers always reach a live representative. We act as an extension of your weekday operations, following your protocols to schedule, qualify, escalate, and document calls, so Monday starts with clear priorities and no backlog.',
    cta: { href: '/services', label: 'Explore weekend coverage' },
    quote: 'The office reopens Monday morning. I can take your details now so someone calls you first thing.',
    checks: ['Your closure dates', 'Your Monday handoff'],
  },
  {
    id: 'emergency',
    number: '04',
    title: 'After Hours Emergency Call Handling',
    body: 'Emergency protocols make sure the right people receive important information without delay. Agents follow scripted procedures to collect key details, confirm any safety instructions, and relay concise reports to designated responders, which reduces confusion and creates a record of the call.',
    cta: { href: '/call-routing', label: 'Explore urgent routing' },
    quote: 'I am contacting the on-call engineer now and will stay on the line with you.',
    checks: ['Your escalation path', 'A documented record'],
  },
  {
    id: 'hipaa',
    number: '05',
    title: 'HIPAA After Hours Answering Service',
    body: 'Our agents handle protected health information securely and follow strict privacy protocols, using encrypted systems, trained scripts, and documented consent procedures. Calls can be logged into secure portals or your EHR with audit trails, and escalation paths can include authorized on-call clinicians.',
    cta: { href: '/hipaa-compliant-answering-service', label: 'Explore HIPAA answering' },
    quote: 'I can take your details securely and pass them to the on-call clinician.',
    checks: ['Encrypted handling', 'Audit trail on every call'],
  },
]

export default function ReceptionistServices() {
  const [open, setOpen] = useState(SERVICES[0].id)

  return (
    <section className="w-full bg-[#f7f4e8] py-14 md:py-16" aria-labelledby="services-heading">
      <div className="site-container">
        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-12">
          <div>
            <p className="icon-mask icon-headset [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
              They Don't Just Pick the Calls
            </p>
            <h2
              id="services-heading"
              className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight text-[#1a2e35]"
            >
              What Can Our After Hours Phone{' '}
              <br />
              <span className="text-[#295657]">Answering Service Handle for You?</span>
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-gray-600 lg:pt-8">
            Choose the service that matches your business needs.
          </p>
        </div>

        {/* items-stretch keeps the list and the preview card the same height, so
            the dark panel always ends level with service 06. */}
        <div className="mt-6 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-7">
          {/* self-start keeps the list at its natural height — stretched, it
              would leave dead space under service 06 whenever the preview card
              is the taller of the two. The card absorbs the difference instead. */}
          <ul className="list-none divide-y divide-gray-300/50 overflow-hidden rounded-xl border border-gray-300/50 bg-white/40 lg:self-start">
            {SERVICES.map((service) => {
              const expanded = open === service.id
              return (
                <li
                  key={service.id}
                  className={`border-l-[3px] transition-colors ${
                    expanded ? 'border-l-[#8CA365] bg-[#fbfaf3]' : 'border-l-transparent'
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={expanded}
                      aria-controls={`service-panel-${service.id}`}
                      onClick={() => setOpen(expanded ? null : service.id)}
                      className="flex w-full items-center gap-5 px-5 py-3.5 text-left transition-colors hover:text-[#295657]"
                    >
                      <span className="text-base font-semibold tabular-nums text-[#566e34]">{service.number} </span>
                      <span
                        className={`flex-grow text-[1.02rem] font-bold leading-snug ${
                          expanded ? 'text-[#295657]' : 'text-[#34414A]'
                        }`}
                      >
                         {service.title}
                      </span>
                      <span
                        className={`icon-mask ${expanded ? 'icon-minus' : 'icon-plus'} [--icon-size:1.1rem] text-[#6b8a3e]`}
                        aria-hidden="true"
                      ></span>
                    </button>
                  </h3>

                  <div id={`service-panel-${service.id}`} hidden={!expanded} className="px-5 pb-4 pl-[4.1rem]">
                    <p className="max-w-md text-base leading-relaxed text-gray-600">{service.body}</p>
                    <Link
                      prefetch={false}
                      href={service.cta.href}
                      className="icon-mask icon-arrow-right [--icon-size:0.85rem] mt-2.5 inline-flex flex-row-reverse items-center gap-2.5 text-base font-bold text-[#295657] underline underline-offset-4 transition-colors hover:text-[#8CA365]"
                    >
                      {service.cta.label}
                    </Link>
                  </div>
                </li>
              )
            })}
          </ul>

          {/* The artwork and frame stay put; only the quote block swaps, so
              changing service never reloads an image. */}
          <div className="flex flex-col overflow-hidden rounded-xl bg-[#0f2925]">
            <div className="relative flex-shrink-0">
              <img
                src="/images/after-hours-greeting.webp"
                alt="An after-hours receptionist wearing a headset greeting a caller"
                width={1566}
                height={672}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full"
              />
            </div>

            <div className="flex flex-grow flex-col p-5 sm:p-6">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#8CA365]">
                Illustrative greeting
              </p>

              {SERVICES.map((service) => (
                <div key={service.id} hidden={open !== service.id}>
                  <blockquote className="mt-2 text-[1.15rem] font-bold leading-[1.3] text-white sm:text-[1.32rem]">
                    &ldquo;{service.quote}&rdquo;
                  </blockquote>

                  <ul className="mt-4 list-none space-y-2.5 border-t border-white/15 pt-4">
                    {service.checks.map((check) => (
                      <li key={check} className="flex items-center gap-3 text-base text-white/80">
                        <span
                          className="icon-mask icon-check [--icon-size:0.7rem] flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#8CA365] text-white"
                          aria-hidden="true"
                        ></span>
                        {check}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <p className="mt-auto pt-5 text-[0.74rem] italic text-white/55">
                Example wording is customized during setup.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-5 flex flex-col items-center gap-x-4 gap-y-2 border-t border-gray-300/50 pt-4 sm:flex-row">
          <span className="icon-mask icon-check-circle [--icon-size:1.05rem] inline-flex items-center gap-2.5 text-base font-semibold text-[#34414A] before:text-[#8CA365]">
            Built around your instructions.
          </span>
          <span className="text-base text-gray-600 sm:border-l sm:border-gray-300/70 sm:pl-4">
            Available tasks depend on your plan and agreed workflow.
          </span>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.85rem] inline-flex flex-row-reverse items-center gap-2.5 text-base font-semibold text-[#295657] transition-colors hover:text-[#8CA365] sm:ml-auto"
          >
            Discuss my call handling
          </Link>
        </p>
      </div>
    </section>
  )
}
