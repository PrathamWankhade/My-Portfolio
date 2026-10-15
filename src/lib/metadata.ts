export const siteConfig = {
  name: "Pratham Wankhade",
  role: "Software Engineer · Applied AI · Cybersecurity",
  title: "Pratham Wankhade — Software Engineer, Applied AI & Security",
  description:
    "Pratham Wankhade builds intelligent software systems across applied AI, computer vision, cybersecurity and connected systems — from research prototypes to full-stack applications.",
  email: "prathamwankhade2004@gmail.com",
  location: "Amravati, Maharashtra, India",
  github: "https://github.com/PrathamWankhade",
  linkedin: "https://www.linkedin.com/in/pratham-wankhade",
  resumePath: "/files/pratham-wankhade-resume.pdf",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://prathamwankhade.github.io",
};

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pratham Wankhade",
    jobTitle: "Software Engineer",
    email: `mailto:${siteConfig.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Amravati",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    url: siteConfig.baseUrl,
    sameAs: [siteConfig.github, siteConfig.linkedin],
    knowsAbout: [
      "Software Engineering",
      "Applied AI",
      "Computer Vision",
      "Cybersecurity",
      "Machine Learning",
      "Systems Engineering",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.title,
    url: siteConfig.baseUrl,
    author: { "@type": "Person", name: "Pratham Wankhade" },
  };
}
