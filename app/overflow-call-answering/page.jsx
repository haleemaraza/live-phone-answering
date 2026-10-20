import OverflowHero from '@/features/overflow/OverflowHero'
import RatingsTrustBar from '@/components/RatingsTrustBar'
import OverflowBenefits from '@/features/overflow/OverflowBenefits'
import OverflowWorkflow from '@/features/overflow/OverflowWorkflow'
import OverflowReceptionists from '@/features/overflow/OverflowReceptionists'
import OverflowIntegrations from '@/features/overflow/OverflowIntegrations'
import CoreServices from '@/features/homepage/CoreServices'
import IndustriesTabs from '@/components/IndustriesTabs'
import Testimonials from '@/components/Testimonials'
import FaqSection from '@/components/FaqSection'
import ContactFormSection from '@/components/ContactFormSection'
import { overflowFaq } from '@/components/faq-content'

const BASE_URL = 'https://livephoneanswering.com'

export const metadata = {
  title: 'Overflow Call Answering Service for Busy Teams | Live Phone Answering',
  description:
    'Overflow call answering for US businesses. When your team is already on the phone, a live receptionist answers in your business name, captures inquiries, and follows your call-handling instructions.',
  alternates: { canonical: '/overflow-call-answering' },
  openGraph: {
    type: 'website',
    siteName: 'LivePhoneAnswering',
    locale: 'en_US',
    url: '/overflow-call-answering',
    title: 'Overflow Call Answering Service for Busy Teams',
    description:
      'Your team answers first. We handle the calls they cannot reach — live receptionist backup using your greeting and your instructions.',
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
    title: 'Overflow Call Answering Service for Busy Teams',
    description:
      'Your team answers first. We handle the calls they cannot reach — live receptionist backup using your greeting and your instructions.',
    images: ['/images/Phone Answering Services.webp'],
  },
}

// Describes the offering itself, which is what makes the page eligible for a
// service result rather than a plain blue link.
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Overflow Call Answering Service',
  serviceType: 'Overflow call answering',
  description:
    'Live receptionist support for calls a business cannot take, using the greeting, approved questions, and call-handling instructions agreed with that business.',
  url: `${BASE_URL}/overflow-call-answering`,
  areaServed: { '@type': 'Country', name: 'United States' },
  provider: {
    '@type': 'Organization',
    name: 'LivePhoneAnswering',
    url: BASE_URL,
    telephone: '+1-857-453-1055',
  },
}

// Mirrors the questions rendered by <FaqSection>, so the page is eligible for
// FAQ rich results.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: overflowFaq.items.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function OverflowCallAnsweringPage() {
  return (
    <main className="w-full">
      <OverflowHero />
      <RatingsTrustBar />
      {/* Carries the hero's "See How Overflow Works" anchor. */}
      <OverflowBenefits />
      <OverflowWorkflow />
      <CoreServices />
      <OverflowReceptionists />
      <IndustriesTabs />
      <OverflowIntegrations />
      <Testimonials />
      <FaqSection {...overflowFaq} />
      <ContactFormSection theme="dark" />


      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, faqSchema]) }} />
    </main>
  )
}
