import React from 'react';
import { ShieldCheck, Zap, Users, Server, Award, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import technicianImg from '../assets/technician_network.png';
import './About.css';

export default function About() {
  const stats = [
    {
      value: '15+',
      label: 'Years Experience',
      sub: 'Leading regional telecom operator',
    },
    {
      value: '99.9%',
      label: 'Network Uptime',
      sub: 'Monitored 24/7 SLA infrastructure',
    },
    {
      value: '50K+',
      label: 'Connected Homes',
      sub: 'Across residential & commercial zones',
    },
    {
      value: '24/7',
      label: 'Dedicated Support',
      sub: 'Direct response from local engineers',
    },
  ];

  const pillars = [
    {
      icon: Zap,
      title: 'Pure Optical Fiber',
      desc: 'Point-to-point GPON fiber delivering symmetrical gigabit speeds.',
    },
    {
      icon: ShieldCheck,
      title: '99.9% SLA Reliability',
      desc: 'Dual-redundant underground fiber rings unaffected by weather.',
    },
    {
      icon: Users,
      title: 'Local Support',
      desc: 'Direct access to expert local technicians without long wait queues.',
    },
    {
      icon: Server,
      title: 'Zero Throttling',
      desc: 'Truly unlimited high-speed data with zero artificial speed caps.',
    },
  ];

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <h2 className="section-title">
            About <span className="text-red">VS TELECOM</span>
          </h2>
        </div>

        {/* Main About Content Grid */}
        <div className="about-grid">
          {/* Company Story & Value Offerings */}
          <div className="about-content-column">
            <p className="about-paragraph">
              At <strong>VS Telecom</strong>, we deploy high-capacity underground optical fiber networks engineered for zero lag, sub-5ms ping, and ultra-high reliability across homes and businesses.
            </p>

            {/* Core Values / Features Grid */}
            <div className="about-pillars-grid">
              {pillars.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="pillar-item">
                    <div className="pillar-icon-wrap">
                      <IconComp size={18} className="text-red" />
                    </div>
                    <div>
                      <h4 className="pillar-title">{item.title}</h4>
                      <p className="pillar-desc">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="about-stats-row">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-inline-item">
              <div className="stat-value text-red">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-sub">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
