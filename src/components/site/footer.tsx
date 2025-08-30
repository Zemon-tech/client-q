import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { OpenAICodexAnimatedBackground } from "@/components/ui/open-ai-codex-animated-background";

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--cc-slate-300)] rounded-t-[3rem] overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <OpenAICodexAnimatedBackground />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 pt-8 pb-40 text-white z-10">
        <h2 className="sr-only">Footer</h2>
        <div className="flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
          <div className="space-y-3">
            <p className="font-heading text-2xl font-bold text-white">
              Confidence Collection
            </p>
            <div className="space-y-2 text-base">
              <p className="text-white/90">Email: hello@confidencecollection.com</p>
              <p className="text-white/90">WhatsApp: +91-00000-00000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Semi-transparent bottom container */}
      <div className="absolute bottom-4 left-4 right-4 bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg">
        <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p className="text-white/90 text-sm">© 2024 Confidence Collection. All rights reserved.</p>
          <Link 
            href="#" 
            className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors text-sm font-medium"
            aria-label="Connect on LinkedIn"
          >
            <svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}


