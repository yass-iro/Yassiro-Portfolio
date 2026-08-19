import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { SERVICES, type Service } from "../data/content";
import { IconArrowUpRight, IconCheck, IconCompass, IconImage, IconRefresh } from "./icons";

const ICONS: Record<Service["icon"], typeof IconImage> = {
  thumbnails: IconImage,
  redesigns: IconRefresh,
  direction: IconCompass,
};

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Everything your click game needs"
          subtitle="From one-off thumbnails to full channel systems — everything you need to make your videos impossible to ignore."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <Reveal key={service.title} delay={i * 100}>
                <article className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-ink-900 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:bg-ink-800">
                  <span className="absolute right-6 top-6 font-display text-sm font-semibold text-zinc-600 transition-colors group-hover:text-brand-500/60">
                    {service.number}
                  </span>

                  <span className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-lg shadow-brand-500/25">
                    <Icon className="size-6 text-white" />
                  </span>

                  <h3 className="mt-6 font-display text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-white/5 pt-6">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2.5 text-sm text-zinc-300">
                        <IconCheck className="size-4 shrink-0 text-brand-400" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-400 transition hover:text-brand-300"
                  >
                    Get started
                    <IconArrowUpRight className="size-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
