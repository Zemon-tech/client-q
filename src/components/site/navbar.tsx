"use client"
import { useState, useMemo, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navigation = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const sections = useMemo(() => ["services", "about", "testimonials", "contact"], [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--cc-slate-300)] bg-white shadow-sm">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="relative h-8 w-8 sm:h-10 sm:w-10">
            <Image
              src="/Black_White_Elegant_Monogram_Initial_Name_Logo-removebg-preview.svg"
              alt="Confidence Collection logo"
              fill
              priority
              className="object-contain"
            />
          </div>
          <span className="font-heading text-base sm:text-lg font-bold tracking-tight text-[var(--cc-black-900)]">Confidence Collection</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeSection === item.href.slice(1)
                  ? "text-[var(--cc-black-700)]"
                  : "text-[var(--cc-slate-600)] hover:text-[var(--cc-black-700)]"
              }`}
            >
              {item.label}
              {activeSection === item.href.slice(1) && (
                <span
                  className="pointer-events-none absolute -bottom-1 h-0.5 rounded-full bg-[var(--cc-black-700)] transition-[left,width] duration-300 ease-[cubic-bezier(.2,1.4,.2,1)]"
                  style={{ left: "50%", width: "0%" }}
                />
              )}
            </a>
          ))}
          <Button asChild className="h-9 px-4 bg-[var(--cc-yellow-500)] text-[var(--cc-black-900)] hover:bg-[color:var(--cc-yellow-500)/90] font-semibold shadow">
            <a href="#contact">Get Started</a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            className="h-9 px-2"
            aria-haspopup="menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden border-t border-[var(--cc-slate-200)] bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-2 pt-3">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-base font-medium rounded-md hover:bg-[var(--cc-slate-100)] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button asChild className="mt-2 bg-[var(--cc-yellow-500)] text-[var(--cc-black-900)] hover:bg-[color:var(--cc-yellow-500)/90] font-semibold shadow">
                <a href="#contact" onClick={() => setIsOpen(false)}>Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
