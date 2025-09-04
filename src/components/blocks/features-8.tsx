import { Card, CardContent } from '@/components/ui/card'
import { Briefcase, IdCard, Presentation, GraduationCap } from 'lucide-react'

export function Features() {
    return (
        <section className="pt-6 md:pt-10 pb-16 md:pb-24 dark:bg-transparent">
            <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
                <div className="relative">
                    <div className="relative z-10 grid grid-cols-6 gap-3">
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
                            <CardContent className="pt-6">
                                <div className="pt-2 lg:px-6">
                                    <img
                                        src="/corporate-train.png"
                                        alt="Corporate Training"
                                        className="w-full"
                                    />
                                </div>
                                <div className="relative z-10 mt-6 space-y-2 text-center">
                                    <h2 className="font-heading text-lg font-medium transition">Corporate Training & 1:1 Coaching</h2>
                                    <ul className="mt-2 list-disc text-left text-sm text-foreground/90 space-y-1 pl-6">
                                        <li>Feedback with managers</li>
                                        <li>Team workshops</li>
                                        <li>Time management sprints</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
                            <CardContent className="pt-6">
                                <div className="pt-2 lg:px-6">
                                    <img
                                        src="/personal-brand.png"
                                        alt="Personal Branding"
                                        className="w-full"
                                    />
                                </div>
                                <div className="relative z-10 mt-6 space-y-2 text-center">
                                    <h2 className="font-heading text-lg font-medium transition">Personal Branding & Visibility</h2>
                                    <ul className="mt-2 list-disc text-left text-sm text-foreground/90 space-y-1 pl-6">
                                        <li>Resume review</li>
                                        <li>LinkedIn review</li>
                                        <li>Narrative polish</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
                            <CardContent className="pt-6">
                                <div className="pt-6 lg:px-6">
                                    <img
                                        src="/interview-prepration.png"
                                        alt="Interview Preparation"
                                        className="w-full"
                                    />
                                </div>
                                <div className="relative z-10 mt-14 space-y-2 text-center">
                                    <h2 className="font-heading text-lg font-medium transition">Interview Preparation</h2>
                                    <ul className="mt-2 list-disc text-left text-sm text-foreground/90 space-y-1 pl-6">
                                        <li>Mock interviews</li>
                                        <li>Feedback loops</li>
                                        <li>Job‑apply strategy</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative col-span-full overflow-hidden lg:col-span-3">
                            <CardContent className="grid pt-6 sm:grid-cols-2">
                                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                                    <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                                        <Presentation className="m-auto size-6 text-[var(--cc-yellow-500)]" strokeWidth={1} />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="font-heading group-hover:text-secondary-950 text-lg font-medium text-zinc-800 transition dark:text-white">Communication & Presentation</h2>
                                        <p className="text-foreground">Interpersonal frameworks, group discussion drills, and executive presence for clear, confident delivery.</p>
                                    </div>
                                </div>
                                <div className="rounded-tl-(--radius) relative -mb-6 -mr-6 mt-6 h-fit border-l border-t p-6 py-6 sm:ml-6">
                                    <div className="absolute left-3 top-2 flex gap-1">
                                        <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                                        <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                                        <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                                    </div>
                                    <img
                                        src="/communications-presentations.png"
                                        alt="Communication & Presentation"
                                        className="w-full sm:w-[150%]"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative col-span-full overflow-hidden lg:col-span-3">
                            <CardContent className="grid h-full pt-6 sm:grid-cols-2">
                                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                                    <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                                        <GraduationCap className="m-auto size-6 text-[var(--cc-yellow-500)]" strokeWidth={1} />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="font-heading text-lg font-medium transition">Student & Youth Programs</h2>
                                        <p className="text-foreground">Confidence, personality development, teamwork, stress and time management for campus and early‑career success.</p>
                                    </div>
                                </div>
                                <div className="before:bg-(--color-border) relative mt-6 before:absolute before:inset-0 before:mx-auto before:w-px sm:-my-6 sm:-mr-6">
                                    <div className="relative flex h-full flex-col justify-center space-y-6 py-6">
                                        <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                                            <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">Likeur</span>
                                            <div className="ring-background size-7 ring-4">
                                                <img className="size-full rounded-full" src="https://avatars.githubusercontent.com/u/102558960?v=4" alt="" />
                                            </div>
                                        </div>
                                        <div className="relative ml-[calc(50%-1rem)] flex items-center gap-2">
                                            <div className="ring-background size-8 ring-4">
                                                <img className="size-full rounded-full" src="https://avatars.githubusercontent.com/u/47919550?v=4" alt="" />
                                            </div>
                                            <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">M. Irung</span>
                                        </div>
                                        <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                                            <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">B. Ng</span>
                                            <div className="ring-background size-7 ring-4">
                                                <img className="size-full rounded-full" src="https://avatars.githubusercontent.com/u/31113941?v=4" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
