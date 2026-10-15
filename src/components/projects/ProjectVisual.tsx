import type { Project } from "@/data/projects";

/**
 * Original illustrative SVG diagrams — clearly synthetic, fictional data only.
 * Each visual communicates its project's technical subject.
 */
export function ProjectVisual({ project }: { project: Project }) {
  const accent = "var(--accent)";
  if (project.visual === "facesnap") {
    return (
      <figure
        role="img"
        aria-label="Illustrative FaceSnap verification workflow diagram with fictional data: enrollment, live verification and review states"
        className="overflow-hidden rounded-[10px] border p-5"
        style={{ borderColor: "var(--line)", background: "var(--surface)" }}
      >
        <div className="mono-label mb-4" style={{ color: "var(--muted)" }}>
          Illustrative · fictional data
        </div>
        <svg viewBox="0 0 560 220" className="h-auto w-full" aria-hidden="true">
          {["Enroll", "Verify", "Review"].map((label, i) => {
            const x = 30 + i * 175;
            return (
              <g key={label}>
                <rect x={x} y={30} width={145} height={150} rx={10} fill="none" stroke="var(--line-strong)" strokeWidth={1.2} />
                <circle cx={x + 72} cy={80} r={26} fill="none" stroke={i === 1 ? "var(--accent)" : "var(--muted)"} strokeWidth={1.6} strokeDasharray={i === 2 ? "5 4" : undefined} />
                <circle cx={x + 64} cy={74} r={6} fill="none" stroke={i === 1 ? "var(--accent)" : "var(--muted)"} strokeWidth={1.4} />
                <circle cx={x + 80} cy={74} r={6} fill="none" stroke={i === 1 ? "var(--accent)" : "var(--muted)"} strokeWidth={1.4} />
                <path d={`M ${x + 58} 92 q 14 10 28 0`} fill="none" stroke={i === 1 ? "var(--accent)" : "var(--muted)"} strokeWidth={1.4} />
                <rect x={x + 20} y={120} width={105} height={10} rx={5} fill={i === 1 ? "var(--accent)" : "var(--line-strong)"} opacity={0.85} />
                <rect x={x + 35} y={136} width={75} height={8} rx={4} fill="var(--line-strong)" opacity={0.7} />
                <text x={x + 72} y={168} textAnchor="middle" fill="var(--ink-dim)" fontSize={12} fontFamily="monospace" letterSpacing={2}>
                  {label.toUpperCase()}
                </text>
                {i < 2 && (
                  <path d={`M ${x + 148} 105 h 24 m -6 -6 l 6 6 l -6 6`} stroke={accent} strokeWidth={1.6} fill="none" />
                )}
              </g>
            );
          })}
        </svg>
        <figcaption className="mt-3 text-xs" style={{ color: "var(--muted)" }}>
          Detection → verification → attendance recording are separate states; unknowns stay reviewable.
        </figcaption>
      </figure>
    );
  }

  if (project.visual === "phishing") {
    const rows = [
      { label: "Model probability", value: "0.87", w: "87%", strong: true },
      { label: "URL signals", value: "+0.21", w: "52%", strong: false },
      { label: "Sender mismatch", value: "+0.18", w: "44%", strong: false },
      { label: "Auth (SPF/DKIM)", value: "fail", w: "30%", strong: false },
    ];
    return (
      <figure
        role="img"
        aria-label="Illustrative phishing evidence breakdown with synthetic example data"
        className="overflow-hidden rounded-[10px] border p-5"
        style={{ borderColor: "var(--line)", background: "var(--surface)" }}
      >
        <div className="mono-label mb-4" style={{ color: "var(--muted)" }}>
          Illustrative · synthetic email
        </div>
        <div className="rounded-lg border p-4" style={{ borderColor: "var(--line)" }}>
          <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
            From: accounts-update@example-billing.net · Subject: “Action required: verify billing”
          </p>
          <p className="mt-2 inline-block rounded-full px-3 py-1 font-mono text-xs font-bold text-[#111315]" style={{ background: "var(--accent)" }}>
            VERDICT: REVIEW — SUSPICIOUS
          </p>
        </div>
        <div className="mt-4 space-y-3" aria-hidden="true">
          {rows.map((r) => (
            <div key={r.label}>
              <div className="mb-1 flex justify-between font-mono text-[11px]" style={{ color: "var(--muted)" }}>
                <span>{r.label}</span>
                <span>{r.value}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full" style={{ background: "var(--surface-2)" }}>
                <div className="h-full rounded-full" style={{ width: r.w, background: r.strong ? "var(--accent)" : "var(--titanium)" }} />
              </div>
            </div>
          ))}
        </div>
        <figcaption className="mt-3 text-xs" style={{ color: "var(--muted)" }}>
          Model probability is shown separately from heuristic risk contributions.
        </figcaption>
      </figure>
    );
  }

  if (project.visual === "aipfl") {
    return (
      <figure
        role="img"
        aria-label="Illustrative federated averaging architecture: two datasets feed simulated clients in one process, then aggregation and evaluation"
        className="overflow-hidden rounded-[10px] border p-5"
        style={{ borderColor: "var(--line)", background: "var(--surface)" }}
      >
        <div className="mono-label mb-4" style={{ color: "var(--muted)" }}>
          Illustrative · non-quantitative
        </div>
        <svg viewBox="0 0 560 230" className="h-auto w-full" aria-hidden="true">
          <g fontFamily="monospace" fontSize={11} fill="var(--ink-dim)">
            <rect x={20} y={30} width={120} height={60} rx={8} fill="none" stroke="var(--line-strong)" />
            <text x={80} y={56} textAnchor="middle">DATASET A</text>
            <text x={80} y={72} textAnchor="middle" fill="var(--muted)">IoT flows</text>
            <rect x={20} y={120} width={120} height={60} rx={8} fill="none" stroke="var(--line-strong)" />
            <text x={80} y={146} textAnchor="middle">DATASET B</text>
            <text x={80} y={162} textAnchor="middle" fill="var(--muted)">IoT flows</text>
            <rect x={200} y={55} width={180} height={110} rx={10} fill="none" stroke="var(--accent)" strokeDasharray="6 4" />
            <text x={290} y={78} textAnchor="middle" fill="var(--accent)">SIMULATED CLIENTS</text>
            <text x={290} y={94} textAnchor="middle" fill="var(--muted)">one process</text>
            <text x={290} y={112} textAnchor="middle">C1 · C2 · C3 · C4</text>
            <text x={290} y={130} textAnchor="middle" fill="var(--muted)">FedAvg rounds</text>
            <rect x={430} y={55} width={110} height={110} rx={10} fill="none" stroke="var(--line-strong)" />
            <text x={485} y={100} textAnchor="middle">AGGREGATE</text>
            <text x={485} y={118} textAnchor="middle" fill="var(--muted)">evaluate</text>
            <text x={485} y={136} textAnchor="middle">report</text>
            <g stroke="var(--muted)" strokeWidth={1.4} fill="none">
              <path d="M 140 60 H 196" />
              <path d="M 140 150 H 196" />
              <path d="M 380 110 H 426" />
            </g>
          </g>
        </svg>
        <figcaption className="mt-3 text-xs" style={{ color: "var(--muted)" }}>
          Client partitions are simulated in one process — no deployed clients or privacy guarantees implied.
        </figcaption>
      </figure>
    );
  }

  return (
    <figure
      role="img"
      aria-label="Illustrative OneBit multi-hop topology: device A relays through intermediate devices to device B"
      className="overflow-hidden rounded-[10px] border p-5"
      style={{ borderColor: "var(--line)", background: "var(--surface)" }}
    >
      <div className="mono-label mb-4" style={{ color: "var(--muted)" }}>
        Illustrative · Device A → relays → Device B
      </div>
      <svg viewBox="0 0 560 200" className="h-auto w-full" aria-hidden="true">
        <g fontFamily="monospace" fontSize={12} fill="var(--ink-dim)">
          {[
            { x: 50, label: "A", sub: "sender" },
            { x: 205, label: "R1", sub: "relay" },
            { x: 335, label: "R2", sub: "relay" },
            { x: 480, label: "B", sub: "receiver" },
          ].map((n) => (
            <g key={n.label}>
              <rect x={n.x - 34} y={55} width={68} height={90} rx={14} fill="none" stroke={n.label === "A" || n.label === "B" ? "var(--accent)" : "var(--line-strong)"} strokeWidth={1.6} />
              <text x={n.x} y={98} textAnchor="middle" fontSize={18} fontWeight="bold" fill={n.label === "A" || n.label === "B" ? "var(--accent)" : "var(--ink-dim)"}>
                {n.label}
              </text>
              <text x={n.x} y={118} textAnchor="middle" fontSize={10} fill="var(--muted)">{n.label === "A" ? "sender" : n.label === "B" ? "receiver" : "relay"}</text>
            </g>
          ))}
          <g stroke="var(--accent)" strokeWidth={1.6} strokeDasharray="6 5" fill="none">
            <path d="M 88 100 H 165" />
            <path d="M 243 100 H 295" />
            <path d="M 373 100 H 440" />
          </g>
          <g fontSize={10} fill="var(--muted)">
            <text x={126} y={88} textAnchor="middle">BLE</text>
            <text x={269} y={88} textAnchor="middle">store+forward</text>
            <text x={406} y={88} textAnchor="middle">BLE</text>
            <text x={280} y={170} textAnchor="middle">QR identity · encrypted sessions · local queue</text>
          </g>
        </g>
      </svg>
      <figcaption className="mt-3 text-xs" style={{ color: "var(--muted)" }}>
        Offline store-and-forward routing with local persistence; delivery is best-effort mesh behavior.
      </figcaption>
    </figure>
  );
}
