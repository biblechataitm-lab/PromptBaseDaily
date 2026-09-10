'use client';

import React from 'react';

export function FeaturesSection() {
  return (
    <section className="prompt-features container">
  <div className="prompt-heading">
    <span className="prompt-neon-tag">// EVALUATION ENGINE</span>
    <h2>Rigorous Multi-Model Prompt Benchmarks</h2>
  </div>
  <div className="prompt-grid-3">
    <div className="prompt-card">
      <div className="p-icon">⚖</div>
      <h3>Semantic Output Invariance</h3>
      <p>Verify that your prompts produce deterministic, JSON-compliant results across model provider updates.</p>
    </div>
    <div className="prompt-card">
      <div className="p-icon">🛡</div>
      <h3>Prompt Injection Armor</h3>
      <p>Automated adversarial red-teaming tests against indirect jailbreaks and malicious user inputs.</p>
    </div>
    <div className="prompt-card">
      <div className="p-icon">💰</div>
      <h3>Token Pruning Engine</h3>
      <p>Compress long-winded system instructions by up to 40% without sacrificing reasoning quality.</p>
    </div>
  </div>
</section>
  );
}
