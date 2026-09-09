'use client';

import React from 'react';

const STATS = [
  { value: '3,000+', label: 'Prompts' },
  { value: '20K+', label: 'Prompt Engineers' },
  { value: '50+', label: 'Daily Submissions' },
  { value: '92%', label: 'Effectiveness Rate' },
];

export function StatsSection() {
  return (
    <section className="pbd-stats">
      <div className="pbd-stats-grid">
        {STATS.map((s) => (
          <div key={s.label} className="pbd-stat-card">
            <div className="pbd-stat-value">{s.value}</div>
            <div className="pbd-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
