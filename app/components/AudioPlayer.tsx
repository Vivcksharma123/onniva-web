'use client';

import { useRef, useState, useEffect, useMemo } from 'react';

interface AudioPlayerProps {
  title: string;
  description: string;
  src: string;
  index: number;
}

export default function AudioPlayer({ title, description, src, index }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      if (audio.readyState >= 2) {
        setDuration(audio.duration);
      }
    };
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleEnded = () => setIsPlaying(false);
    const handleCanPlay = () => setDuration(audio.duration);

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('durationchange', handleLoadedMetadata);

    // Force load metadata
    if (audio.readyState >= 2) {
      setDuration(audio.duration);
    }

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('durationchange', handleLoadedMetadata);
    };
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current) return;
    
    // Pause all other audio players
    document.querySelectorAll('audio').forEach((audio) => {
      if (audio !== audioRef.current && !audio.paused) {
        audio.pause();
      }
    });

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Play error:', error);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    const newTime = Number(e.target.value);
    if (audio && !isNaN(newTime)) {
      audio.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (audio) {
      const newVolume = Number(e.target.value);
      audio.volume = newVolume;
      setVolume(newVolume);
    }
  };

  const formatTime = (time: number) => {
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);
    return `${m}:${s < 10 ? '0' + s : s}`;
  };

  const bars = useMemo(() => {
    const heights = [57, 34, 75, 42, 51, 63, 69, 78, 70, 23, 62, 61, 57, 20, 70, 73, 77, 73, 63, 42, 60, 37, 58, 26, 33, 74, 42, 35, 54, 54, 40, 73, 68, 69, 41, 32, 43, 76, 77, 46];
    return heights.map((height, i) => ({
      id: i,
      height
    }));
  }, []);

  return (
    <div className="audio-player">
      <div className="audio-card">
        <div className="audio-row">
          <div className="play-btn" onClick={togglePlay}>
            {isPlaying ? '❚❚' : '▶'}
          </div>
          <div className="audio-info">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className="waveform">
            {bars.map((bar) => (
              <div
                key={bar.id}
                style={{
                  width: '3px',
                  height: `${bar.height}%`,
                  background: isPlaying ? '#667eea' : '#ccc',
                  borderRadius: '2px',
                  animation: isPlaying ? `wave 0.8s ease-in-out ${bar.id * 0.02}s infinite` : 'none',
                  transition: 'background 0.3s'
                }}
              />
            ))}
          </div>
          <div className="duration">{formatTime(currentTime)}</div>
        </div>
        <div className="flex">
          <div className="progress">
            <input
              type="range"
              value={currentTime}
              min="0"
              max={duration || 0}
              step="0.1"
              className="seek"
              onChange={handleSeek}
              style={{
                background: `linear-gradient(to right, #667eea 0%, #667eea ${duration ? (currentTime / duration) * 100 : 0}%, #e0e0e0 ${duration ? (currentTime / duration) * 100 : 0}%, #e0e0e0 100%)`
              }}
            />
          </div>
          <div className="actions">
            <span 
              onMouseEnter={() => setShowVolumeSlider(true)}
              onMouseLeave={() => setShowVolumeSlider(false)}
              style={{ position: 'relative' }}
            >
              <i className={`fa fa-volume-${volume === 0 ? 'off' : volume < 0.5 ? 'down' : 'up'}`} aria-hidden="true"></i>
              {showVolumeSlider && (
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  style={{
                    position: 'absolute',
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-50%) rotate(-90deg)',
                    transformOrigin: 'center',
                    width: '80px',
                    marginBottom: '30px'
                  }}
                />
              )}
            </span>
          </div>
        </div>
        <audio ref={audioRef} id={`audio-${index}`} src={src}></audio>
      </div>
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.5); }
        }
      `}</style>
    </div>
  );
}
