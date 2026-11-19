import PropertyHero from '@/features/property-management/PropertyHero'
import RatingsTrustBar from '@/components/RatingsTrustBar'
import PropertyBenefits from '@/features/property-management/PropertyBenefits'
import PropertyServices from '@/features/property-management/PropertyServices'
import PropertyIntegrations from '@/features/property-management/PropertyIntegrations'
import PropertyHowItWorks from '@/features/property-management/PropertyHowItWorks'
import PropertyWhyChooseUs from '@/features/property-management/PropertyWhyChooseUs'
import PropertyReceptionist from '@/features/property-management/PropertyReceptionist'
import PlanPricing from '@/components/PlanPricing'
import Testimonials from '@/components/Testimonials'
import FaqSection from '@/components/FaqSection'
import ContactFormSection from '@/components/ContactFormSection'
import { homeFaq } from '@/components/faq-content'

const BASE_URL = 'https://livephoneanswering.com'

export const metadata = {
  title: 'Property Management Answering Service | Live Phone Answering',
  description:
    'Live answering for property teams. Our receptionists capture rental enquiries, record tenant maintenance details, and route calls using your instructions across every property you manage.',
  alternates: { canonical: '/real-estate-answering-service' },
  openGraph: {
    type: 'website',
    siteName: 'LivePhoneAnswering',
    locale: 'en_US',
    url: '/real-estate-answering-service',
    title: 'Property Management Answering Service',
    description:
      'A clear first response and a better next step — live receptionists handle tenant, owner and rental calls using your property call plan.',
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
    title: 'Property Management Answering Service',
    description:
      'A clear first response and a better next step — live receptionists handle tenant, owner and rental calls using your property call plan.',
    images: ['/images/Phone Answering Services.webp'],
  },
}

// Describes the offering itself, which is what makes the page eligible for a
// service result rather than a plain blue link.
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Property Management Answering Service',
  serviceType: 'Property management call answering and message handling',
  description:
    'Live receptionists answer calls for property managers and letting teams, capturing rental enquiries, tenant maintenance details and owner messages, then routing calls or delivering summaries using the instructions the business has agreed.',
  url: `${BASE_URL}/real-estate-answering-service`,
  areaServed: { '@type': 'Country', name: 'United States' },
  provider: {
    '@type': 'Organization',
    name: 'LivePhoneAnswering',
    url: BASE_URL,
    telephone: '+1-857-453-1055',
  },
}

export default function PropertyManagementPage() {
  return (
    <main className="w-full">
      <PropertyHero />
      <RatingsTrustBar label="Trusted by 5,000+ high-volume local businesses & multi-line front desks" />
      <PropertyBenefits />
      <PropertyServices />
      <PropertyIntegrations />
      <PropertyHowItWorks />
      <PropertyWhyChooseUs />
      <PropertyReceptionist />
      <PlanPricing
        headingId="property-pricing-heading"
        descriptions={{
          'Starter Virtual Receptionist':
            'For smaller portfolios that need live call answering, tenant message taking and basic call screening.',
          'Growth Virtual Receptionist':
            'For growing property teams that need caller intake, rental enquiry handling and viewing requests.',
          'Business Virtual Receptionist':
            'For higher call volumes, multiple buildings and more detailed routing and escalation requirements.',
        }}
        customTitle="Need 1,000+ Minutes or Multi-Property Coverage?"
        customBody="Discuss portfolio size, on-call escalation and property software requirements with our team."
        footnote="Property details, approved answers and escalation routes are confirmed during setup."
      />
      <Testimonials />
      <FaqSection {...homeFaq} />
      <ContactFormSection theme="dark" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </main>
  )
}
