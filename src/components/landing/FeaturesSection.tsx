'use client';

import React from 'react';

export function FeaturesSection() {
  return (
    <section class="prompt-features container">
  <div class="prompt-heading">
    <span class="prompt-neon-tag">// EVALUATION ENGINE</span>
    <h2>Rigorous Multi-Model Prompt Benchmarks</h2>
  </div>
  <div class="prompt-grid-3">
    <div class="prompt-card">
      <div class="p-icon">⚖</div>
      <h3>Semantic Output Invariance</h3>
      <p>Verify that your prompts produce deterministic, JSON-compliant results across model provider updates.</p>
    </div>
    <div class="prompt-card">
      <div class="p-icon">🛡</div>
      <h3>Prompt Injection Armor</h3>
      <p>Automated adversarial red-teaming tests against indirect jailbreaks and malicious user inputs.</p>
    </div>
    <div class="prompt-card">
      <div class="p-icon">💰</div>
      <h3>Token Pruning Engine</h3>
      <p>Compress long-winded system instructions by up to 40% without sacrificing reasoning quality.</p>
    </div>
  </div>
</section>
  );
}
