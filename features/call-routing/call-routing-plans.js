// Call-routing wording for the shared pricing block. Prices, minutes and the
// overage rate match the site-wide plans in components/MinutePlans.jsx — only
// the names, feature lists and surrounding copy are specific to this page.
export const CALL_ROUTING_PLANS = [
  {
    tag: 'Starter',
    minutes: '100 Minutes',
    name: 'Starter Call Routing and Transfer',
    description:
      'Ideal for small businesses that need help directing incoming calls and connecting customers with the right contacts.',
    price: '$199',
    overage: 'Extra minutes: $1.99/min',
    features: [
      '100 receptionist minutes included',
      'Live call answering',
      'Personalized business greeting',
      'Caller name and contact information collection',
      'Basic caller inquiry screening',
      'Call transfers to designated contacts',
      'Message taking when contacts are unavailable',
      'Email call notifications',
    ],
    cta: 'Start Starter Plan',
  },
  {
    tag: 'Growth',
    minutes: '250 Minutes',
    name: 'Growth Call Routing and Transfer',
    description:
      'Perfect for growing businesses that handle calls for different team members, departments, or service inquiries.',
    price: '$497.50',
    overage: 'Extra minutes: $1.99/min',
    features: [
      '250 receptionist minutes included',
      'Everything in Starter',
      'Customized call screening questions',
      'Department-specific call routing',
      'Transfers based on caller requirements',
      'Warm call transfers with caller context',
      'Call forwarding to backup contacts',
      'Unanswered-call message handling',
      'Priority inquiry identification',
      'Daily call summaries',
    ],
    cta: 'Get Growth Plan',
  },
  {
    tag: 'Business',
    minutes: '500 Minutes',
    name: 'Business Call Routing and Transfer',
    description:
      'Designed for businesses with multiple departments, higher call volumes, and more detailed call distribution requirements.',
    price: '$995',
    overage: 'Extra minutes: $1.99/min',
    features: [
      '500 receptionist minutes included',
      'Everything in Growth',
      'Advanced call routing instructions',
      'Multi-department call distribution',
      'Multiple contact and transfer lists',
      'Customized call escalation procedures',
      'Sequential contact transfer instructions',
      'Backup contact and overflow routing',
      'Detailed caller information capture',
      'CRM call record updates',
      'Weekly call activity and performance reports',
    ],
    cta: 'Choose Business Plan',
  },
]

export const CALL_ROUTING_CUSTOM_TAGS = [
  'High-Volume Call Routing',
  'Multi-Department Call Transfers',
  'Multi-Location Call Distribution',
  'Sequential Call Forwarding',
  'Backup Contact Routing',
  'Warm and Blind Call Transfers',
  'Priority Caller Routing',
  'Emergency Contact Escalation',
  'Custom Call Handling Workflows',
]

export const CALL_ROUTING_BILLING_NOTES = [
  {
    title: 'How Minutes Are Calculated',
    body: 'Minutes are based on the time our receptionists spend handling incoming calls. This includes speaking with callers, identifying their needs, screening inquiries, coordinating transfers, and completing required after-call work.',
  },
  {
    title: 'Additional Minutes',
    body: 'If your monthly included minutes are used, additional receptionist minutes are billed at $1.99 per minute.',
  },
  {
    title: 'Upgrade Anytime',
    body: 'Start with basic call routing and upgrade as your business grows. Choose a larger package whenever you need more transfer options, additional contacts, or advanced call handling.',
  },
]
