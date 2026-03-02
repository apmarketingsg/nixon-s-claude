function generatePrompt() {
  const myCompany    = document.getElementById('myCompany').value.trim();
  const whatISell    = document.getElementById('whatISell').value.trim();
  const targetCompany = document.getElementById('targetCompany').value.trim();

  if (!myCompany || !whatISell || !targetCompany) {
    alert('Please fill in all 3 fields before generating.');
    return;
  }

  const prompt = buildPrompt(myCompany, whatISell, targetCompany);

  const outputSection = document.getElementById('outputSection');
  const outputPrompt  = document.getElementById('outputPrompt');

  outputPrompt.value = prompt;
  outputSection.classList.add('visible');
  outputSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const copyBtn = document.getElementById('copyBtn');
  copyBtn.textContent = 'Copy to Clipboard';
  copyBtn.classList.remove('copied');
}

function buildPrompt(myCompany, whatISell, targetCompany) {
  return `You are an expert B2B cold email writer. You will research the seller and the target company, then write a highly personalised cold email.

---

SELLER INFO
Company: ${myCompany}
What they sell: ${whatISell}

TARGET COMPANY
Company name: ${targetCompany}

---

YOUR TASK — complete all steps in order:

STEP 1 — RESEARCH THE SELLER
Search the web for ${myCompany}. Understand:
- What they do and how they position themselves
- Their key differentiators and proof points
- The type of customers they typically serve
- Any notable case studies, clients, or results

STEP 2 — RESEARCH THE TARGET COMPANY
Search the web for ${targetCompany}. Understand:
- Their business model, industry, and size
- Their likely decision-makers and org structure
- Recent news, announcements, fundraising, or strategic moves
- Signals of pain points relevant to what ${myCompany} sells
- Their tech stack or operational setup (if relevant)

STEP 3 — WORLD NEWS CONTEXT SCAN (internal — do not show this assessment in your output)
After researching the target company, scan for world news from the last 90 days relevant to their industry, geography, and business model. Score each piece of news across three dimensions:
- Direct business impact: High / Medium / Low
- Geographic proximity: Direct / Adjacent / Global
- Time sensitivity: Urgent / Current / Trend

Decision matrix:
- High impact, any geography → Use (Light Touch or Full Hook)
- Medium impact, Direct or Adjacent geography → Use (Light Touch)
- Medium impact, Global only → Skip
- Low impact, any geography → Skip

Application modes:
- Light Touch (default): One brief clause woven into the email — e.g. "Given [X] in [region/sector]..." or "With [trend] putting pressure on [area]..."
- Full Hook (rare): Only if news directly threatens or reshapes their core business model and the relevance is unmistakeable
- Skip: If generic, too old, insensitive, or the connection requires too many inferential steps

This assessment is internal — do NOT include it in your output.

STEP 4 — IDENTIFY THE STRONGEST HOOK
Based on your research, identify the single best opening observation — something specific about ${targetCompany}, their industry, or a recent event that naturally leads into why ${whatISell} is relevant to them. The hook should feel like something a sharp, informed peer noticed — not a generic compliment or a feature dump.

STEP 5 — WRITE THE COLD EMAIL
Write the email using the Observation → Problem → Proof → Ask framework:
- Observation: What you noticed about them (specific, research-based)
- Problem: The challenge this usually creates
- Proof: One concrete proof point or result from ${myCompany}
- Ask: A low-friction, interest-based CTA

NON-NEGOTIABLE RULES:
- Under 120 words (hard limit — count carefully)
- Never open with your name, your company name, or "I hope this email finds you well"
- No jargon: no "synergy", "leverage", "best-in-class", "leading provider", "circle back"
- No feature dumps — one proof point beats ten features
- Write in plain text — no HTML, no bullet points, no bold
- "You/your" must dominate over "I/we"
- One CTA only, at the very end, low commitment: "Worth exploring?" / "Would this be useful?" / "Relevant to you?"
- Sound like a peer who noticed something, not a vendor pitching

STEP 6 — SUBJECT LINES
Provide 3 subject line options. Rules:
- 2–4 words, all lowercase, no punctuation
- Must look internal, like a message from a colleague — NOT a sales pitch
- No company names, no product names, no urgency phrases, no emojis
- Good examples: "trade credit exposure", "q2 credit risk", "supplier defaults"
- Bad examples: "Boost your revenue!", "Quick question for you", "RE: Important opportunity"

---

OUTPUT FORMAT

Return exactly this, nothing else before or after:

Subject line options:
1. [option 1]
2. [option 2]
3. [option 3]

Email:
[The cold email — plain text, no formatting, under 120 words]

Why this hook:
[1–2 sentences explaining what research signal drove the opening observation and why it connects to what ${myCompany} sells]`;
}

function copyPrompt() {
  const outputPrompt = document.getElementById('outputPrompt');
  const copyBtn = document.getElementById('copyBtn');

  if (!outputPrompt.value) return;

  navigator.clipboard.writeText(outputPrompt.value).then(() => {
    copyBtn.textContent = 'Copied!';
    copyBtn.classList.add('copied');
    setTimeout(() => {
      copyBtn.textContent = 'Copy to Clipboard';
      copyBtn.classList.remove('copied');
    }, 2000);
  }).catch(() => {
    outputPrompt.select();
    document.execCommand('copy');
    copyBtn.textContent = 'Copied!';
    copyBtn.classList.add('copied');
    setTimeout(() => {
      copyBtn.textContent = 'Copy to Clipboard';
      copyBtn.classList.remove('copied');
    }, 2000);
  });
}
