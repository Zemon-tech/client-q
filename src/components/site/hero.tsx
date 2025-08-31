import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ChevronDown, PlayCircle } from "lucide-react";

export function Hero() {
  const formUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || "#";
  return (
    <section
      id="home"
      className="relative mx-auto max-w-6xl px-4 pt-16 pb-16 min-h-[calc(100svh-56px)] md:min-h-[calc(100svh-64px)]"
      aria-labelledby="hero-heading"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="max-w-3xl">
          <h1 id="hero-heading" className="font-heading text-[36px] leading-[42px] sm:text-[56px] sm:leading-[62px] md:text-[60px] md:leading-[66px] font-extrabold text-[var(--cc-blue-900)] tracking-tight">
            Build confidence that
            <span className="relative inline-block px-1">
              <span className="absolute inset-x-0 bottom-1 h-2 sm:h-3 rounded-md bg-[var(--cc-yellow-500)]/80"></span>
              <span className="relative">compounds</span>
            </span>
            .
          </h1>
          <p className="mt-5 text-[15px] leading-[24px] sm:text-[16px] sm:leading-[26px] text-[var(--cc-slate-600)]">
            Personalized coaching and workshops that transform how you speak, present, and show up—in interviews, at work, and on stage.
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-3 text-[14px] leading-[22px] text-[var(--cc-slate-600)]">
            <li>1:1 coaching with action reports</li>
            <li>Mock interviews and job readiness</li>
            <li>Public speaking, communication, leadership</li>
          </ul>
          <div className="mt-8 flex items-center gap-3">
            <Button asChild className="h-11 px-6 bg-[var(--cc-blue-700)] hover:bg-[#1a3a9a] transition-colors duration-200">
              <a href={formUrl} target="_blank" rel="noreferrer noopener" aria-label="Start your session">
                Start your session
              </a>
            </Button>
            <Button variant="ghost" asChild className="h-11 px-4">
              <a href="#services" aria-label="Explore services">
                <ChevronDown className="mr-2" />
                Explore services
              </a>
            </Button>
          </div>
        </div>

        <div className="relative order-first md:order-none w-full h-[320px] sm:h-[420px] md:h-[520px]">
          {/* Backdrop + accents */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            {/* Center backdrop */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 rounded-full bg-[var(--cc-yellow-50)] ring-1 ring-[var(--cc-slate-300)]" />
            {/* Blue dot */}
            <div className="absolute left-[22%] bottom-[14%] h-5 w-5 rounded-full bg-[var(--cc-blue-700)]/80" />
            {/* Pill shadow */}
            <div className="absolute left-1/2 bottom-[8%] -translate-x-1/2 h-2.5 w-24 sm:w-28 md:w-36 rounded-full bg-[var(--cc-slate-300)]/60" />
          </div>
          {/* Portrait */}
          <div className="relative h-full w-full flex items-end justify-center z-10">
            <Image
              src="/client_image_cartoon.png"
              alt="Coach portrait"
              fill
              priority
              unoptimized
              className="object-contain drop-shadow-lg max-h-full"
              sizes="(min-width: 768px) 40vw, 90vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


