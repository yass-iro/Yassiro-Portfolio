import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PRICING } from "../data/content";
import { IconArrowRight, IconCheck } from "./icons";

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing for serious creators"
          subtitle="Transparent rates, no hidden fees. Every package includes revisions until you're happy with the result."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {PRICING.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 100} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-3xl p-8 transition-transform duration-300 ${
                  tier.popular
                    ? "border border-brand-500/50 bg-gradient-to-b from-brand-500/12 to-ink-900 shadow-2xl shadow-brand-500/10 lg:-translate-y-4"
                    : "border border-white/10 bg-ink-900 hover:-translate-y-1"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-500/30">
                    Most Popular
                  </span>
                )}

                <h3 className="font-display text-lg font-semibold text-white">
                  {tier.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-bold text-white">
                    {tier.price}
                  </span>
                  <span className="text-sm text-zinc-500">{tier.period}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {tier.description}
                </p>

                <ul className="mt-8 flex-1 space-y-3 border-t border-white/5 pt-8">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-zinc-300"
                    >
                      <span
                        className={`grid size-5 shrink-0 place-items-center rounded-full ${
                          tier.popular
                            ? "bg-brand-500/25"
                            : "bg-brand-500/10"
                        }`}
                      >
                        <IconCheck
                          className={`size-3 ${
                            tier.popular ? "text-brand-300" : "text-brand-400"
                          }`}
                        />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`group mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all ${
                    tier.popular
                      ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25 hover:-translate-y-0.5 hover:bg-brand-400"
                      : "border border-white/15 text-white hover:border-brand-500/50 hover:bg-white/5"
                  }`}
                >
                  {tier.cta}
                  <IconArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <p className="text-center text-sm text-zinc-500">
            Need a custom arrangement? Ongoing bundles, redesigns and rush
            delivery are available —{" "}
            <a
              href="#contact"
              className="font-semibold text-brand-400 transition hover:text-brand-300"
            >
              just ask
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
