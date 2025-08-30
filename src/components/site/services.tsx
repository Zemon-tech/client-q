import { Badge } from "@/components/ui/badge";
import { LandingAccordionItem } from "@/components/ui/interactive-image-accordion";
import { Features } from "@/components/blocks/features-8";

// Using unified Features content instead of individual service cards

const chips = [
  "Students",
  "Job seekers & early professionals",
  "Working professionals",
  "Women re-entering work",
  "Schools & colleges",
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-24">
      <header className="max-w-3xl">
        <h2 className="font-heading text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] font-bold text-[var(--cc-blue-900)]">
          Services at Confidence Collection
        </h2>
        <p className="mt-3 text-[15px] leading-[24px] sm:text-[16px] sm:leading-[26px] text-[var(--cc-slate-600)]">
          Programs crafted to listen first, guide second, and conclude with a personalized action plan.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <Badge key={c} variant="secondary" className="bg-[var(--cc-yellow-50)] text-[var(--cc-blue-900)] border border-[var(--cc-slate-300)]">
              {c}
            </Badge>
          ))}
        </div>
      </header>

      {/* Unified features content */}
      <div className="mt-10">
        <Features />
      </div>

      {/* Interactive image accordion for audience-focused categories */}
      <div className="mt-14">
        <LandingAccordionItem />
      </div>
    </section>
  );
}


