import Link from 'next/link'

const COVERAGE = [
  {
    icon: 'icon-phone',
    title: 'No missed calls',
    body: 'They answer every call on time, consistently. No matter if you are at a meeting or enjoying your free time, never have to worry about missing an important customer or potential lead. We will be there to answer.',
  },
  {
    icon: 'icon-calendar',
    title: 'Handle every call accordingly',
    body: 'They screen, transfer, book, take messages. We screen and transfer calls, book appointments, take messages, and make sure callers get the help they need without unnecessary delays.',
  },
  {
    icon: 'icon-report',
    title: 'Keep you informed',
    body: 'They provide info needed for decision making. We share important messages, caller details, appointment updates, and other information so you can make decisions and follow up when needed.',
  },
]

export default function FrontDeskIntro() {
  return (
    <section className="w-full bg-slate-50 py-20 md:py-24" aria-labelledby="front-desk-heading">
      <div className="site-container">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <p className="icon-mask icon-headset inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#6b8a3e] rounded-full text-sm font-semibold px-4 py-1.5 mb-5">
            Virtual Receptionist Services
          </p>
          <h2
            id="front-desk-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] leading-tight tracking-tight"
          >
            Hire a full professional front desk 

            <br className="hidden sm:block" /> without adding an extra desk.
          </h2>
          <hr className="w-14 h-1 mx-auto my-6 border-0 rounded bg-[#8CA365]" />
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Our virtual receptionist service helps you have a real person who handles calls, welcomes your callers, and keeps your business moving, while you do other stuff.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* The coverage card is much taller than this column, so the text
              rides along with it on scroll instead of leaving a dead gap. */}
          <div className="lg:sticky lg:top-24">
            <h3 className="text-2xl md:text-3xl font-bold text-[#34414A] mb-5 border-l-4 border-[#8CA365] pl-4">
              What is a virtual receptionist?
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
             A virtual receptionist is a real person who answers your business calls from a remote location. They can guide callers, transfer urgent lines, and schedule meetings. Your customers experience a seamless front desk interaction without ever knowing the receptionist is working from a different location.
            </p>
            
            <Link
              prefetch={false}
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-[#34414A] font-semibold border-b-2 border-[#8CA365] pb-1 hover:text-[#8CA365] transition-colors"
            >
              See how it works &rarr;
            </Link>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 sm:p-9">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8CA365] mb-6">
              Your front desk, covered
            </p>
            <ul className="list-none divide-y divide-gray-100">
              {COVERAGE.map((item) => (
                <li key={item.title} className="flex items-start gap-4 py-5 first:pt-0 last:pb-0">
                  <span
                    className={`icon-mask ${item.icon} [--icon-size:1.375rem] w-12 h-12 rounded-xl bg-[#8CA365]/10 text-[#8CA365] flex items-center justify-center flex-shrink-0`}
                    aria-hidden="true"
                  ></span>
                  <span className="min-w-0">
                    <span className="block text-base font-bold text-[#34414A]">{item.title}</span>
                    <span className="block text-sm text-gray-600 mt-1 leading-relaxed">{item.body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
