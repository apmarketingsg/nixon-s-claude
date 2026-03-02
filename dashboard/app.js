// ── Field IDs to persist in localStorage ──
const FIELDS = [
  'productName', 'oneLiner', 'whatItDoes', 'productType', 'pricingModel',
  'targetCompanyType', 'decisionMaker', 'primaryUseCase',
  'painPoint1', 'painPoint2', 'painPoint3', 'currentSolutionFail',
  'keyDiff', 'proofPoints', 'competitors',
  'brandTone', 'avoidWords', 'customerLanguage',
  'companyName', 'companyWebsite', 'companyLinkedIn', 'knownContext'
];

const STORAGE_KEY = 'coldEmailDashboard_v1';

// ── Save / Load ──
function saveForm() {
  const data = {};
  FIELDS.forEach(id => {
    const el = document.getElementById(id);
    if (el) data[id] = el.value;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  showSaveIndicator();
}

function loadForm() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;
  try {
    const data = JSON.parse(raw);
    FIELDS.forEach(id => {
      const el = document.getElementById(id);
      if (el && data[id] !== undefined) el.value = data[id];
    });
  } catch (_) {}
}

// ── Autosave indicator ──
let saveTimer;
function showSaveIndicator() {
  let el = document.getElementById('saveIndicator');
  if (!el) {
    el = document.createElement('div');
    el.id = 'saveIndicator';
    el.textContent = '✓ Saved';
    document.body.appendChild(el);
  }
  el.classList.add('visible');
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => el.classList.remove('visible'), 1800);
}

// ── Attach listeners ──
function attachListeners() {
  FIELDS.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', saveForm);
    el.addEventListener('change', saveForm);
  });
}

// ── Prompt Compiler ──
function val(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : '';
}

function line(label, value) {
  return value ? `- **${label}:** ${value}` : '';
}

function compilePrompt() {
  const company = val('companyName');
  if (!company) {
    alert('Please enter a target company name before drafting.');
    document.getElementById('companyName').focus();
    return null;
  }

  const productName      = val('productName')        || '[Your Product]';
  const oneLiner         = val('oneLiner');
  const whatItDoes       = val('whatItDoes');
  const productType      = val('productType');
  const pricingModel     = val('pricingModel');
  const targetCompType   = val('targetCompanyType');
  const decisionMaker    = val('decisionMaker');
  const primaryUseCase   = val('primaryUseCase');
  const painPoint1       = val('painPoint1');
  const painPoint2       = val('painPoint2');
  const painPoint3       = val('painPoint3');
  const currentFail      = val('currentSolutionFail');
  const keyDiff          = val('keyDiff');
  const proofPoints      = val('proofPoints');
  const competitors      = val('competitors');
  const brandTone        = val('brandTone');
  const avoidWords       = val('avoidWords');
  const customerLang     = val('customerLanguage');
  const website          = val('companyWebsite');
  const linkedin         = val('companyLinkedIn');
  const knownContext     = val('knownContext');

  // Build pain points list
  const painPoints = [painPoint1, painPoint2, painPoint3].filter(Boolean);
  const painList = painPoints.length
    ? painPoints.map(p => `  - ${p}`).join('\n')
    : '  - (not specified)';

  // Build product context block
  const productBlock = [
    line('Product', productName),
    oneLiner        ? line('One-liner', oneLiner)                       : '',
    whatItDoes      ? `- **What it does:** ${whatItDoes}`               : '',
    productType     ? line('Product type', productType)                 : '',
    pricingModel    ? line('Pricing', pricingModel)                     : '',
    targetCompType  ? line('Target company type', targetCompType)       : '',
    decisionMaker   ? line('Decision-maker(s)', decisionMaker)          : '',
    primaryUseCase  ? line('Primary use case', primaryUseCase)          : '',
    competitors     ? line('Competitors', competitors)                  : '',
    currentFail     ? line('Why current solutions fail', currentFail)   : '',
    keyDiff         ? line('Key differentiators', keyDiff)              : '',
    proofPoints     ? line('Proof / case studies', proofPoints)         : '',
    brandTone       ? line('Brand tone', brandTone)                     : '',
    avoidWords      ? line('Words to avoid', avoidWords)                : '',
    customerLang    ? line('Customer\'s own words', `"${customerLang}"`) : '',
  ].filter(Boolean).join('\n');

  // Build target company block
  const targetLines = [
    `- **Company:** ${company}`,
    website    ? `- **Website:** ${website}`     : '',
    linkedin   ? `- **LinkedIn:** ${linkedin}`   : '',
    knownContext ? `- **Known context:** ${knownContext}` : '',
  ].filter(Boolean).join('\n');

  const prompt = `You are an expert B2B cold email writer. Your goal is to write an email that sounds like it came from a sharp, thoughtful human — not a sales machine following a template.

## YOUR PRODUCT CONTEXT

${productBlock}

**Core pain points this product solves:**
${painList}

---

## TARGET COMPANY

${targetLines}

---

## YOUR TASK

**Step 1 — Research "${company}" thoroughly:**
- Visit their website and read their About, Product, and Careers pages
- Check recent news, press releases, or funding announcements
- Look at their LinkedIn company page: team size, recent hires, open roles
- Identify their tech stack or tools if visible
- Look for any signals of the pain points listed above (e.g. hiring ops roles, recent pivots, public complaints, fast growth stress)

**Step 2 — Identify the single strongest hook:**
Pick the ONE pain point or signal that maps most directly to what ${productName} solves. This becomes the opening observation.

**Step 3 — Write the cold email using this framework:**
> **Observation → Problem → Proof → Ask**
> You noticed X → which usually means Y challenge → We helped [similar company] with that → Interested?

**Step 4 — Follow these rules (non-negotiable):**
- Under 120 words in the email body
- Open with THEIR world, not yours — "you/your" dominates over "I/we"
- No opener like "I hope this email finds you well" or "My name is X"
- No jargon: no "synergy", "leverage", "circle back", "best-in-class"
- One low-friction CTA — interest-based, not a meeting request (e.g. "Worth exploring?" or "Would this be useful?")
- Tone: ${brandTone || 'direct, peer-level, confident but not pushy'}
${avoidWords ? `- Avoid these words/phrases: ${avoidWords}` : ''}
- Read it aloud — if it sounds like marketing copy, rewrite it

**Step 5 — Also provide:**
- 3 subject line options (2–4 words, lowercase, internal-looking — NOT a product pitch)
- A one-sentence note explaining why you chose this specific angle for ${company}

---

## OUTPUT FORMAT

**Subject line options:**
1. [option 1]
2. [option 2]
3. [option 3]

**Email:**
[email body here]

**Why this angle:**
[one sentence explaining the hook you chose]
`;

  return prompt.trim();
}

// ── Draft Button ──
function onDraft() {
  const prompt = compilePrompt();
  if (!prompt) return;

  const output = document.getElementById('outputPrompt');
  const copyBtn = document.getElementById('copyBtn');
  const meta = document.getElementById('outputMeta');

  output.value = prompt;
  copyBtn.disabled = false;

  const wordCount = prompt.split(/\s+/).filter(Boolean).length;
  const charCount = prompt.length;
  meta.textContent = `${wordCount} words · ${charCount} characters`;

  // Scroll output into view on mobile
  document.getElementById('outputCard').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── Copy Button ──
function onCopy() {
  const output = document.getElementById('outputPrompt');
  if (!output.value) return;

  navigator.clipboard.writeText(output.value).then(() => {
    const btn = document.getElementById('copyBtn');
    btn.textContent = '✓ Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'Copy to Clipboard';
      btn.classList.remove('copied');
    }, 2000);
  }).catch(() => {
    // Fallback for browsers without clipboard API
    output.select();
    document.execCommand('copy');
  });
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  loadForm();
  attachListeners();
  document.getElementById('draftBtn').addEventListener('click', onDraft);
  document.getElementById('copyBtn').addEventListener('click', onCopy);
});
