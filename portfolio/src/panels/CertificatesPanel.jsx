import { certificates } from "../data/portfolioData";
import { JLine, JKey, JNum, JComment } from "../utils/JsonHelpers";

export default function CertificatesPanel() {
  return (
    <div>
      <JLine>{"{"}</JLine>
      <JLine indent={1}><JKey k="total" />: <JNum v={certificates.length} />,</JLine>
      <JLine indent={1}><JKey k="data" />: [ <JComment>rendered below</JComment></JLine>

      {certificates.map((cert, i) => (
        <div
          key={i}
          className="mx-5 my-2 bg-zinc-800 border border-zinc-700 rounded-lg p-3 font-sans flex items-center gap-3"
        >
          <div className="w-9 h-9 rounded-full bg-amber-950 border border-amber-800 flex items-center justify-center text-base shrink-0">
            🏅
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-zinc-100 leading-snug">{cert.name}</p>
            <p className="text-xs text-zinc-500 mt-0.5">{cert.issuer}</p>
          </div>
          <span className="font-mono text-xs text-zinc-600 shrink-0">{cert.year}</span>
        </div>
      ))}

      <JLine indent={1}>]</JLine>
      <JLine>{"}"}</JLine>
    </div>
  );
}