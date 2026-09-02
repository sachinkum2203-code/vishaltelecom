import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Plans from './components/Plans';
import FreeInstallationStrip from './components/FreeInstallationStrip';
import Services from './components/Services';
import OttEntertainment from './components/OttEntertainment';
import WirelessNetwork from './components/WirelessNetwork';
import CctvSurveillance from './components/CctvSurveillance';
import SocialSection from './components/SocialSection';
import Benefits from './components/Benefits';
import About from './components/About';
import ConnectionCta from './components/ConnectionCta';
import Contact from './components/Contact';
import Footer from './components/Footer';

import AvailabilityModal from './components/AvailabilityModal';
import SpeedTestModal from './components/SpeedTestModal';
import FloatingWhatsapp from './components/FloatingWhatsapp';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [isSpeedTestOpen, setIsSpeedTestOpen] = useState(false);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [hasTriggeredPlansPopup, setHasTriggeredPlansPopup] = useState(false);
  const [selectedPlanForForm, setSelectedPlanForForm] = useState(null);

  useEffect(() => {
    const plansEl = document.getElementById('plans');
    if (!plansEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggeredPlansPopup) {
            setIsAvailabilityOpen(true);
            setHasTriggeredPlansPopup(true);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(plansEl);
    return () => observer.disconnect();
  }, [hasTriggeredPlansPopup]);

  const handleSelectPlan = (plan) => {
    setSelectedPlanForForm(plan);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenAvailability = () => {
    setIsAvailabilityOpen(true);
  };

  const handleOpenSpeedTest = () => {
    setIsSpeedTestOpen(true);
  };

  return (
    <div className="app-root">
      {/* 2. Sticky Navbar */}
      <Navbar onOpenAvailability={handleOpenAvailability} />

      {/* Main Content Flow */}
      <main>
        {/* 4. Hero Section */}
        <Hero
          onOpenAvailability={handleOpenAvailability}
          onOpenSpeedTest={handleOpenSpeedTest}
        />

        {/* 5. Internet Plans Section */}
        <Plans onSelectPlan={handleSelectPlan} />

        {/* 6. Free Installation Strip */}
        <FreeInstallationStrip onOpenAvailability={handleOpenAvailability} />

        {/* 7. Services Section */}
        <Services onOpenAvailability={handleOpenAvailability} />

        {/* 8. OTT + TV Channels Section */}
        <OttEntertainment />

        {/* 11. Wireless Connectivity Section */}
        <WirelessNetwork onOpenAvailability={handleOpenAvailability} />

        {/* 12. CCTV Surveillance Section */}
        <CctvSurveillance onOpenAvailability={handleOpenAvailability} />

        {/* 9. Social Media Section */}
        <SocialSection />

        {/* 13. Why Customers Choose Us */}
        <Benefits />

        {/* About VS Telecom Section */}
        <About />

        {/* 14. Connection CTA Section */}

        <ConnectionCta onOpenAvailability={handleOpenAvailability} />

        {/* 15. Contact & Service Request Section */}
        <Contact selectedPlanFromProps={selectedPlanForForm} />
      </main>


      {/* 16. Footer */}
      <Footer />

      {/* Availability / Contact Check Modal */}
      <AvailabilityModal
        isOpen={isAvailabilityOpen}
        onClose={() => setIsAvailabilityOpen(false)}
        onSelectPlanAndScroll={() => {
          const plansEl = document.getElementById('plans');
          if (plansEl) plansEl.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Speed Test Simulator Modal */}
      <SpeedTestModal
        isOpen={isSpeedTestOpen}
        onClose={() => setIsSpeedTestOpen(false)}
        onCheckPlans={() => {
          const plansEl = document.getElementById('plans');
          if (plansEl) plansEl.scrollIntoView({ behavior: 'smooth' });
        }}
      />
      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsapp />
      {/* Scroll to Top Arrow Button */}
      <ScrollToTop />
    </div>
  );
}

