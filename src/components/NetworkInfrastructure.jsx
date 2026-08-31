import React from 'react';
import { Activity, ShieldCheck, Cpu, Radio, Zap, Globe, Sparkles, Server } from 'lucide-react';
import './NetworkInfrastructure.css';

export default function NetworkInfrastructure() {
  const networkHighlights = [
    { title: 'High-Speed Connectivity', desc: 'Symmetrical gigabit fiber optic speeds up to 1000 Mbps.', icon: Zap },
    { title: 'Stable Network', desc: '100% underground fiber cabling shielded from weather interference.', icon: ShieldCheck },
    { title: 'Low Latency', desc: 'Sub-5ms ping rates optimized for online gaming and live calls.', icon: Activity },
    { title: 'Wider Coverage', desc: 'Seamless high-capacity nodes covering residential & business hubs.', icon: Radio },
    { title: '99.9% Reliable Uptime', desc: 'Dual-redundant fiber loops with automatic failover backup.', icon: Cpu },
    { title: 'Advanced Infrastructure', desc: 'Next-gen GPON fiber architecture with enterprise hardware.', icon: Server },
    { title: 'Residential Connectivity', desc: 'Ultra-fast home connectivity for multiple simultaneous 4K streams.', icon: Globe },
    { title: 'Business Connectivity', desc: 'Dedicated leased lines, static IPs, and custom corporate SLAs.', icon: Sparkles },
  ];

  return (
    <section id="network" className="network-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">



            A Network <span className="text-red">Built For Reliability</span>
          </h2>
          <p className="section-subtitle">
            Our state-of-the-art fiber infrastructure delivers ultra-low latency, zero throttling, and 99.9% guaranteed uptime.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="network-grid">

          {networkHighlights.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="net-feature-card">
                <div className="net-icon-box">
                  <IconComp size={22} className="text-red" />
                </div>
                <div className="net-card-body">
                  <h3 className="net-feature-title">{item.title}</h3>
                  <p className="net-feature-desc">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
