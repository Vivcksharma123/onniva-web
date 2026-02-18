'use client';

import { useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientScripts from "../components/ClientScripts";
import Image from "next/image";

export default function Solutions() {
  useEffect(() => {
    document.querySelectorAll(".audio-card").forEach(card => {
      const audio = card.querySelector("audio") as HTMLAudioElement;
      const seek = card.querySelector(".seek") as HTMLInputElement;
      const durationText = card.querySelector(".duration") as HTMLElement;
      const playBtn = card.querySelector(".play-btn") as HTMLElement;

      if (!audio || !seek || !durationText || !playBtn) return;

      const handlePlay = () => {
        document.querySelectorAll("audio").forEach(a => {
          if (a !== audio) {
            a.pause();
            a.currentTime = 0;
            const btn = a.closest(".audio-card")?.querySelector(".play-btn") as HTMLElement;
            if (btn) btn.innerHTML = "▶";
          }
        });

        if (audio.paused) {
          audio.play();
          playBtn.innerHTML = "❚❚";
        } else {
          audio.pause();
          playBtn.innerHTML = "▶";
        }
      };

      const handleLoadedMetadata = () => {
        seek.max = Math.floor(audio.duration).toString();
      };

      const handleTimeUpdate = () => {
        seek.value = Math.floor(audio.currentTime).toString();
        let m = Math.floor(audio.currentTime / 60);
        let s = Math.floor(audio.currentTime % 60);
        durationText.textContent = m + ":" + (s < 10 ? "0" + s : s);
      };

      const handleSeek = () => {
        audio.currentTime = parseInt(seek.value);
      };

      playBtn.addEventListener("click", handlePlay);
      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
      audio.addEventListener("timeupdate", handleTimeUpdate);
      seek.addEventListener("input", handleSeek);

      return () => {
        playBtn.removeEventListener("click", handlePlay);
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        seek.removeEventListener("input", handleSeek);
      };
    });
  }, []);
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
                  <div className="audio-player">
                    <div className="audio-card">
                      <div className="audio-row">
                        <div className="play-btn" onClick={() => {}}>▶</div>
                        <div className="audio-info">
                          <h3>Sound Waves</h3>
                          <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="waveform"></div>
                        <div className="duration">0:00</div>
                      </div>
                      <div className="flex">
                        <div className="progress">
                          <input type="range" defaultValue="0" min="0" step="1" className="seek" />
                        </div>
                        <div className="actions">
                          <span onClick={() => {}}><i className="fa fa-volume-up" aria-hidden="true"></i></span>
                          <span onClick={() => {}}><i className="fa fa-heart" aria-hidden="true"></i> 303</span>
                          <span onClick={() => {}}><i className="fa fa-download" aria-hidden="true"></i></span>
                        </div>
                      </div>
                      <audio id="audio" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>
                    </div>
                  </div>
                  <div className="audio-player">
                    <div className="audio-card">
                      <div className="audio-row">
                        <div className="play-btn" onClick={() => {}}>▶</div>
                        <div className="audio-info">
                          <h3>Sound Waves</h3>
                          <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="waveform"></div>
                        <div className="duration">0:00</div>
                      </div>
                      <div className="flex">
                        <div className="progress">
                          <input type="range" defaultValue="0" min="0" step="1" className="seek" />
                        </div>
                        <div className="actions">
                          <span onClick={() => {}}><i className="fa fa-volume-up" aria-hidden="true"></i></span>
                          <span onClick={() => {}}><i className="fa fa-heart" aria-hidden="true"></i> 303</span>
                          <span onClick={() => {}}><i className="fa fa-download" aria-hidden="true"></i></span>
                        </div>
                      </div>
                      <audio id="audio" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>
                    </div>
                  </div>
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
