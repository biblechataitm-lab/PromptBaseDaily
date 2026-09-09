'use client';

import React from 'react';

export function Header({ siteName = 'PromptBaseDaily' }: { siteName?: string }) {
  return (
    <header class="prompt-navbar">
  <div class="container prompt-nav-inner">
    <a href="/" class="prompt-brand">
      <span class="prompt-star-logo">✦</span>
      <span>PromptBaseDaily</span>
    </a>
    <div class="prompt-nav-links">
      <a href="/">Prompts</a>
      <a href="/trends">Trending Stacks</a>
      <a href="/category/ai">Reasoning</a>
      <a href="/sponsor">Underwrite</a>
    </div>
    <a href="/submit" class="prompt-cta-btn">+ Submit Prompt</a>
  </div>
</header>
  );
}
