import React from 'react';
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
                <li><a href="/">Today's Launches</a></li>
                <li><a href="/trends">Trending</a></li>
                <li><a href="/collections/this-week">Weekly Top</a></li>
                <li><a href="/collections/this-month">Monthly Top</a></li>
              </ul>
            </div>
            <div>
              <h4 className="pbd-footer-heading">Categories</h4>
              <ul>
                <li><a href="/category/reasoning">Reasoning</a></li>
                <li><a href="/category/coding">Coding</a></li>
                <li><a href="/category/creative">Creative</a></li>
                <li><a href="/category/business">Business</a></li>
              </ul>
            </div>
            <div>
              <h4 className="pbd-footer-heading">Directory</h4>
              <ul>
                <li><a href="/submit">Submit Product</a></li>
                <li><a href="/sponsor">Sponsor</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/privacy">Privacy</a></li>
                <li><a href="/terms">Terms</a></li>
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
