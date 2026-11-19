import Link from 'next/link'

// Section 7: what stays the same brand-wide beside what varies per location,
// then the approval path for changing either.
const SHARED = [
  {
    icon: 'icon-chat',
    title: 'Greeting & Tone',
    body: 'Use your approved brand name, welcome and style of conversation.',
  },
  {
    icon: 'icon-layers',
    title: 'Service Descriptions',
    body: 'Give consistent answers about the services your network offers.',
  },
  {
    icon: 'icon-clipboard-check',
    title: 'Required Lead Questions',
    body: 'Capture the agreed details before passing on an enquiry.',
  },
  {
    icon: 'icon-headset',
    title: 'Complaint Procedures',
    body: "Follow the brand's approved escalation instructions.",
  },
  {
    icon: 'icon-doc-check',
    title: 'Approved Answers',
    body: 'Stay within the information your brand has authorized.',
  },
]

const LOCAL = [
  {
    icon: 'icon-calendar',
    title: 'Opening Hours & Holidays',
    body: 'Use the current schedule for the relevant location.',
  },
  {
    icon: 'icon-overlap',
    title: 'Service Areas & Availability',
    body: 'Check the approved territory and services offered locally.',
  },
  {
    icon: 'icon-calendar-check',
    title: 'Booking Calendars',
    body: "Follow each location's permitted appointment rules.",
  },
  {
    icon: 'icon-users',
    title: 'Local & Backup Contacts',
    body: 'Use the right contact order for messages and transfers.',
  },
  {
    icon: 'icon-price-tag',
    title: 'Authorized Prices & Offers',
    body: 'Share local details only where the brand permits them.',
  },
]

const CHANGE_STEPS = ['Request a change', 'Authorized contact approves', 'Effective date recorded', 'Instructions checked']

function InstructionList({ items, theme }) {
  return (
    <ul className="list-none divide-y divide-gray-200">
      {items.map((item) => (
        <li key={item.title} className="flex items-start gap-4 px-5 py-4 sm:px-6">
          <span
            className={`icon-mask ${item.icon} [--icon-size:1.3rem] flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${theme}`}
            aria-hidden="true"
          ></span>
          <span className="min-w-0">
            <h4 className="text-[1rem] font-bold leading-snug text-[#1b4332]">{item.title}</h4>
            <span className="mt-1 block text-base leading-relaxed text-gray-600">{item.body}</span>
          </span>
        </li>
      ))}
    </ul>
  )
}

export default function FranchiseBrandStandards() {
  return (
    <section className="w-full bg-[#f8f7f2] py-14 md:py-16" aria-labelledby="franchise-standards-heading">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-shield-check [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Brand consistency. Local knowledge.
          </p>
          <h2
            id="franchise-standards-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
          >
            One Brand Standard.{' '}
            <br />
            The Right Details for Each Location.
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Keep your greeting and service standards consistent while approved local details guide each call.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 items-start gap-5 lg:grid-cols-2 lg:gap-7">
          <div className="overflow-hidden rounded-xl border border-gray-300/50 bg-white">
            <h3 className="icon-mask icon-shield-check [--icon-size:1.3rem] flex items-center gap-3 bg-[#1d4b37] px-5 py-4 text-[1.15rem] font-extrabold text-white before:flex-shrink-0 before:text-[#a8c47d] sm:px-6">
              Shared Brand Instructions
            </h3>
            <InstructionList items={SHARED} theme="bg-[#eef2e6] text-[#1b4332]" />
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-300/50 bg-white">
            <h3 className="icon-mask icon-buildings-arrow [--icon-size:1.3rem] flex items-center gap-3 bg-[#c9dfb0] px-5 py-4 text-[1.15rem] font-extrabold text-[#1a2e35] before:flex-shrink-0 before:text-[#4f6630] sm:px-6">
              Location-Specific Instructions
            </h3>
            <InstructionList items={LOCAL} theme="bg-[#eef2e6] text-[#1b4332]" />
          </div>
        </div>

        <h3 className="mt-9 text-[1.3rem] font-extrabold text-[#1b4332]">Keep changes clear and approved.</h3>

        <ol className="mt-5 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CHANGE_STEPS.map((step, index) => (
            <li key={step} className="relative flex flex-col items-center text-center">
              {/* The connecting rule between markers, drawn only between them. */}
              {index < CHANGE_STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-[0.6rem] hidden h-px w-full bg-[#8CA365]/60 lg:block"
                ></span>
              )}
              <span
                aria-hidden="true"
                className="relative z-10 h-5 w-5 rounded-full border-2 border-[#8CA365] bg-[#f8f7f2]"
              ></span>
              <span className="mt-3 text-base font-bold text-[#1b4332]">{step}</span>
            </li>
          ))}
        </ol>

        <p className="mt-5 text-center text-sm text-gray-600">
          Agree who can request updates and who approves brand-wide or local changes.
        </p>

        <div className="mt-6 flex flex-col items-start gap-5 rounded-xl bg-[#eef0e6] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[1.15rem] font-extrabold text-[#1b4332]">
            Consistent where it matters. Specific where it helps.
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.9rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#1d4b37] px-6 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#164032]"
          >
            Build My Franchise Call Plan
          </Link>
        </div>
      </div>
    </section>
  )
}
