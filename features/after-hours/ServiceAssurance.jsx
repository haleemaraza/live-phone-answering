// Four promises, rendered from data so the 2x2 grid stays one map instead of
// four near-identical blocks.
const ASSURANCES = [
  {
    icon: 'icon-headset',
    title: 'Real human support',
    body: 'A helpful voice after closing.',
  },
  {
    icon: 'icon-chat',
    title: 'Your business, your greeting',
    body: 'Answered in your business name.',
  },
  {
    icon: 'icon-moon',
    title: 'Coverage on your schedule',
    body: 'Support beyond office hours.',
  },
  {
    icon: 'icon-doc-check',
    title: 'Clear message handoff',
    body: 'Useful details for your team.',
  },
]

export default function ServiceAssurance() {
  return (
    <section className="w-full bg-[#0f2925] py-14 md:py-16" aria-labelledby="assurance-heading">
      {/* The divider is the grid's own border so it sits exactly in the gutter
          and disappears with the single-column layout on small screens. */}
      <div className="site-container grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] lg:gap-12">
        <div className="lg:py-2">
          <p className="icon-mask icon-shield-check [--icon-size:1rem] inline-flex items-center gap-2 bg-white/10 text-[#a8c47d] rounded-full text-sm font-semibold px-4 py-1.5">
            After-hours confidence
          </p>

          <h2
            id="assurance-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight text-white"
          >
            Your office closes.
            <br />
            <span className="text-[#8CA365]">The conversation continues.</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-white/65">
            A clear next step for callers. Peace of mind for you.
          </p>
        </div>

        <ul className="grid list-none grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:border-l lg:border-white/10 lg:pl-14">
          {ASSURANCES.map((item, index) => (
            <li
              key={item.title}
              className={index >= 2 ? 'sm:border-t sm:border-white/10 sm:pt-8' : undefined}
            >
              <span
                className={`icon-mask ${item.icon} [--icon-size:1.95rem] block text-[#8CA365]`}
                aria-hidden="true"
              ></span>
              <h3 className="mt-3 text-lg font-bold leading-snug text-white">{item.title}</h3>
              <p className="mt-1.5 text-base leading-relaxed text-white/60">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
