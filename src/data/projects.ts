export type ProjectSlug =
  | "facesnap"
  | "phishing-detection"
  | "aipfl-ids"
  | "onebit";

export interface Project {
  slug: ProjectSlug;
  index: string;
  title: string;
  category: string;
  summary: string;
  /** One-line engineering signal: the decision or constraint that defines the build. */
  signal: string;
  stack: string[];
  repo: string;
  status: string;
  visual: "facesnap" | "phishing" | "aipfl" | "onebit";
  motivation: string;
  goals: string[];
  architecture: string[];
  decisions: string[];
  workflows: string[];
  validation: string;
  limitations: string[];
  future: string[];
}

export const projects: Project[] = [
  {
    slug: "facesnap",
    index: "01",
    title: "FaceSnap",
    category: "Computer vision / Applied AI",
    signal: "Detection, verification and attendance are separate states — unknowns stay reviewable.",
    summary:
      "Guided enrollment, live verification and batch attendance workflows for college classrooms — with detection, identity verification and attendance recording kept as separate, reviewable states.",
    stack: ["Next.js", "FastAPI", "InsightFace / ArcFace", "ONNX Runtime", "Qdrant", "Firebase"],
    repo: "https://github.com/PrathamWankhade/FaceSnap",
    status: "Working prototype",
    visual: "facesnap",
    motivation:
      "Manual attendance is slow, error-prone and easy to misuse. FaceSnap explores whether face-based verification can make classroom attendance faster without silently creating records it cannot defend.",
    goals: [
      "Separate detection, identity verification and attendance recording into explicit states",
      "Support guided enrollment, live verification, batch capture and group-photo processing",
      "Keep unknown identities reviewable instead of auto-approving them",
      "Keep the pipeline inspectable end to end",
    ],
    architecture: [
      "Next.js client for enrollment, verification and review queues",
      "FastAPI service for detection, embedding and matching",
      "InsightFace / ArcFace embeddings executed with ONNX Runtime",
      "Qdrant for vector search over enrolled identities",
      "Firebase for session and record management",
    ],
    decisions: [
      "Verification thresholds are implementation settings, not proof of reliability — they are exposed, not hidden",
      "Attendance is only written when verification and session checks both pass",
      "Unknown faces land in a review queue with the source image and score attached",
    ],
    workflows: [
      "Enroll → guided capture → embedding stored",
      "Verify → live frame → match candidate → confirm or queue for review",
      "Batch → group photo → per-face candidates → reviewer confirms",
    ],
    validation:
      "Validation is repository-reported and workflow-based: enrollment, verification and review paths are exercised as described in the project documentation. No claim of perfect reliability is made.",
    limitations: [
      "Accuracy depends on lighting, pose, camera quality and enrollment coverage",
      "Thresholds need per-deployment tuning; defaults are not guarantees",
      "Biometric data handling needs a formal privacy review before any real deployment",
    ],
    future: [
      "Liveness checks",
      "Better review tooling and audit exports",
      "Documented evaluation protocol with a fixed test set",
    ],
  },
  {
    slug: "phishing-detection",
    index: "02",
    title: "Email Phishing Detection System",
    category: "Cybersecurity / Applied ML",
    signal: "Model probability and heuristic risk are reported as two distinct numbers.",
    summary:
      "Classifier output combined with URL, sender, authentication and business-email-compromise signals — presented as an evidence breakdown, not a single unexplained verdict.",
    stack: ["React", "Vite", "FastAPI", "scikit-learn", "NLP", "URL & sender analysis"],
    repo: "https://github.com/PrathamWankhade/email-phishing-detection-system",
    status: "Working prototype",
    visual: "phishing",
    motivation:
      "Phishing succeeds because single signals are easy to miss. This system combines a text classifier with independent heuristic checks so each verdict can show its evidence.",
    goals: [
      "Distinguish model phishing probability from heuristic risk score",
      "Surface URL, sender-identity, authentication and BEC indicators separately",
      "Return an evidence breakdown a reviewer can actually audit",
      "Keep examples synthetic and anonymized in all visuals",
    ],
    architecture: [
      "React + Vite client for submission and evidence panels",
      "FastAPI service for inference and signal extraction",
      "scikit-learn + NLP pipeline for message classification",
      "Sender, URL, authentication and BEC heuristic layer",
      "Combined decision view with per-signal contributions",
    ],
    decisions: [
      "Model probability and heuristic risk are shown as two numbers with different meanings",
      "No single threshold is presented as a real-world safety guarantee",
      "All demo emails in visuals are synthetic and anonymized",
    ],
    workflows: [
      "Submit message → extract text, URLs, sender metadata",
      "Classify text → compute model phishing probability",
      "Score heuristics → combine into a reviewable evidence panel",
    ],
    validation:
      "Any metrics shown are reported evaluation from the repository's own methodology, linked from the repository — not a claim about real-world detection rates.",
    limitations: [
      "Evaluation data may not reflect current or targeted phishing",
      "Adversarial and novel campaigns can evade both model and heuristics",
      "Authentication signals depend on available headers and DNS context",
    ],
    future: [
      "Attachment and QR-code analysis",
      "Calibrated confidence with abstention",
      "Longitudinal evaluation on fresh samples",
    ],
  },
  {
    slug: "aipfl-ids",
    index: "03",
    title: "AIPFL-IDS",
    category: "ML research / Cybersecurity",
    signal: "Federated averaging simulated in one process — no deployed clients implied.",
    summary:
      "Intrusion-detection research prototype for IoT network traffic with a simulated federated-averaging workflow — client partitions run inside one process, stated plainly.",
    stack: ["Python", "TensorFlow", "Flask", "Next.js", "IoT intrusion datasets"],
    repo: "https://github.com/PrathamWankhade/AIPFL-IDS",
    status: "Research prototype · simulated federation",
    visual: "aipfl",
    motivation:
      "IoT traffic is a natural fit for collaborative learning research, but real federation is hard to reproduce. AIPFL-IDS studies the pipeline — preparation, training, aggregation, evaluation — with the simulation boundary made explicit.",
    goals: [
      "Document dataset preparation and preprocessing for two IoT datasets",
      "Build a reproducible model training and evaluation pipeline",
      "Simulate federated averaging across partitioned clients in one process",
      "Avoid implying deployed clients or formal privacy guarantees",
    ],
    architecture: [
      "Dataset preparation and preprocessing stage",
      "TensorFlow model pipeline with per-round training",
      "Simulated clients partitioned inside a single process",
      "Federated-averaging aggregation step",
      "Evaluation and reporting, with Flask + Next.js surface",
    ],
    decisions: [
      "Clients are simulated partitions, as the repository states — not independent devices",
      "No claim of secure aggregation, differential privacy or formal privacy guarantees",
      "Diagrams are illustrative and non-quantitative unless sourced from repository charts",
    ],
    workflows: [
      "Prepare datasets → preprocess flows and labels",
      "Partition → train per-client → aggregate (FedAvg)",
      "Evaluate centrally → report per the repository methodology",
    ],
    validation:
      "Results follow the repository's reported evaluation only. They describe the simulated setup — they do not transfer to deployed federated environments.",
    limitations: [
      "Single-process simulation cannot capture network, device or non-IID deployment effects",
      "No formal privacy analysis is included",
      "Dataset age and scope limit generalization claims",
    ],
    future: [
      "Real multi-node federation experiment",
      "Non-IID robustness study",
      "Privacy accounting if privacy mechanisms are added",
    ],
  },
  {
    slug: "onebit",
    index: "04",
    title: "OneBit",
    category: "Systems engineering / Offline communication",
    signal: "Store-and-forward messaging over BLE — best-effort delivery, no audit claims.",
    summary:
      "Offline peer-to-peer messaging over Bluetooth LE with multi-hop store-and-forward routing, local persistence, QR identity exchange and encrypted sessions.",
    stack: ["Flutter", "Dart", "Riverpod", "Drift / SQLite", "Bluetooth LE", "Encrypted sessions"],
    repo: "https://github.com/PrathamWankhade/OneBit",
    status: "In development · scope per repository",
    visual: "onebit",
    motivation:
      "Connectivity cannot be assumed everywhere. OneBit is designed for places and moments where the network is absent — messages move device to device until they can be delivered.",
    goals: [
      "Enable messaging with no internet dependency",
      "Route messages across relay devices (A → relays → B)",
      "Persist queues locally across restarts",
      "Exchange identities over QR and protect sessions with encryption",
    ],
    architecture: [
      "Flutter + Riverpod client with local-first state",
      "Drift / SQLite for durable queues and message history",
      "Bluetooth LE discovery, connection and transfer",
      "Store-and-forward relay with routing metadata",
      "Encrypted sessions after QR-based identity exchange",
    ],
    decisions: [
      "Features are described as implemented or designed according to current repository evidence",
      "Delivery is best-effort mesh behavior, not guaranteed in every environment",
      "Cryptography uses standard libraries; no independent audit is claimed",
    ],
    workflows: [
      "Exchange identity via QR → discover over BLE",
      "Queue message locally → forward through relays",
      "Relay stores, carries, forwards → recipient decrypts and persists",
    ],
    validation:
      "Validation is repository- and design-based at this stage. Behavior claims are scoped to what the repository currently demonstrates.",
    limitations: [
      "BLE range, throughput and OS backgrounding constrain real-world behavior",
      "Routing overhead grows with hops and queue depth",
      "Security properties need formal review before sensitive use",
    ],
    future: [
      "Congestion-aware forwarding",
      "Battery-aware relay policies",
      "Documented field test with measured delivery rates",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
