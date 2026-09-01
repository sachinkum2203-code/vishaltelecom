import React from 'react';
import {
  ChevronRight,
  Wifi,
  Share2,
  Tv,
  Camera,
  Router,
  Headphones,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  PhoneCall,
  Gift
} from 'lucide-react';
import vsLogo from '../assets/vs_telecom_logo_transparent.png';
import './Footer.css';

const InstagramIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const YoutubeIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const WhatsappIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="telecom-footer">
      <div className="container">
        {/* Main 4-Column Grid */}
        <div className="footer-main-grid">
          {/* Column 1: Brand Info & Social Icons */}
          <div className="footer-col brand-col">
            <a href="#home" className="footer-logo">
              <img src={vsLogo} alt="VS TELECOM" className="footer-logo-img" />
            </a>
            <p className="footer-description">
              Premium internet, OTT & Live TV entertainment, CCTV surveillance and smart connectivity solutions for modern homes and businesses.
            </p>
            <div className="footer-social-icons">
              <a href="https://www.instagram.com/vs_telecommunication/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
                <InstagramIcon size={18} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61593772052305&sk=about" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook">
                <FacebookIcon size={18} />
              </a>
              <a href="https://www.youtube.com/@VS_TELECOMMUNICATION" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="YouTube">
                <YoutubeIcon size={18} />
              </a>
              <a href="https://wa.me/917027104250" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="WhatsApp">
                <WhatsappIcon size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">
              Quick Links
              <span className="heading-underline"></span>
            </h4>
            <ul className="footer-links-list">
              <li><a href="#home"><span>Home</span> <ChevronRight size={15} /></a></li>
              <li><a href="#plans"><span>Plans</span> <ChevronRight size={15} /></a></li>
              <li><a href="#services"><span>Services</span> <ChevronRight size={15} /></a></li>
              <li><a href="#ott"><span>OTT & TV</span> <ChevronRight size={15} /></a></li>
              <li><a href="#cctv"><span>CCTV</span> <ChevronRight size={15} /></a></li>
              <li><a href="#about"><span>About Us</span> <ChevronRight size={15} /></a></li>
              <li><a href="#contact"><span>Contact</span> <ChevronRight size={15} /></a></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="footer-col">
            <h4 className="footer-heading">
              Our Services
              <span className="heading-underline"></span>
            </h4>
            <ul className="footer-services-list">
              <li><a href="#wireless"><Share2 size={17} className="service-icon" /><span>Wireless Connectivity</span></a></li>
              <li><a href="#ott"><Tv size={17} className="service-icon" /><span>OTT & Live TV Entertainment</span></a></li>
              <li><a href="#cctv"><Camera size={17} className="service-icon" /><span>CCTV Surveillance</span></a></li>
              <li><a href="#services"><Router size={17} className="service-icon" /><span>LAN Solutions</span></a></li>
              <li><a href="#free-installation"><Gift size={17} className="service-icon" /><span>Free Installation</span></a></li>
              <li><a href="#contact"><Headphones size={17} className="service-icon" /><span>Customer Support</span></a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">
              Contact Us
              <span className="heading-underline"></span>
            </h4>
            <div className="footer-contact-details">
              <div className="contact-item">
                <div className="contact-icon-badge">
                  <MapPin size={17} />
                </div>
                <div className="contact-item-text">
                  <strong>Subhash Nagar, Sonipat</strong>
                  <span>Haryana - 131001</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-badge">
                  <Phone size={17} />
                </div>
                <div className="contact-item-text">
                  <strong>+91 70271 04250</strong>
                  <span>Mon - Sat, 9:00 AM - 5:00 PM</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-badge">
                  <Mail size={17} />
                </div>
                <div className="contact-item-text">
                  <a href="mailto:vstelicommunication@gmail.com" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                    <strong>vstelicommunication@gmail.com</strong>
                  </a>
                  <span>We'll respond within 24 hours</span>
                </div>
              </div>

              <button
                className="footer-cta-btn"
                onClick={() => {
                  const message = encodeURIComponent('Hello VS Telecom! I want to get a new connection.');
                  window.open(`https://wa.me/917027104250?text=${message}`, '_blank');
                }}
              >
                <PhoneCall size={18} />
                <span>Get Connection</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="footer-divider-line"></div>

        {/* Bottom Legal Bar */}
        <div className="footer-bottom-bar">
          <div className="copyright-text">
            © {currentYear} VS Telecom Network. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
