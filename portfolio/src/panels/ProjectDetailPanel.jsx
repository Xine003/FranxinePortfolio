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

      {/* Screenshot */}
      {p.screenshotUrl ? (
        <img src={p.screenshotUrl} alt={p.name} className="mx-5 my-2 w-[calc(100%-40px)] h-36 object-cover rounded-lg border border-zinc-700" />
      ) : (
        <div className="mx-5 my-2 h-32 rounded-lg border border-zinc-700 bg-zinc-900 flex items-center justify-center">
          <span className="text-xs font-mono text-zinc-600">[ full project screenshot ]</span>
        </div>
      )}

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