import type { Product, ProductPage, GetProductsOptions, SiteConfig } from './types';
import { request, mockMode } from './client';

const MOCK_PRODUCTS: Product[] = [
  {
    "id": "pbd-1",
    "title": "CognitiveReason Promptbook",
    "tagline": "Recursive chain-of-thought prompt templates for frontier reasoning models",
    "description": "Battle-tested system instructions that double mathematical and code benchmark accuracy across Claude and GPT-4o.",
    "logo": "https://placehold.co/96x96/0f0c1e/d946ef?text=CR",
    "link": "https://example.com/cognitivereason",
    "category": "Reasoning & Coding",
    "tags": [
      "prompts",
      "reasoning",
      "claude"
    ],
    "techStack": [
      "Markdown",
      "Python",
      "OpenAI"
    ],
    "coverImages": [],
    "upvotes": 614,
    "launchedAt": "2026-08-19T05:12:33.188Z",
    "maker": {
      "name": "Aria Thorne",
      "username": "athorne",
      "avatar": "https://placehold.co/64x64/191530/d946ef?text=A"
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
  return data?.site ?? null;
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

  return data ?? { products: [], nextCursor: null, appliedTags: [] };
}

export async function getProduct(id: string, timeoutMs?: number): Promise<Product | null> {
  if (mockMode()) return MOCK_PRODUCTS.find((p) => p.id === id) ?? MOCK_PRODUCTS[0];

  const data = await request<{ product: Product }>(
    `/api/v1/catalog/products/${encodeURIComponent(id)}`,
    {},
    timeoutMs,
    'getProduct',
  );
  return data?.product ?? null;
}
