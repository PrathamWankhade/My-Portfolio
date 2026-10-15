export interface SkillGroup {
  label: string;
  items: string[];
  note?: string;
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Programming",
    items: ["Python", "SQL", "C++", "Bash"],
  },
  {
    label: "Applied AI",
    items: ["Machine learning", "NLP", "Computer vision", "Data analysis", "Model evaluation"],
  },
  {
    label: "Frameworks & tools",
    items: ["TensorFlow", "PyTorch", "OpenCV", "scikit-learn", "Git", "Docker", "Linux"],
  },
  {
    label: "Backend / Web",
    items: ["FastAPI", "Next.js", "React", "REST APIs", "Firebase", "Databases"],
  },
  {
    label: "Security",
    items: ["Phishing analysis", "Intrusion detection", "Security fundamentals", "Applied crypto building blocks"],
  },
  {
    label: "Systems",
    items: ["Bluetooth LE", "Local persistence", "Message routing", "Application architecture"],
  },
];
