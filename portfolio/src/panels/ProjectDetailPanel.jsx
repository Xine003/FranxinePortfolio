import { projects } from "../data/portfolioData";
import { JLine, JKey, JStr, JNum, JUrl, JComment } from "../utils/JsonHelpers";

export default function ProjectDetailPanel({ projectId }) {
  const p = projects.find((x) => x.id === projectId);
  if (!p) return <p className="text-zinc-500 font-mono text-xs p-4">404 — project not found</p>;

  return (
    <div>
      <JLine>{"{"}</JLine>
      <JLine indent={1}><JKey k="id" />: <JStr v={p.id} />,</JLine>
      <JLine indent={1}><JKey k="name" />: <JStr v={p.name} />,</JLine>
      <JLine indent={1}><JKey k="status" />: <JStr v={p.status} />,</JLine>
      <JLine indent={1}><JKey k="year" />: <JNum v={p.year} />,</JLine>
      <JLine indent={1}><JKey k="preview" />: <JComment>rendered below</JComment></JLine>

      {/* Enlarged Hero Screenshot */}
      <div className="mx-1 sm:mx-2 my-2 sm:my-4 w-[calc(100%-8px)] sm:w-[calc(100%-16px)] aspect-video rounded-lg border border-zinc-700 bg-zinc-950 overflow-hidden flex items-center justify-center">
        {p.screenshotUrl ? (
          <img 
            src={p.screenshotUrl} 
            alt={p.name} 
            className="w-full h-full object-contain" 
          />
        ) : (
          <span className="text-[10px] sm:text-xs font-mono text-zinc-600">[ full project screenshot ]</span>
        )}
      </div>

      <JLine indent={1}><JKey k="description" />: <JStr v={p.description} />,</JLine>
      <JLine indent={1}><JKey k="stack" />: [
        {p.stack.map((s, i) => (
          <span key={s} className="text-emerald-400 font-mono text-xs">"{s}"{i < p.stack.length - 1 ? ", " : ""}</span>
        ))}
      ],</JLine>
      <JLine indent={1}><JKey k="repo_url" />: <JUrl v={p.repoUrl} />,</JLine>
      <JLine indent={1}><JKey k="live_url" />: <JUrl v={p.liveUrl} /></JLine>
      <JLine>{"}"}</JLine>
    </div>
  );
}
