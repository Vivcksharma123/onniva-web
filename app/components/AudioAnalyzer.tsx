'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

export default function AudioAnalyzer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioMotionRef = useRef<any>(null);
  const [isReady, setIsReady] = useState(false);

  const initAudioMotion = () => {
    if (!containerRef.current || !audioRef.current || audioMotionRef.current) return;

    // @ts-ignore
    if (typeof window !== 'undefined' && window.AudioMotionAnalyzer) {
      try {
        // @ts-ignore
        audioMotionRef.current = new window.AudioMotionAnalyzer(containerRef.current, {
          source: audioRef.current,
          height: 500,
          mode: 10,
          radial: true,
          radialInvert: false,
          channelLayout: 'single',
          roundBars: true,
          barSpace: 0.25,
          colorMode: 'gradient',
          gradient: 'prism',
          fftSize: 8192,
          smoothing: 0.7,
          minFreq: 30,
          maxFreq: 16000,
          frequencyScale: 'log',
          minDecibels: -85,
          maxDecibels: -25,
          linearAmplitude: true,
          linearBoost: 1.6,
          showPeaks: true,
          peakLine: true,
          showScaleX: false,
          showScaleY: false,
        });
        
        // Resume audio context on user interaction
        const resumeContext = () => {
          if (audioMotionRef.current?.audioCtx?.state === 'suspended') {
            audioMotionRef.current.audioCtx.resume();
          }
        };
        document.addEventListener('click', resumeContext, { once: true });
        
        setIsReady(true);
        console.log('AudioMotion initialized');
      } catch (error) {
        console.error('Init error:', error);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioMotionRef.current) {
        try {
          audioMotionRef.current.destroy();
        } catch (e) {}
      }
    };
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !audioRef.current) return;

    const url = URL.createObjectURL(file);
    audioRef.current.src = url;
    audioRef.current.play().catch(err => console.error('Play error:', err));
  };

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/audiomotion-analyzer@4.3.0/dist/audioMotion-analyzer.min.js"
        strategy="afterInteractive"
        onLoad={initAudioMotion}
        onError={(e) => console.error('Script load error:', e)}
      />
      <div style={{ margin: 0, background: '#0b0b0b', color: 'white', minHeight: '100vh', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', margin: '20px 0', fontWeight: 500 }}>AudioMotion Analyzer</h2>
        
        <div ref={containerRef} style={{ width: '100%', height: '500px', background: '#000', margin: '0 auto', maxWidth: '1200px', border: '1px solid #333' }} />
        
        <div style={{ maxWidth: '800px', margin: '20px auto', textAlign: 'center' }}>
          <audio 
            ref={audioRef} 
            controls 
            crossOrigin="anonymous"
            style={{ width: '100%', marginBottom: '10px' }} 
          />
          <br />
          <input 
            type="file" 
            accept="audio/*" 
            onChange={handleFileChange} 
            style={{ padding: '10px', background: '#333', color: 'white', border: '1px solid #555', borderRadius: '5px', cursor: 'pointer' }} 
          />
          <p style={{ marginTop: '10px', color: '#888', fontSize: '14px' }}>
            {isReady ? '✓ Visualizer ready - Upload an audio file and play it to see the visualization' : 'Loading visualizer...'}
          </p>
        </div>
      </div>
    </>
  );
}
