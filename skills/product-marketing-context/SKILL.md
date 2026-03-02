# Product Marketing Context Skill

**Version:** 1.0.0
**Purpose:** Create and maintain `.agents/product-marketing-context.md` — the foundational marketing document that other skills (like cold-email) reference automatically.

---

## Overview

This skill guides you in building a comprehensive product marketing context document. It captures positioning, messaging, customer language, and competitive insight that makes every downstream marketing task (emails, copy, ads) faster and sharper.

**Output file:** `.agents/product-marketing-context.md`

---

## Workflow

### Step 1 — Check for existing context

1. Check if `.agents/product-marketing-context.md` exists
2. If it exists: read it, summarize what's there, ask which sections need updating
3. If missing: offer two approaches:
   - **Auto-draft from codebase** (recommended): Study the repo, README, landing pages, package.json to create a V1 draft
   - **Start from scratch**: Walk through sections conversationally

### Step 2 — Gather information

**Critical instruction:** Push for verbatim customer language. Exact phrases are more valuable than polished descriptions.

For each section, walk conversationally:
- Explain what you're capturing
- Ask the relevant question
- Confirm accuracy
- Move on

**Don't dump a long list of questions at once.** One section at a time.

---

## Sections to Capture

### 1. Product Overview
- One-line description
- What it does (2–3 sentences)
- Product category (how customers search for it)
- Product type: SaaS / Marketplace / Agency / E-commerce / Other
- Business model and pricing

### 2. Target Audience
- Target company type (industry, size, stage)
- Decision-maker roles and departments
- Primary use case
- Jobs to be done (2–3 things customers "hire" you for)
- Specific scenarios and triggers

### 3. Personas (B2B)

| Role | What They Care About | Their Challenges | Promised Value |
|------|---------------------|-----------------|----------------|
| User | | | |
| Champion | | | |
| Decision Maker | | | |
| Financial Buyer | | | |
| Technical Influencer | | | |

### 4. Problems & Pain Points
- Core challenge before finding your solution
- Why current solutions fall short
- Financial and opportunity costs
- Emotional tension (stress, fear, doubt)

### 5. Competitive Landscape
- Direct competitors (same solution, same problem)
- Secondary competitors (different solution, same problem)
- Indirect competitors (conflicting approaches)
- How each falls short

### 6. Differentiation
- Key differentiators alternatives lack
- How you solve it differently
- Benefits of your approach
- Why customers choose you

### 7. Objections & Anti-Personas

| Objection | Response |
|-----------|----------|
| | |

Who is NOT a good fit:

### 8. Switching Dynamics (Four Forces)
- **Push:** frustrations with current solution that drive them away
- **Pull:** what makes your offering attractive
- **Habit:** what keeps them stuck with the status quo
- **Anxiety:** worries about switching

### 9. Customer Language
- Verbatim descriptions of the problem
- Verbatim descriptions of your solution
- Words to use
- Words to avoid
- Product-specific terminology glossary

### 10. Brand Voice
- Tone (professional, casual, playful, direct, technical)
- Communication style
- Brand personality (3–5 adjectives)

### 11. Proof Points
- Key metrics to cite
- Notable customers / logos
- Testimonial snippets
- Value themes with supporting evidence

### 12. Goals
- Primary business objective
- Key conversion action
- Current metrics

---

## Step 3 — Create the Document

After gathering info, create `.agents/product-marketing-context.md` using structured sections with markdown tables for personas, objections, glossary, and value themes.

## Step 4 — Confirm and Save

- Display the completed document
- Ask for adjustments
- Save to `.agents/product-marketing-context.md`
- Confirm: "Other marketing skills will now reference this automatically."

---

## Tips

- **Be specific:** Ask "What's the #1 frustration?" not "What are their problems?"
- **Capture exact words:** "I waste half my Monday on this" beats "time-consuming admin"
- **Ask for examples:** "Can you give me a specific example?" unlocks better answers
- **Validate as you go:** Confirm each section before moving to the next
- **Skip irrelevant sections:** e.g. skip Personas for B2C products
