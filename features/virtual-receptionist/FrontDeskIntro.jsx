import Link from 'next/link'

const COVERAGE = [
  {
    icon: 'icon-phone',
    title: 'Welcome every caller',
    body: 'A consistent greeting that reflects your business.',
  },
  {
    icon: 'icon-calendar',
    title: 'Handle the next step',
    body: 'Screen, transfer, book, or take a clear message.',
  },
  {
    icon: 'icon-report',
    title: 'Keep your team informed',
    body: 'Pass on the details needed for a useful follow-up.',
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
            A professional front desk.
            <br className="hidden sm:block" /> Without the extra desk.
          </h2>
          <hr className="w-14 h-1 mx-auto my-6 border-0 rounded bg-[#8CA365]" />
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Our virtual receptionist service gives your business a real person to welcome callers, handle routine
            requests, and keep important conversations moving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#34414A] mb-5 border-l-4 border-[#8CA365] pl-4">
              What is a virtual receptionist?
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              A virtual receptionist handles calls remotely on behalf of your business. They answer in your company
              name and follow your instructions to screen calls, schedule appointments, and take messages.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              You choose how calls are handled. Your customers get a professional, personal response.
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
