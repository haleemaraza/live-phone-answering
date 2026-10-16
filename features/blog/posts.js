// Placeholder articles. Body sections are plain data so a post renders from
// one map — no HTML strings, nothing to sanitise, and the headings can be
// turned into table-of-contents anchors automatically.
export const BLOG_POSTS = [
  {
    slug: 'what-is-a-live-answering-service',
    category: 'Answering Services',
    title: 'What Is a Live Answering Service? A Complete Guide for Small Businesses',
    excerpt:
      'A plain-English guide to how live answering works, what it costs, and how to tell whether your business is losing enough calls to justify one.',
    description:
      'Learn what a live answering service is, how it handles your calls, what it costs, and how to decide whether your business needs one. A practical guide for US small businesses.',
    date: '2026-09-02',
    dateLabel: 'September 2, 2026',
    readTime: '9 min read',
    sections: [
      {
        heading: 'What a live answering service actually does',
        paragraphs: [
          'A live answering service is a team of trained receptionists who answer your business calls when you cannot. They pick up in your company name, follow the script you provide, collect the details you ask for, and pass the message to your team the way you prefer.',
          'The important word is live. A caller reaches a person, not a recording and not an automated menu. That difference is what changes a missed call into a booked job.',
        ],
        list: {
          title: 'A typical call looks like this:',
          items: [
            'The receptionist answers with your agreed greeting, usually inside four rings.',
            'They identify why the person is calling and ask your intake questions.',
            'They either transfer the call, book an appointment, or take a message.',
            'Your team receives the details by text, email, or in your CRM.',
          ],
        },
      },
      {
        heading: 'Who tends to need one',
        paragraphs: [
          'Any business where the phone is the main way customers get in touch benefits, but the pattern is strongest in trades, clinics, law firms, and property management — places where the person best qualified to answer is usually busy doing the actual work.',
          'If your team is on a job site, with a patient, or in court, the phone is ringing in an empty office. That is the gap the service fills.',
        ],
      },
      {
        heading: 'What it costs and how pricing works',
        paragraphs: [
          'Most providers price either per minute or as a flat monthly plan for a set block of receptionist time. Per-minute plans suit low, unpredictable volume. Flat plans are easier to budget once you know roughly how many calls you get.',
          'Watch for setup fees, charges for script changes, and overage rates, since those are where a cheap headline price usually stops being cheap.',
        ],
      },
      {
        heading: 'How to tell if it is worth it',
        paragraphs: [
          'Work out two numbers: how many calls you miss in a month, and what one new customer is worth to you. Multiply the missed calls by a conservative conversion rate and compare it to the monthly fee. For most service businesses the maths stops being close very quickly.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is a live answering service the same as a virtual receptionist?',
        a: 'They overlap. "Answering service" usually describes message taking and call routing. "Virtual receptionist" usually implies a wider role — appointment booking, intake questions, and acting more like a member of your team.',
      },
      {
        q: 'Will callers know it is not my office?',
        a: 'Not unless you want them to. Receptionists answer in your business name using the greeting you choose, and work from the information you supply about your services and hours.',
      },
      {
        q: 'Can I use it only after hours?',
        a: 'Yes. Many businesses start with evenings, weekends, and holidays, then add daytime overflow once they see how many calls were going unanswered.',
      },
    ],
  },
  {
    slug: 'cost-of-missed-calls',
    category: 'Lead Capture',
    title: 'Missed Calls Are Costing You Customers: Here Are the Real Numbers',
    excerpt:
      'Most callers who reach voicemail never call back — they call your competitor instead. Here is how to work out what that is actually costing your business each month.',
    description:
      'Most callers who reach voicemail never call back. Learn how to calculate what missed calls cost your business each month and what to do about it.',
    date: '2026-09-16',
    dateLabel: 'September 16, 2026',
    readTime: '7 min read',
    sections: [
      {
        heading: 'What happens when nobody answers',
        paragraphs: [
          'A caller who hears a beep instead of a voice has a decision to make, and it takes about two seconds. Leave a message and wait, or hang up and try the next business on the list. The large majority choose the second option.',
          'This matters more than it sounds, because the people who call you are the people furthest along in deciding to buy. They are not browsing. They have a burst pipe, a toothache, or a lease to sign.',
        ],
      },
      {
        heading: 'Working out your own number',
        paragraphs: [
          'You do not need a study to price this. You need three figures from your own business.',
        ],
        list: {
          title: 'Pull these together:',
          items: [
            'Missed calls per month — your phone system or carrier can tell you.',
            'Your typical conversion rate from enquiry to customer.',
            'The average value of one customer, including repeat work.',
          ],
        },
      },
      {
        heading: 'The part that does not show up in the spreadsheet',
        paragraphs: [
          'Lost revenue is the obvious cost. The quieter one is reputation. A caller who cannot reach you does not conclude that you are busy — they conclude that you are hard to deal with, and that impression reaches other people.',
          'The same applies in reverse. Being the business that actually picks up is a genuine advantage, and an unusually cheap one.',
        ],
      },
      {
        heading: 'What to do about it',
        paragraphs: [
          'You have three realistic options: hire reception staff, route overflow and after-hours calls to a live answering service, or accept the losses. The first is the most expensive per call answered. The third is the most expensive overall, and the easiest to overlook because it never appears on an invoice.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How do I find out how many calls I am missing?',
        a: 'Most phone systems and mobile carriers provide call logs showing unanswered calls. If you forward to voicemail, compare voicemails left against calls received — the gap is your real miss rate.',
      },
      {
        q: 'Do missed calls really not call back?',
        a: 'Some do. But a caller comparing providers has no reason to wait, and the business that answers first usually wins the job. Treat every unanswered call as a coin flip you did not need to take.',
      },
    ],
  },
  {
    slug: 'virtual-receptionist-vs-answering-service-vs-ai',
    category: 'Comparisons',
    title: 'Virtual Receptionist vs. Answering Service vs. AI Bot: Which Fits Your Business?',
    excerpt:
      'Three ways to handle the calls your team cannot take, and an honest look at where each one works well and where it falls down.',
    description:
      'Compare virtual receptionists, traditional answering services, and AI phone bots. An honest look at cost, caller experience, and which option suits your business.',
    date: '2026-09-29',
    dateLabel: 'September 29, 2026',
    readTime: '8 min read',
    sections: [
      {
        heading: 'The three options, briefly',
        paragraphs: [
          'A traditional answering service takes messages and passes them on. A virtual receptionist does that and more — intake questions, appointment booking, call routing, CRM updates. An AI bot answers with synthesised speech and handles whatever its script anticipates.',
          'All three stop the phone ringing out. They differ sharply in what the caller experiences.',
        ],
      },
      {
        heading: 'Where AI bots work, and where they do not',
        paragraphs: [
          'Bots are good at narrow, predictable tasks: opening hours, order status, simple routing. They are cheap and they never sleep.',
          'They struggle the moment a call goes off-script, which is exactly when the call matters most. Urgent problems, strong accents, callers who are upset, or anything requiring judgement all tend to end with the caller asking for a human.',
        ],
      },
      {
        heading: 'Where a human still wins',
        paragraphs: [
          'A trained receptionist can hear that a caller is distressed and change approach. They can tell a genuine emergency from a routine request. They can ask the follow-up question nobody scripted.',
          'For high-value calls — a new patient, a legal enquiry, a property viewing — that judgement is usually worth more than the price difference.',
        ],
        list: {
          title: 'A reasonable rule of thumb:',
          items: [
            'Low-value, high-volume, predictable — automation is fine.',
            'High-value, lower-volume, unpredictable — use a person.',
            'Not sure — use a person, and measure.',
          ],
        },
      },
      {
        heading: 'Choosing between them',
        paragraphs: [
          'Start from the call, not the technology. Take your ten most recent enquiries and ask honestly which of them a bot could have handled start to finish without annoying the caller. That answer is usually clearer than any feature comparison.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I use AI and human receptionists together?',
        a: 'Yes, and many businesses do. A common setup routes simple, repetitive enquiries to automation and sends anything involving a new customer or an urgent issue straight to a person.',
      },
      {
        q: 'Is a virtual receptionist more expensive than an answering service?',
        a: 'Usually somewhat, because the role is wider. The comparison worth making is cost per booked job rather than cost per month.',
      },
      {
        q: 'What about hiring someone in-house?',
        a: 'An in-house receptionist covers roughly 40 hours a week and takes holidays. If you need evening, weekend, or overflow cover, the cost per answered call tends to be considerably higher.',
      },
    ],
  },
]

export function getPost(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug)
}

// Headings become anchor targets for the table of contents.
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}
