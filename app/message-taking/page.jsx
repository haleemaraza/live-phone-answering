import MessageTakingHero from '@/features/message-taking/MessageTakingHero'
import RatingsTrustBar from '@/components/RatingsTrustBar'
import MessageTakingServices from '@/features/message-taking/MessageTakingServices'
import MessageTakingBenefits from '@/features/message-taking/MessageTakingBenefits'
import MessageTakingHowItWorks from '@/features/message-taking/MessageTakingHowItWorks'
import MessageSample from '@/features/message-taking/MessageSample'
import MessageTakingIntegrations from '@/features/message-taking/MessageTakingIntegrations'
import MessageTakingReceptionist from '@/features/message-taking/MessageTakingReceptionist'
import MessageTakingWhyChooseUs from '@/features/message-taking/MessageTakingWhyChooseUs'
import PlanPricing from '@/components/PlanPricing'
import Testimonials from '@/components/Testimonials'
import FaqSection from '@/components/FaqSection'
import ContactFormSection from '@/components/ContactFormSection'
import { messageTakingFaq } from '@/components/faq-content'

const BASE_URL = 'https://livephoneanswering.com'

export const metadata = {
  title: 'Message Taking Service for Business Calls | Live Phone Answering',
  description:
    'Live message taking service for US businesses. Receptionists answer in your business name, capture who called, why they called and the callback details your team needs to follow up.',
  alternates: { canonical: '/message-taking' },
  // Kept out of search for now: noindex tells Google not to list the page,
  // while follow still lets it reach the linked pages. Remove this line (and
  // restore the route in app/sitemap.js) when the page should go public.
  robots: { index: false, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'LivePhoneAnswering',
    locale: 'en_US',
    url: '/message-taking',
    title: 'Message Taking Service for Business Calls',
    description:
      'A helpful answer, a clear message and your team’s next step — live receptionists capture caller details using your greeting and agreed questions.',
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
    title: 'Message Taking Service for Business Calls',
    description:
      'A helpful answer, a clear message and your team’s next step — live receptionists capture caller details using your greeting and agreed questions.',
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
    name: 'Message Taking Service',
    serviceType: 'Business message taking and callback request capture',
    description:
      'Live receptionists answer business calls using the greeting a business has approved, record who called, why they called and the agreed callback details, then deliver the message to the designated recipient through the agreed delivery method.',
    url: `${BASE_URL}/message-taking`,
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
    mainEntity: messageTakingFaq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  },
]

export default function MessageTakingPage() {
  return (
    <main className="w-full">
      <MessageTakingHero />
      <RatingsTrustBar label="Trusted by 5,000+ high-volume local businesses & multi-line front desks" />
      <MessageTakingServices />
      <MessageTakingBenefits />
      <MessageTakingHowItWorks />
      <MessageSample />
      <MessageTakingIntegrations />
      <MessageTakingReceptionist />
      <MessageTakingWhyChooseUs />
      <PlanPricing
        headingId="message-taking-pricing-heading"
        descriptions={{
          'Starter Virtual Receptionist':
            'For businesses that need live call answering, message taking and basic call screening.',
          'Growth Virtual Receptionist':
            'For growing teams that need caller intake, agreed message questions and callback requests.',
          'Business Virtual Receptionist':
            'For higher call volumes, multiple recipients and more detailed message and routing requirements.',
        }}
        customTitle="Need 1,000+ Minutes or Custom Message Handling?"
        customBody="Discuss coverage hours, message recipients and delivery requirements with our team."
        footnote="Message fields, recipients and delivery methods are agreed during setup."
      />
      <Testimonials />
      <FaqSection {...messageTakingFaq} />
      <ContactFormSection theme="dark" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
    </main>
  )
}
