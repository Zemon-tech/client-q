import { CTASection } from "@/components/blocks/cta-with-glow";

export function CTA() {
  const formUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || "#";
  
  return (
    <CTASection
      title="Ready to start?"
      action={{
        text: "Start your session",
        href: formUrl,
        variant: "default"
      }}
      className="mx-auto max-w-4xl px-4"
    />
  );
}



