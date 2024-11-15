import React from "react";
import { FaRobot, FaCode, FaShieldAlt } from "react-icons/fa";

const CareerArea = () => {
  const services = [
    {
      title: "AI",
      description: "Innovative AI solutions to enhance your business processes.",
      icon: <FaRobot />,
    },
    {
      title: "Development",
      description: "Custom web and mobile app development tailored to your needs.",
      icon: <FaCode />,
    },
    {
      title: "Cyber Security",
      description: "Robust security measures to protect your digital assets.",
      icon: <FaShieldAlt />,
    },
  ];

  return (
    <main className="careers_area">
      <section className="message-sction">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="message-left">
                <h2>
                  Hello, <span>Friend!</span>
                </h2>
                <p>
                  At <strong>ATechSole</strong>, we specialize in turning your
                  digital dreams into reality. With expertise in{" "}
                  <strong>MERM</strong>, <strong>MEVN</strong>, and{" "}
                  <strong>MEAN</strong> technologies, we create innovative web
                  and mobile applications tailored to your unique business
                  needs. Our passionate team is committed to delivering
                  solutions that enhance user experience and drive growth.
                  Whether you're seeking robust{" "}
                  <strong>software development, advanced cybersecurity,</strong>{" "}
                  or <strong>AI integration</strong>, ATechSole is your trusted
                  partner in navigating the digital landscape.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="message-right">
                <img src="assets/img/message/message1.jpg" alt="msg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="jobstory-section section-padding">
        <div className="container container-menu">
          <div className="row">
            <h4 className="home-intro__overheading underlined-heading underlined-heading--animate">
              <span className="underlined-heading__wrapper">
                <span className="underlined-heading__content text-dark">
                  Current Openings
                </span>
              </span>
            </h4>
          </div>
          <div className="row pt-80">
            <div className="col-lg-3 col-md-6 padding_gap">
              <div className="job-single job-single2">
                <a href="#" className="job_anchor-box">
                  <h4>Development</h4>
                  <h3>Web Development</h3>
                  <p>
                    300 - 700 USD <span>(per project)</span> + Maintenance
                  </p>
                  <p>
                    150 - 400 USD <span>(retainer)</span>
                  </p>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 padding_gap">
              <div className="job-single">
                <a href="#" className="job_anchor-box">
                  <h4>Development</h4>
                  <h3>App Development</h3>
                  <p>
                    400 - 800 USD <span>(per project)</span> + Updates
                  </p>
                  <p>
                    200 - 500 USD <span>(retainer)</span>
                  </p>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 padding_gap">
              <div className="job-single">
                <a href="#" className="job_anchor-box">
                  <h4>Security</h4>
                  <h3>Cybersecurity</h3>
                  <p>
                    500 - 900 USD <span>(per project)</span> + Monitoring
                  </p>
                  <p>
                    250 - 600 USD <span>(retainer)</span>
                  </p>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 padding_gap">
              <div className="job-single job-single-last">
                <a href="#" className="job_anchor-box">
                  <h4>AI Services</h4>
                  <h3>Artificial Intelligence</h3>
                  <p>
                    600 - 1000 USD <span>(per project)</span> + Support
                  </p>
                  <p>
                    300 - 700 USD <span>(retainer)</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="jobpromo-section">
        <div className="container container-menu">
          <div className="row">
            <div className="col-lg-6 col-md-6 order-sm-2 order-md-1 order-lg-1 align-self-center">
              <div className="client-video promo_video">
                <img src="assets/img/insight/v1.jpg" alt="video" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 order-md-2 order-lg-2 order-sm-1">
              <div className="video_text-right">
                <h2>Let's discuss your ideas!</h2>
                <p>
                  Meet with our expertise to explore your ideas and how our
                  cutting-edge technology can convert them into reality. Our
                  team is committed to understanding your vision and working
                  closely with you to bring it to life.
                </p>
                <div className="carrer-button">
                  <a href="#" className="main_button contetn_btn">
                    <span className="button__label">Meet now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="message-sction meet_carrers">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="message-left">
                <h2>
                  ATechSole <span>!</span>
                </h2>
                <p>
                  It's good to see you here. We are <strong>ATechSole</strong>.
                  From a business perspective, we're an agile software team
                  crafting and launching fully-fledged web and mobile apps for
                  clients worldwide. But in our geeky day-to-day life, we're a
                  bunch of <strong>friends fully committed</strong> to our
                  passions.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="message-right">
                <img src="assets/img/message/message.jpg" alt="msg" />
              </div>
            </div>
          </div>
          <div className="row pt-100">
            <div className="col-lg-3 col-md-4">
              <div className="meet-single">
                <h4>Teamwork</h4>
                <p>
                  At ATechSole, we believe that collaboration is key to success.
                  Our diverse team combines their unique skills and perspectives
                  to tackle challenges effectively. Together, we create
                  solutions that not only meet but exceed client expectations.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="meet-single">
                <h4>Development</h4>
                <p>
                  We focus on building high-quality, scalable applications that
                  drive results. Our development process emphasizes innovation,
                  best practices, and continuous improvement to ensure we
                  deliver cutting-edge solutions that align with your business
                  goals.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="meet-single">
                <h4>Hardwork</h4>
                <p>
                  Our team is dedicated to putting in the effort needed to
                  achieve your vision. We embrace challenges and remain
                  resilient, ensuring that we deliver on our promises, no matter
                  the obstacles. We're committed to making your projects a
                  success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="transparent-grid">
        <div className="transparent-grid__container">
          <div className="transparent-grid__row">
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
            <div className="transparent-grid__column"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CareerArea;
