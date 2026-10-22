// The scrolling logo strip, shared by the homepage integrations section and
// the virtual-receptionist tools section so the logo list lives in one place.
const MARQUEE_LOGOS = [
  { slug: 'hubspot', name: 'HubSpot' },
  { slug: 'zoho', name: 'Zoho' },
  { slug: 'zendesk', name: 'Zendesk' },
  { slug: 'calendly', name: 'Calendly' },
  { slug: 'shopify', name: 'Shopify' },
  { slug: 'intercom', name: 'Intercom' },
  { slug: 'mailchimp', name: 'Mailchimp' },
  { slug: 'notion', name: 'Notion' },
  { slug: 'stripe', name: 'Stripe' },
  { slug: 'zapier', name: 'Zapier' },
]

function MarqueeSet({ duplicate = false }) {
  return (
    <div
      className="flex items-center gap-16 px-8 flex-shrink-0 justify-around min-w-full"
      aria-hidden={duplicate ? 'true' : undefined}
    >
      {MARQUEE_LOGOS.map((logo) => (
        <img
          key={logo.slug}
          src={`/logos/${logo.slug}.svg`}
          alt={duplicate ? '' : `${logo.name} integration`}
          width={40}
          height={40}
          // Not lazy: the track is far wider than the viewport, so most logos
          // start off-screen horizontally and the load never triggers — they
          // scroll past as blanks. All 13 files together are 18 KB, so they
          // load up front at low priority instead of competing with the LCP.
          loading="eager"
          fetchPriority="low"
          decoding="async"
          className="h-10 w-auto transition-transform hover:scale-110"
        />
      ))}
    </div>
  )
}

// `fade` is the section's own background colour, written as an inline gradient
// so the edge fade matches whatever the strip sits on.
export default function LogoMarquee({ fade = '#ffffff', className = '' }) {
  return (
    <div className={`relative w-full flex overflow-hidden group/marquee ${className}`}>
      <div
        className="absolute top-0 left-0 w-32 h-full z-10 pointer-events-none"
        style={{ backgroundImage: `linear-gradient(to right, ${fade}, transparent)` }}
        aria-hidden="true"
      ></div>
      <div
        className="absolute top-0 right-0 w-32 h-full z-10 pointer-events-none"
        style={{ backgroundImage: `linear-gradient(to left, ${fade}, transparent)` }}
        aria-hidden="true"
      ></div>

      <div className="flex animate-marquee whitespace-nowrap items-center w-max">
        {/* The loop only looks seamless with a second copy of the track, so
            the duplicate is hidden from assistive tech. */}
        <MarqueeSet />
        <MarqueeSet duplicate />
      </div>
    </div>
  )
}
