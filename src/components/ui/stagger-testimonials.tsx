"use client"

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Incredibly insightful session! The profile analysis was fantastic and gave me key pointers. Already looking forward to future sessions!",
    by: "Abhijai Srivastava ",
    imgSrc: "https://avatar.iran.liara.run/public/boy"
  },
  {
    tempId: 1,
    testimonial: "Incredibly helpful! Now I know how to build my LinkedIn, Internshala, and Naukri profiles effectively, plus valuable CV insights for recruiters.",
    by: "Shilpi rai",
    imgSrc: "https://avatar.iran.liara.run/public/girl"
  },
  {
    tempId: 2,
    testimonial: "Valuable session! Learned powerful self-confidence techniques. Can't wait for the next session.",
    by: "Satakshi kewlani",
    imgSrc: "https://avatar.iran.liara.run/public/girl"
  },
  {
    tempId: 3,
    testimonial: "Super helpful! Learned to create a single-page resume, write meaningful summaries, and optimize my LinkedIn profile. Thank you!",
    by: "Yash Panchal ",
    imgSrc: "https://avatar.iran.liara.run/public/boy"
  },
  {
    tempId: 4,
    testimonial: "Amazing experience! Got valuable insights on CV, LinkedIn, and interviews. Really appreciate going beyond scheduled time.",
    by: "Shubham Sardhalia ",
    imgSrc: "https://avatar.iran.liara.run/public/boy"
  },
  {
    tempId: 5,
    testimonial: "Wonderful and amazing! She helped me gain confidence and direction. Always responsive and thorough. Exceptional work and very positive person.",
    by: "",
    imgSrc: "https://avatar.iran.liara.run/public/boy"
  },
  {
    tempId: 6,
    testimonial: "Sakshi's HR work has positively impacted me. She's a thoughtful leader who genuinely cares. Her expertise and decency make her exceptional.",
    by: "",
    imgSrc: "https://avatar.iran.liara.run/public/boy"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out flex flex-col",
        isCenter 
          ? "z-10 bg-[var(--cc-yellow-500)] text-[var(--cc-black-900)] border-[var(--cc-yellow-500)]" 
          : "z-0 bg-card text-card-foreground border-border hover:border-primary/50"
      )}
      style={{
        width: cardSize,
        height: "auto",
        minHeight: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 bg-muted object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-xl font-medium",
        isCenter ? "text-[var(--cc-black-900)]" : "text-foreground"
      )}>
        {testimonial.testimonial}
      </h3>
      <p className={cn(
        "mt-4 text-sm italic",
        isCenter ? "text-[color:var(--cc-black-900)/80]" : "text-muted-foreground"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = useCallback((steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  }, [testimonialsList]);

  // Auto-advance testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleMove(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [handleMove]);

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: cardSize + 240 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};