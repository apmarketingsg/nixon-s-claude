# World News Context Skill

**Version:** 1.0.0
**Type:** Internal engine — not user-facing
**Purpose:** Scan for recent world news relevant to the target company's industry, geography, and business model. Surface only what is directly relevant, and define exactly how to weave it into a cold email as a light, informed touch.

> This skill runs silently between company research and email writing. It is not a news briefing — it is a context layer that makes the email feel timely, informed, and grounded in the reader's world.

---

## When This Skill Runs

After researching the target company (their website, LinkedIn, recent news), and **before** writing the email, run this scan. The output is not shown separately — it feeds directly into the email's opening observation or supporting context.

---

## Step 1 — Derive Search Dimensions

From the target company profile, extract:

| Dimension | What to Look For |
|-----------|-----------------|
| **Industry / Sector** | Their primary business category (e.g., logistics, fintech, manufacturing, SaaS, healthcare) |
| **Geography** | HQ country + key operating markets + customer base locations |
| **Business model** | How they make money (e.g., B2B SaaS, physical supply chain, financial services, e-commerce) |
| **Customer segments** | Who their customers are — this can expose second-order news effects |
| **Exposure vectors** | What external forces directly affect their revenue: trade, regulation, energy prices, currency, labour |

---

## Step 2 — News Search Strategy

Search from **broad → narrow.** Start global, zoom into the most relevant level.

**Search order:**
1. **Global macro** — Interest rates, inflation, geopolitical tensions, commodity prices, major conflict zones
2. **Regional** — News specific to their country or operating region (political instability, regulatory changes, economic contractions, currency moves)
3. **Sector** — Industry-specific trends, regulatory changes, disruptions, notable competitor events (M&A, shutdowns, pivots)
4. **Company-adjacent** — News about their direct customers, key suppliers, or major competitors

**Time window:** Focus on the last 90 days. Ongoing situations (active conflicts, multi-year regulatory shifts) are always in scope regardless of recency.

**Search term patterns:**
- `[industry] + [region] + regulation 2024/2025`
- `[sector] market outlook + [quarter/year]`
- `trade [region] [sector]`
- `[country] economic outlook`
- `[competitor] + funding / layoffs / shutdown`
- `[their customer segment] spending trends`

---

## Step 3 — Relevance Scoring

For each piece of news found, score it across three axes:

### Axis A — Direct Business Impact
| Score | Meaning |
|-------|---------|
| **High** | Directly affects their revenue model, cost structure, compliance burden, or customer demand |
| **Medium** | Creates headwinds or tailwinds for their sector — they feel it but it's not existential |
| **Low** | Tangential — same general region or industry but unlikely to affect this company specifically |

### Axis B — Geographic Proximity
| Score | Meaning |
|-------|---------|
| **Direct** | Happening in their primary market or directly to their customers |
| **Adjacent** | Happening in a connected market they trade with or are exposed to |
| **Global** | Broad trend affecting all businesses but no specific regional angle |

### Axis C — Time Sensitivity
| Score | Meaning |
|-------|---------|
| **Urgent** | Active, right now — a live conflict, just-passed regulation, imminent announcement |
| **Current** | Developing over the last 1–3 months |
| **Trend** | Slower-moving but directionally clear |

### Use / Don't Use Decision Matrix

| Impact | Geography | Decision |
|--------|-----------|----------|
| High | Any | **Use** |
| Medium | Direct or Adjacent | **Use (light touch)** |
| Medium | Global only | **Skip** — too generic |
| Low | Any | **Skip** |

---

## Step 4 — Application Rules

### The Three Modes

#### Mode 1: Light Touch (default)
> One brief clause or sentence woven into the email. Most news falls here.

**Signals for light touch:**
- Macro trend affecting their sector
- Regional economic or regulatory shift
- Competitor or market-level event creating adjacent pressure

**How to write it:**
- `"Given [X] in [region/sector]..."` — implies awareness without dwelling
- `"With [trend] putting pressure on [area]..."` — frames the problem
- `"As [macro condition] reshapes [their space]..."` — positions you as an informed peer
- `"Most [their role] teams I speak with are already feeling [X]..."` — peer-level observation

**Limit:** One news reference per email. Pick the most relevant one and stop there.

---

#### Mode 2: Skip (news is not relevant)
> Do not mention it. A forced news reference is worse than no news reference.

**Skip when:**
- The news is generic and the reader already knows it (e.g., "interest rates are high")
- The connection to their specific business requires too many inferential steps
- The news is more than 3 months old and no longer active
- The news is negative in a way that reads as doom-and-gloom with no clear solution angle
- The news involves casualties, disasters, or sensitive events that feel inappropriate in a sales context

---

#### Mode 3: Full Hook (rare — only when 100% necessary)
> The news IS the hook. It opens the email and drives the entire observation.

**Only use when:**
- The news directly threatens or reshapes their core business model
- The relevance is so clear that not referencing it would make the email feel tone-deaf
- The news creates an urgent, specific problem that your product directly solves

**Examples of when Mode 3 applies:**
- Writing to an oil trading company during active Middle East conflict affecting supply routes
- Writing to a Southeast Asian logistics firm when major port sanctions are announced
- Writing to a UK fintech after a significant regulatory ruling changes compliance requirements
- Writing to a European manufacturer when energy price spikes directly affect their margins

**How to write Mode 3:**
- Open with the observation (the news fact, stated plainly — not dramatically)
- Connect it directly to the pain point in one sentence
- Pivot immediately to your product's relevance
- Do not dwell — one sentence on the news, then move on

---

## Step 5 — Tone for News References

The email should read like it came from a sharp, well-informed person — not a news anchor, a doomsday strategist, or a vendor capitalizing on bad news.

**Calibrate the tone:**

| Avoid | Use instead |
|-------|------------|
| "In light of the devastating..." | "Given what's happening in..." |
| "With the economy crashing..." | "As [sector] margins compress..." |
| "You must be worried about..." | "Most [role] teams I speak with are rethinking..." |
| "Now more than ever..." | (cut it entirely — it's filler) |
| Politicizing the news | State the business-level fact only |
| Speculating on outcomes | Reference what's already observable |

**Frame as:** An observant peer who noticed something relevant and is sharing it. The reader should think "huh, they're paying attention" — not "this person is using a news cycle to sell me something."

---

## Step 6 — Output of This Skill

Before writing the email, produce (internally — not shown in the final output):

```
NEWS CONTEXT ASSESSMENT
───────────────────────
Company: [name]
Industry: [sector]
Geography: [region]

Relevant news found:
1. [News item] — Impact: [High/Med/Low] | Geography: [Direct/Adjacent/Global] | Mode: [Light/Hook/Skip]
2. [News item] — ...
3. ...

Selected for use: [item] — [one sentence on how it will be woven in]
Mode: [Light Touch / Full Hook / None]
```

Then use this assessment to write the email. The assessment itself is not shown in the final output to the user.

---

## Integration with Cold Email Skill

This skill plugs into the cold-email workflow between:
- **After:** Company research (website, LinkedIn, job postings, signals)
- **Before:** Choosing the hook and writing the email

The news context either:
- Becomes the hook (Mode 3)
- Adds one supporting clause to the opening observation (Mode 1)
- Is discarded (Mode 2)

**Never:** Mention it in the subject line. Never reference it in the CTA. Never make it the product pitch.

---

## Quick Reference Card

```
Run when:   After company research, before writing
Output:     0 or 1 news reference in the email body
Depth:      Light touch by default; full hook only if existentially relevant
Tone:       Observant peer — not news anchor, not doomsday vendor
Limit:      One reference per email, maximum
Skip if:    Generic, too old, insensitive, or connection is a stretch
```
