'use client';

import React from 'react';
import { ArrowRight, Rocket } from 'lucide-react';

export function CTASection() {
  return (
    <section className="pbd-cta">
      <div className="pbd-cta-glow" aria-hidden="true" />
      <div className="pbd-cta-content">
        <h2 className="pbd-cta-title">Share Your Best Prompts</h2>
        <p className="pbd-cta-subtitle">Join 20K+ prompt engineers. Share, discover, and monetize your AI prompts.</p>
        <div className="pbd-cta-buttons">
          <a href="/submit" className="pbd-cta-btn-primary">
            <Rocket size={15} /> Submit Product
          </a>
          <a href="/sponsor" className="pbd-cta-btn-secondary">
            Sponsor <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
