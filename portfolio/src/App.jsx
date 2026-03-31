import { useState } from "react";
import Sidebar from "./components/Sidebar";
import RequestBar from "./components/RequestBar";
import ResponsePanel from "./components/ResponsePanel";
import { sidebarGroups } from "./data/portfolioData";

// Build a flat map of key → endpoint metadata for quick lookup
const endpointMap = {};
sidebarGroups.forEach((g) =>
  g.endpoints.forEach((ep) => {
    endpointMap[ep.key] = ep;
  })
);

const BASE_URL = "https://FranxinePortfolio.dev/api";

// Simulated response metadata per endpoint
const meta = {
  about:        { status: "200 OK", time: "142ms", size: "1.2 KB" },
  skills:       { status: "200 OK", time: "61ms",  size: "0.7 KB" },
  experience:   { status: "200 OK", time: "77ms",  size: "1.4 KB" },
  projects:     { status: "200 OK", time: "98ms",  size: "3.1 KB" },
  blogs:        { status: "200 OK", time: "88ms",  size: "2.2 KB" },
  cv:           { status: "200 OK", time: "55ms",  size: "180 KB" },
  certificates: { status: "200 OK", time: "62ms",  size: "1.1 KB" },
  socials:      { status: "200 OK", time: "44ms",  size: "0.5 KB" },
  contact:      { status: "— awaiting body", time: "—", size: "—" },
};

function getMeta(key) {
  if (meta[key]) return meta[key];
  if (key.startsWith("project-")) return { status: "200 OK", time: "74ms", size: "2.8 KB" };
  if (key.startsWith("blog-"))    return { status: "200 OK", time: "65ms", size: "4.1 KB" };
  return { status: "200 OK", time: "—", size: "—" };
}

export default function App() {
  const [activeKey, setActiveKey] = useState("about");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const ep = endpointMap[activeKey] ?? { method: "GET", path: "/about" };
  const { status, time, size } = getMeta(activeKey);

  const handleSelect = (key) => {
    setActiveKey(key);
    setSent(false);
  };

  const handleDrill = (key) => {
    setActiveKey(key);
    setLoading(true);
    setTimeout(() => {
      setSent(true);
      setLoading(false);
    }, 380);
  };

  const handleSend = () => {
    if (loading) return;
    setLoading(true);
    setSent(false);
    setTimeout(() => {
      setSent(true);
      setLoading(false);
    }, 420);
  };

  return (
    <div className="h-screen w-screen bg-zinc-950 flex overflow-hidden">
      <div className="w-full h-full flex flex-col border-zinc-800 shadow-2xl">

        {/* Top bar */}
        <div className="flex items-center gap-3 px-4 py-2.5 bg-zinc-900 border-b border-zinc-800 shrink-0">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-zinc-500/80" />
            <div className="w-3 h-3 rounded-full bg-zinc-500/80" />
            <div className="w-3 h-3 rounded-full bg-zinc-500/80" />
          </div>
          <span className="text-brand font-mono text-sm font-medium ml-1">▶ Franxine / v1.0</span>
          <span className="text-zinc-600 font-mono text-xs">· personal portfolio</span>
        </div>

        {/* Body */}
        <div className="flex flex-1 overflow-hidden">
          <Sidebar activeKey={activeKey} onSelect={handleSelect} />

          <div className="flex flex-col flex-1 min-w-0 bg-zinc-950">
            <RequestBar
              method={ep.method}
              url={`${BASE_URL}${ep.path}`}
              status={loading ? "Loading..." : status}
              time={time}
              size={size}
              onSend={handleSend}
            />
            {loading ? (
              <div className="flex-1 flex items-start p-4">
                <p className="font-mono text-xs text-zinc-600 animate-pulse">Sending...</p>
              </div>
            ) : (
              <ResponsePanel activeKey={activeKey} sent={sent} onDrill={handleDrill} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}