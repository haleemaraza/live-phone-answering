import CallRoutingHero from '@/features/call-routing/CallRoutingHero'
import RatingsTrustBar from '@/components/RatingsTrustBar'
import CallRoutingServices from '@/features/call-routing/CallRoutingServices'
import CallRoutingHowItWorks from '@/features/call-routing/CallRoutingHowItWorks'
import CallRoutingRules from '@/features/call-routing/CallRoutingRules'
import CallRoutingIntegrations from '@/features/call-routing/CallRoutingIntegrations'
import CallRoutingBenefits from '@/features/call-routing/CallRoutingBenefits'
import IndustriesTabs from '@/components/IndustriesTabs'
import CallRoutingReceptionists from '@/features/call-routing/CallRoutingReceptionists'
import CallRoutingWhyChooseUs from '@/features/call-routing/CallRoutingWhyChooseUs'
import Testimonials from '@/components/Testimonials'
import CallRoutingPerformance from '@/features/call-routing/CallRoutingPerformance'
import PlanPricing from '@/components/PlanPricing'
import FaqSection from '@/components/FaqSection'
import ContactFormSection from '@/components/ContactFormSection'
import { callRoutingFaq } from '@/components/faq-content'

const BASE_URL = 'https://livephoneanswering.com'

export const metadata = {
  title: 'Call Routing & Transfer Answering Service | Live Phone Answering',
  description:
    'Call routing and transfer answering for US businesses. Live receptionists screen enquiries, follow your routing rules to reach the right person, and take a clear message when nobody is available.',
  alternates: { canonical: '/call-routing' },
  openGraph: {
    type: 'website',
    siteName: 'LivePhoneAnswering',
    locale: 'en_US',
    url: '/call-routing',
    title: 'Call Routing & Transfer Answering Service',
    description:
      'A helpful first answer and a clear path to the right person — live receptionists screen calls and follow your routing and backup instructions.',
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
    title: 'Call Routing & Transfer Answering Service',
    description:
      'A helpful first answer and a clear path to the right person — live receptionists screen calls and follow your routing and backup instructions.',
    images: ['/images/Phone Answering Services.webp'],
  },
}

// Describes the offering itself, which is what makes the page eligible for a
// service result rather than a plain blue link.
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Call Routing & Transfer Answering Service',
  serviceType: 'Call screening, routing and transfer',
  description:
    'Live receptionists answer business calls, screen the enquiry, and follow the routing instructions a business has agreed to connect callers with the right staff member or department, taking a message when nobody is available.',
  url: `${BASE_URL}/call-routing`,
  areaServed: { '@type': 'Country', name: 'United States' },
  provider: {
    '@type': 'Organization',
    name: 'LivePhoneAnswering',
    url: BASE_URL,
    telephone: '+1-857-453-1055',
  },
}

export default function CallRoutingPage() {
  return (
    <main className="w-full">
      <CallRoutingHero />
      <RatingsTrustBar label="Trusted by 5,000+ US businesses routing calls to the right person" />
      <CallRoutingServices />
      <CallRoutingHowItWorks />
      <CallRoutingRules />
      <CallRoutingIntegrations />
      <CallRoutingBenefits />
      <IndustriesTabs
        heading="Tailored to Match Your Operational Workflow"
        intro="Supporting specialized industries, our receptionists integrate directly into your software and daily operations to ensure effortless team alignment."
      />
      <CallRoutingReceptionists />
      <CallRoutingWhyChooseUs />
      <Testimonials />
      <CallRoutingPerformance />
      <PlanPricing
        headingId="call-routing-pricing-heading"
        descriptions={{
          'Starter Virtual Receptionist':
            'Ideal for small businesses that need help directing incoming calls and connecting customers with the right contacts.',
          'Growth Virtual Receptionist':
            'Perfect for growing businesses that handle calls for different team members, departments, or service inquiries.',
          'Business Virtual Receptionist':
            'Designed for businesses with multiple departments, higher call volumes, and more detailed call distribution requirements.',
        }}
        customTitle="Need 1,000+ Minutes or Customized Call Routing?"
        customBody="Get a custom package built around your business structure, phone system, departments, and call transfer requirements."
        footnote="Transfer options, destinations, and backup handling are confirmed during setup."
      />
      <FaqSection {...callRoutingFaq} />
      <ContactFormSection theme="dark" />


      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </main>
  )
}
