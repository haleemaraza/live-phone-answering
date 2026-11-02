import Link from 'next/link'

import SchedulingHero from '@/features/appointment-scheduling/SchedulingHero'
import RatingsTrustBar from '@/components/RatingsTrustBar'
import SchedulingServices from '@/features/appointment-scheduling/SchedulingServices'
import SchedulingHowItWorks from '@/features/appointment-scheduling/SchedulingHowItWorks'
import SchedulingTools from '@/features/appointment-scheduling/SchedulingTools'
import SchedulingIndustries from '@/features/appointment-scheduling/SchedulingIndustries'
import SchedulingNoShows from '@/features/appointment-scheduling/SchedulingNoShows'
import SchedulingBenefits from '@/features/appointment-scheduling/SchedulingBenefits'
import IndustriesTabs from '@/components/IndustriesTabs'
import SchedulingReceptionists from '@/features/appointment-scheduling/SchedulingReceptionists'
import SchedulingWhyChooseUs from '@/features/appointment-scheduling/SchedulingWhyChooseUs'
import PlanPricing from '@/components/PlanPricing'
import FaqSection from '@/components/FaqSection'
import ContactFormSection from '@/components/ContactFormSection'
import { appointmentSchedulingFaq } from '@/components/faq-content'

export const metadata = {
  title: "24/7 Appointment Scheduling Service - Reliable & Certified",
  description: "HIPAA compliant appointment scheduling answering service. 100% reliable with expert and trained receptionists. No AI chatbots, only human receptionists.",
  alternates: { canonical: "/appointment-scheduling" },
  openGraph: {
    type: 'website',
    siteName: 'LivePhoneAnswering',
    locale: 'en_US',
    images: [{ url: '/images/Phone Answering Services.webp', width: 1122, height: 1402, alt: 'Live Phone Answering Service' }],
    title: "24/7 Appointment Scheduling Service - Reliable & Certified",
    description: "HIPAA compliant appointment scheduling answering service. 100% reliable with expert and trained receptionists. No AI chatbots, only human receptionists.",
    url: "/appointment-scheduling",
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/Phone Answering Services.webp'],
    title: "24/7 Appointment Scheduling Service - Reliable & Certified",
    description: "HIPAA compliant appointment scheduling answering service. 100% reliable with expert and trained receptionists. No AI chatbots, only human receptionists.",
  },
}

const pageSchema = [
  {
    "@context": "https://schema.org/",
    "@type": "WebPage",
    "name": "Appointment Scheduling Answering Service — Definition and Comparisons",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        "#definition-text",
        "#compare-widget",
        "#compare-ivr"
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How Our Appointment Scheduling Answering Service Works",
    "description": "Set up live appointment scheduling with a real receptionist in under 5 minutes using 4 simple steps.",
    "totalTime": "PT5M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Forward your business number",
        "text": "Forward your existing business phone number to us — no new hardware required. Takes under 60 seconds to activate."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "We connect to your calendar and configure your booking script",
        "text": "We integrate directly with Calendly, Acuity, Google Calendar, and 1,000+ more tools. Your custom booking script is configured to your service types and brand voice."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Our receptionists answer calls and book directly into your calendar in real time",
        "text": "Live receptionists answer every call 24/7, check availability, collect caller details, and confirm appointments directly into your calendar in real time."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "You and your caller receive instant appointment confirmation",
        "text": "Automated SMS and email confirmations are sent instantly. A 24-hour reminder follows automatically to reduce no-shows by up to 80%."
      }
    ]
  },
  {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Medical Answering Service",
    "description": "HIPAA-compliant live medical answering service for clinics, physicians, and healthcare practices.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2145"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Chen",
          "honorificSuffix": "MD"
        },
        "datePublished": "2026-03-15",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "We reduced after-hours call interruptions by 80% in the first month. Our next HIPAA audit passed with zero findings related to call handling."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rachel Dominguez",
          "honorificSuffix": "MHA"
        },
        "datePublished": "2026-02-20",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Their team signed a BAA before day one, every message comes through an encrypted portal, and we've had zero compliance violations in 18 months."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "James Whitfield",
          "honorificSuffix": "DDS"
        },
        "datePublished": "2026-01-10",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "We're capturing an average of 35 new patient inquiries per month that previously went to voicemail after 5 PM. The bilingual answering has been a game-changer."
      }
    ]
  }
]

export default function AppointmentSchedulingPage() {
  return (
    <>
      <main>
        <SchedulingHero />
        <RatingsTrustBar label="Trusted by 5,000+ US businesses booking appointments by phone every day" />
        <SchedulingServices />
        <SchedulingHowItWorks />
        <SchedulingTools />
        <SchedulingBenefits />
        <IndustriesTabs heading="Tailored to Match Your Operational Workflow" intro="Supporting specialized industries, our receptionists integrate directly into your software and daily operations to ensure effortless team alignment." />
        <SchedulingIndustries />
        <SchedulingWhyChooseUs />
        <SchedulingReceptionists />
        <SchedulingWhyChooseUs />

        <SchedulingNoShows />
        <PlanPricing
          headingId='scheduling-pricing-heading'
          heading='Appointment Scheduling Answering Service Pricing'
          intro='Choose the monthly receptionist minutes your business needs. Growth and Business plans include appointment request handling. For direct calendar booking or more complex scheduling, request a custom quote.'
          badge='Appointment request support'
          descriptions={{
            'Starter Answering': 'For businesses that need live call answering, message taking, and basic call screening.',
            'Growth Answering': 'For growing teams that need caller intake and appointment request handling.',
            'Business Answering': 'For higher call volumes and more detailed call routing requirements.',
          }}
          customTitle='Need 1,000+ Minutes or Custom Scheduling?'
          customBody='Discuss direct booking, calendar compatibility, and scheduling requirements with our team.'
          footnote='Appointment request handling captures booking requests for your team. Direct calendar booking and integrations are confirmed separately.'
        />
        <FaqSection {...appointmentSchedulingFaq} />
        <ContactFormSection theme="dark" />
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
    </>
  )
}
