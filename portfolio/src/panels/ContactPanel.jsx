import { useState } from "react";
import { JLine, JKey, JComment } from "../utils/JsonHelpers";

const FORMSPREE_ID = "mrbqkejb"; 
const FIELDS = [
  { key: "name",    type: "input",    placeholder: "Your name",       label: "name"    },
  { key: "email",   type: "input",    placeholder: "your@email.com",  label: "email"   },
  { key: "subject", type: "input",    placeholder: "What's this about?", label: "subject" },
  { key: "message", type: "textarea", placeholder: "Say something...", label: "message" },
];

export default function ContactPanel() {
  const [form, setForm]     = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "sent" | "error"

  const statusLine = {
    idle:    "— awaiting body",
    sending: "— sending...",
    sent:    "— 201 Created",
    error:   "— 500 Internal Server Error",
  }[status];

  const handleSubmit = async () => {
    const { name, email, subject, message } = form;
    if (!name || !email || !subject || !message) return;

    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const isSending = status === "sending";
  const isSent    = status === "sent";
  const isError   = status === "error";

  return (
    <div>
      {/* Dynamic status line at the top */}
      <JLine>
        <span
          className={`font-mono text-xs transition-colors ${
            isSent  ? "text-emerald-400" :
            isError ? "text-red-400"     :
            isSending ? "text-amber-400" :
            "text-zinc-500"
          }`}
        >
          {statusLine}
        </span>
      </JLine>

      <JLine>
        <JComment>POST body — fill in the fields below</JComment>
      </JLine>
      <JLine>{"{"}</JLine>
      <JLine indent={1}><JKey k="payload" />: <JComment>rendered below</JComment></JLine>

      <div className="mx-5 my-2 bg-zinc-800 border border-zinc-700 rounded-lg p-4 font-sans">
        {FIELDS.map(({ key, type, placeholder, label }) => (
          <div key={key} className="mb-3">
            <label className="block text-xs font-mono text-zinc-500 mb-1">{label}</label>

            {type === "textarea" ? (
              <textarea
                rows={4}
                value={form[key]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                placeholder={placeholder}
                disabled={isSent || isSending}
                className="w-full bg-zinc-900 border border-zinc-700 focus:border-brand rounded px-3 py-2 text-sm text-zinc-200 outline-none transition-colors placeholder:text-zinc-600 resize-none disabled:opacity-50"
              />
            ) : (
              <input
                type={key === "email" ? "email" : "text"}
                value={form[key]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                placeholder={placeholder}
                disabled={isSent || isSending}
                className="w-full bg-zinc-900 border border-zinc-700 focus:border-brand rounded px-3 py-2 text-sm text-zinc-200 outline-none transition-colors placeholder:text-zinc-600 disabled:opacity-50"
              />
            )}
          </div>
        ))}

        {/* Action area */}
        {!isSent && !isError && (
          <button
            onClick={handleSubmit}
            disabled={isSending}
            className="px-4 py-2 bg-brand hover:bg-brand-dark text-white text-sm rounded transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isSending ? (
              <>
                <span className="inline-block w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              "Send Request"
            )}
          </button>
        )}

        {isSent && (
          <div className="mt-2 px-3 py-2 bg-emerald-950 border border-emerald-800 text-emerald-400 rounded text-sm">
            ✓ <span className="font-mono">201 Created</span> — message received! I'll reply within 24h.
          </div>
        )}

        {isError && (
          <div className="mt-2 space-y-2">
            <div className="px-3 py-2 bg-red-950 border border-red-800 text-red-400 rounded text-sm">
              ✕ <span className="font-mono">500 Internal Server Error</span> — something went wrong. Try again.
            </div>
            <button
              onClick={() => setStatus("idle")}
              className="px-4 py-2 bg-brand hover:bg-brand-dark text-white text-sm rounded transition-colors"
            >
              Retry
            </button>
          </div>
        )}
      </div>

      <JLine>{"}"}</JLine>
    </div>
  );
}