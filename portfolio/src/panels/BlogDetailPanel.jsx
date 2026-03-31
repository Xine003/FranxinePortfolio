import { blogs } from "../data/portfolioData";
import { JLine, JKey, JNum, JStr, JComment } from "../utils/JsonHelpers";

export default function BlogDetailPanel({ blogId }) {
  const b = blogs.find((x) => x.id === blogId);
  if (!b) return <p className="text-zinc-500 font-mono text-xs p-4">404 — post not found</p>;

  return (
    <div>
      <JLine>{"{"}</JLine>
      <JLine indent={1}><JKey k="id" />: <JNum v={b.id} />,</JLine>
      <JLine indent={1}><JKey k="title" />: <JStr v={b.title} />,</JLine>
      <JLine indent={1}><JKey k="published_at" />: <JStr v={b.publishedAt} />,</JLine>
      <JLine indent={1}>
        <JKey k="tags" />: [
        {b.tags.map((t, i) => (
          <span key={t} className="text-emerald-400 font-mono text-xs">
            "{t}"{i < b.tags.length - 1 ? ", " : ""}
          </span>
        ))}
        ],
      </JLine>
      <JLine indent={1}><JKey k="body" />: <JComment>rendered below</JComment></JLine>

      <div className="mx-5 my-2 bg-zinc-800 border border-zinc-700 rounded-lg p-4 font-sans">
        {b.body.split("\n\n").map((para, i) => (
          <p key={i} className="text-sm text-zinc-300 leading-relaxed mb-3 last:mb-0">
            {para}
          </p>
        ))}
      </div>

      <JLine>{"}"}</JLine>
    </div>
  );
}