import React from 'react';
import { ArrowRight, Info } from 'lucide-react';
import './OttEntertainment.css';

export default function OttEntertainment() {
  const ottPlatforms = [
    {
      id: 'netflix',
      name: 'Netflix',
      subtitle: 'Movies & Series',
      bg: '#000000',
      logo: (
        <svg viewBox="0 0 36 36" height="34" fill="none">
          <path d="M9 5h6.5l11 26h-6.5z" fill="#E50914"/>
          <path d="M9 5h6.5v26H9z" fill="#B81D24"/>
          <path d="M20.5 5H27v26h-6.5z" fill="#B81D24"/>
        </svg>
      )
    },
    {
      id: 'prime',
      name: 'Prime Video',
      subtitle: 'Originals & Movies',
      bg: '#00A8E1',
      logo: (
        <svg viewBox="0 0 120 40" height="26" fill="white">
          <text x="5" y="24" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="18" fontStyle="italic" fill="white">prime video</text>
          <path d="M15 28 Q 50 36 85 28" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M82 25 L 89 28 L 84 32" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'disney',
      name: 'Disney+ Hotstar',
      subtitle: 'Movies, Sports, Shows',
      bg: '#041635',
      logo: (
        <svg viewBox="0 0 140 40" height="26" fill="white">
          <text x="2" y="24" fontFamily="Georgia, serif" fontWeight="bold" fontSize="18" fill="white">Disney+</text>
          <text x="70" y="24" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="15" fill="#E2B43B">hotstar</text>
        </svg>
      )
    },
    {
      id: 'zee5',
      name: 'ZEE5',
      subtitle: 'Web Series & Movies',
      bg: '#0F0F12',
      logo: (
        <svg viewBox="0 0 110 40" height="28">
          <circle cx="20" cy="20" r="13" fill="none" stroke="url(#zeeGrad)" strokeWidth="4"/>
          <defs>
            <linearGradient id="zeeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF007A"/>
              <stop offset="50%" stopColor="#9000FF"/>
              <stop offset="100%" stopColor="#00E5FF"/>
            </linearGradient>
          </defs>
          <text x="42" y="26" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="20" fill="white">ZEE5</text>
        </svg>
      )
    },
    {
      id: 'sonyliv',
      name: 'SonyLIV',
      subtitle: 'Live Sports & Shows',
      bg: 'linear-gradient(135deg, #1C1145 0%, #0A041C 100%)',
      logo: (
        <svg viewBox="0 0 100 40" height="28">
          <text x="5" y="17" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="13" fill="white" letterSpacing="1">SONY</text>
          <text x="5" y="34" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="17" fill="url(#livGrad)">liv</text>
          <defs>
            <linearGradient id="livGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFCC00"/>
              <stop offset="50%" stopColor="#FF0066"/>
              <stop offset="100%" stopColor="#00CCFF"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      id: 'jiocinema',
      name: 'JioCinema',
      subtitle: 'Movies & Originals',
      bg: '#E5097F',
      logo: (
        <svg viewBox="0 0 130 40" height="26" fill="white">
          <rect x="5" y="8" width="22" height="22" rx="5" fill="white"/>
          <circle cx="16" cy="15" r="3" fill="#E5097F"/>
          <rect x="14.5" y="19" width="3" height="7" rx="1" fill="#E5097F"/>
          <text x="34" y="24" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="14" fill="white">JioCinema</text>
        </svg>
      )
    },
    {
      id: 'youtube',
      name: 'YouTube',
      subtitle: 'Videos for Everyone',
      bg: '#FFFFFF',
      isLight: true,
      logo: (
        <svg viewBox="0 0 130 40" height="26">
          <rect x="5" y="8" width="30" height="22" rx="6" fill="#FF0000"/>
          <polygon points="16,13 26,19 16,25" fill="white"/>
          <text x="42" y="25" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="16" fill="#0F0F0F">YouTube</text>
        </svg>
      )
    },
    {
      id: 'appletv',
      name: 'Apple TV',
      subtitle: 'Premium Content',
      bg: '#000000',
      logo: (
        <svg viewBox="0 0 100 40" height="26" fill="white">
          <path d="M15 11c-.8 0-1.8.5-2.4 1.2-.6-.7-1.5-1.2-2.3-1.2-1.8 0-3.3 1.5-3.3 3.5 0 2.7 2.5 5.2 4.4 7.7.4.5.8 1 1.2 1.5.4-.5.8-1 1.2-1.5 2-2.5 4.4-5 4.4-7.7 0-2-1.5-3.5-3.2-3.5z" fill="white"/>
          <text x="26" y="25" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="19" fill="white">tv</text>
        </svg>
      )
    }
  ];

  return (
    <section id="ott" className="ott-section page-screen-section screen-section section-padding">
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

        {/* OTT Platform Grid / Row */}
        <div className="ott-row-grid">
          {ottPlatforms.map((app) => (
            <div key={app.id} className="ott-app-item">
              <div
                className={`ott-app-box ${app.isLight ? 'light-box' : ''}`}
                style={{ background: app.bg }}
              >
                {app.logo}
              </div>
              <div className="ott-app-info">
                <h4 className="ott-app-name">{app.name}</h4>
                <p className="ott-app-sub">{app.subtitle}</p>
              </div>
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
