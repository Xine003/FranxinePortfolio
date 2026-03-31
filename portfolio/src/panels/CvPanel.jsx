import { cv } from "../data/portfolioData";
import { JLine, JKey, JComment } from "../utils/JsonHelpers";

export default function CvPanel() {
  return (
    <div>
      <JLine>{"{"}</JLine>
      <JLine indent={1}>
        <JKey k="file" />: <JComment>download resource</JComment>
      </JLine>

      <div className="mx-2 sm:mx-5 my-2 bg-zinc-800 border border-zinc-700 rounded-lg p-2.5 sm:p-3 font-sans flex items-center gap-2 sm:gap-4">
        
        {/* Improved PDF Icon */}
        <div className="w-10 h-12 sm:w-12 sm:h-14 bg-zinc-900 border border-orange-500/30 rounded-md flex flex-col items-center justify-center shadow-sm relative shrink-0">
          <span className="text-[9px] sm:text-[10px] font-semibold text-orange-400 tracking-wide">
            PDF
          </span>

          <div className="mt-1 flex flex-col gap-0.5 opacity-60">
            <div className="w-5 sm:w-6 h-[2px] bg-orange-400/40 rounded" />
            <div className="w-4 sm:w-5 h-[2px] bg-orange-400/30 rounded" />
            <div className="w-5 sm:w-6 h-[2px] bg-orange-400/40 rounded" />
          </div>

          {/* Fold corner */}
          <div className="absolute top-0 right-0 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-orange-500/20 clip-path-triangle" />
        </div>

        {/* File Info */}
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm font-medium text-zinc-100 truncate">
            {cv.filename}
          </p>
          <p className="text-[10px] sm:text-xs text-zinc-500 mt-0.5">
            Updated {cv.updatedAt} · {cv.sizeKb} KB
          </p>
        </div>

        {/* Consistent Brand Button */}
        <a
          href={cv.downloadUrl}
          download
          className="px-2 sm:px-3 py-1 sm:py-1.5 bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white text-[10px] sm:text-xs rounded transition-colors shrink-0"
        >
          ↓ <span className="hidden xs:inline">Download</span><span className="xs:hidden">DL</span>
        </a>
      </div>

      <JLine>{"}"}</JLine>
    </div>
  );
}
