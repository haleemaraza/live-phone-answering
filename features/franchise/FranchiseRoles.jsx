import Link from 'next/link'

// Section 6: the same call plan described for each level of the network.
const ROLES = [
  {
    icon: 'icon-org-chart',
    eyebrow: 'Brand-wide standards',
    title: 'For Franchisors',
    body: 'Set shared greetings, approved answers and exception routes for participating locations.',
    checks: ['Brand-approved call instructions', 'Defined head-office escalation'],
  },
  {
    icon: 'icon-overlap',
    eyebrow: 'Coordinated local support',
    title: 'For Multi-Unit Operators',
    body: "Keep each location's contacts, opening hours and booking rules distinct within a coordinated call plan.",
    checks: ['Location-specific contacts and calendars', 'Clear routing across your locations'],
  },
  {
    icon: 'icon-building',
    eyebrow: 'Support for your location',
    title: 'For Individual Franchisees',
    body: "Support local enquiries, messages and appointment requests using your franchise's approved process.",
    checks: ['Overflow and agreed-hours support', 'Call handling that follows brand guidelines'],
  },
]

export default function FranchiseRoles() {
  return (
    <section className="w-full bg-[#f8f7f2] py-14 md:py-16" aria-labelledby="franchise-roles-heading">
      <div className="site-container">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.5fr)] lg:gap-10">
          <div>
            <p className="icon-mask icon-layers [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
              Support at every level
            </p>
            <h2
              id="franchise-roles-heading"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
            >
              Built Around{' '}
              <br />
              How You Manage{' '}
              <br />
              Your Franchise
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              From brand-wide standards to local call handling, build support around the way your franchise operates.
            </p>

            <div className="mt-6 flex items-start gap-4 rounded-xl bg-[#eef0e6] px-5 py-5">
              <span
                className="icon-mask icon-share [--icon-size:2rem] flex-shrink-0 text-[#4f6630]"
                aria-hidden="true"
              ></span>
              <span className="min-w-0">
                <span className="block text-[1.1rem] font-extrabold text-[#1b4332]">
                  One location or a growing network.
                </span>
                <span className="mt-1 block text-base leading-relaxed text-gray-600">
                  A clear call plan for the people responsible.
                </span>
              </span>
            </div>
          </div>

          <ul className="grid list-none grid-cols-1 gap-5">
            {ROLES.map((role) => (
              <li key={role.title} className="rounded-xl border border-gray-300/50 bg-white p-6 sm:p-7">
                <div className="flex items-start gap-5">
                  <span
                    className={`icon-mask ${role.icon} [--icon-size:1.8rem] flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-[#eef2e6] text-[#1b4332]`}
                    aria-hidden="true"
                  ></span>
                  <div className="min-w-0">
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#5f7a3a]">
                      {role.eyebrow}
                    </p>
                    <h3 className="mt-1 text-[1.3rem] font-extrabold leading-snug text-[#1b4332]">{role.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-gray-600">{role.body}</p>

                    <ul className="mt-4 grid list-none grid-cols-1 gap-2 sm:grid-cols-2">
                      {role.checks.map((check) => (
                        <li key={check} className="flex items-start gap-2.5">
                          <span
                            className="icon-mask icon-check [--icon-size:0.7rem] mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#8CA365] text-white"
                            aria-hidden="true"
                          ></span>
                          <span className="text-base text-gray-700">{check}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-col items-start gap-5 rounded-xl bg-[#1d4b37] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="block text-[1.2rem] font-extrabold text-white">
              Your role. Your locations. The right call plan.
            </span>
            <span className="mt-1 block text-base text-white/70">Tell us how your franchise handles calls today.</span>
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3.5 text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Find My Franchise Call Plan
          </Link>
        </div>
      </div>
    </section>
  )
}
