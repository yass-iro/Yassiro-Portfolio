import {
  IconArrowUp,
  IconInstagram,
  IconMail,
  IconPlay,
  IconTwitter,
  IconYoutube,
} from "./icons";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const SERVICES = [
  "YouTube Thumbnails",
  "Thumbnail Redesigns",
  "Creative Direction",
];

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/yass___iro/", Icon: IconInstagram },
  { label: "X (Twitter)", href: "https://x.com/theyassiro", Icon: IconTwitter },
  { label: "YouTube", href: "https://youtube.com", Icon: IconYoutube },
  { label: "Email", href: "mailto:yassirodesigns@gmail.com", Icon: IconMail },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-900/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-600">
                <IconPlay className="size-3.5 text-white" />
              </span>
              <span className="font-display text-lg font-bold text-white">
                Yassiro<span className="text-brand-400">.</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              Creating thumbnails that turn attention into clicks — one video at a
              time.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 transition hover:border-brand-500/40 hover:bg-brand-500/10 hover:text-brand-300"
                >
                  <Icon className="size-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-sm font-semibold text-white">Navigation</p>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-500 transition hover:text-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-sm font-semibold text-white">Services</p>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-zinc-500 transition hover:text-brand-400"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="mailto:yassirodesigns@gmail.com"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-brand-300"
            >
              <IconMail className="size-4" />
              yassirodesigns@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-sm text-zinc-600 md:flex-row">
          <p>© 2026 Yassiro. All rights reserved.</p>
          <p>Designed for creators who care about the click.</p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 font-medium text-zinc-500 transition hover:text-brand-400"
          >
            Back to top
            <IconArrowUp className="size-4 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
