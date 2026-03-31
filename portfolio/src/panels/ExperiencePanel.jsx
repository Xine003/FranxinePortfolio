import { experience } from "../data/portfolioData";
import { JLine, JKey, JStr, JComment } from "../utils/JsonHelpers";

export default function ExperiencePanel() {
  return (
    <div className="py-2">
      <JLine>{"{"}</JLine>
      
      {/* Structural Fix: The key and opening bracket stay OUTSIDE the map */}
      <JLine indent={1}>
        <JKey k="jobs" />: [ <JComment>// {experience.length} positions</JComment>
      </JLine>

      {/* Increased vertical margin (my-5) for "breathing room" */}
      <div className="my-3 sm:my-5 space-y-3 sm:space-y-5">
        {experience.map((job, i) => (
          <div 
            key={i} 
            className="mx-2 sm:mx-6 bg-zinc-900/40 border border-zinc-800 rounded-lg p-3 sm:p-5 font-sans transition-all hover:border-orange-500/50 group"
          >
            {/* HEADER SECTION: Changed to flex-wrap and added gap-y-2 */}
            <div className="flex flex-wrap items-start justify-between gap-x-2 sm:gap-x-4 gap-y-2 mb-3 sm:mb-4 border-b border-zinc-800/50 pb-2 sm:pb-3">
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-zinc-100 text-xs sm:text-sm group-hover:text-orange-500 transition-colors">
                  {job.role}
                </p>
                <p className="text-zinc-400 text-[11px] sm:text-xs mt-1 leading-relaxed">
                  {job.company}
                </p>
              </div>
              
              {/* DATE SECTION: Removed shrink-0 and added better alignment */}
              <div className="text-[9px] sm:text-[10px] font-mono text-zinc-500 bg-zinc-800/50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded border border-zinc-700/50 self-start">
                {job.period}
              </div>
            </div>

            <ul className="space-y-2 sm:space-y-2.5">
              {job.highlights.map((h, j) => (
                <li key={j} className="flex items-start gap-1.5 sm:gap-2 text-[11px] sm:text-[12px] leading-relaxed text-zinc-400">
                  <span className="text-orange-500 mt-1 sm:mt-1.5 shrink-0 text-[9px] sm:text-[10px]">▸</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Structural Fix: Closing bracket is clean and properly indented */}
      <JLine indent={1}>]</JLine>
      <JLine>{"}"}</JLine>
    </div>
  );
}
