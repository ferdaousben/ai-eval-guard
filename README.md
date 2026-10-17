# 🛡️ ai-eval-guard

> Ultra-fast, zero-dependency validation & guardrails engine for LLM outputs in TypeScript.

[![npm version](https://badge.fury.io/js/ai-eval-guard.svg)](https://badge.fury.io/js/ai-eval-guard)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**`ai-eval-guard`** fills a critical gap in the AI development ecosystem by offering lightweight, type-safe, sub-millisecond evaluation of LLM responses (Claude, OpenAI, Llama) before they reach your end-users.

---

## ✨ Features

- **⚡ Sub-millisecond Execution:** Zero external dependencies, pure TypeScript.
- **🔒 PII Leak Protection:** Automatically mask or flag sensitive data (emails, API keys, credit cards).
- **📋 JSON & Schema Validation:** Ensures structured LLM outputs strictly match expected TypeScript types or JSON schemas.
- **🚫 Content Safety Checks:** Simple rules-based toxic language and policy violation filtering.
- **🔌 Framework Agnostic:** Works seamlessly with `@anthropic-ai/sdk`, `langchain`, or raw fetch calls.

---

## 📦 Installation

```bash
npm install ai-eval-guard
```

---

## 🚀 Quick Start

```typescript
import { createGuard } from 'ai-eval-guard';

const guard = createGuard({
  checkPII: true,
  checkJSON: true,
  maxLatencyMs: 100
});

const rawLLMOutput = "Here is the response with email user@example.com";

const result = await guard.validate(rawLLMOutput);

if (!result.isValid) {
  console.log("Violations found:", result.violations);
  console.log("Sanitized output:", result.sanitizedOutput);
}
```

---

## 🤝 Contributing & Good First Issues

We **love** community contributions! Whether you're fixing a typo, adding a new validator, or improving docs.

Check out our [Open Issues](https://github.com/YOUR_USERNAME/ai-eval-guard/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) labeled **`good first issue`** to get started!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
