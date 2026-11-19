'use client'

import Link from 'next/link'
import { useState } from 'react'

// Section 9. Vertical tabs, following the same pattern as IndustriesTabs:
// every panel stays in the HTML and is hidden with CSS, so search engines see
// all the department content, not just the open tab.
const GROUPS = [
  {
    id: 'medical',
    icon: 'icon-medical-cross',
    label: 'Medical & Specialists',
    summary: 'Primary care, cardiology, ENT & more',
    title: 'Medical departments and specialist clinics',
    intro: 'Choose a department and discuss its administrative call workflow.',
    departments: [
      'General Practice',
      'Cardiology',
      'Dermatology',
      'ENT',
      'Gastroenterology',
      'Neurology',
      'Orthopaedics',
      'Paediatrics',
      'Gynaecology',
      'Urology',
      'Endocrinology',
      'Respiratory Medicine',
    ],
  },
  {
    id: 'therapy',
    icon: 'icon-users',
    label: 'Therapy & Rehabilitation',
    summary: 'Physiotherapy, OT, speech therapy',
    title: 'Therapy and rehabilitation services',
    intro: 'Agree how session enquiries, rescheduling and progress messages are handled.',
    departments: [
      'Physiotherapy',
      'Occupational Therapy',
      'Speech & Language Therapy',
      'Sports Rehabilitation',
      'Podiatry',
      'Chiropractic',
      'Osteopathy',
      'Dietetics',
    ],
  },
  {
    id: 'mental-health',
    icon: 'icon-heart',
    label: 'Mental Health',
    summary: 'Psychology, psychiatry, counselling',
    title: 'Mental health and counselling practices',
    intro: 'Define sensitive-call handling, intake questions and your escalation route.',
    departments: [
      'Psychology',
      'Psychiatry',
      'Counselling',
      'Family Therapy',
      'Substance Support Services',
      'Behavioural Health',
    ],
  },
  {
    id: 'dental-vision',
    icon: 'icon-smile',
    label: 'Dental & Vision',
    summary: 'Dentistry, orthodontics, optometry',
    title: 'Dental and vision practices',
    intro: 'Set how appointment requests, recalls and treatment enquiries reach your team.',
    departments: [
      'General Dentistry',
      'Orthodontics',
      'Periodontics',
      'Oral Surgery',
      'Optometry',
      'Ophthalmology',
    ],
  },
  {
    id: 'diagnostics',
    icon: 'icon-check-search',
    label: 'Diagnostics & Imaging',
    summary: 'Radiology, pathology, audiology',
    title: 'Diagnostic and imaging services',
    intro: 'Capture referral details and route result-status enquiries to the right staff.',
    departments: ['Radiology', 'Pathology', 'Audiology', 'Sleep Studies', 'Cardiac Testing', 'Screening Clinics'],
  },
  {
    id: 'community',
    icon: 'icon-home',
    label: 'Community & Support Care',
    summary: 'Home care, care coordination, pharmacy',
    title: 'Community and support care providers',
    intro: 'Agree visit enquiries, coordination messages and on-call contact routes.',
    departments: [
      'Home Care',
      'Care Coordination',
      'Community Nursing',
      'Pharmacy Services',
      'Hospice Support',
      'Allied Health Teams',
    ],
  },
]

const DEFINE_POINTS = [
  'Appointment and consultation requests',
  'Administrative enquiries and callback messages',
  'Department-specific contacts and handoffs',
]

export default function MedicalDepartments() {
  const [activeId, setActiveId] = useState(GROUPS[0].id)

  return (
    <section className="w-full bg-[#f8f7f2] py-14 md:py-16" aria-labelledby="medical-departments-heading">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-org-chart [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Explore healthcare departments
          </p>
          <h2
            id="medical-departments-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
          >
            A Call Plan for{' '}
            <br />
            Every Part of Your Practice
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Explore departments, then define the appointment requests, messages and contact routes your reception team
            needs.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:gap-7">
          <div className="flex flex-col gap-2" role="tablist" aria-label="Healthcare departments" aria-orientation="vertical">
            {GROUPS.map((group) => {
              const selected = group.id === activeId
              return (
                <button
                  key={group.id}
                  type="button"
                  role="tab"
                  id={`medical-tab-${group.id}`}
                  aria-selected={selected}
                  aria-controls={`medical-panel-${group.id}`}
                  onClick={() => setActiveId(group.id)}
                  className={`flex w-full items-center gap-4 rounded-xl border px-5 py-4 text-left transition-all ${
                    selected
                      ? 'border-[#1d4b37] bg-[#1d4b37] text-white'
                      : 'border-gray-300/50 bg-white text-[#1b4332] hover:border-[#8CA365]'
                  }`}
                >
                  <span
                    className={`icon-mask ${group.icon} [--icon-size:1.5rem] flex-shrink-0 ${
                      selected ? 'text-[#a8c47d]' : 'text-[#4f6630]'
                    }`}
                    aria-hidden="true"
                  ></span>
                  <span className="min-w-0 flex-grow">
                    <span className="block text-[1rem] font-bold leading-snug">{group.label}</span>
                    <span className={`mt-0.5 block text-sm ${selected ? 'text-white/70' : 'text-gray-600'}`}>
                      {group.summary}
                    </span>
                  </span>
                  <span
                    className={`icon-mask icon-arrow-right [--icon-size:0.85rem] flex-shrink-0 ${
                      selected ? 'text-[#a8c47d]' : 'text-gray-400'
                    }`}
                    aria-hidden="true"
                  ></span>
                </button>
              )
            })}
          </div>

          <div className="rounded-xl border border-gray-300/50 bg-white p-6 sm:p-7">
            {GROUPS.map((group) => (
              <div
                key={group.id}
                id={`medical-panel-${group.id}`}
                role="tabpanel"
                aria-labelledby={`medical-tab-${group.id}`}
                className={group.id === activeId ? 'block' : 'hidden'}
              >
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#5f7a3a]">{group.label}</p>
                <h3 className="mt-2 text-[1.3rem] font-extrabold leading-snug text-[#1b4332]">{group.title}</h3>
                <p className="mt-1.5 text-base leading-relaxed text-gray-600">{group.intro}</p>

                <ul className="mt-5 grid list-none grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.departments.map((department) => (
                    <li
                      key={department}
                      className="icon-mask icon-medical-cross [--icon-size:1rem] flex items-center gap-3 rounded-lg border border-gray-300/50 px-4 py-3 text-base font-semibold text-[#1b4332] before:flex-shrink-0 before:text-[#4f6630]"
                    >
                      {department}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-lg bg-[#eef0e6] px-5 py-4">
                  <p className="icon-mask icon-phone [--icon-size:1.2rem] flex items-center gap-3 text-[1rem] font-bold text-[#1b4332] before:flex-shrink-0 before:text-[#4f6630]">
                    Define the calls this department needs handled
                  </p>
                  <ul className="mt-3 list-none space-y-2">
                    {DEFINE_POINTS.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span
                          className="icon-mask icon-check [--icon-size:0.7rem] mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#8CA365] text-white"
                          aria-hidden="true"
                        ></span>
                        <span className="text-base text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    prefetch={false}
                    href="/contact-us"
                    className="icon-mask icon-arrow-right [--icon-size:0.85rem] mt-4 inline-flex flex-row-reverse items-center gap-2 text-base font-bold text-[#4f6630] underline-offset-4 hover:underline"
                  >
                    Discuss this department&rsquo;s call plan
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col items-start gap-5 rounded-xl bg-[#1d4b37] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="block text-[1.2rem] font-extrabold text-white">
              Different departments. One consistent first response.
            </span>
            <span className="mt-1 block text-base text-white/70">
              Agree the call types, approved information and contacts for each team.
            </span>
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3.5 text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Plan My Department Coverage
          </Link>
        </div>
      </div>
    </section>
  )
}
