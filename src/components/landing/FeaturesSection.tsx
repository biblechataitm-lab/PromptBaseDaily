'use client';

import React from 'react';
import { Sparkles, Zap, BarChart3, Users, Layers, TrendingUp } from 'lucide-react';

const FEATURES = [
  { icon: Sparkles, title: 'Prompt Library', desc: '3,000+ battle-tested prompts organized by model, task, and difficulty.' },
  { icon: Zap, title: 'One-Click Use', desc: 'Copy any prompt directly to ChatGPT, Claude, or Gemini with one click.' },
  { icon: BarChart3, title: 'Benchmark Scores', desc: 'Every prompt tested against reasoning, coding, and creative benchmarks.' },
  { icon: Users, title: 'Community Ratings', desc: 'Crowd-sourced quality scores from 20K+ prompt engineers.' },
  { icon: Layers, title: 'Prompt Chains', desc: 'Multi-step prompt workflows for complex tasks and agent pipelines.' },
  { icon: TrendingUp, title: 'Model Updates', desc: 'Prompts tagged by model compatibility — GPT-4o, Claude, Gemini, Llama.' },
];

export function FeaturesSection() {
  return (
    <section className="pbd-features">
      <div className="pbd-features-header">
        <h2 className="pbd-section-title">
          Why <span className="pbd-accent-text">PromptBaseDaily</span>
        </h2>
        <p className="pbd-section-subtitle">More than a directory — a curated ecosystem built for your workflow.</p>
      </div>
      <div className="pbd-features-grid">
        {FEATURES.map((f) => (
          <div key={f.title} className="pbd-feature-card">
            <div className="pbd-feature-icon"><f.icon size={22} /></div>
            <h3 className="pbd-feature-title">{f.title}</h3>
            <p className="pbd-feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
