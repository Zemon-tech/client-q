"use client";

import React, { useState } from 'react';

// --- Data for the image accordion (Who we coach) ---
const accordionItems = [
  {
    id: 1,
    title: 'Students & Youth — Confidence, Personality, Time, Stress & Teamwork, Campus GD/Presentation, Internship interview primers',
    shortTitle: 'Students',
    imageUrl: '/students.jpg',
  },
  {
    id: 2,
    title: 'Job Seekers — Interview Prep, Resume, LinkedIn, Narrative, Job strategy, Recruiter screen confidence',
    shortTitle: 'Job Seekers',
    imageUrl: '/job.jpg',
  },
  {
    id: 3,
    title: 'Professionals & Managers — Communication & Presentation, Executive Presence, Manager feedback, 1:1 Coaching, Leader time management',
    shortTitle: 'Pro Managers',
    imageUrl: '/managers.jpg',
  },
  {
    id: 4,
    title: 'Teams & Corporates — Corporate Training: Comm/Presentation, Teamwork & Stress, Feedback clinics, GD/Presentation workshops',
    shortTitle: 'Teams Corp',
    imageUrl: '/team.jpg',
  },
];

// --- Accordion Item Component ---
type Accordion = {
  id: number
  title: string
  shortTitle: string
  imageUrl: string
}

type AccordionItemProps = {
  item: Accordion
  isActive: boolean
  onMouseEnter: () => void
}

const AccordionItem = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
  return (
    <div
      className={`
        relative h-[380px] md:h-[420px] rounded-[12px] overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out border border-[var(--cc-slate-300)] bg-[var(--cc-white)]
        ${isActive ? 'w-[360px] md:w-[400px]' : 'w-[56px] md:w-[64px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          const img = e.currentTarget as HTMLImageElement
          img.onerror = null
          img.src = 'https://placehold.co/400x450/2d3748/ffffff?text=Image+Error'
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-[color:var(--cc-blue-900)]/30"></div>

      {/* Caption Text */}
      <span
        className={`
          absolute text-white text-sm md:text-base font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0' // Active state: horizontal, bottom-center
              // Inactive state: vertical, positioned at the bottom, for all screen sizes
              : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90'
          }
        `}
        aria-label={item.title}
      >
        {item.shortTitle}
      </span>
    </div>
  );
};


// --- Main App Component ---
export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="font-sans">
      <section className="mx-auto max-w-6xl px-0 md:px-2 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="font-heading text-[28px] md:text-[32px] font-bold text-[var(--cc-blue-900)]">
              Who we coach
            </h3>
            <p className="mt-3 text-[15px] md:text-[16px] text-[var(--cc-slate-600)] max-w-xl mx-auto md:mx-0">
              Explore programs for students, job seekers, and professionals. Hover to preview categories.
            </p>
            <div className="mt-6">
              <a
                href={process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || "#"}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-block bg-[var(--cc-yellow-500)] text-black font-medium px-6 py-2.5 rounded-md shadow-xs hover:bg-[var(--cc-yellow-600)] transition-colors duration-200"
              >
                Start your session
              </a>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full md:w-1/2">
            {/* Changed flex-col to flex-row to keep the layout consistent */}
            <div className="flex flex-row items-center justify-center gap-3 md:gap-4 overflow-x-auto p-2 md:p-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
