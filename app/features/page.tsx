'use client';

import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientScripts from "../components/ClientScripts";
import Image from "next/image";
import { useState } from "react";

export default function Features() {
  const [activeTab, setActiveTab] = useState('firstTab');

  const tabs = [
    { id: 'firstTab', icon: 'export-ico.png', label: 'Easy Import' },
    { id: 'secondTab', icon: 'custom-ico.png', label: 'Customization' },
    { id: 'thirdTab', icon: 'typo-ico.png', label: 'Typography' },
    { id: 'fourTab', icon: 'color-ico.png', label: 'Color Change' },
    { id: 'fiveTab', icon: 'woo-ico.png', label: 'WooCommerce' },
    { id: 'sixTab', icon: 'help-ico.png', label: 'Help Center' }
  ];

  return (
    <>
      <Header />
      <main>
        <div className="inner-banner">
          <div className="slider-wrap">
            <div className="text">
              <h1>Features</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla,</p>
              <div className="default_btn">
                <a href="#">get started now</a>
              </div>
            </div>
          </div>
          <canvas id="canvas"></canvas>
        </div>

        <section className="features-page">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="heading text-center">
                  <h2>Our Features</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla, ac sagittis sem ultrices vitae. Aliquam mi arcu, molestie non iaculis sit amet, maximus sed justo. In vehicula placerat risus, vitae ornare justo volutpat eu. Ut ornare enim vitae porttitor pharetra. In viverra non tellus congue venenatis.</p>
                </div>
                <div className="tabWrap">
                  <div className="tab">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        className={`tablinks ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        <Image src={`/img/${tab.icon}`} alt={tab.label} width={30} height={30} /> {tab.label}
                      </button>
                    ))}
                  </div>

                  <div id="firstTab" className="tabcontent" style={{display: activeTab === 'firstTab' ? 'block' : 'none'}}>
                    <div className="img-box">
                      <Image src="/img/Import-img.jpg" alt="Import" className="img-responsive" width={1200} height={600} />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla, ac sagittis sem ultrices vitae. Aliquam mi arcu, molestie non iaculis sit amet, maximus sed justo. In vehicula placerat risus, vitae ornare justo volutpat eu. Ut ornare enim vitae porttitor pharetra. In viverra non tellus congue venenatis.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla, ac sagittis sem ultrices vitae. Aliquam mi arcu, molestie non iaculis sit amet, maximus sed justo. In vehicula placerat risus, vitae ornare justo volutpat eu. Ut ornare enim vitae porttitor pharetra. In viverra non tellus congue venenatis.</p>
                    <ul>
                      <li>Vestibulum id vulputate tellus. Nunc nec dictum nisi</li>
                      <li>Maecenas quis pellentesque urna, nec aliquam neque</li>
                      <li>Duis eu enim metus. Fusce gravida, lorem eget pulvinar ultrices</li>
                      <li>Nunc non lobortis turpis. Cras in diam ac felis hendrerit porta</li>
                      <li>Vestibulum id vulputate tellus. Nunc nec dictum nisi</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla, ac sagittis sem ultrices vitae. Aliquam mi arcu, molestie non iaculis sit amet, maximus sed justo. In vehicula placerat risus, vitae ornare justo volutpat eu. Ut ornare enim vitae porttitor pharetra. In viverra non tellus congue venenatis.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla, ac sagittis sem ultrices vitae. Aliquam mi arcu, molestie non iaculis sit amet, maximus sed justo. In vehicula placerat risus, vitae ornare justo volutpat eu. Ut ornare enim vitae porttitor pharetra. In viverra non tellus congue venenatis.</p>
                  </div>

                  <div id="secondTab" className="tabcontent" style={{display: activeTab === 'secondTab' ? 'block' : 'none'}}>
                    <div className="img-box">
                      <Image src="/img/Import-img.jpg" alt="Import" className="img-responsive" width={1200} height={600} />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla, ac sagittis sem ultrices vitae. Aliquam mi arcu, molestie non iaculis sit amet, maximus sed justo. In vehicula placerat risus, vitae ornare justo volutpat eu. Ut ornare enim vitae porttitor pharetra. In viverra non tellus congue venenatis.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla, ac sagittis sem ultrices vitae. Aliquam mi arcu, molestie non iaculis sit amet, maximus sed justo. In vehicula placerat risus, vitae ornare justo volutpat eu. Ut ornare enim vitae porttitor pharetra. In viverra non tellus congue venenatis.</p>
                    <ul>
                      <li>Vestibulum id vulputate tellus. Nunc nec dictum nisi</li>
                      <li>Maecenas quis pellentesque urna, nec aliquam neque</li>
                      <li>Duis eu enim metus. Fusce gravida, lorem eget pulvinar ultrices</li>
                      <li>Nunc non lobortis turpis. Cras in diam ac felis hendrerit porta</li>
                      <li>Vestibulum id vulputate tellus. Nunc nec dictum nisi</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla, ac sagittis sem ultrices vitae. Aliquam mi arcu, molestie non iaculis sit amet, maximus sed justo. In vehicula placerat risus, vitae ornare justo volutpat eu. Ut ornare enim vitae porttitor pharetra. In viverra non tellus congue venenatis.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla, ac sagittis sem ultrices vitae. Aliquam mi arcu, molestie non iaculis sit amet, maximus sed justo. In vehicula placerat risus, vitae ornare justo volutpat eu. Ut ornare enim vitae porttitor pharetra. In viverra non tellus congue venenatis.</p>
                  </div>

                  <div id="thirdTab" className="tabcontent" style={{display: activeTab === 'thirdTab' ? 'block' : 'none'}}>
                    <div className="img-box">
                      <Image src="/img/Import-img.jpg" alt="Import" className="img-responsive" width={1200} height={600} />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla, ac sagittis sem ultrices vitae. Aliquam mi arcu, molestie non iaculis sit amet, maximus sed justo. In vehicula placerat risus, vitae ornare justo volutpat eu. Ut ornare enim vitae porttitor pharetra. In viverra non tellus congue venenatis.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla, ac sagittis sem ultrices vitae. Aliquam mi arcu, molestie non iaculis sit amet, maximus sed justo. In vehicula placerat risus, vitae ornare justo volutpat eu. Ut ornare enim vitae porttitor pharetra. In viverra non tellus congue venenatis.</p>
                    <ul>
                      <li>Vestibulum id vulputate tellus. Nunc nec dictum nisi</li>
                      <li>Maecenas quis pellentesque urna, nec aliquam neque</li>
                      <li>Duis eu enim metus. Fusce gravida, lorem eget pulvinar ultrices</li>
                      <li>Nunc non lobortis turpis. Cras in diam ac felis hendrerit porta</li>
                      <li>Vestibulum id vulputate tellus. Nunc nec dictum nisi</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla, ac sagittis sem ultrices vitae. Aliquam mi arcu, molestie non iaculis sit amet, maximus sed justo. In vehicula placerat risus, vitae ornare justo volutpat eu. Ut ornare enim vitae porttitor pharetra. In viverra non tellus congue venenatis.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla, ac sagittis sem ultrices vitae. Aliquam mi arcu, molestie non iaculis sit amet, maximus sed justo. In vehicula placerat risus, vitae ornare justo volutpat eu. Ut ornare enim vitae porttitor pharetra. In viverra non tellus congue venenatis.</p>
                  </div>

                  <div id="fourTab" className="tabcontent" style={{display: activeTab === 'fourTab' ? 'block' : 'none'}}>
                    <h3>fourTab tab title</h3>
                    <p>Suspendisse lacinia sapien eget risus porttitor, sit amet faucibus velit ullamcorper. Quisque dictum erat neque, placerat dignissim ante tempor at. Nullam ullamcorper justo felis, nec pulvinar ex suscipit vel. Donec viverra leo ut ante iaculis, sit amet porta leo vehicula. Suspendisse fermentum congue ligula sed molestie. Praesent lacinia, massa non fringilla scelerisque, tellus arcu sodales nunc, in ultrices sapien ante et ante. In iaculis tellus urna, at convallis massa porta in. Proin vehicula facilisis varius. Pellentesque vitae purus non mauris ultricies porttitor nec sodales nulla.</p>
                  </div>

                  <div id="fiveTab" className="tabcontent" style={{display: activeTab === 'fiveTab' ? 'block' : 'none'}}>
                    <h3>fiveTab tab title</h3>
                    <p>Suspendisse lacinia sapien eget risus porttitor, sit amet faucibus velit ullamcorper. Quisque dictum erat neque, placerat dignissim ante tempor at. Nullam ullamcorper justo felis, nec pulvinar ex suscipit vel. Donec viverra leo ut ante iaculis, sit amet porta leo vehicula. Suspendisse fermentum congue ligula sed molestie. Praesent lacinia, massa non fringilla scelerisque, tellus arcu sodales nunc, in ultrices sapien ante et ante. In iaculis tellus urna, at convallis massa porta in. Proin vehicula facilisis varius. Pellentesque vitae purus non mauris ultricies porttitor nec sodales nulla.</p>
                  </div>

                  <div id="sixTab" className="tabcontent" style={{display: activeTab === 'sixTab' ? 'block' : 'none'}}>
                    <h3>sixTab tab title</h3>
                    <p>Suspendisse lacinia sapien eget risus porttitor, sit amet faucibus velit ullamcorper. Quisque dictum erat neque, placerat dignissim ante tempor at. Nullam ullamcorper justo felis, nec pulvinar ex suscipit vel. Donec viverra leo ut ante iaculis, sit amet porta leo vehicula. Suspendisse fermentum congue ligula sed molestie. Praesent lacinia, massa non fringilla scelerisque, tellus arcu sodales nunc, in ultrices sapien ante et ante. In iaculis tellus urna, at convallis massa porta in. Proin vehicula facilisis varius. Pellentesque vitae purus non mauris ultricies porttitor nec sodales nulla.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ctaSec">
          <div className="sec-wrap">
            <h2>Book a Demo</h2>
            <p>Sed luctus turpis suscipit nisi vestibulum, nec volutpat erat gravida. Nunc nibh nisl, dapibus sed aliquet et, venenatis ut mi. Nam id dui eu lorem vulputate imperdiet non non urna.</p>
            <div className="default_btn2">
              <a href="#">get started now</a>
            </div>
          </div>
        </section>

        <section className="Feature-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="heading">
                  <h2>Explore highlighted features</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla, ac sagittis sem ultrices vitae.</p>
                </div>
              </div>
              <div className="col-md-12">
                <div id="highlightFeature" className="owl-carousel owl-theme">
                  {['featurefull-1.webp', 'featureimg-2.webp', 'featureimg-3.webp', 'featureimg-1.webp', 'featureimg-2.webp'].map((img, idx) => (
                    <div className="item" key={idx}>
                      <div className="feature-box">
                        <div className="img">
                          <Image src={`/img/${img}`} alt="Feature" className="img-responsive" width={400} height={300} />
                        </div>
                        <div className="text">
                          <h4>{idx === 0 ? 'High-Quality Outputs' : idx === 1 ? 'Case Summary' : idx === 2 ? 'Real-Time Case Transcripts' : 'Phone Call Analytics'}</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla, ac sagittis sem ultrices vitae. <a href="#">Aliquam mi arcu</a>, molestie non iaculis sit amet, maximus sed justo. In vehicula placerat risus, vitae ornare justo volutpat eu. Ut ornare enim vitae porttitor pharetra. In viverra non tellus congue venenatis.</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla, ac sagittis sem ultrices vitae. Aliquam mi arcu, molestie non iaculis sit amet, maximus sed justo. In vehicula placerat risus, vitae ornare justo volutpat eu. Ut ornare enim vitae porttitor pharetra. In viverra non tellus congue venenatis.</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="sec_group">
          <section className="ctaSec2">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="text text-center">
                    <h2>We&apos;re here to help</h2>
                    <h4>For any inquiries or to place an order, please contact us</h4>
                    <div className="default_btn">
                      <a href="#">Contact us now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="bgParticles">
            <div className="geometric-background" id="geometric-background"></div>
            <div className="particles" id="particles"></div>
          </div>
        </div>

        <section className="faq-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1 text-center">
                <div className="heading">
                  <h2>Frequently Asked Questions</h2>
                  <p>Sed luctus turpis suscipit nisi vestibulum, nec volutpat erat gravida. Nunc nibh nisl, dapibus sed aliquet et, venenatis ut mi. Nam id dui eu lorem</p>
                </div>
                <div className="faq_main">
                  {[1, 2, 3, 4, 5, 6].map((_, idx) => (
                    <div className="faq_row" key={idx}>
                      <div className="faq_question">
                        <div className="faq_question-text">
                          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                        </div>
                        <div className="icon">
                          <div className="icon-shape"></div>
                        </div>
                      </div>
                      <div className="answercont">
                        <div className="answer">
                          <p>Sed luctus turpis suscipit nisi vestibulum, nec volutpat erat gravida. Nunc nibh nisl, dapibus sed aliquet et, venenatis ut mi. Nam id dui eu lorem vulputate imperdiet non non urna.</p>
                        </div>
                      </div>
                    </div>
                  ))}
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
