import CallRoutingHero from '@/features/call-routing/CallRoutingHero'
import RatingsTrustBar from '@/components/RatingsTrustBar'
import CallRoutingServices from '@/features/call-routing/CallRoutingServices'
import LeadCaptureHowItWorks from '@/features/lead-capture/LeadCaptureHowItWorks'
import CallRoutingRules from '@/features/call-routing/CallRoutingRules'
import CallRoutingIntegrations from '@/features/call-routing/CallRoutingIntegrations'
import CallRoutingBenefits from '@/features/call-routing/CallRoutingBenefits'
import IndustriesTabs from '@/components/IndustriesTabs'
import CallRoutingReceptionists from '@/features/call-routing/CallRoutingReceptionists'
import LeadCaptureWhyChooseUs from '@/features/lead-capture/LeadCaptureWhyChooseUs'
import Testimonials from '@/components/Testimonials'
import PlanPricing from '@/components/PlanPricing'
import FaqSection from '@/components/FaqSection'
import ContactFormSection from '@/components/ContactFormSection'
import { homeFaq } from '@/components/faq-content'

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
      <LeadCaptureHowItWorks />
      <CallRoutingRules />
      <CallRoutingIntegrations />
      <CallRoutingBenefits />
      <IndustriesTabs />
      <CallRoutingReceptionists />
      <LeadCaptureWhyChooseUs />
      <Testimonials />
      <PlanPricing headingId="call-routing-pricing-heading" />
      <FaqSection {...homeFaq} />
      <ContactFormSection theme="dark" />


      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </main>
  )
}
