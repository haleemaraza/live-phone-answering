import Link from 'next/link'

// Eight cards, so the grid runs on six columns: the first six sit three-up and
// the last two split the final row instead of leaving an empty third.
const SERVICES = [
  {
    icon: 'icon-user-plus',
    title: 'New Patient Enquiries',
    body: 'Capture the service requested, preferred location and callback details for your reception team.',
  },
  {
    icon: 'icon-calendar-refresh',
    title: 'Appointments & Changes',
    body: 'Book, reschedule or cancel under your approved rules where included, or capture an appointment request.',
  },
  {
    icon: 'icon-doc-reply',
    title: 'Existing Patient Messages',
    body: 'Record the reason for calling and pass the message to the appropriate practice contact.',
  },
  {
    icon: 'icon-moon',
    title: 'After-Hours On-Call Routing',
    body: "Follow your practice's contact instructions for calls needing the designated on-call team.",
  },
  {
    icon: 'icon-doc-check',
    title: 'Referral & Document Enquiries',
    body: 'Capture administrative referral or document-status questions for the responsible staff member.',
  },
  {
    icon: 'icon-clipboard-check',
    title: 'Prescription & Results Callbacks',
    body: 'Record requests for your clinical team. Receptionists do not approve medication or interpret results.',
  },
  {
    icon: 'icon-price-tag',
    title: 'Billing & Admin Questions',
    body: 'Answer approved fee and practice FAQs, and route account-specific enquiries to your team.',
  },
  {
    icon: 'icon-phone-chat',
    title: 'Clinician & Professional Calls',
    body: "Capture the caller's organisation and purpose, then follow your approved professional-contact route.",
  },
]

const AUDIENCES = ['New patients', 'Existing patients', 'Clinicians', 'Practice teams']

export default function MedicalServices() {
  return (
    <section className="w-full bg-[#f8f7f2] py-14 md:py-16" aria-labelledby="medical-services-heading">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-medical-cross [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Medical answering services
          </p>
          <h2
            id="medical-services-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
          >
            Patient and Practice Calls{' '}
            <br />
            We Can Handle
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Give appointment requests, patient messages and professional enquiries a clear route through your
            practice&rsquo;s approved call plan.
          </p>

          <ul className="mt-5 flex list-none flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {AUDIENCES.map((audience, index) => (
              <li
                key={audience}
                className="flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-gray-600"
              >
                {audience}
                {index < AUDIENCES.length - 1 && (
                  <span aria-hidden="true" className="text-gray-400">
                    /
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {SERVICES.map((service, index) => (
            <li
              key={service.title}
              className={`relative flex h-full flex-col rounded-xl border border-gray-300/50 bg-[#fff] p-5 sm:p-6 ${
                index >= SERVICES.length - 2 ? 'lg:col-span-3' : 'lg:col-span-2'
              }`}
            >
              <span
                aria-hidden="true"
                className="absolute right-5 top-5 text-sm font-bold text-gray-600 sm:right-6 sm:top-6"
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              <span
                className={`icon-mask ${service.icon} [--icon-size:1.7rem] flex h-12 w-12 items-center justify-center rounded-lg bg-[#eef2e6] text-[#1b4332]`}
                aria-hidden="true"
              ></span>

              <h3 className="mt-4 text-[1.02rem] font-bold leading-snug text-[#1b4332]">{service.title}</h3>
              <p className="mt-2 flex-grow text-base leading-relaxed text-gray-600">{service.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col items-start gap-5 rounded-xl bg-[#1d4b37] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-start gap-4">
            <span
              className="icon-mask icon-headset [--icon-size:1.6rem] mt-0.5 flex-shrink-0 text-[#a8c47d]"
              aria-hidden="true"
            ></span>
            <span className="min-w-0">
              <span className="block text-[1.15rem] font-extrabold text-white">
                Your practice. Your instructions. A clear next step.
              </span>
              <span className="mt-1 block text-base text-white/70">
                Choose the call types and handling tasks your team needs.
              </span>
            </span>
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.9rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-6 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Build My Medical Call Plan
          </Link>
        </div>

        {/* Keeps the scope honest: reception support, not clinical care. */}
        <p className="mt-5 text-center text-sm text-gray-600">
          Reception support follows your agreed plan. Clinical decisions remain with your healthcare team.
        </p>
      </div>
    </section>
  )
}
