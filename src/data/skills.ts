export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Programming",
    items: ["Python", "SQL", "C++", "Bash"],
  },
  {
    label: "Applied AI",
    items: [
      "Machine learning",
      "NLP",
      "Computer vision",
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "OpenCV",
      "Data analysis",
      "Model evaluation",
    ],
  },
  {
    label: "Web and tools",
    items: [
      "FastAPI",
      "Next.js",
      "React",
      "REST APIs",
      "Firebase",
      "Databases",
      "Git",
      "Docker",
      "Linux",
    ],
  },
  {
    label: "Security and systems",
    items: [
      "Phishing analysis",
      "Intrusion detection",
      "Security fundamentals",
      "Applied crypto building blocks",
      "Bluetooth LE",
      "Local persistence",
      "Message routing",
      "Application architecture",
    ],
  },
];
