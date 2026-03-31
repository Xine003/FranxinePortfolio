import { useState } from "react";
import { JLine, JKey, JComment } from "../utils/JsonHelpers";

export default function ContactPanel() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    // Replace with your real form handler — e.g. EmailJS, Formspree, or your own API
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
              placeholder={
                field === "email"
                  ? "your@email.com"
                  : field === "name"
                  ? "Your name"
                  : "Say something..."
              }
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