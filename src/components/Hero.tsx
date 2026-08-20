import Reveal from "./Reveal";
import { STATS } from "../data/content";
import { IconArrowRight, IconArrowUpRight, IconCheck, IconZap } from "./icons";

const TRUST = ["CTR-Focused", "Creator-First", "Fast Turnaround"];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-24 pt-32 md:pt-44">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />
        <div className="absolute -top-40 left-1/2 h-[440px] w-[760px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[140px]" />
        <div className="absolute -left-40 top-60 size-96 rounded-full bg-brand-400/10 blur-[120px]" />
        <div className="absolute -right-40 top-96 size-96 rounded-full bg-rose-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 text-center md:px-8">
        <Reveal>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 py-1.5 pl-1.5 pr-4 text-sm text-zinc-300 transition hover:border-brand-500/40 hover:text-white"
          >
            <span className="flex items-center gap-1.5 rounded-full bg-brand-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              Open
            </span>
            Available for new projects
            <IconArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mx-auto mt-8 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl">
            Thumbnails that make people{" "}
            <span className="text-gradient animate-gradient-x">stop scrolling.</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-xl text-base text-zinc-400 md:text-lg">
            I'm Yassiro, a thumbnail designer helping YouTubers turn great ideas into
            visuals people can't ignore.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#work"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-brand-500 px-7 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-brand-400/30 active:translate-y-0"
            >
              View My Work
              <IconArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center rounded-full border border-white/15 px-7 text-sm font-semibold text-white transition hover:border-brand-500/50 hover:bg-white/5"
            >
              Let's Work Together
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {TRUST.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-zinc-500">
                <span className="grid size-5 place-items-center rounded-full bg-brand-500/15">
                  <IconCheck className="size-3 text-brand-400" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Showcase image with floating chips */}
        <Reveal delay={500} className="relative mx-auto mt-16 max-w-4xl">
          {/* <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-500/30 via-transparent to-rose-500/20 blur-2xl" />
          <img
            src="/images/hero-showcase.png"
            alt="Selection of YouTube thumbnails designed by Yassiro"
            className="w-full rounded-2xl border border-white/10 shadow-2xl shadow-black/60"
          />

          <div className="absolute -left-4 top-10 hidden animate-float items-center gap-3 rounded-2xl border border-white/10 bg-ink-900/90 p-4 shadow-xl backdrop-blur md:flex lg:-left-10">
            <span className="grid size-10 place-items-center rounded-xl bg-emerald-500/15">
              <IconArrowUpRight className="size-5 text-emerald-400" />
            </span>
            <div className="text-left">
              <p className="font-display text-lg font-bold text-white">2.4× CTR</p>
              <p className="text-xs text-zinc-500">Average client lift</p>
            </div>
          </div> */}

          {/* <div
            className="absolute -right-4 bottom-10 hidden animate-float items-center gap-3 rounded-2xl border border-white/10 bg-ink-900/90 p-4 shadow-xl backdrop-blur md:flex lg:-right-10"
            style={{ animationDelay: "1.5s" }}
          >
            <span className="grid size-10 place-items-center rounded-xl bg-brand-500/15">
              <IconZap className="size-5 text-brand-400" />
            </span>
            <div className="text-left">
              <p className="font-display text-lg font-bold text-white">150+</p>
              <p className="text-xs text-zinc-500">Thumbnails shipped</p>
            </div>
          </div> */}
        </Reveal>

        {/* Stats */}
        <Reveal delay={100}>
          <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col rounded-2xl border border-white/8 bg-white/3 p-5"
              >
                <dd className="order-1 font-display text-3xl font-bold text-gradient">
                  {stat.value}
                </dd>
                <dt className="order-2 mt-1 text-sm text-zinc-500">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
