import Link from 'next/link'

import MinutePlans from '@/components/MinutePlans'
import FaqSection from '@/components/FaqSection'
import DarkCtaBanner from '@/components/DarkCtaBanner'
import { afterHoursFaq } from '@/components/faq-content'
import AfterHoursHero from '@/features/after-hours/AfterHoursHero'
import ServiceAssurance from '@/features/after-hours/ServiceAssurance'
import AfterHoursCoverage from '@/features/after-hours/AfterHoursCoverage'
import ReceptionistServices from '@/features/after-hours/ReceptionistServices'
import HowItWorksSteps from '@/features/after-hours/HowItWorksSteps'
import CallHandlingRules from '@/features/after-hours/CallHandlingRules'
import CoverageComparison from '@/features/after-hours/CoverageComparison'

export const metadata = {
  title: "After-Hours Answering Service | Live Phone Answering",
  description: "Never miss a lead after hours. Professional 24/7 after-hours answering service for US businesses to capture more leads and provide better service.",
  alternates: { canonical: "/after-hours-answering-service" },
  openGraph: {
    type: 'website',
    siteName: 'LivePhoneAnswering',
    locale: 'en_US',
    images: [{ url: '/images/Phone Answering Services.webp', width: 1122, height: 1402, alt: 'Live Phone Answering Service' }],
    title: "After-Hours Answering Service | Live Phone Answering",
    description: "Never miss a lead after hours. Professional 24/7 after-hours answering service for US businesses to capture more leads and provide better service.",
    url: "/after-hours-answering-service",
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/Phone Answering Services.webp'],
    title: "After-Hours Answering Service | Live Phone Answering",
    description: "Never miss a lead after hours. Professional 24/7 after-hours answering service for US businesses to capture more leads and provide better service.",
  },
}

const pageSchema = [
  // Describes the service itself. The Product/AggregateRating/Review block that
  // used to live here was removed with the testimonials section: review markup
  // must describe reviews actually shown on the page, or it is a policy breach.
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'After-Hours Answering Service',
    serviceType: 'After-hours call answering',
    description:
      'Live receptionists answer business calls outside opening hours — evenings, overnight, weekends and holidays — using the greeting, questions and call-handling rules agreed with each business.',
    url: 'https://livephoneanswering.com/after-hours-answering-service',
    areaServed: { '@type': 'Country', name: 'United States' },
    provider: {
      '@type': 'Organization',
      name: 'LivePhoneAnswering',
      url: 'https://livephoneanswering.com',
      telephone: '+1-857-453-1055',
    },
  },
  // Mirrors the questions rendered by <FaqSection>, so the page is eligible for
  // FAQ rich results.
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: afterHoursFaq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  },
]

export default function AfterHoursAnsweringServicePage() {
  return (
    <>
      <main>
        <AfterHoursHero />
        <ServiceAssurance />
        <AfterHoursCoverage />
        <ReceptionistServices />
        <HowItWorksSteps />
        <CallHandlingRules />
       
        <CoverageComparison />

        <MinutePlans />
        <FaqSection {...afterHoursFaq} />
        <DarkCtaBanner
          headingId='after-hours-cta-heading'
          heading='Your Office Closes. Your Phone Keeps Working.'
          body='Give evening, weekend and holiday callers a real person to speak to, using your greeting and your call-handling rules. Setup takes less than 5 minutes.'
          points={['No lock-in contracts', '100% US-based receptionists', 'Your hours, your rules', 'HIPAA compliant']}
          primary={{ href: '/contact-us', label: 'Get My After-Hours Plan →' }}
          secondary={{ href: '/pricing', label: 'View Pricing Plans' }}
        />
       
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
    </>
  )
}
