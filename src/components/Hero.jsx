import React from 'react';
import { 
  ArrowRight, 
  PhoneCall, 
  Zap, 
  Settings, 
  Gauge, 
  Tv, 
  Headphones, 
  Users, 
  Globe, 
  ShieldCheck, 
  Wifi, 
  MapPin
} from 'lucide-react';
import womanRouterImg from '../assets/hero_woman_router_new.jpg';
import './Hero.css';

export default function Hero({ onOpenAvailability, onOpenSpeedTest }) {
  return (
    <section id="home" className="hero-section screen-section">
      <div className="hero-full-container">
        
        {/* MAIN TWO-COLUMN SECTION */}
        <div className="hero-main-row">
          
          {/* LEFT COLUMN — Content & Typography */}
          <div className="hero-left-col">
            

            {/* Headline */}
            <h1 className="hero-main-heading text-red">
              Connected<br />
              Today. Stronger<br />
              Tomorrow.
              <svg className="gold-brush-stroke" viewBox="0 0 260 14" fill="none">
                <path d="M 6 7 Q 130 14 254 5" stroke="#E50914" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </h1>

            {/* Sub-headline Paragraph */}
            <p className="hero-sub-paragraph">
              Ultra-fast fiber internet for your home and business. Stream, work, game and do more — without limits.
            </p>

            {/* CTA Buttons Row */}
            <div className="hero-actions-row">
              <a href="#plans" className="btn hero-primary-btn">
                <span>View Plans</span>
                <ArrowRight size={18} />
              </a>

              <button className="btn hero-secondary-btn" onClick={onOpenAvailability}>
                <PhoneCall size={18} />
                <span>Get Connection</span>
              </button>
            </div>

            {/* 4 Feature Icons Strip */}
            <div className="hero-inline-features">
              <div className="inline-feat-item">
                <div className="feat-icon-bubble">
                  <Settings size={18} className="text-red" />
                </div>
                <span className="feat-label">Free<br />Installation</span>
              </div>

              <div className="inline-feat-item">
                <div className="feat-icon-bubble">
                  <Gauge size={18} className="text-red" />
                </div>
                <span className="feat-label">High-Speed<br />Internet</span>
              </div>

              <div className="inline-feat-item">
                <div className="feat-icon-bubble">
                  <Tv size={18} className="text-red" />
                </div>
                <span className="feat-label">OTT<br />Entertainment</span>
              </div>

              <div className="inline-feat-item">
                <div className="feat-icon-bubble">
                  <Headphones size={18} className="text-red" />
                </div>
                <span className="feat-label">24/7<br />Support</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — Visual Composition with 4 Floating Cards & Avatar Pill */}
          <div className="hero-right-col">
            <div className="woman-photo-container">
              <img 
                src={womanRouterImg} 
                alt="Good Internet Better Moments - VS Telecom Fiber User" 
                className="woman-hero-photo"
              />
              {/* Soft Gradient Fade on Left Edge of Photo */}
              <div className="photo-left-fade-mask"></div>
            </div>





            {/* Dark Red Trusted Avatar Banner Card (Bottom Right of Photo) */}
            <div className="hero-trusted-avatar-banner">
              <div className="avatars-group">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="User 1" className="avatar-img" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="User 2" className="avatar-img" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" alt="User 3" className="avatar-img" />
                <div className="avatar-count-badge">10K+</div>
              </div>
              <div className="banner-divider"></div>
              <div className="trusted-text-block">
                <span className="t-label">Trusted by</span>
                <span className="t-val">10,000+ Happy Customers</span>
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM FULL-WIDTH TRUST STATS STRIP BAR */}
        <div className="hero-bottom-full-strip">
          
          <div className="bottom-stat-item">
            <div className="bstat-icon-wrap">
              <Users size={24} className="text-red" />
            </div>
            <div className="bstat-meta">
              <span className="bstat-val">10K+</span>
              <span className="bstat-lbl">Happy Customers</span>
            </div>
          </div>

          <div className="bottom-stat-item">
            <div className="bstat-icon-wrap">
              <Globe size={24} className="text-red" />
            </div>
            <div className="bstat-meta">
              <span className="bstat-val">99.9%</span>
              <span className="bstat-lbl">Uptime</span>
            </div>
          </div>

          <div className="bottom-stat-item">
            <div className="bstat-icon-wrap">
              <Zap size={24} className="text-red" />
            </div>
            <div className="bstat-meta">
              <span className="bstat-val">1000 Mbps</span>
              <span className="bstat-lbl">Max Speed</span>
            </div>
          </div>

          <div className="bottom-stat-item">
            <div className="bstat-icon-wrap">
              <MapPin size={24} className="text-red" />
            </div>
            <div className="bstat-meta">
              <span className="bstat-val">Wide</span>
              <span className="bstat-lbl">Network Coverage</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
