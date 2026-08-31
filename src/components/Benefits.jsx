import React from 'react';
import { Zap, Gift, ShieldCheck, Tv, Router, Camera, Sparkles } from 'lucide-react';
import './Benefits.css';

export default function Benefits() {
  const benefits = [
    {
      title: 'Fast Internet',
      desc: 'Built for modern digital lifestyles with zero speed throttling.',
      icon: Zap,
    },
    {
      title: 'Free Installation',
      desc: 'Quick and professional setup on eligible plans with zero hassle.',
      icon: Gift,
    },
    {
      title: 'Reliable Network',
      desc: 'Stable connectivity with 99.9% uptime when you need it most.',
      icon: ShieldCheck,
    },
    {
      title: 'Entertainment Ready',
      desc: 'OTT apps & 350+ Live TV channels bundled with eligible plans.',
      icon: Tv,
    },
    {
      title: 'Wireless Solutions',
      desc: 'Professional home and office Wi-Fi 6 networks for all devices.',
      icon: Router,
    },
    {
      title: 'CCTV Security',
      desc: 'Complete surveillance solutions with HD night vision recording.',
      icon: Camera,
    },
  ];

  return (
    <section className="benefits-section page-screen-section screen-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">



            Why Customers <span className="text-red">Choose Us</span>
          </h2>
          <p className="section-subtitle">
            We provide reliable gigabit internet backed by cutting-edge optical fiber technology and dedicated customer support.
          </p>
        </div>

        {/* 6 Grid Benefits */}
        <div className="benefits-grid">
          {benefits.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="benefit-card">
                <div className="benefit-icon-box">
                  <IconComp size={24} className="text-red" />
                </div>
                <h3 className="benefit-card-title">{item.title}</h3>
                <p className="benefit-card-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
