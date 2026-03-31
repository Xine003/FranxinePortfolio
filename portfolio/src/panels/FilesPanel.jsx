import { cv, certificates } from "../data/portfolioData";
import { JLine, JKey, JStr, JNum, JComment } from "../utils/JsonHelpers";

export function CvPanel() {
  return (
    <div>
      <JLine>{"{"}</JLine>
      <JLine indent={1}><JKey k="file" />: <JComment>rendered below</JComment></JLine>

      <div className="mx-5 my-2 bg-zinc-800 border border-zinc-700 rounded-lg p-3 font-sans flex items-center gap-3">
        {/* PDF icon */}
        <div className="w-10 h-12 bg-sky-950 border border-sky-800 rounded flex flex-col items-center justify-center shrink-0">
          <span className="text-[9px] font-medium text-sky-400">PDF</span>
          <div className="mt-1 flex flex-col gap-0.5">
            <div className="w-5 h-0.5 bg-sky-800 rounded" />
            <div className="w-4 h-0.5 bg-sky-800 rounded" />
            <div className="w-5 h-0.5 bg-sky-800 rounded" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-zinc-100 truncate">{cv.filename}</p>
          <p className="text-xs text-zinc-500 mt-0.5">Updated {cv.updatedAt} · {cv.sizeKb} KB</p>
        </div>
        <a
          href={cv.downloadUrl}
          download
          className="px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white text-xs rounded transition-colors shrink-0"
        >
          ↓ Download
        </a>
      </div>

      <JLine indent={1}><JKey k="content_type" />: <JStr v="application/pdf" />,</JLine>
      <JLine indent={1}><JKey k="size_kb" />: <JNum v={cv.sizeKb} />,</JLine>
      <JLine indent={1}><JKey k="updated_at" />: <JStr v={cv.updatedAt} /></JLine>
      <JLine>{"}"}</JLine>
    </div>
  );
}

export function CertificatesPanel() {
  return (
    <div>
      <JLine>{"{"}</JLine>
      <JLine indent={1}><JKey k="total" />: <JNum v={certificates.length} />,</JLine>
      <JLine indent={1}><JKey k="data" />: [ <JComment>rendered below</JComment></JLine>

      {certificates.map((cert, i) => (
        <div key={i} className="mx-5 my-2 bg-zinc-800 border border-zinc-700 rounded-lg p-3 font-sans flex items-center gap-3">
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