'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Wand2, Bot, Sliders, Image, Code2, ArrowRight, CheckCircle2, Copy, Zap } from 'lucide-react';

export function LandingSections() {
  return (
    <div className="landing-additional-sections">
      {/* 1. Feature Highlights Bento Grid */}
      <section className="landing-feature-grid-section">
        <div className="section-title-wrap">
          <div className="section-pill-tag">
            <Sparkles size={12} className="text-fuchsia-400" />
            <span>Curated Prompt Engineering Matrix</span>
          </div>
          <h2 className="landing-section-heading">Engineered for Prompt Engineers & AI Researchers</h2>
          <p className="landing-section-sub">
            Copy-paste production system prompts, reasoning scratchpads, Midjourney v6 parameters, structured JSON templates, and few-shot evaluation harnesses.
          </p>
        </div>

        <div className="landing-bento-grid">
          {/* Bento Card 1: Reasoning Chains */}
          <div className="bento-feature-card span-2">
            <div className="bento-card-top">
              <div className="bento-icon-box fuchsia">
                <Wand2 size={20} />
              </div>
              <span className="bento-badge">Claude 3.7 & DeepSeek R1</span>
            </div>
            <h3 className="bento-card-title">Chain-of-Thought & Reasoning Scratchpads</h3>
            <p className="bento-card-desc">
              Production prompts utilizing recursive decomposition, self-consistency verification passes, and explicit thinking tags.
            </p>
            <div className="bento-metric-row">
              <div className="metric-pill">
                <span className="pill-val">6,200+</span>
                <span className="pill-lbl">Prompts</span>
              </div>
              <div className="metric-pill">
                <span className="pill-val">100%</span>
                <span className="pill-lbl">Tested Output</span>
              </div>
              <div className="metric-pill">
                <span className="pill-val">1-Click</span>
                <span className="pill-lbl">Copy & Run</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Autonomous Agent Roles */}
          <div className="bento-feature-card">
            <div className="bento-card-top">
              <div className="bento-icon-box purple">
                <Bot size={20} />
              </div>
              <span className="bento-badge">Agentic Systems</span>
            </div>
            <h3 className="bento-card-title">Autonomous Agent Personas</h3>
            <p className="bento-card-desc">
              Staff architect, senior security auditor, and math proof personas with rigid constraint enforcement.
            </p>
            <div className="bento-check-list">
              <span className="check-item"><CheckCircle2 size={13} /> Strict Negative Constraints</span>
              <span className="check-item"><CheckCircle2 size={13} /> Zero Hallucination Traps</span>
            </div>
          </div>

          {/* Bento Card 3: Midjourney v6 Parameters */}
          <div className="bento-feature-card">
            <div className="bento-card-top">
              <div className="bento-icon-box pink">
                <Image size={20} />
              </div>
              <span className="bento-badge">Photorealistic 8K</span>
            </div>
            <h3 className="bento-card-title">Midjourney v6.1 & Flux Prompts</h3>
            <p className="bento-card-desc">
              Camera lens specifications, studio lighting configs, and volumetric render parameters.
            </p>
          </div>

          {/* Bento Card 4: Structured Output JSON */}
          <div className="bento-feature-card span-2">
            <div className="bento-card-top">
              <div className="bento-icon-box cyan">
                <Code2 size={20} />
              </div>
              <span className="bento-badge">JSON Schema Guaranteed</span>
            </div>
            <h3 className="bento-card-title">Function Calling & Zod Schema Prompts</h3>
            <p className="bento-card-desc">
              Ensure deterministic JSON schema compliance across OpenAI structured outputs and Anthropic tool use without parse errors.
            </p>
            <div className="bento-tag-row">
              <span className="tag-chip">OpenAI Structured</span>
              <span className="tag-chip">Anthropic Tool Use</span>
              <span className="tag-chip">Zod Types</span>
              <span className="tag-chip">XML Scratchpads</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Curation Process Section */}
      <section className="landing-process-section">
        <div className="section-title-wrap">
          <div className="section-pill-tag">
            <Sliders size={12} className="text-fuchsia-400" />
            <span>Prompt Evaluation Standard</span>
          </div>
          <h2 className="landing-section-heading">How PromptBaseDaily Tests Prompts</h2>
          <p className="landing-section-sub">
            Every prompt template is tested against token limits, temperature sweeps, and output consistency.
          </p>
        </div>

        <div className="process-steps-grid">
          <div className="process-step-card">
            <div className="step-number">01</div>
            <h4 className="step-title">Temperature & Token Tuning</h4>
            <p className="step-desc">
              We test prompt variations from temp 0.0 to 1.0 to find the optimal reproducibility sweet spot.
            </p>
          </div>
          <div className="process-step-card">
            <div className="step-number">02</div>
            <h4 className="step-title">Negative Constraint Auditing</h4>
            <p className="step-desc">
              We try edge-case adversarial inputs to ensure the system prompt never breaks persona or schema.
            </p>
          </div>
          <div className="process-step-card">
            <div className="step-number">03</div>
            <h4 className="step-title">Featured Prompt Workbench</h4>
            <p className="step-desc">
              Passed prompt kits get interactive playground preview cards and distribution to 68,000+ engineers.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Launch CTA Banner */}
      <section className="landing-launch-cta">
        <div className="launch-cta-content">
          <span className="launch-cta-tag">✦ PUBLISH ON PROMPTBASEDAILY</span>
          <h3 className="launch-cta-heading">Share Your Production Prompts with 68,000+ AI Builders</h3>
          <p className="launch-cta-desc">
            Publish your system prompts, Midjourney workflows, and evaluation datasets to an engaged audience of researchers.
          </p>
          <div className="launch-cta-buttons">
            <Link href="/submit" className="launch-cta-primary">
              Submit Prompt Chain <ArrowRight size={15} />
            </Link>
            <Link href="/category/ai" className="launch-cta-secondary">
              Browse Prompts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
