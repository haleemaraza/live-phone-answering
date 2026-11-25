import HotelHero from '@/features/hotel/HotelHero'
import RatingsTrustBar from '@/components/RatingsTrustBar'
import HotelServices from '@/features/hotel/HotelServices'
import HotelHowItWorks from '@/features/hotel/HotelHowItWorks'
import HotelReservationSupport from '@/features/hotel/HotelReservationSupport'
import HotelPropertyDetails from '@/features/hotel/HotelPropertyDetails'
import HotelIntegrations from '@/features/hotel/HotelIntegrations'
import HotelBenefits from '@/features/hotel/HotelBenefits'
import HotelPropertyTypes from '@/features/hotel/HotelPropertyTypes'
import HotelReceptionist from '@/features/hotel/HotelReceptionist'
import HotelWhyChooseUs from '@/features/hotel/HotelWhyChooseUs'
import PlanPricing from '@/components/PlanPricing'
import Testimonials from '@/components/Testimonials'
import FaqSection from '@/components/FaqSection'
import ContactFormSection from '@/components/ContactFormSection'
import { hotelFaq } from '@/components/faq-content'

const BASE_URL = 'https://livephoneanswering.com'

export const metadata = {
  title: 'Hotel Answering Service for Reservations & Guest Calls | Live Phone Answering',
  description:
    'Hotel answering service for reservation enquiries and guest calls. Live receptionists answer in your property name, share approved hotel information and pass guest requests to your team.',
  alternates: { canonical: '/hotel-answering-service' },
  // Kept out of search for now: noindex tells Google not to list the page,
  // while follow still lets it reach the linked pages. Remove this line (and
  // restore the route in app/sitemap.js) when the page should go public.
  robots: { index: false, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'LivePhoneAnswering',
    locale: 'en_US',
    url: '/hotel-answering-service',
    title: 'Hotel Answering Service for Reservations and Guest Calls',
    description:
      'A welcoming answer when your front desk needs cover — reservation enquiries, approved property answers and guest messages handled on your instructions.',
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
    title: 'Hotel Answering Service for Reservations and Guest Calls',
    description:
      'A welcoming answer when your front desk needs cover — reservation enquiries, approved property answers and guest messages handled on your instructions.',
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
    name: 'Hotel Answering Service',
    serviceType: 'Hotel reservation enquiry handling and guest call answering',
    description:
      "Live receptionists answer calls for hotels using the property's approved greeting, capture reservation enquiries and booking change requests, answer approved property questions, and pass guest messages to the designated hotel contact under the instructions the property has agreed.",
    url: `${BASE_URL}/hotel-answering-service`,
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
    mainEntity: hotelFaq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  },
]

export default function HotelAnsweringServicePage() {
  return (
    <main className="w-full">
      <HotelHero />
      <RatingsTrustBar label="Trusted by 5,000+ high-volume local businesses & multi-line front desks" />
      <HotelServices />
      <HotelHowItWorks />
      <HotelReservationSupport />
      <HotelPropertyDetails />
      <HotelIntegrations />
      <HotelBenefits />
      <HotelPropertyTypes />
      <HotelReceptionist />
      <HotelWhyChooseUs />
      <PlanPricing
        headingId="hotel-pricing-heading"
        descriptions={{
          'Starter Virtual Receptionist':
            'For smaller properties that need live call answering, guest message taking and basic call screening.',
          'Growth Virtual Receptionist':
            'For properties that need reservation enquiry capture, approved property answers and guest requests.',
          'Business Virtual Receptionist':
            'For higher call volumes, multiple properties and more detailed duty routing and escalation requirements.',
        }}
        customTitle="Need 1,000+ Minutes or Multi-Property Coverage?"
        customBody="Discuss coverage hours, reservation permissions and duty contact routes with our team."
        footnote="Reservation and change requests are confirmed only through your agreed, authorised process."
      />
      <Testimonials />
      <FaqSection {...hotelFaq} />
      <ContactFormSection theme="dark" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
    </main>
  )
}
