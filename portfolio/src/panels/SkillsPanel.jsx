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
          <div key={key}>
            <JLine indent={1}>
              <JKey k={key} />: <JComment>rendered below</JComment>
            </JLine>
            <div className="mx-5 my-1.5 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2.5 font-sans">
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">{group.category}</p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="pill">{item}</span>
                ))}
              </div>
            </div>
            {!isLast && <JLine indent={1}></JLine>}
          </div>
        );
      })}
      <JLine>{"}"}</JLine>
    </div>
  );
}