import { sidebarGroups } from "../data/portfolioData";

const methodClass = {
  GET:  "badge-get",
  POST: "badge-post",
};

export default function Sidebar({ activeKey, onSelect }) {
  return (
    <aside className="w-52 shrink-0 bg-zinc-900 border-r border-zinc-800 overflow-y-auto">
      {/* Logo */}
      <div className="px-4 py-3 border-b border-zinc-800">
        <span className="text-brand font-mono font-medium text-sm">▶ Franxine</span>
        <span className="text-zinc-600 font-mono text-xs ml-1">/ v1.0</span>
      </div>

      {sidebarGroups.map((group) => (
        <div key={group.label}>
          <p className="px-4 pt-4 pb-1 text-[10px] uppercase tracking-widest text-zinc-600 font-mono">
            {group.label}
          </p>
          {group.endpoints.map((ep) => (
            <button
              key={ep.key}
              onClick={() => onSelect(ep.key)}
              className={[
                "w-full flex items-center gap-2 text-left transition-colors duration-100",
                ep.indent ? "pl-7 pr-3 py-1.5" : "px-4 py-1.5",
                activeKey === ep.key
                  ? "bg-zinc-800 border-l-2 border-brand text-zinc-100"
                  : "border-l-2 border-transparent hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200",
              ].join(" ")}
            >
              <span
                className={`text-[10px] font-mono font-medium px-1.5 py-0.5 rounded shrink-0 min-w-[36px] text-center ${methodClass[ep.method] ?? "badge-get"}`}
              >
                {ep.method}
              </span>
              <span className={`text-xs font-mono truncate ${ep.indent ? "text-zinc-500" : ""}`}>
                {ep.path}
              </span>
            </button>
          ))}
        </div>
      ))}
    </aside>
  );
}