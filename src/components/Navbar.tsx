import { useEffect, useState } from "react";
import { IconMenu, IconPlay, IconX } from "./icons";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2.5" aria-label="Yassiro home">
      <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 shadow-lg shadow-brand-500/25">
        <IconPlay className="size-3.5 text-white" />
      </span>
      <span className="font-display text-lg font-bold text-white">
        Yassiro<span className="text-brand-400">.</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.href.slice(1))).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/5 bg-ink-950/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-18 md:px-8">
        <Logo />

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => {
            const id = link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                  active === id ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {active === id && (
                  <span className="absolute inset-x-3 inset-y-0.5 -z-10 rounded-full bg-white/8" />
                )}
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden h-10 items-center rounded-full bg-brand-500 px-5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-400 hover:shadow-brand-400/30 active:scale-95 md:inline-flex"
          >
            Let's Work Together
          </a>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-zinc-200 transition hover:bg-white/10 hover:text-white md:hidden"
          >
            <IconMenu className="size-5" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-y-0 right-0 flex w-72 max-w-[85%] flex-col border-l border-white/10 bg-ink-900 p-6 transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-zinc-200 transition hover:bg-white/10 hover:text-white"
            >
              <IconX className="size-5" />
            </button>
          </div>

          <nav className="mt-10 flex flex-col gap-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                  active === link.href.slice(1)
                    ? "bg-white/8 text-white"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-brand-500 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-400 active:scale-95"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </header>
  );
}
