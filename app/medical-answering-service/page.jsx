import MedicalHero from '@/features/medical/MedicalHero'
import RatingsTrustBar from '@/components/RatingsTrustBar'
import MedicalServices from '@/features/medical/MedicalServices'
import MedicalHowItWorks from '@/features/medical/MedicalHowItWorks'
import MedicalPrivacy from '@/features/medical/MedicalPrivacy'
import MedicalIntegrations from '@/features/medical/MedicalIntegrations'
import MedicalBenefits from '@/features/medical/MedicalBenefits'
import MedicalDepartments from '@/features/medical/MedicalDepartments'
import MedicalReceptionist from '@/features/medical/MedicalReceptionist'
import MedicalWhyChooseUs from '@/features/medical/MedicalWhyChooseUs'
import PlanPricing from '@/components/PlanPricing'
import Testimonials from '@/components/Testimonials'
import FaqSection from '@/components/FaqSection'
import ContactFormSection from '@/components/ContactFormSection'
import { medicalFaq } from '@/components/faq-content'

const BASE_URL = 'https://livephoneanswering.com'

export const metadata = {
  title: 'Medical Answering Service | Live Phone Answering',
  description:
    'Professional HIPAA-compliant medical answering service. Secure, 24/7 call handling for healthcare providers, clinics, and practices.',
  alternates: { canonical: '/medical-answering-service' },
  openGraph: {
    type: 'website',
    siteName: 'LivePhoneAnswering',
    locale: 'en_US',
    images: [
      { url: '/images/Phone Answering Services.webp', width: 1122, height: 1402, alt: 'Live Phone Answering Service' },
    ],
    title: 'Medical Answering Service | Live Phone Answering',
    description:
      'Professional HIPAA-compliant medical answering service. Secure, 24/7 call handling for healthcare providers, clinics, and practices.',
    url: '/medical-answering-service',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/Phone Answering Services.webp'],
    title: 'Medical Answering Service | Live Phone Answering',
    description:
      'Professional HIPAA-compliant medical answering service. Secure, 24/7 call handling for healthcare providers, clinics, and practices.',
  },
}

// Describes the offering itself, which is what makes the page eligible for a
// service result rather than a plain blue link. The FAQ block mirrors the
// questions actually rendered further down the page.
const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Medical Answering Service',
    serviceType: 'Medical call answering, appointment request handling and on-call routing',
    description:
      'Live receptionists answer calls for healthcare practices, capturing patient enquiries, appointment requests and practice messages, then routing calls or delivering summaries using the instructions the practice has approved.',
    url: `${BASE_URL}/medical-answering-service`,
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
    mainEntity: medicalFaq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  },
]

export default function MedicalAnsweringServicePage() {
  return (
    <main className="w-full">
      <MedicalHero />
      <RatingsTrustBar label="Trusted by 5,000+ high-volume local businesses & multi-line front desks" />
      <MedicalServices />
      <MedicalHowItWorks />
      <MedicalPrivacy />
      <MedicalIntegrations />
      <MedicalBenefits />
      <MedicalDepartments />
      <MedicalReceptionist />
      <MedicalWhyChooseUs />
      <PlanPricing
        headingId="medical-pricing-heading"
        descriptions={{
          'Starter Virtual Receptionist':
            'For smaller practices that need live call answering, patient message taking and basic call screening.',
          'Growth Virtual Receptionist':
            'For practices that need patient intake and appointment request handling alongside daily messages.',
          'Business Virtual Receptionist':
            'For higher call volumes, multiple clinicians and more detailed routing and on-call requirements.',
        }}
        customTitle="Need 1,000+ Minutes or Multi-Location Coverage?"
        customBody="Discuss clinician schedules, on-call routing and practice software requirements with our team."
        footnote="Appointment request handling captures booking requests for your team. Direct booking and integrations are confirmed separately."
      />
      <Testimonials />
      <FaqSection {...medicalFaq} />
      <ContactFormSection theme="dark" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
    </main>
  )
}
