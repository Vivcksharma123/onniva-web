import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientScripts from "../components/ClientScripts";
import Image from "next/image";

export default function Solutions() {
  return (
    <>
      <Header />
      <main>
        <div className="inner-banner">
          <div className="slider-wrap">
            <div className="text">
              <h1>Solutions</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla,</p>
              <div className="default_btn">
                <a href="#">get started now</a>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum pretium augue, eget dignissim dui dictum vitae. Curabitur ultrices at diam vel accumsan. Ut massa turpis, tempus vitae lectus sit amet, eleifend convallis erat. Phasellus maximus libero blandit justo sagittis, sit amet rhoncus urna sodales. Aliquam ac faucibus velit. Suspendisse a quam eu velit blandit pellentesque. In ullamcorper iaculis sapien, et tristique risus maximus nec. Nam in cursus nisl.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="solutionContent pt-100">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="img-box">
                  <Image src="/img/solution-img-1.jpg" alt="Solution" className="img-responsive" width={1200} height={600} />
                </div>
              </div>
              <div className="col-sm-6">
                <h2>Tools Technologies We Use</h2>
                <ul className="list">
                  <li>Vestibulum id vulputate tellus. Nunc nec dictum nisi</li>
                  <li>Maecenas quis pellentesque urna, nec aliquam neque</li>
                  <li>Duis eu enim metus. Fusce gravida, lorem eget pulvinar ultrices</li>
                  <li>Nunc non lobortis turpis. Cras in diam ac felis hendrerit porta</li>
                  <li>Nunc non lobortis turpis. Cras in diam ac felis hendrerit porta</li>
                </ul>
                <div className="default_btn">
                  <a href="#">get started now</a>
                </div>
                <br />
                <div className="small-img">
                  <Image src="/img/solution-img-2.jpg" alt="Solution" width={400} height={300} />
                </div>
              </div>
              <div className="col-sm-6">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla, ac sagittis sem ultrices vitae. Aliquam mi arcu, molestie non iaculis sit amet, maximus sed justo. In vehicula placerat risus, vitae ornare justo volutpat eu. Ut ornare enim vitae porttitor pharetra. In viverra non tellus congue venenatis.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla, ac sagittis sem ultrices vitae. Aliquam mi arcu, molestie non iaculis sit amet, maximus sed justo. In vehicula placerat risus, vitae ornare justo volutpat eu. Ut ornare enim vitae porttitor pharetra. In viverra non tellus congue venenatis.</p>
                <p>Pellentesque aliquam nunc et auctor consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce nisl nunc, blandit sit amet augue id, convallis luctus velit. Sed quis augue cursus, facilisis diam id, porta elit. Ut sed sollicitudin justo, eget congue tellus. Maecenas eleifend, metus non euismod lacinia, mi quam vulputate neque, ac ullamcorper ante sem et ante. Praesent convallis nunc vitae quam mollis auctor.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="advantage-sec black_bg">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="content">
                  <h2>Shape your AI advantage</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla, ac sagittis sem ultrices vitae. Aliquam mi arcu, molestie non iaculis sit amet, maximus sed justo. In vehicula placerat risus, vitae ornare justo volutpat eu. Ut ornare enim vitae porttitor pharetra. In viverra non tellus congue venenatis.</p>
                  <blockquote>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tempor nulla, ac sagittis sem ultrices vitae. Aliquam mi arcu, molestie non iaculis sit amet, maximus sed justo. In vehicula placerat risus, vitae ornare justo volutpat eu. Ut ornare enim vitae porttitor pharetra. In viverra non tellus congue venenatis.
                  </blockquote>
                  <p>Pellentesque aliquam nunc et auctor consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce nisl nunc, blandit sit amet augue id, convallis luctus velit. Sed quis augue cursus, facilisis diam id, porta elit. Ut sed sollicitudin justo, eget congue tellus. Maecenas eleifend, metus non euismod lacinia, mi quam vulputate neque, ac ullamcorper ante sem et ante. Praesent convallis nunc vitae quam mollis auctor.</p>
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
