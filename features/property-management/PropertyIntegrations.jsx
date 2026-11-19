import Link from 'next/link'

// Same three-column bracket layout as the call-routing integrations section.
const PHONE_SYSTEMS = [
  { name: 'RingCentral', detail: 'Business phone system', logo: 'ringcentral.svg' },
  { name: 'Microsoft Teams Phone', detail: 'Business calling', logo: 'microsoft-teams.webp' },
  { name: 'Zoom Phone', detail: 'Cloud phone system', logo: 'zoom-phone.webp' },
]

// No logo files for these yet, so the product name is set as text in the same
// card. Dropping a logo into /public/icons/logo and adding `logo:` is enough.
const PROPERTY_TOOLS = [
  { name: 'AppFolio', detail: 'Property management platform' },
  { name: 'Buildium', detail: 'Rental property management' },
  { name: 'PropertyMe', detail: 'Property management software' },
]

const FLOW = [
  'Identify the caller and property',
  'Capture enquiry or maintenance details',
  'Deliver messages or follow routing rules',
]

const CARD =
  'relative flex h-full flex-col items-center justify-center gap-1.5 rounded-xl border border-gray-300/60 bg-white px-4 py-3.5 text-center'

function ToolCard({ tool }) {
  return (
    <li className={CARD}>
      {tool.logo ? (
        <img
          src={`/icons/logo/${tool.logo}`}
          alt={`${tool.name} logo`}
          width={120}
          height={28}
          loading="lazy"
          decoding="async"
          className="h-7 w-auto max-w-[70%] object-contain"
        />
      ) : (
        <span className="text-[1.05rem] font-extrabold text-[#1a2e35]">{tool.name}</span>
      )}
      <span className="text-sm leading-snug text-gray-600">{tool.detail}</span>
    </li>
  )
}

// Three cards of equal height with two gaps put the outer card centres at
// ~15% and ~85% of the column, which is where the spine has to start and stop.
function Bracket({ side }) {
  const left = side === 'left'
  const line = 'absolute bg-[#8CA365]/70'
  const dot = 'absolute h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#8CA365]'
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute top-0 hidden h-full w-10 lg:block ${left ? '-right-10' : '-left-10'}`}
    >
      <span className={`${line} bottom-[15%] top-[15%] w-px left-1/2`}></span>
      {['top-[15%]', 'top-1/2', 'bottom-[15%]'].map((pos) => (
        <span key={pos} className={`${line} ${pos} h-px w-1/2 ${left ? 'left-0' : 'right-0'}`}></span>
      ))}
      <span className={`${line} top-1/2 h-px w-1/2 ${left ? 'right-0' : 'left-0'}`}></span>
      {['top-[15%]', 'top-1/2', 'top-[85%]'].map((pos) => (
        <span key={pos} className={`${dot} ${pos} ${left ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'}`}></span>
      ))}
    </span>
  )
}

export default function PropertyIntegrations() {
  return (
    <section className="w-full bg-[#f8f7f2] py-14 md:py-16" aria-labelledby="property-integrations-heading">
      <div className="site-container">
        <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
          <div>
            <p className="icon-mask icon-share [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
              Phone systems &amp; property tools
            </p>
            <h2
              id="property-integrations-heading"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-[#1b4332]"
            >
              Your phone system.{' '}
              <br />
              Your property tools.{' '}
              <br />
              One clear call plan.
            </h2>
          </div>

          <div className="lg:border-l lg:border-gray-300/60 lg:pl-12 lg:pt-2">
            <p className="text-[0.98rem] leading-relaxed text-gray-600">
              Bring your existing setup. We&rsquo;ll review call forwarding, staff transfers and how property call
              details can reach your team.
            </p>
            <p className="mt-5 inline-flex items-center rounded-lg border border-[#8CA365]/60 px-5 py-2.5 text-lg font-bold text-[#1b4332]">
              Compatibility reviewed before setup
            </p>
          </div>
        </div>

        <p className="mt-10 flex items-center gap-4 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-gray-600">
          <span className="h-px flex-grow bg-gray-300/70" aria-hidden="true"></span>
          Setup options to review
          <span className="h-px flex-grow bg-gray-300/70" aria-hidden="true"></span>
        </p>

        <div className="mt-6 grid grid-cols-1 items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,16rem)_minmax(0,1fr)] lg:gap-10">
          <div className="relative">
            <Bracket side="left" />
            <p className="mb-3 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-gray-600 lg:absolute lg:-top-7 lg:left-0 lg:mb-0">
              Phone systems
            </p>
            <ul className="list-none space-y-4">
              {PHONE_SYSTEMS.map((tool) => (
                <ToolCard key={tool.name} tool={tool} />
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-[#1d4b37] px-6 py-7 text-center">
            <span
              className="icon-mask icon-headset-call [--icon-size:2.3rem] mx-auto block text-[#a8c47d]"
              aria-hidden="true"
            ></span>
            <p className="mt-3 text-[1.5rem] font-extrabold leading-tight text-white">
              Live Phone{' '}
              <br />
              Answering
            </p>
            <p className="mt-2 text-lg font-bold text-[#a8c47d]">Property Call Handling</p>

            <ul className="mt-4 list-none space-y-1.5 border-t border-white/20 pt-4">
              {FLOW.map((step) => (
                <li key={step} className="text-base text-white/80">
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <Bracket side="right" />
            <p className="mb-3 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-gray-600 lg:absolute lg:-top-7 lg:right-0 lg:mb-0 lg:text-right">
              Property management tools
            </p>
            <ul className="list-none space-y-4">
              {PROPERTY_TOOLS.map((tool) => (
                <ToolCard key={tool.name} tool={tool} />
              ))}
            </ul>
          </div>
        </div>

        {/* Keeps the tool list honest: naming a product is not a promise that a
            direct integration exists. */}
        {/* <p className="mt-8 rounded-lg bg-[#eef0e6] px-5 py-3.5 text-center text-base text-gray-600">
          Tools shown are examples for compatibility review, not confirmed integrations.
        </p> */}

        <div className="mt-5 flex flex-col items-start gap-5 rounded-xl bg-[#1d4b37] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="block text-[1.2rem] font-extrabold text-white">Tell us which property tools you use.</span>
            <span className="mt-1 block text-base text-white/70">
              We&rsquo;ll review your phone provider, message destinations and required software tasks.
            </span>
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3.5 text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Check My Property Setup
          </Link>
        </div>

        <p className="mt-4 text-center text-sm text-gray-600">
          Available options depend on phone plans, permissions, software access and agreed service scope.
        </p>
      </div>
    </section>
  )
}
