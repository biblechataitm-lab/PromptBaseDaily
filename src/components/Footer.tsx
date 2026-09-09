import React from 'react';
import Link from 'next/link';
import { ExternalLink, MessageCircle, Mail } from 'lucide-react';

export function Footer({ siteName = 'PromptBaseDaily' }: { siteName?: string }) {
  return (
    <footer className="pbd-footer">
      <div className="pbd-footer-content">
        <div className="pbd-footer-top">
          <div className="pbd-footer-brand-area">
            <div className="pbd-footer-brand"><span>{siteName}</span></div>
            <p className="pbd-footer-tagline">The AI prompt discovery platform. Find battle-tested prompts for ChatGPT, Claude, Gemini, and every frontier model.</p>
            <div className="pbd-footer-socials">
              <a href="#" aria-label="Website"><ExternalLink size={16} /></a>
              <a href="#" aria-label="Community"><MessageCircle size={16} /></a>
              <a href="#" aria-label="Email"><Mail size={16} /></a>
            </div>
          </div>
          <div className="pbd-footer-links-grid">
            <div>
              <h4 className="pbd-footer-heading">Explore</h4>
              <ul>
                <li><Link href="/">Today's Launches</Link></li>
                <li><Link href="/trends">Trending</Link></li>
                <li><Link href="/collections/this-week">Weekly Top</Link></li>
                <li><Link href="/collections/this-month">Monthly Top</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="pbd-footer-heading">Categories</h4>
              <ul>
                <li><Link href="/category/reasoning">Reasoning</Link></li>
                <li><Link href="/category/coding">Coding</Link></li>
                <li><Link href="/category/creative">Creative</Link></li>
                <li><Link href="/category/business">Business</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="pbd-footer-heading">Directory</h4>
              <ul>
                <li><Link href="/submit">Submit Product</Link></li>
                <li><Link href="/sponsor">Sponsor</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/privacy">Privacy</Link></li>
                <li><Link href="/terms">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pbd-footer-bottom">
          <span>&copy; {new Date().getFullYear()} {siteName}. All rights reserved.</span>
          <span>Powered by the Publisher Ad Network</span>
        </div>
      </div>
    </footer>
  );
}
