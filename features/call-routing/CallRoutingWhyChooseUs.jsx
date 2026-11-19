import Link from 'next/link'

// Section 9. Page-specific so the shared lead-capture version keeps its own
// copy on /lead-capture.
const REASONS = [
  {
    icon: 'icon-headset',
    title: 'Every Caller Gets a Personal Response',
    body: 'Our live receptionists answer calls using your business name and preferred greeting. Callers speak to a real person who listens to their needs instead of being left to navigate confusing phone menus.',
  },
  {
    icon: 'icon-org-chart',
    title: 'Calls Reach the Right People',
    body: 'We screen incoming calls, understand why someone is calling, and follow your contact list to direct enquiries to the appropriate team member or department. This helps reduce unnecessary transfers and makes it easier for callers to get the assistance they need.',
  },
  {
    icon: 'icon-check-circle',
    title: 'Your Team Stays Focused',
    body: 'Let our receptionists handle incoming calls while your employees concentrate on meetings, projects, and daily responsibilities. Your team can give important work their attention without constantly stopping to answer the phone.',
  },
  {
    icon: 'icon-report',
    title: 'Fewer Missed Calls and Lost Enquiries',
    body: "When a contact is unavailable, we follow your backup instructions and capture the caller's details. Your team receives the information needed to return calls and follow up on enquiries.",
  },
  {
    icon: 'icon-sliders',
    title: 'Call Handling That Fits Your Business',
    body: 'Set your preferred contact hours, transfer rules, availability requirements, and backup contacts. We follow your instructions so incoming calls are handled according to your business processes.',
  },
  {
    icon: 'icon-shield-check',
    title: 'A Consistent Experience for Every Caller',
    body: 'Whether someone is calling for the first time or following up on an earlier enquiry, our receptionists use your approved greetings and call-handling guidelines. This gives callers a familiar, professional experience whenever they contact your business.',
  },
]

export default function CallRoutingWhyChooseUs() {
  return (
    <section className="w-full bg-[#1b4332] py-14 md:py-16" aria-labelledby="call-routing-why-heading">
      <div className="site-container">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14">
          <div>
            <p className="icon-mask icon-shield-check [--icon-size:1rem] inline-flex items-center gap-2 bg-white/10 text-[#a8c47d] rounded-full text-sm font-semibold px-4 py-1.5">
              Why work with Live Phone Answering
            </p>
            <h2
              id="call-routing-why-heading"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] tracking-tight text-white"
            >
              Why Businesses Choose Us{' '}
              <br />
              for Call Routing and Transfers
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-white/70 lg:pt-14">
            A well-handled call makes it easier for customers to reach the right person and helps your team stay
            focused. Here are six ways our call routing and transfer service makes a difference.
          </p>
        </div>

        <ul className="mt-9 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason) => (
            <li key={reason.title} className="h-full rounded-xl bg-[#f7f7f0] p-6">
              <span
                className={`icon-mask ${reason.icon} [--icon-size:1.9rem] block text-[#4f6630]`}
                aria-hidden="true"
              ></span>
              <h3 className="mt-4 text-[1.02rem] font-bold leading-snug text-[#1b4332]">{reason.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-gray-600">{reason.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-col items-start gap-5 border-t border-[#8CA365]/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="block text-[1.4rem] font-extrabold text-white">
              Give every caller a clear path to the right person.
            </span>
            <span className="mt-1 block text-lg text-white/70">
              Let us handle the calls while your team focuses on what matters.
            </span>
          </p>

          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3.5 text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Let&rsquo;s Build My Call Routing Plan
          </Link>
        </div>
      </div>
    </section>
  )
}
