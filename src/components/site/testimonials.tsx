import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-24">
      <div className="mx-auto max-w-6xl px-4 mb-8">
        <h2 className="font-heading text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] font-bold text-[var(--cc-blue-900)]">
          What our clients say
        </h2>
      </div>
      <div className="w-full">
        <StaggerTestimonials />
      </div>
    </section>
  );
}


