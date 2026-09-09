'use client';

import React from 'react';

const CATEGORIES = [
  {
    "label": "All",
    "path": "/"
  },
  {
    "label": "System Prompts",
    "path": "/category/coding-prompts"
  },
  {
    "label": "Agent Directives",
    "path": "/category/agents"
  },
  {
    "label": "Copy & Reasoning",
    "path": "/category/copy"
  },
  {
    "label": "Multimodal",
    "path": "/category/vision"
  },
  {
    "label": "Evaluated Prompts",
    "path": "/category/ai"
  },
  {
    "label": "Red Teaming",
    "path": "/category/testing"
  }
];

export function CategoryChips({ activeCategory }: { activeCategory?: string }) {
  return (
    <div className="category-chips-wrapper">
      <div className="category-chips-scroll">
        {CATEGORIES.map((cat) => {
          const isAll = cat.path === '/';
          const isActive = isAll ? !activeCategory : activeCategory === cat.path.replace('/category/', '');
          return (
            <a
              key={cat.path}
              href={cat.path}
              className={`chip ${isActive ? 'chip-active' : ''}`}
            >
              {cat.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
