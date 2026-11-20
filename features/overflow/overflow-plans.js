// Overflow wording for the shared pricing block. Prices, minutes and the
// overage rate match the site-wide plans in components/MinutePlans.jsx — only
// the names, feature lists and surrounding copy are specific to this page.
export const OVERFLOW_PLANS = [
  {
    tag: 'Starter',
    minutes: '100 Minutes',
    name: 'Starter Overflow Answering',
    description: 'Ideal for small businesses that occasionally receive more calls than their team can handle.',
    price: '$199',
    overage: 'Extra minutes: $1.99/min',
    features: [
      '100 receptionist minutes included',
      'Live overflow call answering',
      'Call forwarding when your team is unavailable',
      'Personalized business greeting',
      'Caller name and contact information collection',
      'Message taking and delivery',
      'Basic caller inquiry handling',
      'Email call notifications',
    ],
    cta: 'Start Starter Plan',
  },
  {
    tag: 'Growth',
    minutes: '250 Minutes',
    name: 'Growth Overflow Answering',
    description:
      'Perfect for growing businesses that experience regular busy periods and need additional support to manage incoming calls.',
    price: '$497.50',
    overage: 'Extra minutes: $1.99/min',
    features: [
      '250 receptionist minutes included',
      'Everything in Starter',
      'Busy-line and unanswered-call handling',
      'Custom overflow call scripts',
      'Lead and inquiry capture',
      'Call screening and prioritization',
      'Call transfers to available team members',
      'Appointment request handling',
      'Customer message management',
      'Daily call summaries',
    ],
    cta: 'Get Growth Plan',
  },
  {
    tag: 'Business',
    minutes: '500 Minutes',
    name: 'Business Overflow Answering',
    description:
      'Designed for businesses with higher call volumes that need reliable backup answering and structured call management during peak periods.',
    price: '$995',
    overage: 'Extra minutes: $1.99/min',
    features: [
      '500 receptionist minutes included',
      'Everything in Growth',
      'Advanced call routing instructions',
      'Multiple overflow call scenarios',
      'Priority handling for important inquiries',
      'Detailed lead and customer information capture',
      'CRM data entry and updates',
      'Customized escalation instructions',
      'Department-specific call handling',
      'Weekly call activity and performance reports',
    ],
    cta: 'Choose Business Plan',
  },
]

export const OVERFLOW_CUSTOM_TAGS = [
  'High-Volume Call Overflow',
  'Peak-Hour Call Coverage',
  'Busy-Line Call Forwarding',
  'Unanswered-Call Handling',
  'Multi-Department Call Routing',
  'Lead Capture and Qualification',
  'Appointment Request Handling',
  'CRM Updates and Call Records',
  'Multi-Location Call Management',
]

export const OVERFLOW_BILLING_NOTES = [
  {
    title: 'How Minutes Are Calculated',
    body: 'Minutes are based on the time our receptionists spend handling overflow calls. This includes live conversations, caller information collection, message taking, call transfers, and required after-call work.',
  },
  {
    title: 'Additional Minutes',
    body: 'If your monthly included minutes are used, additional receptionist minutes are billed at $1.99 per minute.',
  },
  {
    title: 'Upgrade Anytime',
    body: 'Start with the coverage you need and upgrade as your incoming call volume increases. You can move to a larger package whenever your business needs more overflow support.',
  },
]
