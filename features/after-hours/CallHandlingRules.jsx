import Link from 'next/link'

// A condition/response matrix, so it is marked up as a real table with column
// headers rather than a stack of divs — screen readers announce which column a
// cell belongs to, and the pairing survives being read out of order.
const ROWS = [
  {
    icon: 'icon-report',
    trigger: 'Routine question or new inquiry',
    triggerBody: 'Quotes, general questions, and callback requests.',
    action: 'Take a clear message',
    actionBody: 'Capture contact details and the reason for calling, ready for your team to review.',
  },
  {
    icon: 'icon-phone',
    trigger: 'Request needing on-call attention',
    triggerBody: 'A situation that meets your approved criteria.',
    action: 'Contact your designated person',
    actionBody: 'Follow the contact order and communication method agreed with your business.',
  },
  {
    icon: 'icon-users',
    trigger: 'Your first contact is unavailable',
    triggerBody: 'The initial contact attempt is unsuccessful.',
    action: 'Follow your backup instructions',
    actionBody: 'Use the agreed retry or backup process and record the outcome.',
  },
]

export default function CallHandlingRules() {
  return (
    <section className="w-full bg-[#f8f6ec] py-14 md:py-16" aria-labelledby="call-handling-heading">
      <div className="site-container">
        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,25rem)] lg:gap-12">
          <div>
            <p className="icon-mask icon-sliders [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
              Call handling that fits your business
            </p>
            <h2
              id="call-handling-heading"
              className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight text-[#1a2e35]"
            >
              After-Hours Calls.
              <br />
              <span className="text-[#295657]">Handled Your Way.</span>
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-gray-600 lg:pt-8">
            Tell us which calls need a message and which should reach your on-call team. We follow your agreed
            instructions.
          </p>
        </div>

        <table className="mt-7 w-full border-collapse text-left">
          <caption className="sr-only">
            What happens after hours, by situation: the kind of call on the left, and how it is handled on the right.
          </caption>

          {/* The header row is the one thing that cannot stack, so it is hidden
              on small screens where the cells read as plain stacked blocks. */}
          <thead className="hidden md:table-header-group">
            <tr className="bg-[#edebdf]">
              <th
                scope="col"
                className="w-1/2 px-6 py-3 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-gray-600"
              >
                When someone calls
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-gray-600"
              >
                How the call is handled
              </th>
            </tr>
          </thead>

          <tbody>
            {ROWS.map((row) => (
              <tr
                key={row.trigger}
                className="block border-b border-gray-300/50 even:bg-[#f2f0e3] md:table-row"
              >
                <td className="block px-5 pt-5 pb-3 align-top md:table-cell md:border-r md:border-gray-300/50 md:px-6 md:py-4">
                  <div className="flex items-start gap-4">
                    <span
                      className={`icon-mask ${row.icon} [--icon-size:1.9rem] mt-0.5 flex-shrink-0 text-[#566e34]`}
                      aria-hidden="true"
                    ></span>
                    <span className="min-w-0">
                      <span className="block text-[1.12rem] font-bold leading-snug text-[#295657]">{row.trigger}</span>
                      <span className="mt-1 block text-lg leading-relaxed text-gray-600">{row.triggerBody}</span>
                    </span>
                  </div>
                </td>
                <td className="block px-5 pb-5 pt-0 align-top md:table-cell md:px-6 md:py-4">
                  <span className="block text-[1.12rem] font-bold leading-snug text-[#1a2e35]">{row.action}</span>
                  <span className="mt-1 block text-lg leading-relaxed text-gray-600">{row.actionBody}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex flex-col items-start gap-5 px-1 pt-5 sm:flex-row sm:items-center sm:justify-between md:px-6">
          <p className="flex items-start gap-4">
            <span
              className="icon-mask icon-check-circle [--icon-size:1.9rem] mt-0.5 flex-shrink-0 text-[#566e34]"
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
            className="icon-mask icon-arrow-right [--icon-size:1rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3.5 text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Discuss My Call Handling
          </Link>
        </div>
      </div>
    </section>
  )
}
