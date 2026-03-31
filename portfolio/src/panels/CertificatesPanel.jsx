import { certificates } from "../data/portfolioData";
import { JLine, JKey, JNum, JComment } from "../utils/JsonHelpers";

export default function CertificatesPanel() {
  return (
    <div>
      <JLine>{"{"}</JLine>
      <JLine indent={1}>
        <JKey k="total" />: <JNum v={certificates.length} />,
      </JLine>
      <JLine indent={1}>
        <JKey k="data" />: [ <JComment>certificates list</JComment>
      </JLine>

      {certificates.map((cert, i) => (
        <a
          key={i}
          href={cert.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="mx-5 my-2 bg-zinc-800 border border-zinc-700 border-l-2 border-transparent rounded-lg p-3 font-sans flex items-center gap-3 hover:bg-zinc-700/50 hover:border-orange-500 transition-all cursor-pointer">
            
            {/* Minimal Badge (Neutral by default) */}
            <div className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs font-semibold text-zinc-400 group-hover:text-orange-400 group-hover:border-orange-500 transition-colors">
              {cert.issuer?.[0] || "C"}
            </div>

            {/* Certificate Info */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-zinc-100 leading-snug">
                {cert.name}
              </p>
              <p className="text-xs text-zinc-500 mt-0.5">
                {cert.issuer}
              </p>
            </div>

            {/* Year + Hover Indicator */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="font-mono text-xs text-zinc-400">
                {cert.year}
              </span>
              <span className="text-xs text-orange-400 opacity-0 group-hover:opacity-100 transition">
                → verify
              </span>
            </div>
          </div>
        </a>
      ))}

      <JLine indent={1}>]</JLine>
      <JLine>{"}"}</JLine>
    </div>
  );
}
