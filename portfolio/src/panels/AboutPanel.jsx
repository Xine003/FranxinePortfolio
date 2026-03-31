import { owner } from "../data/portfolioData";
import { JLine, JKey, JStr, JBool, JComment } from "../utils/JsonHelpers";

export default function AboutPanel() {
  return (
    <div>
      <JLine>{"{"}</JLine>

      <JLine indent={1}><JKey k="name" />: <JStr v={owner.name} />,</JLine>
      <JLine indent={1}><JKey k="role" />: <JStr v={owner.role} />,</JLine>
      <JLine indent={1}><JKey k="location" />: <JStr v={owner.location} />,</JLine>
      <JLine indent={1}><JKey k="open_to_work" />: <JBool v={owner.openToWork} />,</JLine>
      <JLine indent={1}><JKey k="avatar" />: <JComment>rendered below</JComment></JLine>

      {/* Avatar card */}
      <div className="mx-5 my-2 flex items-center gap-4 bg-zinc-800 border border-zinc-700 rounded-lg p-3 font-sans">
        {owner.avatarUrl ? (
          <img src={owner.avatarUrl} alt={owner.name} className="w-16 h-16 rounded-full object-cover shrink-0" />
        ) : (
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand to-amber-400 flex items-center justify-center text-white text-xl font-medium shrink-0">
            {owner.initials}
          </div>
        )}
        <div>
          <p className="font-medium text-zinc-100 text-sm">{owner.name}</p>
          <p className="text-zinc-400 text-xs mt-0.5">{owner.role} · {owner.location}</p>
          {owner.openToWork && (
            <span className="inline-block mt-1.5 text-[10px] px-2 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded-full">
              open to work
            </span>
          )}
        </div>
      </div>

      <JLine indent={1}><JKey k="bio" />: <JStr v={owner.bio} />,</JLine>
      <JLine indent={1}><JKey k="resume_url" />: <span className="text-sky-400 font-mono text-xs">"{owner.resumeUrl}"</span></JLine>

      <JLine>{"}"}</JLine>
    </div>
  );
}