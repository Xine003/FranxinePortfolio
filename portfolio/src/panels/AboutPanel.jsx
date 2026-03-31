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
      <div className="mx-5 my-2 flex flex-col items-start gap-2.5">
        {owner.avatarUrl ? (
          <img src={owner.avatarUrl} alt={owner.name} className="w-[250px] h-[250px] rounded-xl object-cover border border-zinc-700" />
        ) : (
          <div className="w-[250px] h-[250px] rounded-xl bg-gradient-to-br from-brand to-amber-400 flex items-center justify-center text-white text-4xl font-semibold border border-zinc-700">
            {owner.initials}
          </div>
        )}
        <div>
          {owner.openToWork && (
            <span className="text-[10px] px-2.5 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded-full font-mono">
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