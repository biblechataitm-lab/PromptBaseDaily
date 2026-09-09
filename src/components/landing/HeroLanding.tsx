'use client';

import React, { useEffect, useRef } from 'react';
import { Search, ArrowRight, TrendingUp } from 'lucide-react';

export function HeroLanding() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const children = hero.querySelectorAll('.pbd-animate');
    children.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(24px)';
      setTimeout(() => {
        htmlEl.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        htmlEl.style.opacity = '1';
        htmlEl.style.transform = 'translateY(0)';
      }, 100 + i * 100);
    });
  }, []);

  return (
    <section ref={heroRef} className="pbd-hero">
      <div className="pbd-hero-bg" aria-hidden="true" />
      <div className="pbd-hero-container">
        <div className="pbd-hero-content">
          <div className="pbd-animate pbd-hero-badge">
            <span>Master AI with Better Prompts</span>
          </div>
          <h1 className="pbd-animate pbd-hero-title">
            The AI Prompt{' '}
            <span className="pbd-accent-text">Marketplace</span>
          </h1>
          <p className="pbd-animate pbd-hero-subtitle">
            Discover 3,000+ curated AI prompts — from chain-of-thought templates and system instructions to creative generators and code assistants.
          </p>
          <form
            className="pbd-animate pbd-hero-search"
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.currentTarget.querySelector('input');
              if (input?.value.trim()) {
                window.location.href = `/search?q=${encodeURIComponent(input.value.trim())}`;
              }
            }}
          >
            <Search size={16} className="pbd-hero-search-icon" />
            <input type="text" placeholder="Search prompts, templates..." />
            <button type="submit">Explore <ArrowRight size={14} /></button>
          </form>
          <div className="pbd-animate pbd-hero-tags">
            <a href="/category/ai" className="pbd-tag">Reasoning</a>
            <a href="/category/developer-tools" className="pbd-tag">Coding</a>
            <a href="/category/productivity" className="pbd-tag">Writing</a>
            <a href="/trends" className="pbd-tag pbd-tag-hot">
              <TrendingUp size={12} /> Trending
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
