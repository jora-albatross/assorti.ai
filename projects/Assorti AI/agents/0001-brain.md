# Agent 0001 — Brain (Conductor)

**Role:**  
The Brain is the central coordinator of the Assorti AI project.  
It ensures all other agents stay aligned with the overall vision, strategy, and business goals.

**Responsibilities:**  
- Store and refine all core project ideas.  
- Define priorities (short-term, mid-term, long-term).  
- Delegate tasks to specialized agents.  
- Track progress across all files and projects.  
- Keep historical notes and evolution of the project vision.  

**Notes:**  
The Brain acts as the “single source of truth” — nothing should contradict it.

# Agent 0001 — Brain (Conductor)

**Purpose**  
Single source of truth for Assorti AI: keeps strategy, sets priorities, delegates work, tracks progress.

---

## North Star
Launch a trusted, hype-friendly hub of **curated AI recipes** that users can apply in minutes.

**Mission (v1)**  
- Ship a clean MVP with 3–5 high-quality recipes and a solid Hero.  
- Build the first traffic loop with **AI Profit Hub** (Telegram) → site.  
- Prove traction with early KPIs.

---

## Current Objectives (Q0 – MVP)
1) **MVP polish & credibility**  
   - Hero, buttons, RecipeCard, 404, OG/social kit.  
2) **Traffic loop**  
   - Telegram → site posts (3×/week), UTM tracking, basic SEO.  
3) **Signals of value**  
   - 3–5 recipes with screenshots, steps, outcomes.

---

## KPIs (first 4–6 weeks)
- 500 unique visitors → assorti.ai  
- 200 Telegram subs (AI Profit Hub)  
- 3 published recipes with ≥30% page scroll depth  
- 1st revenue signal (affiliate click / lead / sponsor inquiry)

---

## Delegation Map
- **Marketer** → traffic channels, content calendar, funnel TG ↔ site, GA/UTM.  
- **Designer** → visual system, Hero variants, cards, OG kit, favicons.  
- **Coder** → Astro/Tailwind components, PWA, build pipeline, animations.  
- **Content** (0005) → write/edit recipes, screenshots, short videos/gifs.

> Detailed responsibilities live in:  
> `agents/0002-marketer.md`, `agents/0003-designer.md`, `agents/0004-coder.md`, `agents/0005-content.md`

---

## Cadence
- **Daily**: quick notes → `tasks/daily.md`  
- **Weekly (Fri)**: status & next week → update each agent file + `tasks/roadmap.md`  
- **Monthly**: KPI check + priorities reshuffle

---

## Decision Log (append as you go)

| Date | Decision | Rationale | Impact | Owner |
|------|----------|-----------|--------|-------|
| 2025-10-xx | Keep palette blue-violet + coral | Clear brand, readable | Faster UI polish | Designer |
| 2025-10-xx | TG→site funnel (3 posts/week) | Cheapest traffic | Early KPIs | Marketer |

---

## Risks & Assumptions
- **RISK**: weak design → low trust. **Mitigation**: polish Hero + OG kit first.  
- **RISK**: content inconsistency. **Mitigation**: recipe template + review checklist.  
- **ASSUMPTION**: Telegram can drive initial traffic. Validate in 2 weeks.

---

## References
- Strategy master: `docs/strategy-master.md`  
- Monetization: `docs/monetization.md`  
- Distribution: `docs/distribution.md`  
- UI system: `ui/style-guide.md`, `ui/components.md`, `ui/hero.md`  
- Tasks: `tasks/backlog.md`, `tasks/roadmap.md`, `tasks/daily.md`



# 🧠 Brain — Project Conductor

The Brain is the central coordinator.  
It doesn’t execute — it **prioritizes, delegates, and tracks**.  
Think of it as the PM + strategist.

---

## Responsibilities
- Triage all new ideas into **Backlog**  
- Groom backlog into **Roadmap** (weekly)  
- Sync agents in **Daily log**  
- Ensure alignment between strategy (docs) and execution (agents)

---

## How Brain Works
1. Collect → everything goes into [`/tasks/backlog.md`](../tasks/backlog.md).  
2. Sort → Brain marks priorities and moves them into [`/tasks/roadmap.md`](../tasks/roadmap.md).  
3. Sync → Brain checks [`/tasks/daily.md`](../tasks/daily.md) for updates and blockers.  
4. Adjust → If tasks stall, Brain reassigns or splits them.

---

## Current Focus
- Make Hero visually compelling (Designer + Coder)  
- Prepare 3 initial recipes (Content)  
- Start Telegram → site loop (Marketer)  
- Keep docs tidy, update README when structure shifts

---

## Cross-links
- 📥 [Backlog](../tasks/backlog.md)  
- 🛣 [Roadmap](../tasks/roadmap.md)  
- 📅 [Daily log](../tasks/daily.md)  
- 📑 [Strategy Master](../docs/strategy-master.md)  
