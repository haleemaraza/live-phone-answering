import Link from 'next/link'

const REASONS = [
  {
    icon: 'icon-sliders',
    title: 'A Call Plan for Your Property',
    body: 'Agree your greeting, guest information and call types. Give reservation enquiries and guest requests a defined next step.',
  },
  {
    icon: 'icon-calendar-check',
    title: 'Clear Reservation Boundaries',
    body: 'Define which tasks can be completed, which are requests and when your reservations team confirms the booking.',
  },
  {
    icon: 'icon-phone-forward',
    title: 'Defined Duty & Backup Contacts',
    body: 'Agree the contact order, supported retries and fallback steps for calls that need your hotel team.',
  },
  {
    icon: 'icon-doc-check',
    title: 'Useful Call & Enquiry Records',
    body: 'Receive the agreed caller details, reason for calling and action taken so your team can follow up with context.',
  },
  {
    icon: 'icon-layers',
    title: 'Setup Around Your Hotel Systems',
    body: 'Review forwarding, system access and message delivery before launch. Test the tasks included in your call plan.',
  },
  {
    icon: 'icon-pencil-circle',
    title: 'Instructions That Stay Current',
    body: "Update policies, coverage hours and duty contacts as things change. Keep your team's instructions current.",
  },
]

export default function HotelWhyChooseUs() {
  return (
    <section className="w-full bg-[#1b4332] py-14 md:py-16" aria-labelledby="hotel-why-heading">
      <div className="site-container">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14">
          <div>
            <p className="icon-mask icon-shield-check [--icon-size:1rem] inline-flex items-center gap-2 bg-white/10 text-[#a8c47d] rounded-full text-sm font-semibold px-4 py-1.5">
              Why choose Live Phone Answering
            </p>
            <h2
              id="hotel-why-heading"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] tracking-tight text-white"
            >
              Why Choose Us for{' '}
              <br />
              Hotel Answering?
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-white/70 lg:pt-14">
            Your property has its own guest questions, reservation rules and staff contacts. Build the call plan around
            those details so each request has a clear next step.
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
              Your property. Your instructions. A clear next step.
            </span>
            <span className="mt-1 block text-lg text-[#a8c47d]">
              Let&rsquo;s define how reservation enquiries and guest requests reach your team.
            </span>
          </p>

          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3.5 text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Build My Hotel Call Plan
          </Link>
        </div>
      </div>
    </section>
  )
}
