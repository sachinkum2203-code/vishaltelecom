import React from 'react';
import { Wifi, Router, Tv, Film, Camera, Network } from 'lucide-react';
import './Services.css';

export default function Services({ onOpenAvailability }) {
  const services = [
    {
      id: 'internet',
      title: 'High-Speed Internet',
      description: 'Reliable broadband connectivity for your everyday digital life. Enjoy seamless browsing, video calls, and HD streaming.',
      icon: Wifi,
      badge: 'Gigabit Fiber',
      link: '#plans',
    },
    {
      id: 'wireless',
      title: 'Wireless Network',
      description: 'Strong wireless connectivity across your home or office. Dual-band Wi-Fi 6 coverage eliminates dead zones.',
      icon: Router,
      badge: 'Whole-Home Mesh',
      link: '#wireless',
    },
    {
      id: 'ott',
      title: 'OTT Entertainment',
      description: 'Enjoy popular entertainment platforms with selected plans. Stream movies, original series, and kids content.',
      icon: Film,
      badge: 'Streaming Ready',
      link: '#ott',
    },
    {
      id: 'tv',
      title: 'TV Channels',
      description: 'Access entertainment, news, sports, movies and regional channels with ultra-clear HD quality picture.',
      icon: Tv,
      badge: '350+ Live Channels',
      link: '#ott',
    },
    {
      id: 'cctv',
      title: 'CCTV Surveillance',
      description: 'Professional security camera solutions for homes, offices and businesses. HD night vision & mobile access.',
      icon: Camera,
      badge: '24/7 Security',
      link: '#cctv',
    },
    {
      id: 'network',
      title: 'Network Solutions',
      description: 'Reliable networking infrastructure for residential and business requirements. Dedicated static IPs & SLA support.',
      icon: Network,
      badge: 'Enterprise Grade',
      link: '#network',
    },
  ];

  return (
    <section id="services" className="services-section page-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">



            More Than <span className="text-red">Just Internet</span>
          </h2>
          <p className="section-subtitle">
            From high-speed fiber broadband to smart WiFi, OTT streaming packages, and CCTV security — everything you need for connected living.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="services-grid">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="service-card">
                <div className="service-card-top">
                  <div className="service-icon-box">
                    <IconComponent size={24} className="text-red" />
                  </div>
                  <span className="service-badge text-red">{service.badge}</span>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

