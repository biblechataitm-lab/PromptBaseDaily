'use client';

import React from 'react';

export function Header({ siteName = 'PromptBaseDaily' }: { siteName?: string }) {
  return (
    <header className="prompt-navbar">
      <div className="container prompt-nav-inner">
        <div className="prompt-nav-left">
          <a href="/" className="prompt-brand">
            <span className="prompt-star-logo">✦</span>
            <span className="prompt-brand-text">PromptBase<span className="prompt-dot">Daily</span></span>
          </a>
          <span className="prompt-status-tag">
            <span className="prompt-dot-pulse" />
            RECIPE MATRIX · LLM BENCHED
          </span>
        </div>

        <nav className="prompt-nav-links">
          <a href="/" className="prompt-nav-link active">Prompt Recipes</a>
          <a href="/trends" className="prompt-nav-link">Top Reasoners</a>
          <a href="/category/coding-prompts" className="prompt-nav-link">System Harnesses</a>
          <a href="/sponsor" className="prompt-nav-link">Sponsor Lab</a>
        </nav>

        <div className="prompt-nav-right">
          <div className="prompt-eval-badge">
            <span className="eval-label">EVAL BENCHMARK</span>
            <span className="eval-val">99.4% HIT RATE</span>
          </div>
          <a href="/submit" className="prompt-cta-btn">+ Publish Recipe</a>
        </div>
      </div>
    </header>
  );
}
