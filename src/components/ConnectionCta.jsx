import React from 'react';
import { PhoneCall, ArrowRight, Gift, ShieldCheck } from 'lucide-react';
import './ConnectionCta.css';

export default function ConnectionCta({ onOpenAvailability }) {
  return (
    <section className="connection-cta-section page-section">
      <div className="container connection-cta-container">
        <div className="connection-cta-content">
          <div className="cta-free-badge">
            <Gift size={16} className="text-white" />
            <span>FREE INSTALLATION AVAILABLE</span>
          </div>

          <h2 className="connection-cta-title">
            Ready For <span>High-Speed Internet?</span>
          </h2>

          <p className="connection-cta-desc">
            Get high-speed optical fiber internet installed with <strong>FREE Installation</strong> in Sonipat. Choose the best plan for your home or business today.
          </p>

          <div className="cta-buttons-wrap">
            <button className="btn cta-primary-btn" onClick={onOpenAvailability}>
              <PhoneCall size={18} />
              <span>Get Connection</span>
            </button>
          </div>

          <div className="cta-guarantee-line">
            <ShieldCheck size={16} className="text-white" />
            <span>100% Secure. Instant response from authorized local technician.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
