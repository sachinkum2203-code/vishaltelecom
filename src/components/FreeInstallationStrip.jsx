import React from 'react';
import { Gift, ArrowRight, ShieldCheck } from 'lucide-react';
import './FreeInstallationStrip.css';

export default function FreeInstallationStrip({ onOpenAvailability }) {
  return (
    <section className="free-install-strip page-screen-section screen-section">
      <div className="container free-install-container">
        <div className="free-install-left">
          <div className="free-install-badge">
            <Gift size={16} className="text-white" />
            <span>LIMITED TIME PROMOTION</span>
          </div>

          <h2 className="free-install-title">
            Installation? <span>It’s On Us.</span>
          </h2>

          <p className="free-install-desc">
            Get your new broadband connection installed with <strong>FREE Installation</strong> on eligible plans. No hidden setup charges, guaranteed.
          </p>

          <div className="free-install-checks">
            <div className="fi-check-item">
              <span className="fi-icon">✓</span>
              <span>Quick Installation</span>
            </div>
            <div className="fi-check-item">
              <span className="fi-icon">✓</span>
              <span>Professional Setup</span>
            </div>
            <div className="fi-check-item">
              <span className="fi-icon">✓</span>
              <span>Router Configuration</span>
            </div>
            <div className="fi-check-item">
              <span className="fi-icon">✓</span>
              <span>Connection Testing</span>
            </div>
          </div>

          <div className="free-install-action-row">
            <button
              className="btn btn-white-red fi-cta-btn"
              onClick={() => {
                const message = encodeURIComponent(
                  'Hello VS Telecom! I want to book a FREE Broadband Installation. Please connect with me.'
                );
                window.open(`https://wa.me/917027104250?text=${message}`, '_blank');
              }}
            >
              <span>Book Free Installation</span>
              <ArrowRight size={18} />
            </button>
            <div className="fi-note">
              <ShieldCheck size={16} className="text-white" />
              <span>100% Satisfaction Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

