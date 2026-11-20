// Lead-capture wording for the shared pricing block. Prices, minutes and the
// overage rate match the site-wide plans in components/MinutePlans.jsx — only
// the names, feature lists and surrounding copy are specific to this page.
export const LEAD_CAPTURE_PLANS = [
  {
    tag: 'Starter',
    minutes: '100 Minutes',
    name: 'Starter Lead Capture',
    description:
      'Ideal for small businesses that want to capture incoming inquiries and keep track of potential customers.',
    price: '$199',
    overage: 'Extra minutes: $1.99/min',
    features: [
      '100 receptionist minutes included',
      'Live lead inquiry answering',
      'Personalized business greeting',
      'Caller name and contact information collection',
      'Basic inquiry and service requirement capture',
      'Lead details and message taking',
      'Email lead notifications',
      'Daily lead summaries',
    ],
    cta: 'Start Starter Plan',
  },
  {
    tag: 'Growth',
    minutes: '250 Minutes',
    name: 'Growth Lead Capture',
    description:
      'Perfect for growing businesses that need help identifying potential customers and collecting more detailed information before sales follow-up.',
    price: '$497.50',
    overage: 'Extra minutes: $1.99/min',
    features: [
      '250 receptionist minutes included',
      'Everything in Starter',
      'Custom lead capture scripts',
      'Lead qualification questions',
      'Customer needs and service interest identification',
      'Budget and project requirement collection',
      'New lead categorization',
      'Appointment and consultation requests',
      'Lead information forwarding to your sales team',
      'CRM lead entry and updates',
      'Daily lead activity summaries',
    ],
    cta: 'Get Growth Plan',
  },
  {
    tag: 'Business',
    minutes: '500 Minutes',
    name: 'Business Lead Capture',
    description:
      'Designed for businesses handling higher inquiry volumes that need structured lead qualification and organized lead management.',
    price: '$995',
    overage: 'Extra minutes: $1.99/min',
    features: [
      '500 receptionist minutes included',
      'Everything in Growth',
      'Advanced lead qualification workflows',
      'Customized questions for different services',
      'High-priority lead identification',
      'Detailed prospect information collection',
      'Lead routing to relevant sales representatives',
      'CRM record creation and management',
      'Follow-up request coordination',
      'Lead status and inquiry tracking',
      'Weekly lead activity and performance reports',
    ],
    cta: 'Choose Business Plan',
  },
]

export const LEAD_CAPTURE_CUSTOM_TAGS = [
  'High-Volume Lead Capture',
  'Advanced Lead Qualification',
  'Industry-Specific Lead Intake',
  'Sales Team Lead Routing',
  'CRM Integration and Data Entry',
  'Consultation and Appointment Booking',
  'Priority Lead Notifications',
  'Multi-Department Lead Distribution',
  'Custom Lead Reporting',
]

export const LEAD_CAPTURE_BILLING_NOTES = [
  {
    title: 'How Minutes Are Calculated',
    body: 'Minutes are based on the time our receptionists spend speaking with potential customers, collecting lead information, asking qualifying questions, and completing required after-call work.',
  },
  {
    title: 'Additional Minutes',
    body: 'Once your monthly included minutes are used, additional receptionist minutes are billed at $1.99 per minute.',
  },
  {
    title: 'Upgrade Anytime',
    body: 'Start with basic lead capture and upgrade as your business receives more inquiries. Choose a larger package whenever you need more detailed qualification and lead management support.',
  },
]
