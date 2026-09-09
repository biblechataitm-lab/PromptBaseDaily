'use client';

import React from 'react';
import Hero33 from '@/components/ui/hero-33';
import { Bot, Sparkles, Wand2 } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="w-full mb-12">
      <Hero33
        logoText="PromptBaseDaily"
        navItems={['Prompts', 'Reasoning Chains', 'Personas', 'Submit']}
        primaryActionText="Explore 6,200+ Prompts"
        secondaryActionText="Submit Prompt"
        titleLines={['Frontier Reasoning,', 'Unstoppable', 'Prompt Chains.']}
        features={[
          {
            icon: Wand2,
            title: 'Reasoning Scratchpads',
            description: 'Claude 3.7 Thinking & DeepSeek R1 decomposition prompts',
          },
          {
            icon: Bot,
            title: 'Autonomous Personas',
            description: 'Staff Architect & Security Auditor role templates',
          },
        ]}
      />
    </div>
  );
}
