import LeadCaptureHero from '@/features/lead-capture/LeadCaptureHero'
import RatingsTrustBar from '@/components/RatingsTrustBar'
import LeadCaptureServices from '@/features/lead-capture/LeadCaptureServices'
import LeadCaptureHowItWorks from '@/features/lead-capture/LeadCaptureHowItWorks'
import LeadCaptureDetails from '@/features/lead-capture/LeadCaptureDetails'
import IntegrationsSection from '@/features/homepage/IntegrationsSection'
import LeadCaptureBenefits from '@/features/lead-capture/LeadCaptureBenefits'
import IndustriesTabs from '@/components/IndustriesTabs'
import LeadCaptureReceptionists from '@/features/lead-capture/LeadCaptureReceptionists'
import LeadCaptureWhyChooseUs from '@/features/lead-capture/LeadCaptureWhyChooseUs'
import MinutePlans from '@/components/MinutePlans'
import Testimonials from '@/components/Testimonials'
import FaqSection from '@/components/FaqSection'
import ContactFormSection from '@/components/ContactFormSection'
import { homeFaq } from '@/components/faq-content'

const BASE_URL = 'https://livephoneanswering.com'

export const metadata = {
  title: 'Lead Capture Answering Service for Your Business | Live Phone Answering',
  description:
    'Lead capture answering for US businesses. Live receptionists answer new enquiries in your business name, ask your approved intake questions, and pass clear lead details to your team.',
  alternates: { canonical: '/lead-capture' },
  openGraph: {
    type: 'website',
    siteName: 'LivePhoneAnswering',
    locale: 'en_US',
    url: '/lead-capture',
    title: 'Lead Capture Answering Service for Your Business',
    description:
      'Give every new enquiry a clear next step — live receptionists collect contact details, ask your intake questions, and capture what your team needs to follow up.',
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
    title: 'Lead Capture Answering Service for Your Business',
    description:
      'Give every new enquiry a clear next step — live receptionists collect contact details, ask your intake questions, and capture what your team needs to follow up.',
    images: ['/images/Phone Answering Services.webp'],
  },
}

// Describes the offering itself, which is what makes the page eligible for a
// service result rather than a plain blue link.
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Lead Capture Answering Service',
  serviceType: 'Lead capture call answering',
  description:
    'Live receptionists answer new business enquiries, collect contact and service details using the intake questions a business approves, and pass qualified leads on through the agreed routing rules.',
  url: `${BASE_URL}/lead-capture`,
  areaServed: { '@type': 'Country', name: 'United States' },
  provider: {
    '@type': 'Organization',
    name: 'LivePhoneAnswering',
    url: BASE_URL,
    telephone: '+1-857-453-1055',
  },
}

export default function LeadCapturePage() {
  return (
    <main className="w-full">
      <LeadCaptureHero />
      <RatingsTrustBar label="Trusted by 5,000+ US businesses capturing new enquiries by phone" />
      <LeadCaptureServices />
      <LeadCaptureHowItWorks />
      <LeadCaptureDetails />
      <IntegrationsSection />
      <LeadCaptureBenefits />
      <IndustriesTabs />
      <LeadCaptureWhyChooseUs />
      <LeadCaptureReceptionists />
      <MinutePlans />
      <Testimonials />
      <FaqSection {...homeFaq} />
      <ContactFormSection theme="dark" />


      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </main>
  )
}
