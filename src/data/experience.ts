export interface ExperienceItem {
  employer: string;
  role: string;
  dates: string;
  location?: string;
  points: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    employer: "SS Infotech",
    role: "Software Development Intern",
    dates: "Jul 2025 — Oct 2025",
    points: [
      "Built and iterated on web application features with the development team.",
      "Contributed across interfaces and supporting backend work toward releases.",
    ],
    tags: ["Web development", "APIs", "Team delivery"],
  },
  {
    employer: "AD Infocom Systems",
    role: "Web Development Intern",
    dates: "Dec 2024 — Jan 2025",
    points: [
      "Implemented website and interface modules within project timelines.",
      "Incorporated review feedback across delivery iterations.",
    ],
    tags: ["Frontend", "Web interfaces", "Delivery"],
  },
];

export const leadership = {
  title: "Class Representative / Project Team Lead",
  note: "Coordinated team tasks, timelines and delivery across academic project builds.",
};
