import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PORTFOLIO } from "../data/content";
import { IconArrowRight, IconArrowUpRight, IconX } from "./icons";

/**
 * Full-width sliding rows of thumbnails (marquee style).
 * Each row lists thumbnail indices; the track is duplicated and
 * translated -50% so it loops seamlessly.
 */
const ROWS = [
  { duration: "24s", reverse: false, items: [0, 2, 4, 6] },
  { duration: "28s", reverse: true, items: [8, 3, 10, 5] },
  { duration: "20s", reverse: false, items: [7, 1, 9,11] },
];

function ThumbRow({
  duration,
  reverse,
  items,
  onOpen,
}: {
  duration: string;
  reverse: boolean;
  items: number[];
    onOpen: (index: number) => void;
}) {
  return (
    <div className="marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <div
        className={`marquee-track flex w-max items-center py-2 ${
          reverse ? "is-reverse" : ""
        }`}
        style={{ animationDuration: duration }}
      >
        {[...items, ...items].map((idx, i) => {
          const item = PORTFOLIO[idx];
          return (
            <button
              key={`${idx}-${i}`}
              onClick={() => onOpen(idx)}
              className="group mr-4 w-64 shrink-0 cursor-pointer overflow-hidden rounded-xl border border-white/10 sm:mr-5 sm:w-80"
            >
              <img
                src={item.image}
                // alt={item.title}
                loading="lazy"
                className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Lightbox({
  index,
  onClose,
  onPrev,
  onNext,
}: {
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = PORTFOLIO[index];
  const total = PORTFOLIO.length;

  // Close on Escape, switch with arrow keys, lock page scroll while open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 z-10 grid size-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/15"
      >
        <IconX className="size-5" />
      </button>

      {/* Previous (arrow rotated 180°) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous thumbnail"
        className="absolute left-3 top-1/2 z-10 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-brand-500/50 hover:bg-brand-500/20 md:left-6"
      >
        <IconArrowRight className="size-5 rotate-180" />
      </button>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next thumbnail"
        className="absolute right-3 top-1/2 z-10 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-brand-500/50 hover:bg-brand-500/20 md:right-6"
      >
        <IconArrowRight className="size-5" />
      </button>

      {/* Big thumbnail + title + counter */}
      <figure onClick={(e) => e.stopPropagation()} className="w-full max-w-4xl">
        <img
          src={item.image}
          // alt={item.title}
          className="w-full rounded-2xl border border-white/10 shadow-2xl shadow-black"
        />
        <div className="mt-4 flex items-center justify-between gap-4 px-1">
          {/* <p className="truncate font-display text-lg font-semibold text-white">
            {item.title}
          </p> */}
          <p className="shrink-0 text-sm text-zinc-500">
            {index + 1} / {total}
          </p>
        </div>
      </figure>
    </div>
  );
}

export default function Work() {
    const [selected, setSelected] = useState<number | null>(null);
  const total = PORTFOLIO.length;

  const goPrev = () =>
    setSelected((i) => (i === null ? i : (i - 1 + total) % total));
    const goNext = () => setSelected((i) => (i === null ? i : (i + 1) % total));

  return (
    <section id="work" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Selected Work"
          title="Thumbnails built to earn the click"
          subtitle="A selection of thumbnails designed around curiosity, emotion and visual hierarchy — for real channels, with real results. Click any thumbnail to view it larger."
        />
      </div>

      <Reveal className="mt-14 space-y-5">
        {ROWS.map((row, i) => (
          <ThumbRow key={i} {...row} onOpen={setSelected} />
        ))}
      </Reveal>

      {selected !== null && (
        <Lightbox
          index={selected}
          onClose={() => setSelected(null)}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-500/10 via-ink-900 to-ink-900 p-8 md:p-12">
            <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-brand-500/15 blur-[100px]" />
            <p className="relative max-w-3xl font-display text-xl font-medium leading-snug text-white md:text-2xl">
              Every thumbnail is designed around one goal:{" "}
              <span className="text-gradient">making someone stop scrolling</span>{" "}
              long enough to want to know more.
            </p>
            <a
              href="#contact"
              className="group relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-400 transition hover:text-brand-300"
            >
              Start your project
              <IconArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}