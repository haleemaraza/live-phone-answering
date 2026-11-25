import FranchiseHero from '@/features/franchise/FranchiseHero'
import RatingsTrustBar from '@/components/RatingsTrustBar'
import FranchiseServices from '@/features/franchise/FranchiseServices'
import FranchiseRouting from '@/features/franchise/FranchiseRouting'
import FranchiseHowItWorks from '@/features/franchise/FranchiseHowItWorks'
import FranchiseRoles from '@/features/franchise/FranchiseRoles'
import FranchiseBrandStandards from '@/features/franchise/FranchiseBrandStandards'
import FranchiseIntegrations from '@/features/franchise/FranchiseIntegrations'
import FranchiseIndustries from '@/features/franchise/FranchiseIndustries'
import FranchiseWhyChooseUs from '@/features/franchise/FranchiseWhyChooseUs'
import PlanPricing from '@/components/PlanPricing'
import Testimonials from '@/components/Testimonials'
import FaqSection from '@/components/FaqSection'
import ContactFormSection from '@/components/ContactFormSection'
import { franchiseFaq } from '@/components/faq-content'

const BASE_URL = 'https://livephoneanswering.com'

export const metadata = {
  title: 'Franchise Answering Service | Live Phone Answering',
  description:
    'Franchise answering service for multi-location brands. Live receptionists answer in your brand name, capture customer enquiries, and route each request to the right franchise location.',
  alternates: { canonical: '/franchise-answering-service' },
  // Kept out of search for now: noindex tells Google not to list the page,
  // while follow still lets it reach the linked pages. Remove this line (and
  // restore the route in app/sitemap.js) when the page should go public.
  robots: { index: false, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'LivePhoneAnswering',
    locale: 'en_US',
    url: '/franchise-answering-service',
    title: 'Franchise Answering Service for Multi-Location Brands',
    description:
      'One brand voice, every location connected — live receptionists follow your approved greeting, territory routing and local call instructions.',
    images: [
      {
        url: '/images/Phone Answering Services.webp',
        width: 1122,
        height: 1402,
        alt: 'Live Phone Answering Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Franchise Answering Service for Multi-Location Brands',
    description:
      'One brand voice, every location connected — live receptionists follow your approved greeting, territory routing and local call instructions.',
    images: ['/images/Phone Answering Services.webp'],
  },
}

// Describes the offering itself, which is what makes the page eligible for a
// service result rather than a plain blue link. The FAQ block is generated
// from the same data the page renders, so the two cannot drift apart.
const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Franchise Answering Service',
    serviceType: 'Franchise call answering, territory routing and multi-location message handling',
    description:
      'Live receptionists answer calls for franchise networks using the brand-approved greeting, capture customer enquiries and appointment requests, then route each request to the responsible franchise location or capture a message using the instructions the brand has agreed.',
    url: `${BASE_URL}/franchise-answering-service`,
    areaServed: { '@type': 'Country', name: 'United States' },
    provider: {
      '@type': 'Organization',
      name: 'LivePhoneAnswering',
      url: BASE_URL,
      telephone: '+1-857-453-1055',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: franchiseFaq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  },
]

export default function FranchiseAnsweringServicePage() {
  return (
    <main className="w-full">
      <FranchiseHero />
      <RatingsTrustBar label="Trusted by 5,000+ high-volume local businesses & multi-line front desks" />
      <FranchiseServices />
      <FranchiseRouting />
      <FranchiseHowItWorks />
      <FranchiseRoles />
      <FranchiseBrandStandards />
      <FranchiseIntegrations />
      <FranchiseIndustries />
      <FranchiseWhyChooseUs />
      <PlanPricing
        headingId="franchise-pricing-heading"
        descriptions={{
          'Starter Virtual Receptionist':
            'For a single location that needs live call answering, customer message taking and basic call screening.',
          'Growth Virtual Receptionist':
            'For growing networks that need enquiry intake, appointment requests and location routing.',
          'Business Virtual Receptionist':
            'For higher call volumes, multiple locations and more detailed territory and escalation requirements.',
        }}
        customTitle="Need 1,000+ Minutes or Multi-Location Coverage?"
        customBody="Discuss network size, territory routing and head-office escalation requirements with our team."
        footnote="Call handling follows your agreed brand and location instructions."
      />
      <Testimonials />
      <FaqSection {...franchiseFaq} />
      <ContactFormSection theme="dark" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
    </main>
  )
}
