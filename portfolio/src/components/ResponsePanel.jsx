import AboutPanel from "../panels/AboutPanel";
import SkillsPanel from "../panels/SkillsPanel";
import ExperiencePanel from "../panels/ExperiencePanel";
import ProjectPanel from "../panels/ProjectPanel";
import ProjectDetailPanel from "../panels/ProjectDetailPanel";
import BlogDetailPanel from "../panels/BlogDetailPanel";
import BlogsPanel from "../panels/BlogsPanel";
import CvPanel from "../panels/CvPanel";
import CertificatesPanel from "../panels/CertificatesPanel";
import SocialsPanel from "../panels/SocialsPanel";
import ContactPanel from "../panels/ContactPanel";
import { sidebarGroups } from "../data/portfolioData"; 

export default function ResponsePanel({ activeKey, sent, onDrill }) {
  // Logic to find the current endpoint details for the instructional preview
  const allEndpoints = sidebarGroups.flatMap(g => g.endpoints);
  const currentEndpoint = allEndpoints.find(e => e.key === activeKey);

  if (!sent) {
    return (
      <div className="flex-1 flex items-start p-4 bg-zinc-950 select-none">
        <div className="font-mono text-[10px] md:text-xs">
          <span className="text-zinc-600 block mb-2">
            // Select an endpoint and click <span className="text-brand font-bold">Send</span> to load response
          </span>
          {/* Show a preview of the request the user is about to send */}
          {currentEndpoint ? (
            <div className="flex items-center gap-2 opacity-50">
               <span className={currentEndpoint.method === "POST" ? "text-orange-400" : "text-emerald-400"}>
                 {currentEndpoint.method}
               </span>
               <span className="text-zinc-400">{currentEndpoint.path}</span>
            </div>
          ) : activeKey && (
            /* Fallback for dynamic paths (projects/blogs) not in the main sidebar categories */
            <div className="flex items-center gap-2 opacity-50">
               <span className="text-emerald-400">GET</span>
               <span className="text-zinc-400">
                 {activeKey.startsWith("project-") ? `/projects/${activeKey.split('-')[1]}` : 
                  activeKey.startsWith("blog-") ? `/blogs/${activeKey.split('-')[1]}` : 
                  `/${activeKey}`}
               </span>
            </div>
          )}
        </div>
      </div>
    );
  }

  const render = () => {
    if (activeKey === "about")        return <AboutPanel />;
    if (activeKey === "skills")       return <SkillsPanel />;
    if (activeKey === "experience")   return <ExperiencePanel />;
    if (activeKey === "projects")     return <ProjectPanel onDrill={onDrill} />;
    if (activeKey === "blogs")        return <BlogsPanel onDrill={onDrill} />;
    if (activeKey === "cv")           return <CvPanel />;
    if (activeKey === "certificates") return <CertificatesPanel />;
    if (activeKey === "socials")      return <SocialsPanel />;
    if (activeKey === "contact")      return <ContactPanel />;

    if (activeKey.startsWith("project-")) {
      const id = activeKey.replace("project-", "");
      return <ProjectDetailPanel projectId={id} />;
    }
    if (activeKey.startsWith("blog-")) {
      const id = parseInt(activeKey.replace("blog-", ""), 10);
      return <BlogDetailPanel blogId={id} />;
    }

    return <p className="font-mono text-xs text-zinc-600 p-4">404 — endpoint not found</p>;
  };

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden min-w-0 p-2 md:p-4 font-mono text-[10px] md:text-xs leading-6 md:leading-7 bg-zinc-950">
      {render()}
    </div>
  );
}