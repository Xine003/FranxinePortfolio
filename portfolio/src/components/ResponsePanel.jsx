import AboutPanel from "../panels/AboutPanel";
import SkillsPanel from "../panels/SkillsPanel";
import ExperiencePanel from "../panels/ExperiencePanel";
import ProjectPanel from "../panels/ProjectPanel";
import ProjectDetailPanel from "../panels/ProjectDetailPanel";
import BlogDetailPanel from "../panels/BlogDetailPanel";
import BlogsPanel  from "../panels/BlogsPanel";
import CvPanel from "../panels/CvPanel";
import CertificatesPanel  from "../panels/CertificatesPanel";
import SocialsPanel from "../panels/SocialsPanel";
import ContactPanel from "../panels/ContactPanel";

export default function ResponsePanel({ activeKey, sent, onDrill }) {
  if (!sent) {
    return (
      <div className="flex-1 flex items-start p-4">
        <p className="font-mono text-xs text-zinc-600">
          waiting for request — click <span className="text-brand">Send</span> to load response
        </p>
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
    <div className="flex-1 overflow-y-auto p-4 font-mono text-xs leading-7">
      {render()}
    </div>
  );
}