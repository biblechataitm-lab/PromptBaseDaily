'use client';

import React from 'react';

export function HeroLanding() {
  return (
    <section class="prompt-hero">
  <div class="prompt-hero-container container">
    <div class="prompt-sparkle-tag">
      <span>✦ PRODUCTION PROMPT ENGINEERING ✦</span>
    </div>
    <h1 class="prompt-title">
      The Workshop for <span class="prompt-neon">System Prompts</span>
    </h1>
    <p class="prompt-desc">
      Explore evaluated reasoning templates, few-shot injection defenses, and prompt regression harnesses.
    </p>
    <div class="prompt-playground-card">
      <div class="playground-header">
        <span class="p-model-chip">Model: Claude 3.7 Sonnet</span>
        <span class="p-temp-chip">Temp: 0.2 · Top-P: 0.95</span>
      </div>
      <div class="playground-body">
        <code>&lt;system_instruction&gt; You are a principal software architect. You output concise, seek-safe code snippets adhering to production constraints... &lt;/system_instruction&gt;</code>
      </div>
      <div class="playground-actions">
        <button class="copy-prompt-btn">Copy Evaluated Prompt</button>
        <span class="p-token-count">Tokens: 148 · Score: 98.4%</span>
      </div>
    </div>
  </div>
</section>
  );
}
