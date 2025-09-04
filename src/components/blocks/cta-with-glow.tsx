"use client"

import { Button } from "@/components/ui/button"
import { Glow } from "@/components/ui/glow"
import { cn } from "@/lib/utils"

interface CTAProps {
  title: string
  action: {
    text: string
    href: string
    variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  }
  className?: string
}

export function CTASection({ title, action, className }: CTAProps) {
  return (
    <section className={cn("group relative overflow-hidden py-24 sm:py-32", className)}>
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 text-center sm:gap-8">
        <h2 className="text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        <Button 
          variant={action.variant || "default"} 
          size="lg" 
          className="bg-[var(--cc-yellow-500)] hover:bg-[var(--cc-yellow-600)] text-black transition-colors duration-200"
          asChild
        >
          <a href={action.href}>{action.text}</a>
        </Button>
      </div>
      <div className="absolute left-0 top-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
        <Glow variant="bottom" className="" />
      </div>
    </section>
  )
}