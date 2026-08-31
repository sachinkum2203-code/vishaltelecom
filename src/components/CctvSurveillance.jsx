import React from 'react';
import { Camera, ShieldCheck, Eye, Smartphone, HardDrive, Video } from 'lucide-react';
import './CctvSurveillance.css';

export default function CctvSurveillance({ onOpenAvailability }) {
  const cctvFeatures = [
    { title: 'HD CCTV Cameras', desc: 'Crystal clear 4K & 1080p high-definition video feeds.', icon: Video },
    { title: 'Indoor & Outdoor', desc: 'Weatherproof IP67 rated cameras for any environment.', icon: Camera },
    { title: 'Night Vision', desc: 'Infrared & Full-Color Night Vision for 24/7 dark coverage.', icon: Eye },
    { title: 'Remote Monitoring', desc: 'Live mobile app viewing from anywhere in the world.', icon: Smartphone },
    { title: 'Professional Setup', desc: 'Expert wiring, wall mounting & DVR/NVR configuration.', icon: ShieldCheck },
    { title: 'Secure Recording', desc: 'Cloud backup & encrypted local DVR hard drive storage.', icon: HardDrive },
  ];

  return (
    <section id="cctv" className="cctv-section screen-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            24/7 CCTV & <span className="text-red">Security Systems</span>
          </h2>
          <p className="section-subtitle">
            Protect your family, office, warehouse, and property with high-definition IP cameras, night vision, and remote mobile viewing.
          </p>
        </div>

        {/* Features Cards Grid */}
        <div className="cctv-features-grid">
          {cctvFeatures.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="cctv-feature-card">
                <div className="cctv-icon-wrap">
                  <IconComp size={22} className="text-red" />
                </div>
                <div className="cctv-feat-content">
                  <h3 className="cctv-feat-title">{item.title}</h3>
                  <p className="cctv-feat-desc">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
