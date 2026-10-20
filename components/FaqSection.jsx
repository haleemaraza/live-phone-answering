'use client'

import Link from 'next/link'
import { useState } from 'react'

function FaqItem({ item, index, open, onToggle }) {
  const panelId = `faq-panel-${index}`
  const buttonId = `faq-button-${index}`

  return (
    <div
      className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${
        open ? 'border-[#8CA365]' : 'border-gray-200'
      }`}
      style={open ? { backgroundColor: '#f0fdf4' } : undefined}
    >
      <button
        type="button"
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex justify-between items-center w-full p-6 cursor-pointer group text-left"
      >
        <h3 className="text-lg font-bold text-[#34414A] pr-4 group-hover:text-[#8CA365] transition-colors">{item.q}</h3>
        <span
          className={`icon-mask icon-plus w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all transform duration-300 ${
            open ? 'bg-[#8CA365] text-white rotate-45' : 'bg-slate-100 text-gray-500 group-hover:bg-[#8CA365] group-hover:text-white'
          }`}
          aria-hidden="true"
        ></span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[1000px]' : 'max-h-0'}`}
      >
        <div className="p-6 pt-0 text-gray-600 leading-relaxed">
          {Array.isArray(item.a)
            ? item.a.map((part) =>
                typeof part === 'string' ? (
                  part
                ) : (
                  <a
                    key={part.href}
                    href={part.href}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {part.text}
                  </a>
                )
              )
            : item.a}
        </div>
      </div>
    </div>
  )
}

export default function FaqSection({ heading, intro, sideTitle, sideBody, linkText, linkHref, items }) {
  const [openIndex, setOpenIndex] = useState(null)
  const isInternal = linkHref?.startsWith('/')
  const CtaTag = isInternal ? Link : 'a'

  return (
    <section className="bg-white py-14 sm:py-24 px-4 border-t border-gray-100" id="faq" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <h2 id="faq-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34414A] leading-tight mb-6">
              {heading}
            </h2>
            <p className="text-gray-600 mb-8">{intro}</p>

            <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-[#34414A] mb-2">{sideTitle}</h3>
              <p className="text-sm text-gray-600 mb-4">{sideBody}</p>
              <CtaTag href={linkHref} className="icon-mask icon-arrow-right text-sm font-bold text-[#8CA365] hover:text-[#7a8f57] flex flex-row-reverse items-center justify-end gap-2">
                {linkText}
              </CtaTag>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-4">
            {items.map((item, index) => (
              <FaqItem
                key={item.q}
                item={item}
                index={index}
                open={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
