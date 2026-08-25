'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Terminal, Copy, Check, Search, Bot, Wand2, Sliders, Image, Code2, ArrowRight, ArrowUpRight, Star, Users } from 'lucide-react';

const PROMPT_TEMPLATES = [
  {
    id: 'agent-persona',
    title: 'Autonomous System Architect Agent',
    targetModel: 'Claude 3.7 Sonnet / GPT-4o',
    category: 'Agent Personas',
    tokens: '412 tokens',
    temperature: '0.2',
    prompt: `You are an elite Staff Software Architect. When designing systems:
1. Always output structured JSON with schema validation
2. Enforce zero-trust auth & idempotent API endpoints
3. Provide concrete schema migrations before code execution`,
    outputTag: 'Returns: Deterministic Architecture Plan',
  },
  {
    id: 'reasoning-chain',
    title: 'Deep Multi-Step Mathematical Proof',
    targetModel: 'DeepSeek R1 / o3-mini',
    category: 'Reasoning Chains',
    tokens: '286 tokens',
    temperature: '0.6',
    prompt: `<thinking>
Deconstruct the problem into lemma 1, lemma 2, and edge case boundary analysis.
Validate inductive hypothesis against n=1 and n=k+1.
</thinking>
Synthesize formal Q.E.D. deduction.`,
    outputTag: 'Returns: Verified Chain-of-Thought',
  },
  {
    id: 'midjourney-v6',
    title: 'Cinematic Cyberpunk Volumetric Studio',
    targetModel: 'Midjourney v6.1',
    category: 'Image Synth',
    tokens: '124 tokens',
    temperature: '0.8',
    prompt: `/imagine prompt: Hyper-detailed cyberpunk laboratory, volumetric amber neon rim lighting, 8k raytraced glass reflections, Hasselblad H6D-100c medium format lens, photorealistic --ar 16:9 --v 6.1 --style raw`,
    outputTag: 'Returns: Photorealistic 8K Renders',
  },
];

export function HeroSection() {
  const [activePromptIndex, setActivePromptIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  const currentPrompt = PROMPT_TEMPLATES[activePromptIndex];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentPrompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="promptbase-hero">
      <div className="promptbase-ambient-glow" />

      <div className="promptbase-hero-grid">
        {/* Left: Prompt Engineering Value Prop */}
        <div className="promptbase-hero-content">
          <div className="promptbase-badge">
            <Sparkles size={14} className="text-fuchsia-400" />
            <span>Curated Frontier System Prompts & Chain Kits</span>
            <span className="promptbase-badge-pill">COPY-READY</span>
          </div>

          <h1 className="promptbase-title">
            The Frontier Hub for <span className="promptbase-gradient-text">System Prompts</span> & Agent Personas.
          </h1>

          <p className="promptbase-lead">
            Copy-paste production-tested LLM system prompts, Claude 3.7 reasoning chains, Midjourney v6 parameters, and automated evaluation kits.
          </p>

          {/* Search Box */}
          <form 
            action="/search" 
            method="GET" 
            className="promptbase-search-box"
            onSubmit={(e) => {
              if (!searchQuery.trim()) e.preventDefault();
            }}
          >
            <Search size={18} className="promptbase-search-icon" />
            <input
              type="text"
              name="q"
              placeholder="Search 6,200+ system prompts, midjourney tags, agent roles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="promptbase-search-input"
            />
            <button type="submit" className="promptbase-search-btn">
              Search Prompts
            </button>
          </form>

          {/* Dual Action CTAs */}
          <div className="promptbase-cta-row">
            <Link href="/category/ai" className="promptbase-primary-btn">
              Explore 6,200+ Prompts <ArrowRight size={15} />
            </Link>
            <Link href="/submit" className="promptbase-secondary-btn">
              Submit Prompt Chain
            </Link>
          </div>

          {/* Social Proof */}
          <div className="promptbase-social-proof">
            <div className="promptbase-avatar-stack">
              <span className="pb-avatar av-1">✨</span>
              <span className="pb-avatar av-2">🤖</span>
              <span className="pb-avatar av-3">🧠</span>
              <span className="pb-avatar av-4">⚡</span>
            </div>
            <div className="promptbase-proof-text">
              <div className="promptbase-proof-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-fuchsia-400 text-fuchsia-400" />
                ))}
                <span className="promptbase-rating">4.9/5.0</span>
              </div>
              <span className="promptbase-subtext">Used by 68,000+ AI researchers and prompt engineers</span>
            </div>
          </div>

          {/* Prompt Category Pills */}
          <div className="promptbase-tags-row">
            <span className="promptbase-tags-label">Archetypes:</span>
            <div className="promptbase-tags-list">
              <Link href="/category/ai" className="promptbase-tag-pill">
                <Bot size={12} /> System Personas
              </Link>
              <Link href="/category/developer-tools" className="promptbase-tag-pill">
                <Code2 size={12} /> Code Generation
              </Link>
              <Link href="/category/design" className="promptbase-tag-pill">
                <Image size={12} /> Midjourney v6
              </Link>
              <Link href="/category/automation" className="promptbase-tag-pill">
                <Wand2 size={12} /> Chain Kits
              </Link>
            </div>
          </div>

          {/* Metrics Strip */}
          <div className="promptbase-metrics-strip">
            <div className="promptbase-metric-box">
              <span className="promptbase-metric-val">6,200+</span>
              <span className="promptbase-metric-desc">Tested Prompts</span>
            </div>
            <div className="promptbase-metric-divider" />
            <div className="promptbase-metric-box">
              <span className="promptbase-metric-val">100%</span>
              <span className="promptbase-metric-desc">Tested Output</span>
            </div>
            <div className="promptbase-metric-divider" />
            <div className="promptbase-metric-box">
              <span className="promptbase-metric-val">1-Click</span>
              <span className="promptbase-metric-desc">Copy & Run</span>
            </div>
          </div>
        </div>

        {/* Right: Live Interactive Prompt Workbench Card */}
        <div className="promptbase-workbench-card">
          <div className="workbench-card-header">
            <div className="workbench-title-group">
              <Wand2 size={16} className="text-fuchsia-400" />
              <span className="workbench-header-title">Live Prompt Workbench</span>
            </div>
            <span className="workbench-model-pill">{currentPrompt.targetModel}</span>
          </div>

          {/* Archetype Switcher */}
          <div className="workbench-tabs-row">
            {PROMPT_TEMPLATES.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActivePromptIndex(idx)}
                className={`workbench-tab-btn ${activePromptIndex === idx ? 'active' : ''}`}
                type="button"
              >
                {p.category}
              </button>
            ))}
          </div>

          {/* Parameter Settings Bar */}
          <div className="workbench-params-bar">
            <div className="param-item">
              <span className="param-label">Target Architecture</span>
              <span className="param-val">{currentPrompt.title}</span>
            </div>
            <div className="param-right-stats">
              <span className="param-chip">{currentPrompt.tokens}</span>
              <span className="param-chip">Temp: {currentPrompt.temperature}</span>
            </div>
          </div>

          {/* Interactive Prompt Editor Window */}
          <div className="workbench-editor-box">
            <div className="editor-top-bar">
              <span className="editor-prompt-tag">SYSTEM PROMPT BODY</span>
              <button 
                onClick={handleCopy} 
                className="editor-copy-btn"
                title="Copy Prompt"
                type="button"
              >
                {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                <span>{copied ? 'Copied!' : 'Copy Prompt'}</span>
              </button>
            </div>
            <pre className="editor-prompt-text">
              <code>{currentPrompt.prompt}</code>
            </pre>
          </div>

          {/* Output Tag & Footer */}
          <div className="workbench-card-footer">
            <span className="workbench-output-tag">✓ {currentPrompt.outputTag}</span>
            <Link href="/submit" className="workbench-submit-link">
              Submit Prompt <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
