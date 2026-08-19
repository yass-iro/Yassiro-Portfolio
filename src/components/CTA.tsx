import Reveal from "./Reveal";
import { IconArrowRight } from "./icons";

export default function CTA() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 md:px-8 md:pb-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-brand-600 to-rose-600 p-10 md:p-16">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 -top-24 size-72 rounded-full border border-white/15" />
            <div className="absolute -left-6 -top-14 size-48 rounded-full border border-white/10" />
            <div className="absolute -bottom-32 -right-16 size-80 rounded-full bg-black/10" />
            <div className="absolute -bottom-16 right-10 size-52 rounded-full border border-white/10" />
          </div>

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-5xl">
                Ready to make your next video impossible to ignore?
              </h2>
              <p className="mt-4 text-lg text-white/85">
                Let's create a thumbnail that makes people stop scrolling.
              </p>
            </div>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-ink-950 shadow-xl transition-all hover:-translate-y-0.5 hover:bg-zinc-100 active:translate-y-0"
            >
              Let's Work Together
              <IconArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
