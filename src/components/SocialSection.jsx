import React from 'react';
import { Sparkles, ExternalLink } from 'lucide-react';
import './SocialSection.css';

const InstagramIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const YoutubeIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const WhatsappIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function SocialSection() {
  const socialLinks = [
    {
      name: 'Instagram',
      desc: 'Follow @VS_TELECOMMUNICATION for speed tech updates & installation showcases.',
      icon: InstagramIcon,
      url: 'https://www.instagram.com/vs_telecommunication/',
      color: '#E4405F',
    },
    {
      name: 'Facebook',
      desc: 'Join our local community page for customer news and support updates.',
      icon: FacebookIcon,
      url: 'https://www.facebook.com/profile.php?id=61593772052305&sk=about',
      color: '#D71920',
    },
    {
      name: 'YouTube',
      desc: 'Watch DIY WiFi setup tutorials, router speed tests & unboxings on @VS_TELECOMMUNICATION.',
      icon: YoutubeIcon,
      url: 'https://www.youtube.com/@VS_TELECOMMUNICATION',
      color: '#FF0000',
    },
    {
      name: 'WhatsApp',
      desc: 'Instant WhatsApp chat on +91 70271 04250 for connection queries & support.',
      icon: WhatsappIcon,
      url: 'https://wa.me/917027104250',
      color: '#D71920',
    },
  ];


  return (
    <section className="social-section page-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">



            Connect With Us <span className="text-red">On Social Media</span>
          </h2>
          <p className="section-subtitle">
            Stay updated with our latest broadband offers, network status, speed tips, and community giveaways.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="social-grid">
          {socialLinks.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
              >
                <div className="social-icon-circle" style={{ backgroundColor: `${item.color}15`, color: item.color, borderColor: item.color }}>
                  <IconComp size={26} />
                </div>

                <div className="social-card-body">
                  <h3 className="social-name">
                    <span>{item.name}</span>
                    <ExternalLink size={14} className="text-muted" />
                  </h3>
                  <p className="social-desc">{item.desc}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
