'use client'

import Link from 'next/link'
import { useState } from 'react'

// Illustrations are inline SVG rather than image files: they stay sharp at any
// size, take their colours from the palette, and add no network requests.
// Every scene shares one centred backdrop ellipse and keeps its shapes inside
// it, so no element hangs off the edge of the blob.
function Backdrop() {
  return <circle cx="130" cy="100" r="92" fill="#eef6e8" />
}

function BriefIllustration() {
  return (
    <svg viewBox="0 0 260 200" className="w-full h-auto" aria-hidden="true">
      <Backdrop />
      <circle cx="130" cy="70" r="22" fill="#295657" />
      <path d="M100 118a30 30 0 0160 0z" fill="#8CA365" />
      <rect x="86" y="114" width="88" height="42" rx="7" fill="#34414A" />
      <rect x="96" y="123" width="68" height="24" rx="4" fill="#f7fbf5" />
    </svg>
  )
}

function RulesIllustration() {
  return (
    <svg viewBox="0 0 260 200" className="w-full h-auto" aria-hidden="true">
      <Backdrop />
      <rect x="85" y="42" width="90" height="116" rx="10" fill="#ffffff" />
      <path d="M85 52a10 10 0 0110-10h70a10 10 0 0110 10v14H85z" fill="#0f2925" />
      <circle cx="104" cy="92" r="8" fill="#8CA365" />
      <rect x="120" y="87" width="44" height="9" rx="4.5" fill="#dfe9d6" />
      <circle cx="104" cy="118" r="8" fill="#8CA365" />
      <rect x="120" y="113" width="36" height="9" rx="4.5" fill="#dfe9d6" />
      <circle cx="104" cy="144" r="8" fill="#c8dcb4" />
      <rect x="120" y="139" width="40" height="9" rx="4.5" fill="#dfe9d6" />
    </svg>
  )
}

function ConnectIllustration() {
  return (
    <svg viewBox="0 0 260 200" className="w-full h-auto" aria-hidden="true">
      <Backdrop />
      <path d="M92 80a28 28 0 000 40" stroke="#8CA365" strokeWidth="7" strokeLinecap="round" fill="none" />
      <path d="M72 64a52 52 0 000 72" stroke="#c8dcb4" strokeWidth="7" strokeLinecap="round" fill="none" />
      <rect x="104" y="48" width="52" height="104" rx="12" fill="#0f2925" />
      <rect x="112" y="62" width="36" height="74" rx="5" fill="#f7fbf5" />
      <circle cx="130" cy="144" r="4" fill="#8CA365" />
      <path d="M168 80a28 28 0 010 40" stroke="#8CA365" strokeWidth="7" strokeLinecap="round" fill="none" />
      <path d="M188 64a52 52 0 010 72" stroke="#c8dcb4" strokeWidth="7" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function UpdatesIllustration() {
  return (
    <svg viewBox="0 0 260 200" className="w-full h-auto" aria-hidden="true">
      <Backdrop />
      <rect x="60" y="52" width="62" height="104" rx="12" fill="#0f2925" />
      <rect x="68" y="66" width="46" height="76" rx="6" fill="#f7fbf5" />
      <circle cx="91" cy="148" r="4" fill="#8CA365" />
      <rect x="132" y="62" width="74" height="38" rx="10" fill="#ffffff" />
      <rect x="144" y="76" width="42" height="8" rx="4" fill="#8CA365" />
      <rect x="132" y="112" width="74" height="38" rx="10" fill="#8CA365" />
      <rect x="144" y="126" width="48" height="8" rx="4" fill="#ffffff" />
    </svg>
  )
}

const STEPS = [
  {
    label: 'Tell us about your business',
    title: 'Tell us about your business',
    body: 'Share your services, opening hours, and the questions callers ask most often. We use this to build the brief your receptionists work from, so they answer as part of your team from the very first call.',
    Illustration: BriefIllustration,
  },
  {
    label: 'Set your call-handling rules',
    title: 'Set your call-handling rules',
    body: 'Choose your greeting, the details to collect on every call, and who to transfer to. You also decide what should happen when nobody on your team is available to take the call.',
    Illustration: RulesIllustration,
  },
  {
    label: 'Connect and test your calls',
    title: 'Connect and test your calls',
    body: 'Set up call forwarding from your existing number, then place a test call and hear the experience for yourself. Adjust anything that does not sound right before you go live.',
    Illustration: ConnectIllustration,
  },
  {
    label: 'Start receiving calls and updates',
    title: 'Start receiving calls and updates',
    body: 'Caller details and messages reach your team the way you chose. Request changes to your greeting, questions or routing whenever your needs change.',
    Illustration: UpdatesIllustration,
  },
]

export default function SetupSteps() {
  const [active, setActive] = useState(0)
  const go = (next) => setActive((next + STEPS.length) % STEPS.length)

  return (
    <section className="w-full bg-white py-20 md:py-24 px-4" aria-labelledby="setup-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
          <p className="icon-mask icon-sliders inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#6b8a3e] rounded-full text-sm font-semibold px-4 py-1.5 mb-5">
            Set up around your business
          </p>
          <h2
            id="setup-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#34414A] leading-tight tracking-tight mb-5"
          >
            How Our Virtual Receptionist
            <br className="hidden sm:block" /> Service Works
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            You set the instructions. We help put the right call-handling process in place.
          </p>
        </div>

        {/* The rail between the numbers is an li::after, so the whole connected
            stepper costs no extra elements. */}
        {/* A tablist must contain its tabs directly, so this is a div of
            buttons rather than an ol/li — the rail lives on button::after. */}
        <div
          role="tablist"
          aria-label="Setup steps"
          className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 mb-10 md:mb-14"
        >
          {STEPS.map((step, index) => {
            const isActive = index === active
            return (
              <button
                key={step.label}
                type="button"
                role="tab"
                id={`setup-tab-${index}`}
                aria-selected={isActive}
                aria-controls={`setup-panel-${index}`}
                onClick={() => setActive(index)}
                className="group relative flex w-full flex-col items-center gap-3 px-2 text-center after:absolute after:top-6 after:left-[calc(50%+1.75rem)] after:right-[calc(-50%+1.75rem)] after:hidden after:h-px after:bg-[#8CA365]/40 after:content-[''] sm:after:block sm:last:after:hidden"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-base font-bold transition-colors ${
                    isActive
                      ? 'bg-[#8CA365] text-white'
                      : 'border-2 border-[#8CA365]/40 bg-white text-[#5f7a3a] group-hover:border-[#8CA365]'
                  }`}
                >
                  {index + 1}
                </span>
                <span
                  className={`text-sm font-bold leading-snug transition-colors ${
                    isActive ? 'text-[#34414A]' : 'text-[#5f7a3a]'
                  }`}
                >
                  {step.label}
                </span>
              </button>
            )
          })}
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => go(active - 1)}
            aria-label="Previous step"
            className="icon-mask icon-chevron-down [--icon-size:1.5rem] absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 rotate-90 items-center justify-center rounded-full text-[#8CA365] transition-colors hover:bg-[#eef6e8] lg:flex"
          ></button>

          {STEPS.map((step, index) => {
            const { Illustration } = step
            return (
              <div
                key={step.label}
                id={`setup-panel-${index}`}
                role="tabpanel"
                aria-labelledby={`setup-tab-${index}`}
                className={
                  index === active
                    ? 'grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:px-16'
                    : 'hidden'
                }
              >
                <div className="mx-auto w-full max-w-[320px] md:max-w-[380px]">
                  <Illustration />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#34414A] mb-4">{step.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">{step.body}</p>
                </div>
              </div>
            )
          })}

          <button
            type="button"
            onClick={() => go(active + 1)}
            aria-label="Next step"
            className="icon-mask icon-chevron-down [--icon-size:1.5rem] absolute right-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 -rotate-90 items-center justify-center rounded-full text-[#8CA365] transition-colors hover:bg-[#eef6e8] lg:flex"
          ></button>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row sm:items-center gap-5 rounded-2xl bg-[#f2f9ee] px-6 py-6 sm:px-8">
          <span
            className="icon-mask icon-shield-check [--icon-size:1.375rem] flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#295657]"
            aria-hidden="true"
          ></span>
          <span className="flex-grow">
            <span className="block text-base font-bold text-[#34414A]">A clear plan for the unexpected</span>
            <span className="block text-sm text-gray-500 mt-1">
              Agree on backup contacts and next steps before your calls go live.
            </span>
          </span>
          <Link
            prefetch={false}
            href="/contact-us"
            className="inline-flex items-center gap-2 flex-shrink-0 text-sm font-semibold text-[#34414A] hover:text-[#8CA365] transition-colors"
          >
            Plan your setup &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
