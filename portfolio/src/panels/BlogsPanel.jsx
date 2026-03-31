import { blogs } from "../data/portfolioData";
import { JLine, JKey, JNum, JComment } from "../utils/JsonHelpers";

export default function BlogsPanel({ onDrill }) {
  return (
    <div>
      <JLine>{"{"}</JLine>
      <JLine indent={1}><JKey k="total" />: <JNum v={blogs.length} />,</JLine>
      <JLine indent={1}><JKey k="posts" />: [ <JComment>click a post to read</JComment></JLine>

      {blogs.map((b) => (
        <div
          key={b.id}
          onClick={() => onDrill(`blog-${b.id}`)}
          className="clickable-card mx-5 my-2"
        >
          <p className="text-sm font-medium text-zinc-100 mb-1">{b.title}</p>
          <p className="text-xs text-zinc-500 mb-2 leading-relaxed">{b.excerpt}</p>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono text-[10px] text-zinc-600">{b.publishedAt}</span>
            {b.tags.map((t) => <span key={t} className="pill">{t}</span>)}
            <span className="ml-auto text-[10px] font-mono text-brand shrink-0">
              GET /blogs/{b.id} →
            </span>
          </div>
        </div>
      ))}

      <JLine indent={1}>]</JLine>
      <JLine>{"}"}</JLine>
    </div>
  );
}