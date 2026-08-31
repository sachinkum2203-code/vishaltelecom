import React from 'react';
import { Tv, Laptop, Gamepad2, Smartphone, Wifi, CheckCircle } from 'lucide-react';
import lifestyleHomeImg from '../assets/lifestyle_home.png';
import './Lifestyle.css';

export default function Lifestyle({ onOpenAvailability }) {
  const useCases = [
    {
      icon: Tv,
      title: '4K & 8K Ultra HD Streaming',
      desc: 'Zero buffering across TV screens in bedrooms and living rooms simultaneously.',
    },
    {
      icon: Laptop,
      title: 'Remote Work & Cloud Sync',
      desc: 'Seamless Zoom calls and gigabyte file uploads with 100% symmetrical bandwidth.',
    },
    {
      icon: Gamepad2,
      title: 'Competitive Low-Latency Gaming',
      desc: 'Sub-10ms ping rates and steady packets without lag spikes or jitter.',
    },
    {
      icon: Smartphone,
      title: '50+ Connected Smart Home Devices',
      desc: 'Security cameras, ambient lighting, and smart appliances operating in parallel.',
    },
  ];

  return (
    <section id="lifestyle" className="lifestyle-section section-padding">
      <div className="container">
        {/* Section Title */}
        <div className="lifestyle-header">
          <div className="label-uppercase">
            <span>WHOLE-HOME ECOSYSTEM</span>
          </div>
          <h2 className="lifestyle-heading">
            One connection. <span className="text-gold">Every room. Every device.</span>
          </h2>
          <p className="lifestyle-subheading">
            Modern households rely on dozens of simultaneous data streams. VS Telecom creates a dedicated highway for all your family devices.
          </p>
        </div>

        {/* Photography-Led Composition Grid */}
        <div className="lifestyle-grid">
          {/* Main Large Visual Frame */}
          <div className="lifestyle-media-frame">
            <img
              src={lifestyleHomeImg}
              alt="Family experiencing high-speed fiber internet in modern home"
              className="lifestyle-photo"
            />
          </div>

          {/* Side Content: 4 Real-Life Scenarios */}
          <div className="lifestyle-usecases-column">
            {useCases.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="usecase-card">
                  <div className="usecase-icon-box">
                    <IconComp size={20} className="text-gold" />
                  </div>
                  <div className="usecase-text">
                    <h3 className="usecase-title">{item.title}</h3>
                    <p className="usecase-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}

            <div className="lifestyle-cta-box">
              <button className="btn btn-primary" onClick={onOpenAvailability}>
                Check Availability at My Address
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
