import React from 'react';
import { ArrowRight, Info } from 'lucide-react';
import './OttEntertainment.css';

export default function OttEntertainment() {
  const ottPlatforms = [
    {
      id: 'sonyliv',
      name: 'SonyLIV',
      bg: 'linear-gradient(135deg, #1C1145 0%, #0A041C 100%)',
      logo: (
        <svg viewBox="0 0 100 45" width="80" height="36">
          <text x="50" y="16" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="13" fill="#FFFFFF" letterSpacing="1.5">SONY</text>
          <text x="50" y="38" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="22" fill="url(#livGradSq)">liv</text>
          <defs>
            <linearGradient id="livGradSq" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFCC00" />
              <stop offset="50%" stopColor="#FF0066" />
              <stop offset="100%" stopColor="#00CCFF" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      id: 'fancode',
      name: 'FanCode',
      bg: 'linear-gradient(135deg, #FF4500 0%, #E03000 100%)',
      logo: (
        <svg viewBox="0 0 100 45" width="85" height="36">
          <text x="50" y="28" textAnchor="middle" fontFamily="Impact, Arial Black, sans-serif" fontStyle="italic" fontWeight="900" fontSize="16" fill="#FFFFFF" letterSpacing="0.5">
            FANCODE
          </text>
        </svg>
      )
    },
    {
      id: 'discovery',
      name: 'Discovery+',
      bg: '#FFFFFF',
      isLight: true,
      logo: (
        <svg viewBox="0 0 110 45" width="90" height="36">
          <circle cx="22" cy="22" r="12" fill="none" stroke="url(#discGradSq)" strokeWidth="4" />
          <defs>
            <linearGradient id="discGradSq" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF8C00" />
              <stop offset="35%" stopColor="#E5097F" />
              <stop offset="70%" stopColor="#0066FF" />
              <stop offset="100%" stopColor="#00CC88" />
            </linearGradient>
          </defs>
          <text x="40" y="27" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="11" fill="#0B132B">
            discovery+
          </text>
        </svg>
      )
    },
    {
      id: 'shemaroome',
      name: 'ShemarooMe',
      bg: '#FFFFFF',
      isLight: true,
      logo: (
        <svg viewBox="0 0 100 45" width="85" height="36">
          <path d="M 15 15 C 22 8, 45 8, 52 15 C 58 22, 45 28, 32 26 C 20 24, 10 32, 15 38 C 20 44, 45 44, 52 38" fill="none" stroke="url(#shemGradSq)" strokeWidth="4" strokeLinecap="round" />
          <defs>
            <linearGradient id="shemGradSq" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF0055" />
              <stop offset="50%" stopColor="#FF9900" />
              <stop offset="100%" stopColor="#00AAFF" />
            </linearGradient>
          </defs>
          <text x="64" y="22" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="8" fill="#E5097F">
            shemaroo
          </text>
          <text x="64" y="32" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="7" fill="#00A8E1">
            me
          </text>
        </svg>
      )
    },
    {
      id: 'shemaroome-gujarati',
      name: 'ShemarooMe Gujarati',
      bg: 'linear-gradient(135deg, #1C0F2D 0%, #0A0414 100%)',
      logo: (
        <svg viewBox="0 0 110 45" width="95" height="36">
          <text x="55" y="18" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="8" fill="#FFCC00">
            shemaroo me
          </text>
          <text x="55" y="34" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="13" fill="#FF8800">
            ગુજરાતી
          </text>
        </svg>
      )
    },
    {
      id: 'tarangplus',
      name: 'Tarang Plus',
      bg: 'linear-gradient(135deg, #D31027 0%, #004494 100%)',
      logo: (
        <svg viewBox="0 0 100 45" width="85" height="36">
          <path d="M 12 18 C 25 10, 45 10, 58 18 C 45 26, 25 26, 12 18 Z" fill="url(#tarangGradSq)" />
          <defs>
            <linearGradient id="tarangGradSq" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFCC00" />
              <stop offset="50%" stopColor="#FF0044" />
              <stop offset="100%" stopColor="#00AEEF" />
            </linearGradient>
          </defs>
          <text x="45" y="36" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="14" fill="#FFFFFF">
            તરંગ
          </text>
          <text x="75" y="32" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="16" fill="#00E5FF">
            +
          </text>
        </svg>
      )
    },
    {
      id: 'gurjari',
      name: 'Gurjari',
      bg: 'linear-gradient(135deg, #2B1055 0%, #15052A 100%)',
      logo: (
        <svg viewBox="0 0 100 45" width="85" height="36">
          <rect x="15" y="10" width="30" height="24" rx="6" fill="url(#gurjGradSq)" />
          <polygon points="27,17 36,22 27,27" fill="#FFFFFF" />
          <defs>
            <linearGradient id="gurjGradSq" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF9900" />
              <stop offset="50%" stopColor="#E5097F" />
              <stop offset="100%" stopColor="#6600CC" />
            </linearGradient>
          </defs>
          <text x="70" y="27" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="12" fill="#FFCC00">
            ગુર્જરી
          </text>
        </svg>
      )
    },
    {
      id: 'sunnxt',
      name: 'Sun NXT',
      bg: 'linear-gradient(135deg, #B20A1C 0%, #78020F 100%)',
      logo: (
        <svg viewBox="0 0 100 45" width="85" height="36">
          <rect x="25" y="8" width="50" height="30" rx="6" fill="#E50914" />
          <text x="50" y="21" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="10" fill="#FFCC00" letterSpacing="1">
            SUN
          </text>
          <text x="50" y="32" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="11" fill="#FFFFFF" letterSpacing="0.5">
            NXT
          </text>
        </svg>
      )
    },
    {
      id: 'jiohotstar',
      name: 'JioHotstar',
      bg: 'linear-gradient(135deg, #0052D4 0%, #4364F7 50%, #E5097F 100%)',
      logo: (
        <svg viewBox="0 0 110 45" width="95" height="36">
          <polygon points="20,10 22,17 29,17 23,21 25,28 20,24 15,28 17,21 11,17 18,17" fill="#FFCC00" />
          <text x="65" y="27" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="13" fill="#FFFFFF">
            JioHotstar
          </text>
        </svg>
      )
    },
    {
      id: 'zee5',
      name: 'ZEE5',
      bg: '#0F0F12',
      logo: (
        <svg viewBox="0 0 100 45" width="85" height="36">
          <circle cx="28" cy="22.5" r="16" fill="none" stroke="url(#zeeGradSq)" strokeWidth="3.5" />
          <defs>
            <linearGradient id="zeeGradSq" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF007A" />
              <stop offset="50%" stopColor="#9000FF" />
              <stop offset="100%" stopColor="#00E5FF" />
            </linearGradient>
          </defs>
          <text x="62" y="29" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="20" fill="#FFFFFF">
            Z
          </text>
          <text x="76" y="29" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="20" fill="url(#zeeGradSq)">
            5
          </text>
        </svg>
      )
    },
    {
      id: 'lionsgate',
      name: 'LIONSGATE PLAY',
      bg: 'linear-gradient(135deg, #07192F 0%, #020C18 100%)',
      logo: (
        <svg viewBox="0 0 110 45" width="95" height="36">
          <text x="55" y="20" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="9" fill="#00E5FF" letterSpacing="1">
            LIONSGATE
          </text>
          <text x="55" y="33" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="10" fill="#00E5FF" letterSpacing="1.5">
            PLAY
          </text>
        </svg>
      )
    },
    {
      id: 'ottlive',
      name: 'OTTLive',
      bg: '#FFFFFF',
      isLight: true,
      logo: (
        <svg viewBox="0 0 100 45" width="85" height="36">
          <rect x="14" y="14" width="22" height="18" rx="4" fill="none" stroke="#FF5500" strokeWidth="2.5" />
          <polygon points="22,19 29,23 22,27" fill="#E5097F" />
          <text x="64" y="23" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="11" fill="#E5097F">
            ott
          </text>
          <text x="63" y="32" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="8" fill="#FF5500" letterSpacing="0.5">
            LIVE
          </text>
        </svg>
      )
    },
    {
      id: 'bhakti',
      name: 'Bhakti',
      bg: '#FFFFFF',
      isLight: true,
      logo: (
        <svg viewBox="0 0 100 45" width="85" height="36">
          <path d="M 15 28 C 15 14, 30 10, 42 14 C 34 22, 30 32, 15 28 Z" fill="url(#peacockGradSq)" />
          <defs>
            <linearGradient id="peacockGradSq" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00B0FF" />
              <stop offset="50%" stopColor="#00E676" />
              <stop offset="100%" stopColor="#FFD600" />
            </linearGradient>
          </defs>
          <text x="65" y="28" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="14" fill="#FF6600">
            भक्ति
          </text>
        </svg>
      )
    },
    {
      id: 'shemaroo',
      name: 'Shemaroo',
      bg: 'linear-gradient(135deg, #181124 0%, #090510 100%)',
      logo: (
        <svg viewBox="0 0 100 45" width="85" height="36">
          <path d="M 12 18 C 18 10, 50 10, 56 18 C 62 26, 50 34, 34 32 C 18 30, 6 38, 12 44" fill="none" stroke="url(#shemFullGradSq)" strokeWidth="4" strokeLinecap="round" />
          <defs>
            <linearGradient id="shemFullGradSq" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF0055" />
              <stop offset="33%" stopColor="#FF9900" />
              <stop offset="66%" stopColor="#00CCFF" />
              <stop offset="100%" stopColor="#00FF66" />
            </linearGradient>
          </defs>
          <text x="70" y="27" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="9" fill="#FFFFFF">
            shemaroo
          </text>
        </svg>
      )
    },
    {
      id: 'stage',
      name: 'STAGE',
      bg: '#FFFFFF',
      isLight: true,
      logo: (
        <svg viewBox="0 0 100 45" width="85" height="36">
          <polygon points="18,36 28,12 38,36" fill="#E50914" />
          <polygon points="24,28 28,18 32,28" fill="#FFFFFF" />
          <text x="66" y="28" textAnchor="middle" fontFamily="Impact, sans-serif" fontWeight="900" fontSize="13" fill="#0F0F0F" letterSpacing="0.5">
            STAGE
          </text>
        </svg>
      )
    }
  ];

  return (
    <section id="ott" className="ott-section page-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Internet + Entertainment. <span className="text-red">All In One.</span>
          </h2>
          <p className="section-subtitle">
            Stream your favourite shows, movies, sports and TV channels with selected broadband plans.
          </p>
        </div>

        {/* Square OTT Platform Grid */}
        <div className="ott-square-grid">
          {ottPlatforms.map((app) => (
            <div key={app.id} className="ott-square-item">
              <div
                className={`ott-square-box ${app.isLight ? 'light-square' : ''}`}
                style={{ background: app.bg }}
              >
                {app.logo}
              </div>
              <span className="ott-square-name">{app.name}</span>
            </div>
          ))}
        </div>

        {/* Disclaimer Callout Box */}
        <div className="ott-disclaimer-box">
          <div className="disclaimer-icon">
            <Info size={20} className="text-red" />
          </div>
          <div className="disclaimer-text">
            <strong>Note:</strong> OTT subscriptions & TV channel bundles depend on the chosen broadband plan.
          </div>
          <a href="#plans" className="btn btn-red btn-sm">
            <span>Explore Entertainment Plans</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}


