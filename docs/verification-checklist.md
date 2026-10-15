# Verification checklist — PRIVATE (do not publish, do not link from UI)

This file is the single home for unresolved facts. Nothing here may appear
verbatim on the public site. Public components must show only confirmed facts
and omit the rest silently.

Next.js only serves `public/` — this `docs/` file is never deployed as a page.

## 1. Résumé (highest priority)
- [ ] Choose ONE final résumé PDF; overwrite `public/files/pratham-wankhade-resume.pdf`.
- [ ] Confirm internship titles: SS Infotech (Jul–Oct 2025) and AD Infocom
      Systems (Dec 2024–Jan 2025) vary across résumé drafts. Current public
      titles ("Software Development Intern", "Web Development Intern") are
      reasonable defaults, NOT confirmed facts.
- [ ] Confirm contribution bullets against the chosen résumé; current public
      bullets are generic and should be replaced with résumé-supported specifics.
- [ ] Confirm Class Representative / Project Team Lead entry.

## 2. Education numbers
- [ ] A résumé draft lists CGPA 9.10. Confirm CGPA vs semester SGPA against the
      final résumé before publishing ANY number. Public UI currently shows only
      "First Class with Distinction" (provisional certificate, Summer 2026).

## 3. Recognition
- [ ] CyberHack 2025 Top 20 finalist "under the Cyber Police Division" — confirm
      exact naming/organizer before formal citation.
- [ ] ISRO Geodata Processing Using Python & ML — confirm dates/certificate.
- [ ] AWS Academy Machine Learning Foundations — confirm credential record.

## 4. Research / publication
- [ ] FaceSnap publication listed in a résumé draft. Until title, authors, venue,
      date and accessible URL are verified, public UI must say "project research"
      only. Never invent journal / DOI / conference.

## 5. Projects (ongoing)
- [ ] Re-check each repo README before claiming: stacks, FaceSnap thresholds,
      phishing evaluation metrics + methodology link, AIPFL-IDS simulated
      federation wording, OneBit implemented-vs-designed scope.
- [ ] Prefer real repo screenshots in `public/images/` over illustrations when
      available; never present mock visuals as real product (all current visuals
      are labeled illustrative / synthetic).

## 6. Site config
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the real production domain (canonical + OG).
- [ ] Confirm positioning order (balanced vs security-first project ordering).
- [ ] Confirm portrait vs abstract hero artwork.
