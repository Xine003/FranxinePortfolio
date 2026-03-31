import { projects } from "../data/portfolioData";
import { JLine, JKey, JNum, JComment } from "../utils/JsonHelpers";

export default function ProjectsPanel({ onDrill }) {
  return (
    <div>
      <JLine>{"{"}</JLine>
      <JLine indent={1}><JKey k="total" />: <JNum v={projects.length} />,</JLine>
      <JLine indent={1}><JKey k="data" />: [ <JComment>click a card to view details</JComment></JLine>

      {projects.map((p) => (
        <div
          key={p.id}
          onClick={() => onDrill(`project-${p.id}`)}
          className="clickable-card mx-5 my-2"
        >
          {/* Screenshot with aspect-video and object-contain */}
          <div className="w-full aspect-video max-h-48 rounded-md mb-3 bg-zinc-950 border border-zinc-700 overflow-hidden flex items-center justify-center">
            {p.thumbnailUrl ? (
              <img 
                src={p.thumbnailUrl} 
                alt={p.name} 
                className="w-full h-full object-contain" 
              />
            ) : (
              <span className="text-xs font-mono text-zinc-600">[ screenshot ]</span>
            )}
          </div>

          <div className="flex items-start justify-between mb-1">
            <p className="text-sm font-medium text-zinc-100">{p.name}</p>
            <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ml-2 shrink-0 ${p.status === "production" ? "bg-emerald-950 text-emerald-400 border border-emerald-800" : "bg-zinc-900 text-zinc-500 border border-zinc-700"}`}>
              {p.status}
            </span>
          </div>
          <p className="text-xs text-zinc-500 mb-2">{p.description}</p>
          <div className="flex items-center gap-1.5 flex-wrap">
            {p.stack.map((s) => <span key={s} className="pill">{s}</span>)}
            <span className="ml-auto text-[10px] font-mono text-brand shrink-0">
              GET /projects/{p.id} →
            </span>
          </div>
        </div>
      ))}

      <JLine indent={1}>]</JLine>
      <JLine>{"}"}</JLine>
    </div>
  );
}