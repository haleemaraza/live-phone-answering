import Link from 'next/link'

import MinutePlans from '@/components/MinutePlans'
import {
  AFTER_HOURS_PLANS,
  AFTER_HOURS_CUSTOM_TAGS,
  AFTER_HOURS_BILLING_NOTES,
} from '@/features/after-hours/after-hours-plans'
import FaqSection from '@/components/FaqSection'
import DarkCtaBanner from '@/components/DarkCtaBanner'
import { afterHoursFaq } from '@/components/faq-content'
import AfterHoursHero from '@/features/after-hours/AfterHoursHero'
import ServiceAssurance from '@/features/after-hours/ServiceAssurance'
import AfterHoursCoverage from '@/features/after-hours/AfterHoursCoverage'
import ReceptionistServices from '@/features/after-hours/ReceptionistServices'
import HowItWorksSteps from '@/features/after-hours/HowItWorksSteps'
import CallHandlingRules from '@/features/after-hours/CallHandlingRules'
import IndustriesTabs from '@/components/IndustriesTabs'
import CoverageComparison from '@/features/after-hours/CoverageComparison'
import RatingsTrustBar from '@/components/RatingsTrustBar'
import ContactFormSection from '@/components/ContactFormSection'

export const metadata = {
  title: "Best After Hours Answering Service 2026 - Call Now!",
  description: "Stay available while competitors sleep. Discover how our after-hours answering service keeps your business reachable 24/7, including nights, weekends and holidays.",
  alternates: { canonical: "/after-hours" },
  openGraph: {
    type: 'website',
    siteName: 'LivePhoneAnswering',
    locale: 'en_US',
    images: [{ url: '/images/Phone Answering Services.webp', width: 1122, height: 1402, alt: 'Live Phone Answering Service' }],
    title: "Best After Hours Answering Service 2026 - Call Now!",
    description: "Stay available while competitors sleep. Discover how our after-hours answering service keeps your business reachable 24/7, including nights, weekends and holidays.",
    url: "/after-hours",
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/Phone Answering Services.webp'],
    title: "Best After Hours Answering Service 2026 - Call Now!",
    description: "Stay available while competitors sleep. Discover how our after-hours answering service keeps your business reachable 24/7, including nights, weekends and holidays.",
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
    url: 'https://livephoneanswering.com/after-hours',
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
  <RatingsTrustBar label="Trusted by 5,000+ US businesses booking appointments by phone every day" />
        
        <ServiceAssurance />
        <AfterHoursCoverage />
        <ReceptionistServices />
        
        <HowItWorksSteps />
        <IndustriesTabs
          heading="Industries That Benefit From After Hours Answering Services"
          intro="Every business can receive important calls after hours. Some industries rely on it more than others."
        />
        <CallHandlingRules />
       
        {/* <CoverageComparison /> */}

        <MinutePlans
          eyebrow="After-hours answering plans that fit your needs"
          heading="Never Miss an Important Call, Even After Business Hours — Choose a Plan"
          intro="Our after-hours answering service makes sure callers reach a real person, receive helpful information, and get connected to the right contact when needed. Choose a plan based on your after-hours call volume and coverage needs."
          panelNote="Start with the coverage you need. Upgrade anytime as your after-hours call volume grows."
          plans={AFTER_HOURS_PLANS}
          customTitle="Need 1,000+ Minutes or Extended Coverage?"
          customBody="Get a custom after-hours answering package designed around your business hours, call volume, and response requirements."
          customTags={AFTER_HOURS_CUSTOM_TAGS}
          billingNotes={AFTER_HOURS_BILLING_NOTES}
        />
        <FaqSection {...afterHoursFaq} />
                    <ContactFormSection theme="dark" />
        
       
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
    </>
  )
}
