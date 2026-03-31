import { useState } from "react";
import { socials } from "../data/portfolioData";
import { JLine, JKey, JComment } from "../utils/JsonHelpers";

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>
  </svg>
);

const icons = { github: GithubIcon, linkedin: LinkedinIcon };

export function SocialsPanel() {
  return (
    <div>
      <JLine>{"{"}</JLine>
      <JLine indent={1}><JKey k="links" />: [ <JComment>rendered below</JComment></JLine>

      {socials.map((s) => {
        const Icon = icons[s.icon];
        return (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            className="mx-5 my-2 flex items-center gap-3 bg-zinc-800 border border-zinc-700 hover:border-brand rounded-lg p-3 font-sans transition-colors duration-150"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-white"
              style={{ background: s.color }}
            >
              {Icon && <Icon />}
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-100">{s.name}</p>
              <p className="text-xs text-zinc-500 font-mono mt-0.5">{s.handle}</p>
            </div>
            <span className="ml-auto text-zinc-600 text-sm">↗</span>
          </a>
        );
      })}

      <JLine indent={1}>]</JLine>
      <JLine>{"}"}</JLine>
    </div>
  );
}

export function ContactPanel() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    // Replace this with your real form submission logic (e.g. EmailJS, Formspree)
    setSent(true);
  };

  return (
    <div>
      <JLine><JComment>POST body — fill in the fields below</JComment></JLine>
      <JLine>{"{"}</JLine>
      <JLine indent={1}><JKey k="payload" />: <JComment>rendered below</JComment></JLine>

      <div className="mx-5 my-2 bg-zinc-800 border border-zinc-700 rounded-lg p-4 font-sans">
        {["name", "email", "message"].map((field) => (
          <div key={field} className="mb-3">
            <label className="block text-xs font-mono text-zinc-500 mb-1">{field}</label>
            <input
              type="text"
              value={form[field]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              placeholder={field === "email" ? "your@email.com" : field === "name" ? "Your name" : "Say something..."}
              className="w-full bg-zinc-900 border border-zinc-700 focus:border-brand rounded px-3 py-2 text-sm text-zinc-200 outline-none transition-colors placeholder:text-zinc-600"
            />
          </div>
        ))}

        {!sent ? (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-brand hover:bg-brand-dark text-white text-sm rounded transition-colors"
          >
            Send Request
          </button>
        ) : (
          <div className="mt-2 px-3 py-2 bg-emerald-950 border border-emerald-800 text-emerald-400 rounded text-sm">
            ✓ 201 Created — message received! I'll reply within 24h.
          </div>
        )}
      </div>

      <JLine>{"}"}</JLine>
    </div>
  );
}