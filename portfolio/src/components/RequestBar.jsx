const methodColor = {
  GET:  "text-emerald-400",
  POST: "text-orange-400",
};

export default function RequestBar({ method, url, status, time, size, onSend }) {
  return (
    <div className="border-b border-zinc-800">
      {/* URL bar */}
      <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-2 sm:py-2.5 bg-zinc-900">
        <span className={`font-mono text-[10px] sm:text-xs font-medium min-w-[32px] sm:min-w-[42px] text-center px-1.5 sm:px-2 py-1 rounded border border-zinc-700 bg-zinc-800 shrink-0 ${methodColor[method] ?? "text-zinc-400"}`}>
          {method}
        </span>
        <input
          readOnly
          value={url}
          className="flex-1 min-w-0 font-mono text-[10px] sm:text-xs bg-zinc-800 border border-zinc-700 rounded px-2 sm:px-3 py-1.5 text-zinc-300 outline-none focus:border-brand transition-colors truncate"
        />
        <button
          onClick={onSend}
          className="px-2.5 sm:px-4 py-1.5 bg-brand hover:bg-brand-dark text-white text-[10px] sm:text-xs font-medium rounded transition-colors duration-150 shrink-0"
        >
          Send
        </button>
      </div>

      {/* Status bar */}
      <div className="flex items-center gap-2 sm:gap-4 px-2 sm:px-4 py-1 sm:py-1.5 bg-zinc-950 font-mono text-[10px] sm:text-xs border-t border-zinc-800 overflow-x-auto">
        <span className={`shrink-0 ${status.startsWith("2") ? "text-emerald-400 font-medium" : "text-zinc-500"}`}>
          {status}
        </span>
        {time !== "—" && (
          <>
            <span className="text-zinc-600 shrink-0">time <span className="text-zinc-400">{time}</span></span>
            <span className="text-zinc-600 shrink-0 hidden xs:inline">size <span className="text-zinc-400">{size}</span></span>
          </>
        )}
      </div>
    </div>
  );
}
