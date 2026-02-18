'use client';

import { useEffect, useState, useMemo } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientScripts from "../components/ClientScripts";
import Image from "next/image";

const audioData = [
  {
    title: 'Happy Customer',
    description: 'Our voice recording system is amazing',
    src: 'https://storage.vapi.ai/019bc771-4d9b-7559-bcb6-21e65f65ca30-1768577782412-0a1d0232-cf35-4a76-a0c2-bded367142a7-mono.wav'
  },
  {
    title: 'Happy Customer',
    description: 'Our voice recording system is amazing',
    src: 'https://storage.vapi.ai/019c42fd-7ee8-766c-bb87-632e3f7ba96d-1770650627841-09fe4c43-2a81-46ac-82f2-e7e1e3fa709b-mono.wav'
  }
];

function AudioPlayer({ title, description, src, index }: { title: string; description: string; src: string; index: number }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const waveformBars = useMemo(() => {
    const seed = index * 1000;
    return Array.from({ length: 50 }, (_, i) => {
      const h = ((seed + i * 37) % 100);
      const d = ((seed + i * 17) % 50) / 100;
      return { height: h, delay: d };
    });
  }, [index]);

  useEffect(() => {
    const audio = document.querySelector(`#audio-${index}`) as HTMLAudioElement;
    if (!audio) return;

    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [index]);

  const togglePlay = async () => {
    const audio = document.querySelector(`#audio-${index}`) as HTMLAudioElement;
    if (!audio) return;

    document.querySelectorAll('audio').forEach((a, i) => {
      if (i !== index && !a.paused) {
        a.pause();
      }
    });

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.log('Play error:', error);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = document.querySelector(`#audio-${index}`) as HTMLAudioElement;
    if (audio) {
      audio.currentTime = Number(e.target.value);
      setCurrentTime(Number(e.target.value));
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = document.querySelector(`#audio-${index}`) as HTMLAudioElement;
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
          <div className={`waveform ${isPlaying ? 'playing' : ''}`}>
            {waveformBars.map((bar, i) => (
              <span key={i} style={{ height: `${bar.height}%`, animationDelay: `${bar.delay}s` }} />
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
              step="1"
              className="seek"
              onChange={handleSeek}
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
        <audio id={`audio-${index}`} src={src}></audio>
      </div>
    </div>
  );
}

export default function Solutions() {
  return (
    <>
      <Header />
      <main>
        <div className="inner-banner">
          <div className="slider-wrap">
            <div className="text">
              <h1>The AI Voice Representative Your Business Deserves.</h1>
              <p><strong>Never miss a call. Never miss an opportunity.</strong><br />A professional, multi-lingual phone representative that answers calls, manages inquiries, and books appointments 24/7. No hold music, no missed leads.</p>
              <div className="default_btn">
                <a href="/contact">get started now</a>
              </div>
            </div>
          </div>
          <canvas id="canvas"></canvas>
        </div>

        <section className="solutionIntro-sec">
          <div className="slider-wrap">
            <div className="imgBox">
              <Image src="/img/solution-intro.jpg" alt="Solution" className="img-responsive" width={600} height={400} />
            </div>
            <div className="text">
              <div className="text-wrap">
                <p>An AI Representative is an intelligent digital assistant powered by artificial intelligence and machine learning. It acts on behalf of your business to handle customer interactions, automate communications, and support your team around the clock. Whether you need support for customer service, sales engagement, or event interaction, an AI Representative delivers fast, consistent, and accurate responses.</p>
                <p>With AI Representatives, your business gains a virtual workforce that improves efficiency, reduces manual workload, and enhances customer satisfaction.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="solutionContent pt-100">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="img-box">
                  <Image src="/img/ai-representative.webp" alt="Solution" className="img-responsive" width={1200} height={600} />
                </div>
              </div>
              <div className="col-sm-6">
                <h2>Key Features</h2>
                <p>Our AI Representative integrates cutting‑edge technologies to elevate your business operations:</p>
                <ul className="list">
                  <li>Intelligent Conversational AI</li>
                  <li>Multilingual Fluency</li>
                  <li>Real-time Transcription</li>
                  <li>Instant Notifications</li>
                  <li>24/7 Availability</li>
                </ul>
                <div className="default_btn">
                  <a href="/contact">get started now</a>
                </div>
                <br />
                <div className="small-img">
                  <Image src="/img/ai-representative-01-scaled.jpg" alt="Solution" width={400} height={300} />
                </div>
              </div>
              <div className="col-sm-6">
                <h3><strong>Why Use an AI Representative?</strong></h3>
                <p>Integrating an AI Representative into your business operations can transform the way you interact with customers and manage internal workflows. By automating repetitive and time-consuming tasks, AI Representatives free up your team to focus on strategic initiatives that drive growth and innovation. This not only boosts overall productivity but also ensures that your staff can dedicate more time to complex problem-solving and creative work rather than routine inquiries.</p>
                <p>Customer experience is significantly enhanced with an AI Representative. These intelligent agents provide instant, accurate, and context-aware responses to customer queries, reducing frustration and improving satisfaction. Whether it's handling multiple conversations simultaneously or delivering consistent information, AI ensures that your customers always receive prompt and reliable support.</p>
                <p>Scalability is another major advantage. Unlike traditional staffing solutions, AI Representatives can be deployed quickly to handle increasing volumes of customer interactions without the added cost, time, or complexity of hiring and training new employees. This makes it easy for businesses of any size to expand their support capabilities in line with growth.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="screenSlide">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>Total Visibility Over Every Conversation</h2>
                <div className="sldier_box">
                  <div id="slide_screen" className="owl-carousel">
                    <div className="item">
                        <img src="/img/screen-1.webp" alt="" />
                        <div className="inner">
                          <a href="#">Dashboard  <span><Image src="/img/arrow_purple.png" width={20} height={20} alt="arrow" /></span></a>
                        </div>
                    </div>
                    <div className="item black">
                        <img src="/img/screen-2.webp" alt="" />
                        <div className="inner">
                          <a href="#">Dashboard  <span><Image src="/img/arrow_purple.png" width={20} height={20} alt="arrow" /></span></a>
                        </div>
                    </div>
                    <div className="item">
                        <img src="/img/screen-3.webp" alt="" />
                        <div className="inner">
                          <a href="#">Dashboard  <span><Image src="/img/arrow_purple.png" width={20} height={20} alt="arrow" /></span></a>
                        </div>
                    </div>
                      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="advantage-sec black_bg">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="content">
                  <h2>How the AI Representative Operates</h2>
                  <p>The AI Representative is designed to adapt to your business by intelligently mapping your knowledge, workflows, and communication standards. It is configured to understand customer intent, follow defined processes, and respond in a way that reflects your brand voice. This personalization ensures every interaction feels accurate, consistent, and aligned with your business goals from the very beginning.</p>
                  <blockquote><p>Once configured, the AI Representative is activated across your selected digital channels, including websites, messaging platforms, and internal tools. It immediately begins engaging users in real time—answering questions, assisting with requests, capturing relevant information, and escalating complex cases to human teams when necessary. This enables seamless customer interactions without disrupting existing operations.</p></blockquote>
                  <p>As conversations continue, the AI Representative evolves through continuous learning and performance analysis. Built-in insights and analytics allow you to monitor accuracy, response quality, and engagement trends. These insights help refine behavior, expand capabilities, and optimize interactions over time, ensuring the AI remains effective as customer needs and business priorities change.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="Process-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="Process-row">
                  <div className="Process-box">
                    <div className="num">1</div>
                    <div className="text">
                      <h4>Dedicated Line. </h4>
                      <p>We provide a professional phone number for your business or port your existing one. </p>
                    </div>
                  </div>
                  <div className="Process-box">
                    <div className="num">2</div>
                    <div className="text">
                      <h4>Intelligent Interaction</h4>
                      <p>Our AI answers in your brand voice, handles complex questions in multiple languages, and manages your calendar. </p>
                    </div>
                  </div>
                  <div className="Process-box">
                    <div className="num">3</div>
                    <div className="text">
                      <h4>Instant Insight</h4>
                      <p>As soon as the call ends, you receive a notification, a full transcription, and a logged summary in your dashboard. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="letsTalk">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="audiowrap">
                  {audioData.map((audio, index) => (
                    <AudioPlayer
                      key={index}
                      title={audio.title}
                      description={audio.description}
                      src={audio.src}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="faq-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1 text-center">
                <div className="heading">
                  <h2>Frequently Asked Questions</h2>
                  <p>Find quick answers to common questions about our AI Representative, including setup, features, integrations, and customization.</p>
                </div>
                <div className="faq_main">
                  <div className="faq_row">
                    <div className="faq_question">
                      <div className="faq_question-text">
                        <h3>What is an AI Representative?</h3>
                      </div>
                      <div className="icon">
                        <div className="icon-shape"></div>
                      </div>
                    </div>
                    <div className="answercont">
                      <div className="answer">
                        <p>An AI Representative is a virtual agent powered by AI that interacts with customers and performs routine tasks automatically.</p>
                      </div>
                    </div>
                  </div>
                  <div className="faq_row">
                    <div className="faq_question">
                      <div className="faq_question-text">
                        <h3>Can the AI work with my existing systems?</h3>
                      </div>
                      <div className="icon">
                        <div className="icon-shape"></div>
                      </div>
                    </div>
                    <div className="answercont">
                      <div className="answer">
                        <p>Yes. It integrates easily with popular platforms including support tools, CRM systems, and communication apps.</p>
                      </div>
                    </div>
                  </div>
                  <div className="faq_row">
                    <div className="faq_question">
                      <div className="faq_question-text">
                        <h3>Is it customizable?</h3>
                      </div>
                      <div className="icon">
                        <div className="icon-shape"></div>
                      </div>
                    </div>
                    <div className="answercont">
                      <div className="answer">
                        <p>Absolutely. You can tailor its responses, personality, and workflows to reflect your brand.</p>
                      </div>
                    </div>
                  </div>
                  <div className="faq_row">
                    <div className="faq_question">
                      <div className="faq_question-text">
                        <h3>Does it sound like a robot?</h3>
                      </div>
                      <div className="icon">
                        <div className="icon-shape"></div>
                      </div>
                    </div>
                    <div className="answercont">
                      <div className="answer">
                        <p>Our system uses advanced neural text-to-speech, providing a fluid, natural, and professional tone that mirrors human conversation.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ClientScripts />
    </>
  );
}
