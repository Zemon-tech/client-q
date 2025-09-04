import Link from "next/link";

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
            <Link
              href="https://www.linkedin.com/in/sakshi-sunil-b35063205/"
              className="inline-flex items-center gap-2 text-white text-sm font-semibold"
              aria-label="Connect on LinkedIn"
            >
              <svg
                className="w-5 h-5"
                fill="white"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

