import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronRight,
  PhoneCall,
  MapPin,
  Clock,
  Activity,
  ArrowRight,
  Home,
  FileText,
  Settings,
  Tv,
  Camera,
  Users,
} from 'lucide-react';
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
      document.documentElement.style.overflow = 'hidden';
      document.body.classList.add('mobile-menu-active');
      document.documentElement.classList.add('mobile-menu-active');
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.classList.remove('mobile-menu-active');
      document.documentElement.classList.remove('mobile-menu-active');
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.classList.remove('mobile-menu-active');
      document.documentElement.classList.remove('mobile-menu-active');
    };
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
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Plans', href: '#plans', icon: FileText },
    { name: 'Services', href: '#services', icon: Settings },
    { name: 'OTT & TV', href: '#ott', icon: Tv },
    { name: 'CCTV', href: '#cctv', icon: Camera },
    { name: 'About Us', href: '#about', icon: Users },
    { name: 'Contact', href: '#contact', icon: PhoneCall },
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
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open Navigation Menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Fullscreen Mobile Nav Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer-overlay" onTouchMove={(e) => e.preventDefault()}>
          <div className="mobile-nav-drawer-content">
            {/* Header with logo & close icon */}
            <div className="mobile-drawer-header">
              <img src={vsLogo} alt="VS TELECOM" className="mobile-drawer-logo" />
              <button
                className="mobile-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Menu Items List */}
            <div className="mobile-nav-links-list">
              {navLinks.map((link) => {
                const IconComp = link.icon;
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`mobile-nav-item ${isActive ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="m-item-left">
                      <div className="m-icon-badge">
                        <IconComp size={18} />
                      </div>
                      <span className="m-item-title">{link.name}</span>
                    </div>
                    <ChevronRight size={18} className="m-item-arrow" />
                  </a>
                );
              })}
            </div>

            {/* Need Help / Get Connection Card */}
            <div
              className="mobile-cta-card"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAvailability();
              }}
            >
              <div className="m-cta-phone-icon">
                <PhoneCall size={22} />
              </div>
              <div className="m-cta-text">
                <span className="m-cta-label">Need Help?</span>
                <strong className="m-cta-title">Get Connection</strong>
                <span className="m-cta-sub">Call us now for best plans</span>
              </div>
              <div className="m-cta-arrow-btn">
                <ArrowRight size={18} />
              </div>
            </div>

            {/* Follow Us Social Section */}
            <div className="mobile-social-section">
              <h4 className="m-social-heading">Follow Us</h4>
              <div className="m-social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=61593772052305&sk=about"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FacebookIcon size={16} />
                </a>
                <a
                  href="https://www.instagram.com/vs_telecommunication/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={16} />
                </a>
                <a
                  href="https://www.youtube.com/@VS_TELECOMMUNICATION"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <YoutubeIcon size={16} />
                </a>
                <a
                  href="https://wa.me/917027104250"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Bottom Slogan Accent */}
            <div className="mobile-drawer-footer-text">
              <span>Fast Internet. Stronger Tomorrow.</span>
              <span className="footer-accent-line"></span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
