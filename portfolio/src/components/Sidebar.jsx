import { sidebarGroups } from "../data/portfolioData";

const methodClass = {
  GET:  "badge-get",
  POST: "badge-post",
};

export default function Sidebar({ activeKey, onSelect, isOpen, onClose }) {
  return (
    <>
      {/* Mobile Overlay: Closes sidebar when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside 
        className={`
          w-64 sm:w-52 shrink-0 bg-zinc-900 border-r border-zinc-800 overflow-y-auto
          fixed md:static inset-y-0 left-0 z-30
          transform transition-transform duration-200 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        {/* Logo */}
        <div className="px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
          <div>
            <span className="text-brand font-mono font-medium text-sm">▶ Franxine</span>
            <span className="text-zinc-600 font-mono text-xs ml-1">/ v1.0</span>
          </div>
          <button 
            onClick={onClose}
            className="md:hidden p-1 rounded-md hover:bg-zinc-800 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="pb-4"> {/* Wrapped in <nav> for a11y */}
          {sidebarGroups.map((group) => (
            <div key={group.label}>
              <p className="px-4 pt-4 pb-1 text-[10px] uppercase tracking-widest text-zinc-600 font-mono">
                {group.label}
              </p>
              {group.endpoints.map((ep) => (
                <button
                  key={ep.key}
                  onClick={() => {
                    onSelect(ep.key);
                    if (window.innerWidth < 768) onClose(); // Auto-close on mobile selection
                  }}
                  // A11y Additions
                  aria-current={activeKey === ep.key ? "page" : undefined}
                  aria-label={`${ep.method} request to ${ep.path}`}
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
        </nav>
      </aside>
    </>
  );
}