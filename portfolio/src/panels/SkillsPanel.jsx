import { skills } from "../data/portfolioData";
import { JLine, JKey, JComment } from "../utils/JsonHelpers";

export default function SkillsPanel() {
  return (
    <div className="py-2">
      <JLine>{"{"}</JLine>
      {skills.map((group, i) => {
        const key = group.category.toLowerCase().replace(/\s+/g, "_");
        const isLast = i === skills.length - 1;
        return (
          <div key={key} className="group">
            <JLine indent={1}>
              <JKey k={key} />: <JComment> {group.items.length} items</JComment>
            </JLine>
            <div className="mx-2 sm:mx-5 my-2 sm:my-3 bg-zinc-900/40 border border-zinc-800 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 font-sans transition-all hover:border-orange-500/50">
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-zinc-500 mb-2 sm:mb-3">{group.category}</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {group.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-medium rounded-md bg-zinc-800/80 border border-zinc-700 text-zinc-400 transition-all hover:border-orange-500/50 hover:text-orange-500 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            {!isLast && <div className="h-2" />} {/* Vertical breathing room between categories */}
          </div>
        );
      })}
      <JLine>{"}"}</JLine>
    </div>
  );
}
