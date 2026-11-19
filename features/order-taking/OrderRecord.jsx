import Link from 'next/link'

// Section 5. The hero's "See a Sample Order" link targets this section.
const SCOPE = [
  {
    number: '01',
    icon: 'icon-doc-check',
    title: 'Capture the Request',
    body: 'Record product choices, quantities and customer details, then pass them to your team.',
  },
  {
    number: '02',
    icon: 'icon-desktop',
    title: 'Use Your Approved System',
    body: 'Where included, enter the details through your agreed process and record the actual submission status.',
  },
  {
    number: '03',
    icon: 'icon-arrow-right',
    title: 'Make the Next Action Clear',
    body: 'Identify what needs review, who should act and how the customer will be updated.',
  },
]

// A worked example, labelled as illustrative on screen.
const ORDER_ROWS = [
  { label: 'Product', value: 'Insulated bottle, 750 ml' },
  { label: 'Variant / SKU', value: 'Navy / BOT-750-NV' },
  { label: 'Quantity', value: '2' },
  { label: 'Customer contact', value: 'Captured in agreed fields' },
  { label: 'Delivery preference', value: 'Standard delivery requested' },
  { label: 'Payment', value: 'Not taken' },
]

export default function OrderRecord() {
  return (
    <section
      id="sample-order"
      className="w-full scroll-mt-28 bg-[#f8f7f2] py-14 md:py-16"
      aria-labelledby="order-record-heading"
    >
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-doc-arrow [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Order details &amp; next steps
          </p>
          <h2
            id="order-record-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
          >
            See What Your Team Receives
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            A clear order record shows what the customer requested, what has happened and what still needs action.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#5f7a3a]">
              Agree your handling scope
            </p>

            <ol className="mt-5 list-none divide-y divide-gray-300/50 border-t border-gray-300/50">
              {SCOPE.map((item) => (
                <li key={item.number} className="flex items-start gap-4 py-5">
                  <span
                    className={`icon-mask ${item.icon} [--icon-size:1.4rem] flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[#eef2e6] text-[#4f6630]`}
                    aria-hidden="true"
                  ></span>
                  <span className="min-w-0">
                    <h3 className="flex items-baseline gap-3 text-[1.05rem] font-bold leading-snug text-[#1b4332]">
                      <span className="text-sm font-bold text-gray-500" aria-hidden="true">
                        {item.number}
                      </span>
                      {item.title}
                    </h3>
                    <span className="mt-1 block text-base leading-relaxed text-gray-600">{item.body}</span>
                  </span>
                </li>
              ))}
            </ol>

            <p className="icon-mask icon-question [--icon-size:1.1rem] mt-5 flex items-start gap-3 text-sm text-gray-600 before:mt-0.5 before:flex-shrink-0 before:text-[#5f7a3a]">
              System entry and payment support are agreed during setup.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl bg-[#1d4b37]">
            <p className="flex items-center gap-4 border-b border-white/15 px-6 py-5">
              <span
                className="icon-mask icon-doc-check [--icon-size:1.6rem] flex-shrink-0 border-r border-white/20 pr-4 text-[#a8c47d]"
                aria-hidden="true"
              ></span>
              <span className="min-w-0">
                <span className="block text-[1.3rem] font-extrabold leading-snug text-white">Sample Order Record</span>
                <span className="mt-0.5 block text-base text-white/60">Illustrative example</span>
              </span>
            </p>

            <div className="bg-white px-6 py-5">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#5f7a3a]">Request reference</p>
              <p className="mt-1 text-[1.4rem] font-extrabold tracking-tight text-[#1a2e35]">DEMO-1042</p>

              <dl className="mt-4 grid grid-cols-[minmax(0,10rem)_minmax(0,1fr)] border-t border-gray-200">
                {ORDER_ROWS.map((row) => (
                  <div key={row.label} className="contents">
                    <dt className="border-b border-gray-200 py-3 text-base font-bold text-[#1a2e35]">{row.label}</dt>
                    <dd className="border-b border-gray-200 py-3 text-base text-gray-600">{row.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 rounded-lg bg-[#eef2e6] px-5 py-4">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#5f7a3a]">Current status</p>
                <p className="mt-1 text-[1.15rem] font-extrabold text-[#1a2e35]">Request captured</p>
                <p className="mt-0.5 text-base text-gray-700">Awaiting merchant acceptance</p>
              </div>

              <p className="icon-mask icon-arrow-right [--icon-size:1.2rem] mt-5 flex items-start gap-4 before:mt-1 before:flex-shrink-0 before:text-[#4f6630]">
                <span className="min-w-0">
                  <span className="block text-[1.05rem] font-bold text-[#1a2e35]">Next Action</span>
                  <span className="mt-0.5 block text-base text-gray-600">
                    Merchant to verify stock, confirm the total and arrange payment.
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start gap-5 rounded-xl bg-[#eef0e6] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="block text-[1.15rem] font-extrabold text-[#1b4332]">
              Give every order request a clear next step.
            </span>
            <span className="mt-1 block text-base text-gray-600">
              Define the details, status and handoff your team needs.
            </span>
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.9rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#1d4b37] px-6 py-3.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#164032]"
          >
            Build My Order Taking Plan
          </Link>
        </div>
      </div>
    </section>
  )
}
