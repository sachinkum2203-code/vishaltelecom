import React, { useState } from 'react';
import { X, Activity, Play, CheckCircle2, Gauge } from 'lucide-react';
import './SpeedTestModal.css';

export default function SpeedTestModal({ isOpen, onClose, onCheckPlans }) {
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [testComplete, setTestComplete] = useState(false);

  const [currentSpeed, setCurrentSpeed] = useState({
    download: 0,
    upload: 0,
    ping: 0,
  });

  const auraSpeed = {
    download: 984,
    upload: 980,
    ping: 2,
  };

  const handleStartTest = () => {
    setIsRunning(true);
    setProgress(0);
    setTestComplete(false);

    let current = 0;
    const interval = setInterval(() => {
      current += 4;
      setProgress(current);

      setCurrentSpeed({
        download: Math.min(92, Math.floor(Math.random() * 20 + current * 0.85)),
        upload: Math.min(18, Math.floor(Math.random() * 5 + current * 0.15)),
        ping: Math.floor(28 + Math.random() * 12),
      });

      if (current >= 100) {
        clearInterval(interval);
        setIsRunning(false);
        setTestComplete(true);
        setCurrentSpeed({ download: 84, upload: 14, ping: 34 });
      }
    }, 100);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content speed-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="modal-header">
          <h2 className="modal-title">Live Speed Simulator</h2>

          <p className="modal-desc">
            Compare typical legacy cable connections against VS Symmetrical Telecom Fiber.
          </p>
        </div>

        <div className="speed-test-box">
          {!isRunning && !testComplete && (
            <div className="speed-start-state">
              <div className="speed-gauge-icon">
                <Gauge size={48} className="text-gold" />
              </div>
              <p className="speed-start-text">Click start to run real-time packet test simulation.</p>
              <button className="btn btn-primary" onClick={handleStartTest}>
                <Play size={16} />
                <span>Run Speed Benchmark</span>
              </button>
            </div>
          )}

          {isRunning && (
            <div className="speed-running-state">
              <div className="progress-ring-wrap">
                <div className="progress-circle" style={{ background: `conic-gradient(#C6A15B ${progress * 3.6}deg, #E6E5E0 0deg)` }}>
                  <div className="circle-inner">
                    <span className="current-num">{currentSpeed.download}</span>
                    <span className="current-unit">Mbps</span>
                  </div>
                </div>
              </div>
              <div className="running-label">Measuring bandwidth latency & jitter... ({progress}%)</div>
            </div>
          )}

          {testComplete && (
            <div className="speed-comparison-view">
              <div className="comparison-grid">
                {/* Current ISP Result */}
                <div className="comp-card current-isp">
                  <div className="comp-badge">Estimated Current Connection</div>
                  <div className="comp-main-val">{currentSpeed.download} <span className="unit">Mbps</span></div>
                  <div className="comp-metrics">
                    <div className="m-row">
                      <span>Upload Speed:</span>
                      <strong>{currentSpeed.upload} Mbps</strong>
                    </div>
                    <div className="m-row">
                      <span>Latency (Ping):</span>
                      <strong className="text-muted">{currentSpeed.ping} ms</strong>
                    </div>
                  </div>
                </div>

                {/* VS Telecom Result */}
                <div className="comp-card aura-fiber-card">
                  <div className="comp-badge text-gold">★ VS Symmetrical Telecom</div>
                  <div className="comp-main-val text-gold">{auraSpeed.download} <span className="unit text-dark">Mbps</span></div>
                  <div className="comp-metrics">
                    <div className="m-row">
                      <span>Upload Speed:</span>
                      <strong className="text-gold">{auraSpeed.upload} Mbps</strong>
                    </div>
                    <div className="m-row">
                      <span>Latency (Ping):</span>
                      <strong className="text-gold">{auraSpeed.ping} ms (Ultra-Low)</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="speed-winner-banner">
                <CheckCircle2 size={20} className="text-gold" />
                <span>VS Telecom delivers <strong>11.7x faster download</strong> and <strong>70x faster upload</strong>.</span>
              </div>

              <div className="modal-actions">
                <button
                  className="btn btn-primary w-full"
                  onClick={() => {
                    onClose();
                    onCheckPlans();
                  }}
                >
                  Upgrade to Fiber Speed Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
