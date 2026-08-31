import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ChevronLeft, PhoneCall, MapPin, Clock, Activity, ArrowRight } from 'lucide-react';
import vsLogo from '../assets/vs_telecom_logo_transparent.png';
import './Navbar.css';

const InstagramIcon = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const YoutubeIcon = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export default function Navbar({ onOpenAvailability }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'plans', 'services', 'ott', 'cctv', 'about', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Plans', href: '#plans' },
    { name: 'Services', href: '#services' },
    { name: 'OTT & TV', href: '#ott' },
    { name: 'CCTV', href: '#cctv' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Slim Info Bar */}
      <div className="top-info-bar">
        <div className="container top-info-container">
          <div className="top-info-left">
            <span className="info-item"><MapPin size={13} className="text-red" /> Subhash Nagar, Sonipat</span>
            <span className="info-item"><PhoneCall size={13} className="text-red" /> +91 70271 04250</span>
            <span className="info-item"><Clock size={13} className="text-red" /> Mon - Sat 9:00 AM - 8:00 PM</span>
          </div>
          <div className="top-info-right">
            <div className="top-socials">
              <a href="https://www.facebook.com/profile.php?id=61593772052305&sk=about" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon size={12} /></a>
              <a href="https://www.instagram.com/vs_telecommunication/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon size={12} /></a>
              <a href="https://www.youtube.com/@VS_TELECOMMUNICATION" target="_blank" rel="noopener noreferrer" aria-label="Youtube"><YoutubeIcon size={12} /></a>
            </div>
            <div className="top-slogan">
              <Activity size={13} className="text-red" />
              <span>Fast Today. Smarter Tomorrow.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-container container">
        <a href="#home" className="navbar-logo">
          <img src={vsLogo} alt="VS TELECOM — Connecting You Everyday" className="navbar-logo-img" />
        </a>


        {/* Desktop Navigation */}
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="navbar-cta-wrap">
          <button className="btn btn-red nav-cta-btn" onClick={onOpenAvailability}>
            <PhoneCall size={16} />
            <span>Get Connection</span>
          </button>
        </div>



        {/* Mobile Menu Toggle Button */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`mobile-nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <ChevronLeft size={16} className="text-red" />
                <span>{link.name}</span>
              </a>
            ))}

            <div className="mobile-cta-box">
              <button
                className="btn btn-red mobile-fit-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAvailability();
                }}
              >
                <PhoneCall size={16} />
                <span>Get Connection</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
