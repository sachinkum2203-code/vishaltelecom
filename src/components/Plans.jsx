import React, { useState } from 'react';
import { Check, Zap, Tv, ShieldCheck, ArrowRight, Sparkles, Gift } from 'lucide-react';
import './Plans.css';

export default function Plans({ onSelectPlan }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'halfYearly' | 'yearly'

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      subtitle: 'Best for browsing & social media',
      speed: '50 Mbps',
      price: {
        monthly: 499,
        halfYearly: 449,
        yearly: 399,
      },
      isPopular: false,
      ctaText: 'Get Started',
      features: [
        'High-speed internet (50 Mbps)',
        'Unlimited data',
        'Multiple device support',
        'Free Installation',
        'Wi-Fi Dual-Band Router',
        '24/7 Standard Support',
      ],
    },
    {
      id: 'family',
      name: 'Family',
      subtitle: 'Best for families & entertainment',
      speed: '150 Mbps',
      price: {
        monthly: 799,
        halfYearly: 719,
        yearly: 639,
      },
      isPopular: true,
      badgeText: 'MOST POPULAR',
      ctaText: 'Choose Plan',
      features: [
        'Faster internet speed (150 Mbps)',
        'Unlimited data',
        'OTT benefits (Hotstar, ZEE5, SonyLIV)',
        '200+ Live TV channels',
        'Free Installation',
        'High-Speed Wi-Fi 6 Router',
      ],
    },
    {
      id: 'premium',
      name: 'Premium',
      subtitle: 'Best for streaming, gaming & work',
      speed: '300 Mbps',
      price: {
        monthly: 1199,
        halfYearly: 1079,
        yearly: 959,
      },
      isPopular: false,
      ctaText: 'Get Premium',
      features: [
        'Ultra-fast internet (300 Mbps)',
        'Unlimited data',
        'Multiple devices connected',
        'OTT entertainment (Netflix, Prime, Hotstar)',
        '350+ Live TV channels',
        'Priority Support 24/7',
        'Free Installation',
      ],
    },
    {
      id: 'business',
      name: 'Business Pro',
      subtitle: 'Best for offices & heavy streaming',
      speed: '500 Mbps',
      price: {
        monthly: 1999,
        halfYearly: 1799,
        yearly: 1599,
      },
      isPopular: false,
      ctaText: 'Get Business Pro',
      features: [
        'Ultra Gigabit Fiber (500 Mbps)',
        'Symmetrical Upload & Download',
        'Static IP Available on Request',
        'Full OTT & Premium TV Package',
        '24/7 VIP Dedicated Account Manager',
        'Free Installation & Router Setup',
      ],
    },
  ];

  return (
    <section id="plans" className="plans-section page-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">



            Choose The <span className="text-red">Perfect Internet Plan</span>
          </h2>
          <p className="section-subtitle">
            Flexible plans designed for every home, family and business. All plans include <strong className="text-red">Free Installation</strong>.
          </p>

          {/* Billing Cycle Tabs */}
          <div className="billing-tabs-container">
            <button
              className={`billing-tab ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`billing-tab ${billingCycle === 'halfYearly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('halfYearly')}
            >
              Half Yearly
            </button>
            <button
              className={`billing-tab ${billingCycle === 'yearly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="plans-grid">
          {plans.map((plan) => {
            const currentPrice = plan.price[billingCycle];
            return (
              <div
                key={plan.id}
                className={`plan-card ${plan.isPopular ? 'popular-plan' : ''}`}
              >
                {plan.isPopular && (
                  <div className="plan-popular-badge">
                    <span>{plan.badgeText}</span>
                  </div>
                )}

                <div className="plan-card-header">
                  <div className="plan-top-row">
                    <span className="plan-speed-tag">
                      <Zap size={14} className="text-red" />
                      <span>{plan.speed}</span>
                    </span>
                    {billingCycle === 'halfYearly' && (
                      <span className="savings-badge-card">SAVE 10%</span>
                    )}
                    {billingCycle === 'yearly' && (
                      <span className="savings-badge-card">SAVE 20%</span>
                    )}
                  </div>
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-subtitle">{plan.subtitle}</p>
                </div>

                <div className="plan-price-box">
                  <div className="price-display">
                    <span className="currency">₹</span>
                    <span className="amount text-red">{currentPrice}</span>
                    <span className="period">/ month</span>
                  </div>
                  <div className="billing-note">
                    {billingCycle === 'monthly' && 'Billed monthly • Cancel anytime'}
                    {billingCycle === 'halfYearly' && 'Billed half-yearly (Save 10%)'}
                    {billingCycle === 'yearly' && 'Billed annually (Best savings + Free Router)'}
                  </div>
                </div>

                <div className="free-install-ribbon">
                  <Gift size={15} className="text-red" />
                  <span>Free Installation Included</span>
                </div>


                <ul className="plan-features">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="feature-line">
                      <span className="feat-check">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`btn ${plan.isPopular ? 'btn-red' : 'btn-outline-red'}`}
                  onClick={() => {
                    const currentPrice = plan.price[billingCycle];
                    const cycleLabel = billingCycle === 'halfYearly' ? 'Half-Yearly' : billingCycle === 'yearly' ? 'Yearly' : 'Monthly';
                    const message = encodeURIComponent(
                      `Hello VS Telecom! I want to get the ${plan.name} Plan (${plan.speed}) at ₹${currentPrice}/month (${cycleLabel}). Please connect with me.`
                    );
                    window.open(`https://wa.me/917027104250?text=${message}`, '_blank');
                  }}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

