// src/types.ts
export interface GuardConfig {
  checkPII?: boolean;
  blockedKeywords?: string[];
}

export interface GuardResult {
  isValid: boolean;
  violations: string[];
  sanitizedOutput: string;
}

// src/index.ts
import { GuardConfig, GuardResult } from './types';

export class AIEvalGuard {
  private config: GuardConfig;

  constructor(config: GuardConfig = {}) {
    this.config = config;
  }

  public validate(input: string): GuardResult {
    const violations: string[] = [];
    let sanitizedOutput = input;

    // 1. Détection de PII (Emails)
    if (this.config.checkPII) {
      const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
      if (emailRegex.test(input)) {
        violations.push('PII_DETECTED: Email address found in output.');
        sanitizedOutput = sanitizedOutput.replace(emailRegex, '[REDACTED_EMAIL]');
      }
    }

    // 2. Vérification des mots-clés bloqués
    if (this.config.blockedKeywords) {
      for (const keyword of this.config.blockedKeywords) {
        if (input.toLowerCase().includes(keyword.toLowerCase())) {
          violations.push(`BLOCKED_KEYWORD: Output contains "${keyword}".`);
        }
      }
    }

    return {
      isValid: violations.length === 0,
      violations,
      sanitizedOutput
    };
  }
}

export function createGuard(config?: GuardConfig): AIEvalGuard {
  return new AIEvalGuard(config);
}
