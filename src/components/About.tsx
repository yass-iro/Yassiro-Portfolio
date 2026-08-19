import Reveal from "./Reveal";
import { IconCheck, IconPlay } from "./icons";

const STRENGTHS = [
  "Visual storytelling",
  "CTR-focused design",
  "Creator-first approach",
  "Fast, clear communication",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-500/30 via-transparent to-rose-500/20 blur-2xl" />
            <img
              src="/images/portrait.jpg"
              alt="Portrait of Yassiro, YouTube thumbnail designer"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-3xl border border-white/10 object-cover"
            />

            <div className="absolute -left-3 top-8 hidden animate-float items-center gap-2 rounded-xl border border-white/10 bg-ink-900/90 px-3.5 py-2.5 shadow-xl backdrop-blur sm:flex">
              <span className="grid size-8 place-items-center rounded-lg bg-brand-500/15">
                <IconPlay className="size-3.5 text-brand-400" />
              </span>
              <p className="text-sm font-medium text-white">Made for YouTube</p>
            </div>

            <div className="absolute -bottom-6 -right-3 rounded-2xl border border-white/10 bg-ink-900 p-5 shadow-xl sm:-right-6">
              <p className="font-display text-3xl font-bold text-gradient">2+</p>
              <p className="mt-1 text-xs text-zinc-500">
                Years designing
                <br />
                for YouTube
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
                About Yassiro
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
                Good thumbnails don't just look good — they{" "}
                <span className="text-gradient">create curiosity.</span>
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-6 leading-relaxed text-zinc-400">
                I'm Yassiro, a YouTube thumbnail designer focused on helping creators
                turn good videos into videos people actually want to click.
              </p>
              <p className="mt-4 leading-relaxed text-zinc-400">
                I combine design craft, visual storytelling and YouTube-specific
                thinking to build thumbnails around the two things that matter most:
                attention and curiosity. No templates. No guesswork — just concepts
                with reasoning behind every pixel.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {STRENGTHS.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/3 px-4 py-3 text-sm text-zinc-200"
                  >
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand-500/15">
                      <IconCheck className="size-3 text-brand-400" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
