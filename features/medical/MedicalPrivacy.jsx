import Link from 'next/link'

// Section 6. Describes the setup review itself; it deliberately does not claim
// a safeguard is already in place for a given practice.
const ITEMS = [
  {
    icon: 'icon-list-check',
    title: 'Agreed Intake Fields',
    body: 'Define which caller details receptionists should collect for each type of enquiry.',
  },
  {
    icon: 'icon-id-card',
    title: 'Caller Verification',
    body: 'Set identity and authority checks before patient information is shared.',
  },
  {
    icon: 'icon-user-clock',
    title: 'Access & Permissions',
    body: 'Confirm who can view messages and which actions each role can take.',
  },
  {
    icon: 'icon-doc-reply',
    title: 'Approved Delivery Routes',
    body: 'Agree where messages go and what information notifications can contain.',
  },
  {
    icon: 'icon-calendar-clock',
    title: 'Recording & Retention',
    body: 'Confirm recording notices and how long messages and recordings are kept.',
  },
  {
    icon: 'icon-shield-check',
    title: 'Processing Arrangements',
    body: 'Review staff, hosting and third-party locations before the service is set up.',
  },
]

const PANEL_CHECKS = ['Defined intake questions', 'Approved message destinations', 'Clear responsibilities']

export default function MedicalPrivacy() {
  return (
    <section className="w-full bg-[#f8f7f2] py-14 md:py-16" aria-labelledby="medical-privacy-heading">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-shield-check [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Patient information &amp; privacy
          </p>
          <h2
            id="medical-privacy-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
          >
            Clear Procedures for{' '}
            <br />
            Patient Information
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Agree what receptionists collect, who receives each message and how patient information is handled before
            calls begin.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] lg:gap-7">
          <div className="rounded-xl bg-[#1d4b37] p-7">
            <span
              className="icon-mask icon-doc-check [--icon-size:2.3rem] block text-[#a8c47d]"
              aria-hidden="true"
            ></span>
            <p className="mt-6 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#a8c47d]">
              Built around your practice
            </p>
            <p className="mt-2 text-[1.5rem] font-extrabold leading-tight text-white">
              Agree what we collect.{' '}
              <br />
              Define who receives it.
            </p>
            <p className="mt-3 text-base leading-relaxed text-white/70">
              Your call plan should reflect the information needed for each task, the people authorised to receive it
              and your practice&rsquo;s requirements.
            </p>

            <ul className="mt-5 list-none space-y-2.5">
              {PANEL_CHECKS.map((check) => (
                <li key={check} className="flex items-center gap-3">
                  <span
                    className="icon-mask icon-check [--icon-size:0.7rem] flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#8CA365] text-white"
                    aria-hidden="true"
                  ></span>
                  <span className="text-base text-white/85">{check}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 border-t border-white/15 pt-4 text-base text-white/60">Review the process before setup.</p>
          </div>

          <ul className="grid list-none grid-cols-1 gap-x-7 gap-y-5 sm:grid-cols-2">
            {ITEMS.map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <span
                  className={`icon-mask ${item.icon} [--icon-size:1.4rem] flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[#eef2e6] text-[#4f6630]`}
                  aria-hidden="true"
                ></span>
                <span className="min-w-0">
                  <h3 className="text-[1rem] font-bold leading-snug text-[#1b4332]">{item.title}</h3>
                  <span className="mt-1 block text-base leading-relaxed text-gray-600">{item.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-col items-start gap-5 rounded-xl bg-[#eef0e6] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-start gap-4">
            <span
              className="icon-mask icon-doc-check [--icon-size:1.5rem] mt-0.5 flex-shrink-0 text-[#4f6630]"
              aria-hidden="true"
            ></span>
            <span className="min-w-0">
              <span className="block text-[1.15rem] font-extrabold text-[#1b4332]">
                Discuss your practice&rsquo;s information-handling requirements.
              </span>
              <span className="mt-1 block text-base text-gray-600">
                Confirm the applicable arrangements, service scope and documentation before launch.
              </span>
            </span>
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.9rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#1d4b37] px-6 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#164032]"
          >
            Review My Practice Setup
          </Link>
        </div>

        <p className="mt-4 text-center text-sm text-gray-600">
          This section explains the setup review. Specific safeguards and agreements must be confirmed for your
          practice.
        </p>
      </div>
    </section>
  )
}
