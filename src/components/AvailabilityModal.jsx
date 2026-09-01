import React, { useState } from 'react';
import { X, Phone, MapPin, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import './AvailabilityModal.css';

export default function AvailabilityModal({ isOpen, onClose, onSelectPlanAndScroll }) {
  const [mobileInput, setMobileInput] = useState('');
  const [pinInput, setPinInput] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchComplete, setSearchComplete] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setSearchComplete(true);
    }, 800);
  };

  const handleReset = () => {
    setSearchComplete(false);
    setMobileInput('');
    setPinInput('');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content availability-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {!searchComplete ? (
          <div className="avail-modal-body">
            <div className="avail-header-badge">
              <Sparkles size={14} className="text-red" />
              <span>HIGH-SPEED FIBER COVERAGE</span>
            </div>

            <h2 className="modal-title">
              Check Internet Availability <span className="text-red">in Your Area</span>
            </h2>

            <p className="modal-desc">
              Enter your mobile number to check plans and connectivity available at your location.
            </p>

            <form onSubmit={handleSearch} className="avail-form">
              <div className="form-group">
                <label className="form-label">Mobile Number *</label>
                <div className="input-with-icon">
                  <Phone size={18} className="input-icon text-red" />
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    placeholder="Enter 10-digit mobile number"
                    value={mobileInput}
                    onChange={(e) => setMobileInput(e.target.value.replace(/[^0-9]/g, '').slice(0, 10))}
                    className="form-input icon-padded"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Area / PIN Code *</label>
                <div className="input-with-icon">
                  <MapPin size={18} className="input-icon text-red" />
                  <input
                    type="text"
                    required
                    pattern="[0-9]{6}"
                    maxLength={6}
                    placeholder="Enter 6-digit PIN code"
                    value={pinInput}
                    onChange={(e) => setPinInput(e.target.value.replace(/[^0-9]/g, '').slice(0, 6))}
                    className="form-input icon-padded"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-red w-full check-btn" disabled={isSearching}>
                {isSearching ? (
                  <span>Checking Connectivity Network...</span>
                ) : (
                  <>
                    <span>Check Availability</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            <div className="modal-trust-footer">
              <ShieldCheck size={16} className="text-red" />
              <span>100% secure. We’ll only contact you regarding your connection request.</span>
            </div>
          </div>
        ) : (
          <div className="avail-success-body">
            <div className="success-icon-wrap">
              <CheckCircle2 size={48} className="text-red" />
            </div>


            <h2 className="modal-title">
              High-Speed Fiber <span className="text-red">is Available!</span>
            </h2>
            
            <p className="modal-desc">
              Great news! Ultra-fast fiber optic broadband & FREE Installation are ready for mobile <strong>{mobileInput}</strong> in <strong>{pinInput}</strong>.
            </p>

            <div className="avail-features-box">
              <div className="af-item">
                <span className="af-check">✓</span>
                <span>Free Installation Available</span>
              </div>
              <div className="af-item">
                <span className="af-check">✓</span>
                <span>Same-Day Expert Connection Setup</span>
              </div>
              <div className="af-item">
                <span className="af-check">✓</span>
                <span>Free High-Speed Wi-Fi Router Included</span>
              </div>
            </div>

            <div className="avail-modal-ctas">
              <button
                className="btn btn-red w-full"
                onClick={() => {
                  onClose();
                  if (onSelectPlanAndScroll) onSelectPlanAndScroll();
                }}
              >
                <span>View Available Plans</span>
                <ArrowRight size={18} />
              </button>

              <button className="btn btn-outline-red w-full" onClick={handleReset}>
                Check Another Location
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

