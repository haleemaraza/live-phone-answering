import Link from 'next/link'

// Section 3: how a virtual receptionist differs from the three alternatives a
// business usually weighs it against.
const OPTIONS = [
  {
    chip: 'vs. answering service',
    icon: 'icon-phone',
    title: 'Virtual receptionist vs answering service',
    body: 'A traditional answering service usually just takes a basic name, phone number, and a short message. A live virtual receptionist answers specific questions, routes calls, and delivers a warm, personalized customer experience. They understand your services, follow your business rules, and interact with callers just like an internal team member would.',
  },
  {
    chip: 'vs. in-house',
    icon: 'icon-briefcase',
    title: 'Virtual receptionist vs in-house',
    body: 'An in-house receptionist needs a fixed salary, health insurance, paid vacation, and expensive office equipment. A virtual receptionist works the same at a fraction of cost. Plus, you never have to worry about coverage gaps due to emergencies and sick leaves, because a backup professional is always ready to step in.',
  },
  {
    chip: 'vs. call center',
    icon: 'icon-headset',
    title: 'Virtual receptionist vs call center',
    body: 'Call centers often feel cold and scripted as they handle hundreds of calls daily. A dedicated virtual receptionist does not rush through conversations just to hit a call volume quota. They listen to your clients, show genuine empathy, and provide accurate answers based on your unique company values and guidelines.',
  },
]

export default function ComparisonOptions() {
  return (
    <section className="w-full bg-[#f7fbf5] py-20 md:py-24" aria-labelledby="comparison-options-heading">
      <div className="site-container">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
          <p className="icon-mask icon-scale inline-flex items-center gap-2 bg-white text-[#4a7a3e] rounded-full text-sm font-semibold px-5 py-2 mb-6 shadow-sm border border-white/60">
            Weighing up your options
          </p>
          <h2
            id="comparison-options-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] leading-tight tracking-tight"
          >
            How does a Virtual Receptionist
            <br className="hidden sm:block" /> Work Compared to Other Options?
          </h2>
        </div>

        <ul className="grid list-none grid-cols-1 gap-6 md:grid-cols-3">
          {OPTIONS.map((option) => (
            <li key={option.chip} className="flex">
              <div className="group flex w-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#8CA365] hover:shadow-xl">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <span
                    className={`icon-mask ${option.icon} [--icon-size:1.5rem] flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#8CA365]/10 text-[#4f6630] transition-transform duration-300 group-hover:scale-110`}
                    aria-hidden="true"
                  ></span>
                  <span className="rounded-full bg-[#1d4b37] px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white">
                    {option.chip}
                  </span>
                </div>

                <h3 className="text-xl font-bold leading-snug text-[#34414A]">{option.title}</h3>
                <p className="mt-3 flex-grow text-base leading-relaxed text-gray-600">{option.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <p className="text-base text-gray-600">Not sure which option fits your business?</p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-row-reverse items-center gap-3 rounded-xl bg-[#34414A] px-7 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#2a353c]"
          >
            Talk It Through With Us
          </Link>
        </div>
      </div>
    </section>
  )
}
