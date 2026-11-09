import Link from 'next/link'

const AFTER_HOURS = [
  { icon: 'icon-sun', label: 'Evenings' },
  { icon: 'icon-calendar', label: 'Weekends' },
  { icon: 'icon-clock', label: 'Agreed hours' },
]

// Shared class strings, so the two light cards and the dark one stay in step.
const LIGHT = {
  card: 'bg-white border border-gray-200/70 shadow-md',
  eyebrow: 'text-gray-400',
  panel: 'bg-[#eef6e8]',
  title: 'text-[#34414A]',
  body: 'text-gray-600',
  rule: 'border-gray-100',
  idealLabel: 'text-[#34414A]',
  idealValue: 'text-gray-500',
}

const DARK = {
  card: 'bg-white border-2 border-[#8CA365] shadow-2xl',
  eyebrow: 'text-[#6b8a3e]',
  panel: 'bg-[#eef6e8]',
  title: 'text-[#34414A]',
  body: 'text-gray-600',
  rule: 'border-gray-100',
  idealLabel: 'text-[#34414A]',
  idealValue: 'text-gray-500',
}

function Card({ theme, eyebrow, title, body, idealFor, href, note, children }) {
  return (
    <li className="flex">
      {/* The whole card is the link. No aria-label here: a shorter name than
          the visible text fails the label-in-name rule, so the card's own
          text is the accessible name. */}
      <Link
        prefetch={false}
        href={href}
        className={`group flex w-full flex-col rounded-3xl p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#8CA365] hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6b8a3e] focus-visible:ring-offset-2 ${theme.card}`}
      >
        <span className={`block text-[10px] font-bold uppercase tracking-[0.18em] mb-5 ${theme.eyebrow}`}>
          {eyebrow}
        </span>

        <span className={`block rounded-2xl px-5 py-6 mb-7 ${theme.panel}`} aria-hidden="true">
          {children}
        </span>

        <h3 className={`text-2xl font-extrabold mb-3 ${theme.title}`}>{title}</h3>
        <span className={`block text-sm leading-relaxed flex-grow ${theme.body}`}>{body}</span>

        <span className={`block text-xs font-bold mt-6 pt-5 border-t ${theme.rule} ${theme.idealLabel}`}>Ideal for</span>
        <span className={`block text-xs mt-1 ${theme.idealValue}`}>{idealFor}</span>

        <span className="icon-mask icon-arrow-right [--icon-size:0.85rem] mt-5 flex flex-row-reverse items-center justify-end gap-2 text-sm font-semibold text-[#6b8a3e] before:transition-transform before:duration-300 group-hover:before:translate-x-1">
          {note}
        </span>
      </Link>
    </li>
  )
}

export default function CoverageOptions() {
  return (
    <section className="w-full py-20 md:py-24" aria-labelledby="coverage-heading">
      <div className="site-container">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
          <p className="icon-mask icon-clock inline-flex items-center gap-2 bg-white text-[#4a7a3e] rounded-full text-sm font-semibold px-5 py-2 mb-6 shadow-sm border border-white/60">
            Flexible call coverage
          </p>
          <h2
            id="coverage-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] leading-tight tracking-tight mb-5"
          >
            When Your Virtual Receptionist
            <br className="hidden sm:block" /> Answers the Calls &mdash; You Choose
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Get call support during business hours, busy periods, or after closing.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none items-stretch">
          <Card
            theme={LIGHT}
            eyebrow="Your remote front desk"
            title="All Incoming Calls"
            body="Let our receptionists answer your calls during your selected business hours. We greet your customers, answer their questions, take messages, and make sure no important call goes unanswered."
            idealFor="Everyday call support"
            href="/services"
            note="See all answering services"
          >
            <span className="flex items-center justify-center gap-3">
              <span className="flex flex-col gap-1.5">
                {['JS', 'MK', 'DT'].map((initials) => (
                  <span
                    key={initials}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-white border border-gray-200 text-[9px] font-bold text-[#34414A]"
                  >
                    {initials}
                  </span>
                ))}
              </span>
              <span className="icon-mask icon-arrow-right [--icon-size:1rem] text-gray-300"></span>
              <span className="icon-mask icon-phone [--icon-size:1.25rem] flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#0f2925] text-white"></span>
              <span className="icon-mask icon-arrow-right [--icon-size:1rem] text-gray-300"></span>
              <span className="icon-mask icon-users [--icon-size:1.125rem] flex flex-col items-center gap-1 rounded-xl bg-white border border-gray-200 px-3 py-2.5 text-[9px] font-semibold text-[#34414A] before:text-[#8CA365]">
                Reception team
              </span>
            </span>
          </Card>

          <Card
            theme={DARK}
            eyebrow="Backup when you need it"
            title="Overflow Call Support"
            body="Keep your team’s lines open while our receptionists answer calls that go unanswered. When your team is busy or taking a break, we step in so no caller is left waiting."
            idealFor="Busy periods and staff breaks"
            href="/overflow-call-answering"
            note="Explore overflow call answering"
          >
            <span className="flex items-center justify-center gap-3">
              <span className="icon-mask icon-phone [--icon-size:1.5rem] flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white text-[#0f2925]"></span>
              <span className="flex flex-col gap-2">
                <span className="rounded-full bg-white border border-gray-200 px-3 py-1.5 text-[10px] font-semibold text-[#34414A]">
                  Your team is busy
                </span>
                <span className="icon-mask icon-headset [--icon-size:0.875rem] flex items-center gap-1.5 rounded-full bg-[#8CA365] px-3 py-1.5 text-[10px] font-semibold text-white">
                  Receptionist picks up
                </span>
              </span>
            </span>
          </Card>

          <Card
            theme={LIGHT}
            eyebrow="Beyond business hours"
            title="After-Hours Call Support"
            body="Make sure callers can reach someone during evenings, weekends, or other agreed hours. We answer questions, take messages, and capture new leads even when your office is closed."
            idealFor="Calls outside normal business hours"
            href="/after-hours-answering-service"
            note="See after-hours answering"
          >
            <span className="flex items-center justify-center gap-4">
              <span className="icon-mask icon-moon [--icon-size:1.75rem] flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#0f2925] text-white"></span>
              <span className="flex flex-col gap-1.5">
                {AFTER_HOURS.map((item) => (
                  <span
                    key={item.label}
                    className={`icon-mask ${item.icon} [--icon-size:0.875rem] flex items-center gap-2 rounded-lg bg-white border border-gray-200 px-3 py-1.5 text-[10px] font-semibold text-[#34414A] before:text-[#8CA365]`}
                  >
                    {item.label}
                  </span>
                ))}
              </span>
            </span>
          </Card>
        </ul>

        <div className="mt-6 flex flex-col bg-[#f6faf3] sm:flex-row sm:items-center gap-5 rounded-2xl bg-white border border-gray-200/70 px-6 py-6 sm:px-8">
          <span
            className="icon-mask icon-share [--icon-size:1.375rem] flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#eef6e8] text-[#295657]"
            aria-hidden="true"
          ></span>
          <span className="flex-grow">
            <span className="block text-sm font-bold text-[#34414A]">Your number. Your call-routing preferences.</span>
            <span className="block text-sm text-gray-500 mt-1">
              We&rsquo;ll help you plan when calls reach your team and when they reach a receptionist.
            </span>
          </span>
          <Link
            prefetch={false}
            href="/contact-us"
            className="inline-flex items-center gap-2 flex-shrink-0 text-sm font-semibold text-[#34414A] hover:text-[#8CA365] transition-colors"
          >
            Discuss coverage &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
