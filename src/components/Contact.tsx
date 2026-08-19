import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import {
  IconArrowRight,
  IconCheck,
  IconChevronDown,
  IconMail,
  IconUser,
  IconYoutube,
} from "./icons";

type FormValues = {
  name: string;
  email: string;
  channel: string;
  type: string;
  message: string;
};

const INITIAL: FormValues = { name: "", email: "", channel: "", type: "YouTube Thumbnail", message: "" };

const PROJECT_TYPES = ["YouTube Thumbnail", "Thumbnail Redesign", "Ongoing Work", "Other"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-zinc-200">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs text-rose-400">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState<FormValues>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);

  // 👇 PASTE YOUR FORMSPREE URL HERE (from formspree.io dashboard)
  const FORM_URL = "https://formspree.io/f/mppakdwv";
  const set = (key: keyof FormValues) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((err) => ({ ...err, [key]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const next: Partial<Record<keyof FormValues, string>> = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!EMAIL_RE.test(values.email)) next.email = "Please enter a valid email address.";
    if (values.message.trim().length < 10)
      next.message = "Tell me a little more — at least 10 characters.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSending(true);
    setFailed(false);
    try {
      const res = await fetch(FORM_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          channel: values.channel,
          project_type: values.type,
          message: values.message,
          _subject: `New project request from ${values.name}`,
        }),
      });

      if (res.ok) {
        setSent(true);
        setValues(INITIAL);
      } else {
        setFailed(true);
      }
    } catch {
      setFailed(true);
    } finally {
      setSending(false);
    }
  };
  const inputClass = (hasError?: string) =>
    `w-full rounded-xl border bg-white/3 p-3 pl-11 text-sm text-white placeholder-zinc-600 outline-none transition focus:bg-white/5 ${
      hasError
        ? "border-rose-500/60 focus:border-rose-400"
        : "border-white/10 focus:border-brand-500/60"
    }`;

  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          subtitle="Have a video that deserves more attention? Tell me about it and let's create a thumbnail worth clicking."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Info panel */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-ink-900 p-8">
              <h3 className="font-display text-xl font-semibold text-white">
                Prefer email?
              </h3>
              <a
                href="mailto:yassirodesigns@gmail.com"
                className="group flex items-center gap-3 rounded-2xl border border-white/8 bg-white/3 p-4 transition hover:border-brand-500/40"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-500/15">
                  <IconMail className="size-5 text-brand-400" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">
                    yassirodesigns@gmail.com
                  </p>
                  <p className="text-xs text-zinc-500">Replies within 24 hours</p>
                </div>
              </a>

              <div className="flex-1 space-y-3 rounded-2xl border border-white/8 bg-white/3 p-5">
                <h4 className="text-sm font-semibold text-white">What happens next</h4>
                <ul className="space-y-3 text-sm text-zinc-400">
                  {[
                    "You share your video idea, title and channel.",
                    "I reply with a plan, timeline and quote — usually within 24h.",
                    "You get concepts fast: 24–48h standard turnaround.",
                    "Unlimited revisions until you're happy. No fine print.",
                  ].map((step, i) => (
                    <li key={step} className="flex gap-3">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-500/15 font-display text-xs font-bold text-brand-300">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={100} className="lg:col-span-3">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-10 text-center">
                <span className="grid size-14 place-items-center rounded-full bg-emerald-500/15">
                  <IconCheck className="size-7 text-emerald-400" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-white">
                  Message sent!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-zinc-400">
                  Thanks for reaching out — I'll get back to you within 24 hours with
                  a plan for your project.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 inline-flex h-11 items-center rounded-full border border-white/15 px-6 text-sm font-semibold text-white transition hover:border-brand-500/50 hover:bg-white/5"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-3xl border border-white/10 bg-ink-900 p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your name" error={errors.name}>
                    <div className="relative">
                      <IconUser className="pointer-events-none absolute left-4 top-1/2 size-4.5 -translate-y-1/2 text-zinc-500" />
                      <input
                        type="text"
                        value={values.name}
                        onChange={set("name")}
                        placeholder="Enter your name"
                        className={inputClass(errors.name)}
                      />
                    </div>
                  </Field>

                  <Field label="Email" error={errors.email}>
                    <div className="relative">
                      <IconMail className="pointer-events-none absolute left-4 top-1/2 size-4.5 -translate-y-1/2 text-zinc-500" />
                      <input
                        type="email"
                        value={values.email}
                        onChange={set("email")}
                        placeholder="you@example.com"
                        className={inputClass(errors.email)}
                      />
                    </div>
                  </Field>

                  <Field label="YouTube channel">
                    <div className="relative">
                      <IconYoutube className="pointer-events-none absolute left-4 top-1/2 size-4.5 -translate-y-1/2 text-zinc-500" />
                      <input
                        type="text"
                        value={values.channel}
                        onChange={set("channel")}
                        placeholder="Your channel URL"
                        className={inputClass()}
                      />
                    </div>
                  </Field>

                  <Field label="Project type">
                    <div className="relative">
                      <select
                        value={values.type}
                        onChange={set("type")}
                        className={`${inputClass()} cursor-pointer appearance-none pr-10`}
                      >
                        {PROJECT_TYPES.map((t) => (
                          <option key={t} value={t} className="bg-ink-900 text-white">
                            {t}
                          </option>
                        ))}
                      </select>
                      <IconChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
                    </div>
                  </Field>

                  <div className="sm:col-span-2">
                    <Field label="Message" error={errors.message}>
                      <textarea
                        rows={6}
                        value={values.message}
                        onChange={set("message")}
                        placeholder="Tell me about your video or project..."
                        className={`${inputClass(errors.message)} resize-none p-4`}
                      />
                    </Field>
                  </div>
                </div>

                {failed && (
                  <p className="text-sm text-rose-400">
                    Something went wrong — please try again or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="group mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-brand-500 px-8 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-brand-400/30 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {sending ? "Sending..." : "Start a Project"}
                  <IconArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
