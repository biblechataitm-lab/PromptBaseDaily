import type { Product, ProductPage, GetProductsOptions, SiteConfig } from './types';
import { request, mockMode } from './client';

const MOCK_PRODUCTS: Product[] = [
  {
    "id": "pb-1",
    "title": "System Prompt Studio",
    "tagline": "Curated library of battle-tested system prompts optimized for Claude 3.7 and reasoning models",
    "link": "https://github.com",
    "category": "AI & ML",
    "upvotes": 495,
    "tags": [
      "prompts",
      "system-prompts",
      "ai"
    ],
    "techStack": [
      "Markdown",
      "XML",
      "Claude API"
    ],
    "maker": {
      "name": "Logan Kilpatrick",
      "avatar": "https://placehold.co/64x64/d946ef/ffffff?text=SP"
    }
  },
  {
    "id": "pb-2",
    "title": "Promptfoo",
    "tagline": "Fast CLI tool to evaluate and test LLM outputs against security red-teaming benchmarks",
    "link": "https://promptfoo.dev",
    "category": "Developer Tools",
    "upvotes": 460,
    "tags": [
      "evaluation",
      "red-team",
      "testing"
    ],
    "techStack": [
      "TypeScript",
      "Node.js",
      "LLMs"
    ],
    "maker": {
      "name": "Ian Webster",
      "avatar": "https://placehold.co/64x64/8b5cf6/ffffff?text=PF"
    }
  },
  {
    "id": "pb-3",
    "title": "Langfuse",
    "tagline": "Open-source LLM engineering platform to trace model calls, monitor latency, and debug prompt regressions",
    "link": "https://langfuse.com",
    "category": "Search & Data",
    "upvotes": 430,
    "tags": [
      "observability",
      "tracing",
      "llm"
    ],
    "techStack": [
      "TypeScript",
      "ClickHouse",
      "Next.js"
    ],
    "maker": {
      "name": "Marc Klingen",
      "avatar": "https://placehold.co/64x64/38bdf8/ffffff?text=LF"
    }
  },
  {
    "id": "pb-4",
    "title": "Helicone",
    "tagline": "LLM observability platform and proxy with automatic prompt caching and cost telemetry",
    "link": "https://helicone.ai",
    "category": "Developer Tools",
    "upvotes": 380,
    "tags": [
      "caching",
      "proxy",
      "cost-control"
    ],
    "techStack": [
      "Rust",
      "Cloudflare Workers",
      "React"
    ],
    "maker": {
      "name": "Justin Torre",
      "avatar": "https://placehold.co/64x64/f59e0b/ffffff?text=HC"
    }
  },
  {
    "id": "pb-5",
    "title": "Few-Shot Synthesizer",
    "tagline": "Automated synthesis tool that extracts edge-case examples from production logs into few-shot templates",
    "link": "https://github.com",
    "category": "AI & ML",
    "upvotes": 350,
    "tags": [
      "few-shot",
      "data-pipeline",
      "ai"
    ],
    "techStack": [
      "Python",
      "Pandas"
    ],
    "maker": {
      "name": "Elena V.",
      "avatar": "https://placehold.co/64x64/10b981/ffffff?text=FS"
    }
  },
  {
    "id": "pb-6",
    "title": "Jailbreak Guard",
    "tagline": "Automated prompt injection regression harness for enterprise customer-facing LLM applications",
    "link": "https://github.com",
    "category": "Developer Tools",
    "upvotes": 320,
    "tags": [
      "safety",
      "jailbreak",
      "defense"
    ],
    "techStack": [
      "Python",
      "PyTorch"
    ],
    "maker": {
      "name": "Arthur B.",
      "avatar": "https://placehold.co/64x64/ec4899/ffffff?text=JG"
    }
  }
];

const MOCK_SITE: SiteConfig = {
  "key": "promptbasedaily",
  "name": "PromptBaseDaily",
  "domain": "promptbasedaily.com",
  "category": "prompts",
  "tags": [
    "prompts",
    "ai",
    "llm",
    "agents",
    "genai"
  ],
  "status": "live",
  "statusMessage": null,
  "slots": [
    {
      "key": "sidebar-1",
      "slotType": "sidebar",
      "format": "native"
    }
  ]
};

export async function getSiteConfig(timeoutMs?: number): Promise<SiteConfig | null> {
  if (mockMode()) return MOCK_SITE;
  const data = await request<{ site: SiteConfig }>('/api/v1/site', {}, timeoutMs, 'getSiteConfig');
  return data?.site ?? MOCK_SITE;
}

export async function getProducts(options: GetProductsOptions = {}): Promise<ProductPage> {
  const mock = mockMode();
  if (mock) {
    if (mock === 'empty') return { products: [], nextCursor: null, appliedTags: [] };
    let filtered = [...MOCK_PRODUCTS];
    if (options.category) {
      filtered = filtered.filter((p) => p.category.toLowerCase() === options.category?.toLowerCase());
    }
    if (options.q) {
      const q = options.q.toLowerCase();
      filtered = filtered.filter((p) => p.title.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q));
    }
    const sorted = options.sort === 'top' ? filtered.sort((a, b) => b.upvotes - a.upvotes) : filtered;
    return {
      products: sorted.slice(0, options.limit ?? sorted.length),
      nextCursor: null,
      appliedTags: MOCK_SITE.tags,
    };
  }

  const data = await request<ProductPage>(
    '/api/v1/catalog/products',
    {
      tags: options.tags?.join(','),
      category: options.category,
      q: options.q,
      since: options.since,
      sort: options.sort,
      limit: options.limit ? String(options.limit) : undefined,
      cursor: options.cursor,
    },
    options.timeoutMs,
    'getProducts',
  );

  if (!data || !data.products || data.products.length === 0) {
    let filtered = [...MOCK_PRODUCTS];
    if (options.category) {
      filtered = filtered.filter((p) => p.category.toLowerCase() === options.category?.toLowerCase());
    }
    if (options.q) {
      const q = options.q.toLowerCase();
      filtered = filtered.filter((p) => p.title.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q));
    }
    const sorted =
      options.sort === 'top' ? filtered.sort((a, b) => b.upvotes - a.upvotes) : filtered;
    return {
      products: sorted.slice(0, options.limit ?? sorted.length),
      nextCursor: null,
      appliedTags: MOCK_SITE.tags,
    };
  }

  return data;
}

export async function getProduct(id: string, timeoutMs?: number): Promise<Product | null> {
  if (mockMode()) return MOCK_PRODUCTS.find((p) => p.id === id) ?? MOCK_PRODUCTS[0];

  const data = await request<{ product: Product }>(
    `/api/v1/catalog/products/${encodeURIComponent(id)}`,
    {},
    timeoutMs,
    'getProduct',
  );
  return data?.product ?? MOCK_PRODUCTS.find((p) => p.id === id) ?? MOCK_PRODUCTS[0];
}
