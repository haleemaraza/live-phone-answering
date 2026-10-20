// Every class string is copied verbatim from the page's original markup.
const FOCUS_AREAS = [
  'Brand Tone',
  'Greeting Flow',
  'Lead Qualification',
  'Appointment Scheduling',
  'Urgent Call Escalation',
  'Call Note Accuracy',
  'Customer Empathy',
  'Quality Review',
]

const PHASES = [
  {
    number: '01',
    badgeClassName: 'bg-[#34414A]',
    cardClassName: 'border border-gray-100 shadow-sm',
    offsetClassName: '',
    title: 'Learn Your Business Before the First Call',
    body: 'We start by understanding your business type, services, caller needs, brand tone, and preferred call handling process.',
    points: [
      'Business type and service overview',
      'Common caller questions and requests',
      'Brand tone, greeting style, and call goals',
    ],
  },
  {
    number: '02',
    badgeClassName: 'bg-[#295657]',
    cardClassName: 'border border-[#8CA365]/40 shadow-md',
    offsetClassName: 'lg:-mt-6',
    title: 'Practice Scripts, Call Flow, and Lead Capture',
    body: 'Receptionists practice your greeting, intake questions, appointment steps, message format, and routing rules.',
    points: [
      'Custom greeting and script practice',
      'Lead qualification and appointment handling',
      'Call notes, CRM updates, and message delivery',
    ],
  },
  {
    number: '03',
    badgeClassName: 'bg-[#34414A]',
    cardClassName: 'border border-gray-100 shadow-sm',
    offsetClassName: '',
    title: 'Review Calls and Improve Quality Over Time',
    body: 'Training continues after onboarding with call review, script accuracy checks, and feedback for better caller experience.',
    points: [
      'Call quality and script adherence checks',
      'Accuracy review for notes and lead details',
      'Feedback loop for continuous improvement',
    ],
  },
]

// The green bullet was a nested <span> on every list item. Drawing it with a
// ::before saves one element per bullet and renders identically.
const BULLET =
  "flex gap-3 text-sm text-gray-600 before:content-[''] before:mt-1.5 before:w-2 before:h-2 before:rounded-full before:bg-[#8CA365] before:flex-shrink-0"

export default function TrainingProcess() {
  return (
    <section className="bg-slate-50 py-20 md:py-28 px-4" aria-labelledby="training-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-14">
          <p className="inline-flex items-center rounded-full bg-[#E6F0EE] px-4 py-2 text-sm font-bold text-[#295657] mb-5">
            Receptionist Training &amp; Call Quality
          </p>
          <h2 id="training-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] leading-tight mb-6">
            How We Train Receptionists to Represent Your Business Professionally
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Our training process is designed to help every receptionist understand your workflow, speak with confidence,
            capture accurate details, and represent your business with professionalism.
          </p>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-20 list-none">
          {FOCUS_AREAS.map((area, index) => (
            <li key={area} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">
              <span
                className="w-11 h-11 mx-auto mb-3 rounded-xl bg-[#E6F0EE] flex items-center justify-center text-[#8CA365] font-extrabold"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="text-sm font-bold text-[#34414A]">{area}</p>
            </li>
          ))}
        </ul>

        <ol className="grid grid-cols-1 lg:grid-cols-3 gap-8 list-none">
          {PHASES.map((phase) => (
            <li
              key={phase.number}
              className={`relative bg-white rounded-3xl ${phase.cardClassName} hover:shadow-xl transition-all duration-300 p-8 pt-12 ${phase.offsetClassName}`}
            >
              <span
                className={`absolute -top-7 left-8 w-14 h-14 rounded-full ${phase.badgeClassName} text-white flex items-center justify-center text-lg font-extrabold shadow-lg border-4 border-slate-50`}
                aria-hidden="true"
              >
                {phase.number}
              </span>
              <h3 className="text-xl md:text-2xl font-extrabold text-[#34414A] leading-snug mb-4">{phase.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{phase.body}</p>
              <ul className="space-y-3 list-none">
                {phase.points.map((point) => (
                  <li key={point} className={BULLET}>
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-14 max-w-4xl mx-auto bg-white rounded-3xl border border-[#8CA365]/20 shadow-sm p-6 md:p-8 text-center">
          <p className="text-[#34414A] font-semibold leading-relaxed">
            The result is a trained answering team that understands your business, follows your workflow, captures the
            right details, and gives callers a professional human experience.
          </p>
        </div>
      </div>
    </section>
  )
}
