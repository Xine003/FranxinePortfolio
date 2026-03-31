// Reusable JSON syntax rendering helpers
// Used by all panel components to keep JSON-style output consistent

export function JLine({ children, indent = 0 }) {
  return (
    <div style={{ paddingLeft: indent * 20 }} className="leading-7 font-mono text-xs text-zinc-300">
      {children}
    </div>
  );
}

export function JKey({ k }) {
  return <span className="text-violet-400">"{k}"</span>;
}

export function JStr({ v }) {
  if (v === null) return <span className="text-zinc-500">null</span>;
  return <span className="text-emerald-400">"{v}"</span>;
}

export function JNum({ v }) {
  return <span className="text-orange-400">{v}</span>;
}

export function JBool({ v }) {
  return <span className="text-sky-400">{v ? "true" : "false"}</span>;
}

export function JComment({ children }) {
  return <span className="text-zinc-600 text-[11px]">// {children}</span>;
}

export function JUrl({ v }) {
  if (!v) return <span className="text-zinc-500">null</span>;
  return (
    <a href={v} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">
      "{v}"
    </a>
  );
}