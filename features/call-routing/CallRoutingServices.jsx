import Link from 'next/link'

const SERVICES = [
  {
    icon: 'icon-call-screen',
    title: 'Smart Call Screening',
    body: 'We ask who’s calling and why, so we can separate important business calls from spam and prioritize what matters most to you. Our receptionists follow your specific guidelines to verify caller details, filter out unwanted solicitations, and ensure urgent inquiries get immediate attention.',
  },
  {
    icon: 'icon-org-chart',
    title: 'Direct Department Routing',
    body: 'We seamlessly guide callers straight to the right person or department, whether it’s sales, customer support, or billing. By using your customized team directory, we remove the hassle of automated phone trees and connect clients to the exact expert who can help them best.',
  },
  {
    icon: 'icon-phone-chat',
    title: 'Warm Introductions',
    body: 'Instead of cold transfers, we introduce the caller and give you a brief heads-up on what they need before putting them through. We check if you are available to accept the call first, allowing you to prepare for the conversation and provide a more personalized response.',
  },
  {
    icon: 'icon-phone-clock',
    title: 'Schedule-Based Transfers',
    body: "Calls are routed based on your actual working hours and real-time availability, jumping to your backup plan whenever you're tied up. You can set custom transfer windows for different days so your team is never interrupted outside of working hours.",
  },
  {
    icon: 'icon-buildings-arrow',
    title: 'Multi-Branch Support',
    body: 'Got several locations? We match each caller to the closest office or right local team based on what they need. Whether you operate across different cities or distinct specialized branches, we make sure regional inquiries land in the right place every time.',
  },
  {
    icon: 'icon-doc-reply',
    title: 'Detailed Messages & Backups',
    body: 'If your main line is busy, we take thorough notes or forward the caller to a secondary contact so you never miss an inquiry. We capture key contact info and call details instantly, passing them along via email or message so your team can follow up promptly.',
  },
]

export default function CallRoutingServices() {
  return (
    <section
      className="w-full bg-[#f8f7f2] py-14 md:py-16"
      aria-labelledby="call-routing-services-heading"
    >
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-call-transfer [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Call routing support
          </p>
          <h2
            id="call-routing-services-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
          >
            Call Screening, Routing, and Transfer{' '}
            <br />
            How We Handle Your Calls
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Make sure every caller gets where they need to go &mdash; on your schedule and by your rules.
          </p>
        </div>

        <ul className="mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <li
              key={service.title}
              className="flex h-full flex-col rounded-xl border border-gray-300/50 bg-[#fff] p-5 sm:p-6"
            >
              {/* Icon sits on its own row with the title beneath, as in the
                  reference — not inline with it. */}
              <span
                className={`icon-mask ${service.icon} [--icon-size:1.7rem] flex h-12 w-12 items-center justify-center rounded-lg bg-[#eef2e6] text-[#1b4332]`}
                aria-hidden="true"
              ></span>

              <h3 className="mt-4 text-[1.02rem] font-bold leading-snug text-[#1b4332]">{service.title}</h3>
              <p className="mt-2 flex-grow text-base leading-relaxed text-gray-600">{service.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col items-start gap-5 rounded-xl bg-[#eef0e6] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[1.15rem] font-extrabold text-[#1b4332]">
            Your team. Your branches. Your setup.
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.9rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#1d4b37] px-6 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#164032]"
          >
            Create My Call Plan
          </Link>
        </div>

        {/* What a given plan supports is agreed at setup, so the cards describe
            tasks rather than promise all of them. */}
        <p className="mt-5 text-center text-sm text-gray-600">
          We&rsquo;ll fine-tune all transfer rules, destinations, and backup steps together during setup.
        </p>
      </div>
    </section>
  )
}
