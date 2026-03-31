import { skills } from "../data/portfolioData";
import { JLine, JKey, JComment } from "../utils/JsonHelpers";

export default function SkillsPanel() {
  return (
    <div>
      <JLine>{"{"}</JLine>
      {skills.map((group, i) => {
        const key = group.category.toLowerCase().replace(/\s+/g, "_");
        const isLast = i === skills.length - 1;
        return (
          <div key={key} className="group">
            <JLine indent={1}>
              <JKey k={key} />: <JComment> {group.items.length} items rendered below</JComment>
            </JLine>
            <div className="mx-8 my-2 bg-zinc-900/50 border-l-2 border-brand/30 rounded-r-lg p-4 transition-all group-hover:border-brand">
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">{group.category}</p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="pill">{item}</span>
                ))}
              </div>
            </div>
            {!isLast && <JLine indent={1}>{isLast ? "]" : "],"}</JLine>}
          </div>
        );
      })}
      <JLine>{"}"}</JLine>
    </div>
  );
}