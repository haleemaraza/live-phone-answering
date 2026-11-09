import Link from 'next/link'

// Seven call-handling commitments. An ordered list rather than the old
// condition/response table, because the content is now a sequence of points
// rather than paired triggers and actions.
const RULES = [
  {
    icon: 'icon-sliders',
    title: 'Call Handling That Follows Your Rules',
    body: 'Every caller has a reason for reaching out, and we make sure they get the attention they need. Whether they have a question, need a quote, or want someone to call them back, we follow your instructions and handle each call with care.',
  },
  {
    icon: 'icon-users',
    title: 'Your Team Comes First, We Step In When Needed',
    body: 'Your customers should never feel ignored just because your team is busy. Calls reach your staff first, and when no one is available we step in to greet callers, understand their needs, and make sure they know someone is there to help.',
  },
  {
    icon: 'icon-call-transfer',
    title: 'Urgent Calls Reach the Right Person',
    body: 'Some calls simply cannot wait. When a caller needs immediate assistance, we follow your priority guidelines and contact the right on-call team member so they can get help without unnecessary delays.',
  },
  {
    icon: 'icon-report',
    title: 'Every Message Gets Recorded',
    body: 'When a caller cannot reach the right person, we make sure their concerns are heard. We collect their name, contact details, and reason for calling, along with any information your team needs for a helpful follow-up.',
  },
  {
    icon: 'icon-org-chart',
    title: 'Backup Contacts Are Always in Place',
    body: 'If your primary contact is unavailable, callers still have someone to turn to. We follow your backup contact list, reach the next available team member, and keep a record of every attempt so requests are not overlooked.',
  },
  {
    icon: 'icon-phone-clock',
    title: 'No Missed Calls During Busy Hours',
    body: 'Your team cannot always stop what they are doing to answer the phone. During busy periods we handle overflow calls, listen to what callers need, and make sure each person receives a friendly response instead of being left waiting.',
  },
  {
    icon: 'icon-check-circle',
    title: 'You Decide How Every Call Is Handled',
    body: 'Your business has its own way of helping customers, and we respect that. Whether a caller needs to speak with someone, leave a message, request a callback, or report an urgent issue, we follow your preferred process.',
  },
]

function RuleCard({ rule }) {
  return (
    <div className="group flex h-full w-full flex-col rounded-2xl border border-gray-200/80 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#8CA365] hover:shadow-xl">
      <div className="mb-5 flex items-center gap-4">
        <span
          className={`icon-mask ${rule.icon} [--icon-size:1.4rem] flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#8CA365]/10 text-[#4f6630] transition-transform duration-300 group-hover:scale-110`}
          aria-hidden="true"
        ></span>
      </div>
      <h4 className="text-xl font-bold leading-snug text-[#1a2e35]">{rule.title}</h4>
      <p className="mt-3 flex-grow text-base leading-relaxed text-gray-600">{rule.body}</p>
    </div>
  )
}

export default function CallHandlingRules() {
  // Seven cards leave the seventh alone on its own row, so it shares a
  // two-column row with the closing CTA instead of stranding white space.
  const firstRules = RULES.slice(0, 6)
  const lastRule = RULES[RULES.length - 1]

  return (
    <section className="w-full bg-[#f8f6ec] py-14 md:py-16" aria-labelledby="call-handling-heading">
      <div className="site-container">
        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,25rem)] lg:gap-12">
          <div>
            <p className="icon-mask icon-sliders [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
              Call handled in the way you choose
            </p>
            <h2
              id="call-handling-heading"
              className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-[#34414A]"
            >
              First Your Team Takes the Calls{' '}
              <br />
              <span className="text-[#295657]">Then We Enter the Scene</span>
            </h2>
          </div>

          <p className="text-lg leading-relaxed text-gray-600 lg:pt-6">
            Tell us which calls you want us to handle and which to forward directly to your onsite team.
          </p>
        </div>

        <ol className="mt-9 grid list-none grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {firstRules.map((rule) => (
            <li key={rule.title} className="flex">
              <RuleCard rule={rule} />
            </li>
          ))}
        </ol>

        <div className="mt-6 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
          <ol start={RULES.length} className="list-none">
            <li className="flex h-full">
              <RuleCard rule={lastRule} />
            </li>
          </ol>

          <div className="flex h-full flex-col items-start justify-between gap-5 rounded-2xl bg-white px-6 py-5 shadow-sm">
            <p className="flex items-start gap-4">
              <span
                className="icon-mask icon-check-circle [--icon-size:1.6rem] mt-0.5 flex-shrink-0 text-[#4f6630]"
                aria-hidden="true"
              ></span>
              <span className="min-w-0">
                <span className="block text-[1.12rem] font-bold text-[#1a2e35]">
                  You set the rules. We follow the plan.
                </span>
                <span className="mt-1 block text-lg text-gray-600">
                  Call-handling options are confirmed during setup.
                </span>
              </span>
            </p>

            <Link
              prefetch={false}
              href="/contact-us"
              className="icon-mask icon-arrow-right [--icon-size:1rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
            >
              Discuss My Call Handling
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
