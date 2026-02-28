'use client';

import { useState, useEffect } from 'react';

export default function PrelaunchPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Static Launch Date: 28 Feb 2026, 4:00 PM
  
      const launchDate = new Date(2026, 2, 1, 9, 0, 0).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(136deg, #000231 0%, #00020b 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '20px'
      }}
    >
      <div>
        <img
          src="/img/logo.png"
          alt="Oniva"
          style={{
            maxWidth: '200px',
            marginBottom: '30px',
            display: 'block',
            margin: '0 auto 30px',
            animation: 'pulse 2s ease-in-out infinite'
          }}
        />

        <style jsx>{`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.8; }
          }
        `}</style>

        <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: 'bold' }}>
          Coming Soon
        </h1>

        <p style={{ fontSize: '1.2rem', marginBottom: '40px' }}>
          We&apos;re launching something amazing!
        </p>

        <div
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map(({ label, value }) => (
            <div
              key={label}
              style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '20px 30px',
                borderRadius: '10px',
                minWidth: '100px'
              }}
            >
              <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                {value}
              </div>
              <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
