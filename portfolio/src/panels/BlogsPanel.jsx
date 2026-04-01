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
        className="clickable-card mx-2 sm:mx-5 my-2 flex gap-2 sm:gap-4 p-2 sm:p-3"
      >
        {/* Small Square Thumbnail */}
        <div className="w-14 h-14 sm:w-20 sm:h-20 shrink-0 rounded bg-zinc-950 border border-zinc-800 overflow-hidden">
          {b.thumbnailUrl ? (
            <img src={b.thumbnailUrl} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[10px] text-zinc-700">IMG</div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm font-medium text-zinc-100 mb-0.5 sm:mb-1 truncate">{b.title}</p>
          <p className="text-[10px] sm:text-xs text-zinc-500 mb-1.5 sm:mb-2 line-clamp-2 leading-relaxed">
            {b.excerpt}
          </p>
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            <span className="font-mono text-[9px] sm:text-[10px] text-zinc-600">{b.publishedAt}</span>
            {b.tags.map((t) => <span key={t} className="pill text-[9px] sm:text-xs">{t}</span>)}
          </div>
        </div>
      </div>
      ))}

      <JLine indent={1}>]</JLine>
      <JLine>{"}"}</JLine>
    </div>
  );
}
