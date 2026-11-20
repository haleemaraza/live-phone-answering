// Appointment-scheduling wording for the shared pricing block. Prices, minutes
// and the overage rate match the site-wide plans in components/MinutePlans.jsx
// — only the names, feature lists and surrounding copy are specific to this
// page.
export const SCHEDULING_PLANS = [
  {
    tag: 'Starter',
    minutes: '100 Minutes',
    name: 'Starter Appointment Scheduling',
    description:
      'Ideal for small businesses that need help answering appointment-related calls and collecting booking requests.',
    price: '$199',
    overage: 'Extra minutes: $1.99/min',
    features: [
      '100 receptionist minutes included',
      'Live appointment inquiry answering',
      'Personalized business greeting',
      'Caller name and contact information collection',
      'Appointment request intake',
      'Preferred date and time collection',
      'Basic availability inquiries',
      'Message and booking request notifications',
    ],
    cta: 'Start Starter Plan',
  },
  {
    tag: 'Growth',
    minutes: '250 Minutes',
    name: 'Growth Appointment Scheduling',
    description:
      'Perfect for growing businesses that receive regular booking calls and need help managing their appointment calendars.',
    price: '$497.50',
    overage: 'Extra minutes: $1.99/min',
    features: [
      '250 receptionist minutes included',
      'Everything in Starter',
      'Real-time calendar availability checks',
      'Appointment booking and confirmation',
      'Rescheduling and cancellation requests',
      'Customer and appointment detail collection',
      'Calendar updates',
      'Booking confirmations and notifications',
      'Daily appointment summaries',
    ],
    cta: 'Get Growth Plan',
  },
  {
    tag: 'Business',
    minutes: '500 Minutes',
    name: 'Business Appointment Scheduling',
    description:
      'Designed for busy businesses that handle a higher volume of appointments and need more comprehensive scheduling support.',
    price: '$995',
    overage: 'Extra minutes: $1.99/min',
    features: [
      '500 receptionist minutes included',
      'Everything in Growth',
      'Advanced appointment scheduling',
      'Multiple staff member calendars',
      'Appointment assignment based on availability',
      'Customized booking rules and time slots',
      'Appointment reminders and follow-up notifications',
      'Detailed booking and cancellation records',
      'CRM and calendar data updates',
      'Weekly scheduling activity reports',
    ],
    cta: 'Choose Business Plan',
  },
]

export const SCHEDULING_CUSTOM_TAGS = [
  'High-Volume Appointment Booking',
  'Multi-Staff Calendar Management',
  'Recurring Appointment Scheduling',
  'Appointment Confirmations and Reminders',
  'Rescheduling and Cancellation Management',
  'New Customer Booking and Intake',
  'CRM and Calendar Integration',
  'Multi-Location Appointment Coordination',
]

export const SCHEDULING_BILLING_NOTES = [
  {
    title: 'How Minutes Are Calculated',
    body: 'Minutes are based on the time our receptionists spend handling appointment-related calls. This includes speaking with customers, checking availability, booking appointments, collecting details, and completing required after-call work.',
  },
  {
    title: 'Additional Minutes',
    body: 'If your monthly included minutes are used, additional receptionist minutes are billed at $1.99 per minute.',
  },
  {
    title: 'Upgrade Anytime',
    body: 'Start with the scheduling support you need today. As your appointment volume grows, upgrade to a larger package with more minutes and advanced calendar management.',
  },
]
