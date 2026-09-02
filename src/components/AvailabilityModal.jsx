import React from 'react';
import { X, ArrowRight, ShieldCheck } from 'lucide-react';
import './AvailabilityModal.css';

const WhatsappIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function AvailabilityModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleContactNow = () => {
    onClose();
    const message = encodeURIComponent(
      'Hello VS Telecom! I want to get a new high-speed fiber connection. Please connect with me.'
    );
    window.open(`https://wa.me/917027104250?text=${message}`, '_blank');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content availability-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="avail-modal-body">
          <h2 className="modal-title">
            Get High-Speed Fiber <span className="text-red">Today</span>
          </h2>

          <p className="modal-desc">
            Looking for a new connection or best broadband plans? Get in touch with our team on WhatsApp now.
          </p>

          <div className="avail-features-box">
            <div className="af-item">
              <span className="af-check">✓</span>
              <span>Free Installation Included</span>
            </div>
            <div className="af-item">
              <span className="af-check">✓</span>
              <span>Same-Day Technician Setup</span>
            </div>
            <div className="af-item">
              <span className="af-check">✓</span>
              <span>24/7 Dedicated Support</span>
            </div>
          </div>

          <button className="btn btn-red w-full check-btn contact-now-modal-btn" onClick={handleContactNow}>
            <WhatsappIcon size={20} />
            <span>Contact Now</span>
            <ArrowRight size={18} />
          </button>

          <div className="modal-trust-footer">
            <ShieldCheck size={16} className="text-red" />
            <span>100% Free Consultation • Fast Same-Day Dispatch</span>
          </div>
        </div>
      </div>
    </div>
  );
}
