// After-hours wording for the shared pricing block. Prices, minutes and the
// overage rate match the site-wide plans in components/MinutePlans.jsx — only
// the names, feature lists and surrounding copy are specific to this page.
export const AFTER_HOURS_PLANS = [
  {
    tag: 'Starter',
    minutes: '100 Minutes',
    name: 'Starter After-Hours Answering',
    description:
      'Ideal for small businesses that need someone to answer calls after closing, take messages, and make sure callers know their inquiries will be handled.',
    price: '$199',
    overage: 'Extra minutes: $1.99/min',
    features: [
      '100 receptionist minutes included',
      'After-hours live call answering',
      'Custom business greeting',
      'Caller name and contact information collection',
      'Message taking and email notifications',
      'Basic business information and FAQ responses',
      'Next-business-day message delivery',
    ],
    cta: 'Start Starter Plan',
  },
  {
    tag: 'Growth',
    minutes: '250 Minutes',
    name: 'Growth After-Hours Answering',
    description:
      'Perfect for growing businesses that receive regular evening and weekend calls and need more active caller support.',
    price: '$497.50',
    overage: 'Extra minutes: $1.99/min',
    features: [
      '250 receptionist minutes included',
      'Everything in Starter',
      'Customized after-hours call scripts',
      'Urgent and non-urgent call screening',
      'Emergency contact notifications',
      'Call forwarding to designated team members',
      'Lead and inquiry capture',
      'Appointment request handling',
      'Daily call summaries',
    ],
    cta: 'Get Growth Plan',
  },
  {
    tag: 'Business',
    minutes: '500 Minutes',
    name: 'Business After-Hours Answering',
    description:
      'Designed for businesses that need dependable after-hours coverage, structured escalation procedures, and more advanced call handling.',
    price: '$995',
    overage: 'Extra minutes: $1.99/min',
    features: [
      '500 receptionist minutes included',
      'Everything in Growth',
      'Priority handling of urgent calls',
      'Customized emergency escalation procedures',
      'Multiple emergency contact lists',
      'Advanced call routing instructions',
      'Industry-specific call handling workflows',
      'Detailed caller and inquiry records',
      'CRM data entry and updates',
      'Weekly call activity and performance reports',
    ],
    cta: 'Choose Business Plan',
  },
]

export const AFTER_HOURS_CUSTOM_TAGS = [
  '24/7 Live Answering Coverage',
  'Evening and Weekend Coverage',
  'Holiday Call Handling',
  'Emergency Call Escalation',
  'On-Call Team Notifications',
  'Appointment Scheduling',
  'CRM Updates and Lead Capture',
  'Industry-Specific Call Handling',
]

export const AFTER_HOURS_BILLING_NOTES = [
  {
    title: 'How Minutes Are Calculated',
    body: 'Minutes are calculated based on the time our receptionists spend handling after-hours calls. This includes live conversations, caller information collection, message taking, call transfers, and required after-call work.',
  },
  {
    title: 'Additional Minutes',
    body: 'If you use all the minutes included in your monthly plan, additional minutes are billed at $1.99 per minute.',
  },
  {
    title: 'Upgrade Anytime',
    body: 'Start with the coverage you need today and move to a larger package as your after-hours call volume increases. You can upgrade your plan whenever your business requires additional support.',
  },
]
