import { experience } from "../data/portfolioData";
import { JLine, JKey, JStr, JComment } from "../utils/JsonHelpers";

export default function ExperiencePanel() {
  return (
    <div>
      <JLine>{"{"}</JLine>
      <JLine indent={1}><JKey k="jobs" />: [</JLine>
      {experience.map((job, i) => (
        <div key={i} className="mx-5 my-2 bg-zinc-800 border border-zinc-700 rounded-lg p-3 font-sans">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="font-medium text-zinc-100 text-sm">{job.role}</p>
              <p className="text-zinc-400 text-xs mt-0.5">{job.company}</p>
            </div>
            <span className="text-[10px] font-mono text-zinc-500 mt-0.5 shrink-0 ml-4">{job.period}</span>
          </div>
          <ul className="mt-2 space-y-1">
            {job.highlights.map((h, j) => (
              <li key={j} className="flex items-start gap-2 text-xs text-zinc-400">
                <span className="text-brand mt-0.5 shrink-0">▸</span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <JLine indent={1}>]</JLine>
      <JLine>{"}"}</JLine>
    </div>
  );
}