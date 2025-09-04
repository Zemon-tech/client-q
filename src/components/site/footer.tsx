import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--cc-slate-300)] bg-black bg-gradient-to-t from-yellow-450/10 text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="sr-only">Footer</h2>
        <div className="text-center mb-6">
          <h2 className="font-heading font-extrabold uppercase text-white text-3xl sm:text-4xl md:text-5xl tracking-tight">
            CONFIDENCE COLLECTION
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
          <div className="space-y-3">
            <div className="space-y-2 text-base">
              <a
                href="mailto:ccbysakshi@gmail.com"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white underline-offset-4 hover:underline"
                aria-label="Send email to ccbysakshi@gmail.com"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.25l7.4 6.29c.35.3.85.3 1.2 0L20 8.25V18H4z" />
                </svg>
                <span>ccbysakshi@gmail.com</span>
              </a>
              <br />
              <a
                href="tel:+918867645389"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white underline-offset-4 hover:underline"
                aria-label="Call or WhatsApp +91 88676 45389"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l1.82-1.82a1 1 0 011.02-.24c1.12.37 2.33.57 3.56.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h2.11a1 1 0 011 1c0 1.23.2 2.44.57 3.56a1 1 0 01-.24 1.02l-1.82 1.21z" />
                </svg>
                <span>+91 88676 45389</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/80">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col items-center gap-4 text-center">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between w-full">
            <p className="text-white/90 text-sm">© 2025 Confidence Collection. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.linkedin.com/in/sakshi-sunil-b35063205/"
                className="inline-flex items-center gap-2 text-white text-sm font-semibold hover:text-yellow-400 transition-colors"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Link>
              <Link
                href="https://www.instagram.com/confidencecollection4you?utm_source=qr&igsh=MTNrYjF5ZmgzMDhrNw=="
                className="inline-flex items-center gap-2 text-white text-sm font-semibold hover:text-yellow-400 transition-colors"
                aria-label="Follow on Instagram"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

