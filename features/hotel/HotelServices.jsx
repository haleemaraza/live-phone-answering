import Link from 'next/link'

// Section 3. Eight cards, four-up on large screens so both rows fill exactly.
const SERVICES = [
  {
    icon: 'icon-calendar-check',
    title: 'Reservation Enquiries',
    body: 'Capture stay dates, guest numbers, room preferences and contact details for your reservations team.',
  },
  {
    icon: 'icon-calendar-refresh',
    title: 'Booking Change Requests',
    body: 'Record amendment or cancellation requests and pass them to the contact authorised to review them.',
  },
  {
    icon: 'icon-user-clock',
    title: 'Late Arrivals & Check-In',
    body: 'Share approved arrival information or contact your duty team when a guest needs assistance.',
  },
  {
    icon: 'icon-question',
    title: 'Property Information',
    body: 'Answer approved questions about parking, breakfast, facilities, check-out times and hotel policies.',
  },
  {
    icon: 'icon-gear',
    title: 'Housekeeping & Maintenance',
    body: "Record the guest's request and send the details through your agreed departmental contact route.",
  },
  {
    icon: 'icon-users',
    title: 'Group & Corporate Enquiries',
    body: 'Capture room-block, event and business-stay requirements for the team handling group enquiries.',
  },
  {
    icon: 'icon-chats',
    title: 'Guest Concerns & Messages',
    body: 'Note the concern, capture callback details and follow your agreed duty-manager handoff.',
  },
  {
    icon: 'icon-phone-forward',
    title: 'Department & Supplier Calls',
    body: 'Take messages or route business calls to the designated hotel contact, as agreed in your plan.',
  },
]

const AUDIENCES = ['Future guests', 'Arriving guests', 'Staying guests', 'Your team']

export default function HotelServices() {
  return (
    <section className="w-full bg-[#f8f7f2] py-14 md:py-16" aria-labelledby="hotel-services-heading">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-headset [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Hotel answering services
          </p>
          <h2
            id="hotel-services-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
          >
            Reservation and Guest Calls{' '}
            <br />
            We Can Handle
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Give each hotel enquiry a clear route to approved information, a reservation request or the right member of
            your team.
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

        <ul className="mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <li
              key={service.title}
              className="relative flex h-full flex-col rounded-xl border border-gray-300/50 bg-[#fff] p-5 sm:p-6"
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
          <p>
            <span className="block text-[1.15rem] font-extrabold text-white">
              Your property. Your instructions. A clear next step.
            </span>
            <span className="mt-1 block text-base text-white/70">
              Choose the hotel call types and handling tasks your team needs.
            </span>
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.9rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-6 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Build My Hotel Call Plan
          </Link>
        </div>

        {/* Keeps the scope honest: a captured request is not a confirmed
            booking. */}
        <p className="mt-5 text-center text-sm text-gray-600">
          Reservation and change requests are confirmed only through your agreed, authorised process.
        </p>
      </div>
    </section>
  )
}
