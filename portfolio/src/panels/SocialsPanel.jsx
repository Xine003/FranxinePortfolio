import { socials } from "../data/portfolioData";
import { JLine, JKey, JComment } from "../utils/JsonHelpers";

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const icons = { github: GithubIcon, linkedin: LinkedinIcon };

export default function SocialsPanel() {
  return (
    <div>
      <JLine>{"{"}</JLine>
      <JLine indent={1}><JKey k="links" />: [ <JComment>rendered below</JComment></JLine>

      {socials.map((s) => {
        const Icon = icons[s.icon];
        return (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            className="mx-2 sm:mx-5 my-2 flex items-center gap-2 sm:gap-3 bg-zinc-800 border border-zinc-700 hover:border-brand rounded-lg p-2.5 sm:p-3 font-sans transition-colors duration-150"
          >
            <div
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center shrink-0 text-white"
              style={{ background: s.color }}
            >
              {Icon && <Icon />}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm font-medium text-zinc-100 truncate">{s.name}</p>
              <p className="text-[10px] sm:text-xs text-zinc-500 font-mono mt-0.5 truncate">{s.handle}</p>
            </div>
            <span className="ml-auto text-zinc-600 text-xs sm:text-sm shrink-0">↗</span>
          </a>
        );
      })}

      <JLine indent={1}>]</JLine>
      <JLine>{"}"}</JLine>
    </div>
  );
}
