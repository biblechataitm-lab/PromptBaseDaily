'use client';

import React from 'react';

export function Header({ siteName = 'PromptBaseDaily' }: { siteName?: string }) {
  return (
    <header className="prompt-navbar">
      <div className="container prompt-nav-inner">
        <a href="/" className="prompt-brand">
          <span className="prompt-star-logo">✦</span>
          <span>PromptBaseDaily</span>
        </a>
        <div className="prompt-nav-links">
        <a href="/">Prompts</a>
        <a href="/trends">Trending Stacks</a>
        <a href="/category/coding-prompts">System Prompts</a>
        <a href="/sponsor">Underwrite</a>
        </div>
        <a href="/submit" className="prompt-cta-btn">+ Submit Prompt</a>
      </div>
    </header>
  );
}
