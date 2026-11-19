import Link from 'next/link'

// Section 5: what we can answer, what we capture, and when a booking can
// actually be confirmed.
const SUPPORT = [
  {
    icon: 'icon-question',
    title: 'Approved Property Answers',
    body: 'Share current hotel-approved information about rooms, facilities and booking policies.',
  },
  {
    icon: 'icon-calendar-chat',
    title: 'Reservation Enquiry Capture',
    body: 'Record stay dates, guest numbers and room preferences for your reservations team to confirm.',
  },
  {
    icon: 'icon-check-circle',
    title: 'Authorised Booking Support',
    body: 'Complete reservation actions only where supported system access and agreed permissions allow.',
    note: 'Confirmed during setup.',
  },
]

// A worked example, labelled as fictional on screen.
const ENQUIRY_ROWS = [
  { label: 'Property', value: 'Example Hotel' },
  { label: 'Stay requested', value: 'Two nights' },
  { label: 'Guests', value: 'Two adults' },
  { label: 'Room preference', value: 'Double room' },
  { label: 'Callback details', value: 'Captured from the caller' },
]

const RULES = [
  'Current rates and room availability',
  'Changes, cancellations and exceptions',
  'Confirmation and payment process',
]

export default function HotelReservationSupport() {
  return (
    <section className="w-full bg-[#f8f7f2] py-14 md:py-16" aria-labelledby="hotel-reservation-heading">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-calendar-check [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Reservation support
          </p>
          <h2
            id="hotel-reservation-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
          >
            Make the Next Booking Step Clear
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Agree which questions we can answer, which details we capture and when a reservation can be confirmed.
          </p>
        </div>

        <ul className="mt-8 grid list-none grid-cols-1 gap-5 md:grid-cols-3">
          {SUPPORT.map((item) => (
            <li key={item.title} className="flex h-full gap-4 rounded-xl bg-[#eef0e6] p-6">
              <span
                className={`icon-mask ${item.icon} [--icon-size:1.6rem] flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-white text-[#4f6630]`}
                aria-hidden="true"
              ></span>
              <span className="min-w-0">
                <h3 className="text-[1.05rem] font-bold leading-snug text-[#1b4332]">{item.title}</h3>
                <span className="mt-2 block text-base leading-relaxed text-gray-600">{item.body}</span>
                {item.note && <span className="mt-2 block text-sm italic text-gray-600">{item.note}</span>}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6 grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-10">
          <div>
            <div className="overflow-hidden rounded-xl bg-[#1d4b37]">
              <p className="flex items-center gap-4 border-b border-white/15 px-6 py-5">
                <span
                  className="icon-mask icon-calendar-chat [--icon-size:1.6rem] flex-shrink-0 border-r border-white/20 pr-4 text-[#a8c47d]"
                  aria-hidden="true"
                ></span>
                <span className="min-w-0">
                  <span className="block text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#a8c47d]">
                    Sample reservation enquiry
                  </span>
                  <span className="mt-0.5 block text-[1.25rem] font-extrabold leading-snug text-white">
                    A stay request for your team
                  </span>
                </span>
              </p>

              <dl className="grid grid-cols-[minmax(0,10rem)_minmax(0,1fr)] px-6 py-2">
                {ENQUIRY_ROWS.map((row) => (
                  <div key={row.label} className="contents">
                    <dt className="border-b border-white/10 py-3 text-base font-bold text-white">{row.label}</dt>
                    <dd className="border-b border-white/10 py-3 text-base text-white/75">{row.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="m-5 rounded-lg bg-[#eef2e6] px-5 py-4">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#5f7a3a]">Status</p>
                <p className="mt-1 text-[1.02rem] font-bold text-[#1a2e35]">
                  Enquiry recorded &mdash; booking not yet confirmed
                </p>
                <p className="mt-1 text-base text-gray-700">Next step: Reservations team contacts the guest.</p>
              </div>
            </div>

            <p className="mt-2.5 text-[0.76rem] text-gray-500">
              Fictional example. Fields are agreed with your hotel.
            </p>
          </div>

          <div>
            <h3 className="text-[1.6rem] font-extrabold leading-snug text-[#1b4332]">
              Your Booking Rules{' '}
              <br />
              Guide the Call
            </h3>
            <p className="mt-3 text-base leading-relaxed text-gray-600">
              Define the source of rates and availability, the actions we can take and when your team should step in.
            </p>

            <ul className="mt-5 list-none space-y-3">
              {RULES.map((rule) => (
                <li key={rule} className="flex items-start gap-3">
                  <span
                    className="icon-mask icon-check-circle [--icon-size:1.2rem] mt-0.5 flex-shrink-0 text-[#4f6630]"
                    aria-hidden="true"
                  ></span>
                  <span className="text-base text-gray-700">{rule}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-base leading-relaxed text-gray-600">
              If system access is unavailable, follow the agreed enquiry and handoff process.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start gap-5 border-t border-gray-300/50 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[1.15rem] font-extrabold text-[#1b4332]">A clear enquiry. An authorised next step.</p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.9rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-6 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Build My Hotel Call Plan
          </Link>
        </div>
      </div>
    </section>
  )
}
