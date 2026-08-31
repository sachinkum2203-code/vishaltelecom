import React from 'react';
import { Router, Wifi, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import './WirelessNetwork.css';

export default function WirelessNetwork({ onOpenAvailability }) {
  const wirelessFeatures = [
    'Better Coverage across multi-floor rooms & yards',
    'Multiple Device Connectivity (100+ active devices)',
    'Stable Wireless Performance with Wi-Fi 6 technology',
    'Professional Setup & room-by-room signal testing',
    'Secure Network with WPA3 enterprise encryption',
    'Router Configuration & SSID channel optimization',
  ];

  return (
    <section id="wireless" className="wireless-section page-screen-section screen-section section-padding">
      <div className="container wireless-container">
        {/* Left Column: Text & Features */}
        <div className="wireless-left">
          <h2 className="wireless-title">



            Powerful WiFi. <span className="text-red">Every Corner Covered.</span>
          </h2>

          <p className="wireless-text">
            Create a reliable wireless network designed to provide fast and stable connectivity across homes, offices and commercial spaces. Say goodbye to buffer wheels and WiFi dead zones.
          </p>

          <div className="wireless-features-grid">
            {wirelessFeatures.map((feat, idx) => (
              <div key={idx} className="wf-item">
                <span className="wf-check">✓</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <button
            className="btn btn-red wireless-cta"
            onClick={() => {
              const message = encodeURIComponent(
                'Hello VS Telecom! I am interested in your Powerful Wi-Fi & Wireless Network Solutions. Please connect with me.'
              );
              window.open(`https://wa.me/917027104250?text=${message}`, '_blank');
            }}
          >
            <Router size={18} />
            <span>Get Wireless Solution</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
