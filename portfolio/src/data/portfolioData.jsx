// Portfolio Data
// Edit this file to update all content on the portfolio
import cvFilePath from "../files/Orias_Franxine_CV.pdf"
import resqwavePath from "../files/resqwave.png"
import resqwaveThumbnailPath from "../files/resqwaveThumbnail.jpg"
import jimirenePath from "../files/jimirene.png"
import jimireneThumbnailPath from "../files/jimireneThumbnail.jpg"
import navigazePath from "../files/navigaze.png"
import navigazeThumbnailPath from "../files/navigazeThumbnail.jpg"
import ctfPath from "../files/ctf.png"
import ctfThumbnailPath from "../files/ctfThumbnail.jpg"
import profile from "../files/profileSize.webp"

export const owner = {
    name: "Franxine Caraig Orias",
    initials: "FCO",
    role: "Backend Developer",
    location: "Caloocan City, PH",
    bio: "Build and Break",
    openToWork: true,
    avatarUrl: profile,
    resumeUrl: "/files/Orias_Franxine_CV.pdf"
};

export const skills = [
    { category: "Languages", items: ["C#", "Java / Spring Boot", "JavaScript", "TypeScript", "React.JS", "Node.JS" ] },
    { category: "Databases", items: ["SQL", "NoSQL", "MySQL", "PostgreSQL", "Supabase", "MongoDB"] },
    { category: "Tools and Technologies", items: ["Postman", "Docker", "Kali Linux", "Git/GitHub", "Firebase", "Nmap", "Wireshark", "BurpSuite", "DirBuster"] },
];

export const experience = [
    {
        company: "Maximum Solution Corporation",
        role: "IT Support Intern",
        period: "June - July 2026",
        highlights: [
            "Managed hardware infrastructure deployment and system upgrades for multiple departments, ensuring high availability and minimizing operational downtime.",
            "Administered enterprise-level email systems and handled complex technical troubleshooting to ensure consistent internal communication and system uptime. "
        ]
    },
    {
        company: "Dr. Jose N. Rodriguez Memorial Hospital and Sanitarium",
        role: "Network Intern",
        period: "July - September 2026",
        highlights: [
            "Configured and secured local network infrastructure for 40+ medical staff, implementing IP addressing schemes and firewall rules to protect sensitive clinical data. ",
            "Delivered Tier 1-2 technical support for clinical software and hardware environments, focusing on rapid diagnostic resolution to maintain critical hospital operations. "
        ]
    }
];

export const projects = [
    {
        id: "ResQWave",
        name: "ResQWave Disaster Communication & Response System",
        status: "production",
        description: "ResQWave is an emergency communication system designed to keep communities connected during disasters.",
        stack: ["Node.JS", "PostgreSQL", "TypeORM", "Redis", "Docker", "React.JS"],
        repoUrl: "https://github.com/Xine003/ResQWave",
        liveUrl: "https://resqwave.vercel.app/",
        screenshotUrl: resqwavePath, 
        thumbnailUrl: resqwaveThumbnailPath,
        year: 2025
    },
    {
        id: "Jimirene",
        name: "Jimirene Clinic Management System",
        status: "archived",
        description: "To be able to develop, JIMIRENE Clinic Management System using React, Java SpringBoot and MySQL in the span of 2 months",
        stack: ["Java / Spring Boot", "MySQL", "React.JS"],
        repoUrl: "https://github.com/Xine003/clinic-management-system",
        liveUrl: null,
        screenshotUrl: jimirenePath,
        thumbnailUrl: jimireneThumbnailPath,
        year: 2024
    },
    {
        id: "NaviGaze",
        name: "NaviGaze Mobile Indoor Navigation",
        status: "archived",
        description: "A mobile application software that uses an indoor positioning system that helps users find their way into specific rooms inside the premises of the University of Caloocan City.",
        stack: ["C#", "Unity", "Firebase", "AR"],
        repoUrl: "https://github.com/Xine003/NaviGaze-Indoor-Navigation",
        liveUrl: null,
        thumbnailUrl: navigazeThumbnailPath,
        screenshotUrl: navigazePath,
        year: 2024
    },
    {
        id: "CTF Write-Up",
        name: "CTF Personal Write-Up Blog",
        status: "production",
        description: "A CTF writeups website for the collection of walkthroughs, solutions and methodologies for Capture The Flag challenges.",
        stack: ["Ruby"],
        repoUrl: "https://github.com/Xine003/ctf",
        liveUrl: "https://xine003.github.io/ctf/",
        screenshotUrl: ctfPath,
        thumbnailUrl: ctfThumbnailPath,
        year: 2025
    },
];

export const blogs = [
    {
        id: 1,
        title: "My First Capture the Flag Competition: HackForGov2025 - CyberGuardians: Empowering Today's Defenders, Securing Tomorrow's Digital Nation",
        publishedAt: "2025-11-03",
        tags: ["Cybersecurity", "CTF"],
        excerpt: "7 Hours of 'Access Denied' (Until it Finally Clicked)",
        body: `Imagine a 7-hours digital marathon where you brain is the only thing running. Hack4Gov isn't just a test of what you know; It is a test of perseverance. There were moments where I hit a wall for two hours straight, trying one thing after another, failing and then starting over. It's that constant cycle of trial and error that really tests your grit. \n\nBut that's exactly where the fun is. There is no feeling quite like the rush you get when a solution finally clicks after hours of being stuck. Because this challenge only happens once a year, every minute felt incredibly high-stakes and exciting. Even when my brain felt fried by hours, the energy of the room kept me going. It was exhausting honestly, but easily one of the most rewarding experience I ever had.`,
        thumbnailUrl: ctfThumbnailPath
    }
];

export const cv = {
    filename: "Orias_Franxine_CV.pdf",
    updatedAt: "2026-03-26",
    sizeKb: 112,
    downloadUrl: cvFilePath
};

export const certificates = [
    {
        name: "Google Cybersecurity",
        issuer: "Google",
        year: 2025,
        url: "https://www.credly.com/badges/573f791f-71da-41af-ad92-7e4456dcc1c0/public_url"
    },
    {
        name: "Networking Basics",
        issuer: "Cisco",
        year: 2023,
        url: "https://www.credly.com/badges/cfa95757-4eed-424a-96a5-d97ab0e308e4/public_url"
    },
    {
        name: "Networking Devices and Initial Configurition",
        issuer: "Cisco",
        year: 2023,
        url: "https://www.credly.com/badges/71356472-9ee8-441f-84f2-bfaab8c57a92/public_url"
    },
    {
        name: "Introduction to Cybersecurity",
        issuer: "Cisco",
        year: 2023,
        url: "https://www.credly.com/badges/94f24f32-caae-4567-adb6-fc7b936e3887/public_url"
    },
    {
        name: "Cybersecurity Fundamentals",
        issuer: "IBM",
        year: 2024,
        url: "https://www.credly.com/badges/f2e38e7e-e628-4875-a0e7-47bbe05e767e/public_url"
    },
    {
        name: "Claude 101",
        issuer: "Anthropic",
        year: 2026,
        url: "http://verify.skilljar.com/c/ks3jzysgxp3u"
    },
    {
        name: "Building with Claude API",
        issuer: "Anthropic",
        year: 2026,
        url: "http://verify.skilljar.com/c/cqvmxpckbeze"
    }
];

export const socials = [
    {
        name: "GitHub",
        handle: "github.com/Xine003",
        url: "https://github.com/Xine003",
        color: "#1a1a1a",
        icon: "github"
    },
    {
        name: "LinkedIn",
        handle: "linkedin.com/in/franxine-orias",
        url: "https://www.linkedin.com/in/franxine-orias/",
        color: "#0A66C2",
        icon: "linkedin"
    }
];

// Sidebar Endpoint Registry
// Controls what appears in the sidebar and in what order

export const sidebarGroups = [
    {
        label: "Profile",
        endpoints: [
            { key: "about", method: "GET", path: "/about" },
            { key: "skills", method: "GET", path: "/skills" },
            { key: "experience", method: "GET", path: "/experience"},
        ]
    },
    {
        label: "Work",
        endpoints: [
            { key: "projects",   method: "GET",  path: "/projects" },
            ...projects.map((p) => ({
            key: `project-${p.id}`,
            method: "GET",
            path: `/projects/${p.id}`,
            indent: true,
        })),
            { key: "blogs",      method: "GET",  path: "/blogs" },
            ...blogs.map((b) => ({
            key: `blog-${b.id}`,
            method: "GET",
            path: `/blogs/${b.id}`,
            indent: true,
        })),
        ]
    },
    {
        label: "Files",
        endpoints: [
            { key: "cv", method: "GET", path: "/files/cv"},
            { key: "certificates", method: "GET", path: "/files/certificates"},
        ]
    },
    {
        label: "Connect",
        endpoints: [
            { key: "socials", method: "GET", path: "/socials"},
            { key: "contact", method: "POST", path: "contact"},
        ]
    }
];