# dev-tools branch (not published)

Tests and the handoff doc for the Usap Tayo app on `main`. Check this branch out as a separate worktree next to the app:

```bash
git -C /path/to/tagalog worktree add /path/to/devtools dev-tools
```

| File | Purpose | Run |
|---|---|---|
| `HANDOFF.md` | Everything a new session needs: rules, architecture, recipe, status, next steps, pitfalls | read first |
| `tests/data_check.js` | Data integrity (quiz indexes, phrase references, stemmer, audio keys and coverage) | `node tests/data_check.js /path/to/tagalog` → `DATA OK` |
| `tests/smoke.py` | Playwright browser test: 41 routes × desktop/phone, key interactions, PDFs for every handout preset | serve the app on :8765, then `python3 tests/smoke.py --base http://localhost:8765/index.html --out /tmp/usap-test` → `SMOKE OK` |

Requirements: Node 18+, Python 3 with `playwright` and Chromium, optional `pdfinfo` (poppler) for page counts. Paths are passed as arguments; nothing is hard-coded.
