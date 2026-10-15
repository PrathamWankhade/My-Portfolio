/**
 * Production smoke test: boots `next start`, checks every public route and
 * the résumé asset, asserts key content markers, and asserts that no internal
 * review phrasing leaks into rendered HTML.
 *
 * Usage: npm run build && npm run smoke
 */
import { spawn, spawnSync } from "node:child_process";

const PORT = Number(process.env.SMOKE_PORT ?? 3104);
const BASE = `http://localhost:${PORT}`;

const routes = [
  "/",
  "/work/facesnap",
  "/work/phishing-detection",
  "/work/aipfl-ids",
  "/work/onebit",
  "/files/pratham-wankhade-resume.pdf",
  "/og.svg",
  "/robots.txt",
  "/sitemap.xml",
];

const mustContain = {
  "/": [
    "security tools and resilient systems",
    "FaceSnap",
    "AIPFL-IDS",
    "OneBit",
    "prathamwankhade2004@gmail.com",
    "pratham-wankhade-resume.pdf",
    "two distinct numbers",
  ],
  "/work/aipfl-ids": ["one process"],
  "/work/onebit": ["best-effort"],
};

const mustNotContainEverywhere = [
  "vary across",
  "withheld from public",
  "formal citation",
  "supports it",
  "confirm against the final",
];

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

/**
 * Kill the whole process tree. Plain proc.kill() on Windows only kills the
 * `npx` wrapper, orphaning next-server and leaving the port occupied — which
 * makes later runs test a stale server instead of the fresh build.
 */
function killTree(proc) {
  try {
    if (process.platform === "win32" && proc.pid) {
      spawnSync("taskkill", ["/pid", String(proc.pid), "/T", "/F"], { stdio: "ignore" });
      return;
    }
  } catch {
    /* fall through to proc.kill */
  }
  try {
    proc.kill();
  } catch {
    /* already exited */
  }
}

async function waitForServer(proc, timeoutMs = 60000) {
  const start = Date.now();
  for (;;) {
    try {
      const res = await fetch(`${BASE}/`);
      if (res.ok) return;
    } catch {
      /* not up yet */
    }
    if (proc.exitCode !== null) throw new Error("server exited before becoming ready");
    if (Date.now() - start > timeoutMs) throw new Error("server did not start in time");
    await sleep(1000);
  }
}

async function main() {
  const proc = spawn("npx", ["next", "start", "--port", String(PORT)], {
    stdio: "ignore",
    shell: process.platform === "win32",
  });
  let failures = 0;
  const fail = (msg) => {
    failures += 1;
    console.error(`FAIL: ${msg}`);
  };
  try {
    await waitForServer(proc);
    const bodies = {};
    for (const route of routes) {
      try {
        const res = await fetch(BASE + route);
        if (res.status !== 200) {
          fail(`${route} -> HTTP ${res.status}`);
          continue;
        }
        console.log(`OK ${res.status} ${route}`);
        bodies[route] = await res.text();
      } catch (e) {
        fail(`${route} -> ${e.message}`);
      }
    }
    for (const [route, markers] of Object.entries(mustContain)) {
      const body = bodies[route] ?? "";
      for (const m of markers) {
        if (body.includes(m)) console.log(`OK content ${route}: "${m}"`);
        else fail(`missing "${m}" on ${route}`);
      }
    }
    for (const body of Object.values(bodies)) {
      for (const m of mustNotContainEverywhere) {
        if (body.includes(m)) fail(`editorial leak: "${m}"`);
      }
    }
  } finally {
    killTree(proc);
    await sleep(2000);
  }
  if (failures > 0) {
    console.error(`${failures} smoke check(s) failed`);
    process.exit(1);
  }
  console.log("Smoke test passed");
}

main().catch((e) => {
  console.error(`FAIL: ${e.message}`);
  process.exit(1);
});
