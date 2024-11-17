import React from "react";
import { RiVuejsFill } from "react-icons/ri";
import { IoLogoAngular } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";

const Deliver = () => {
  return (
    <section className="deliver-area">
      <div className="container container-menu">
        <div className="row">
          <div className="col-lg-12">
            <div className="soluction-head">
              <h4 className="home-intro__overheading underlined-heading underlined-heading--animate">
                <span className="underlined-heading__wrapper">
                  <span className="underlined-heading__content text-dark">
                    Our Expertise
                  </span>
                </span>
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="deliver-single">
              <div className="icon">
                <RiVuejsFill size={40} style={{ color: "#ff4e00" }} />
              </div>
              <h3 className="deliver-title">MEVN Development</h3>
              <div className="deliver-text">
                <p>
                  Our MEVN stack services (MongoDB, Express.js, Vue.js, and
                  Node.js) focus on creating responsive applications with an
                  intuitive user interface. We harness the power of Vue.js for
                  its flexibility and ease of integration.
                </p>
              </div>
              <div className="deliver_more-item">
                <div className="deliver-nav">
                  <ul>
                    <li>Progressive Framework</li>
                    <li>Strong Community</li>
                    <li>High Performance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="deliver-single">
              <div className="icon">
                <IoLogoAngular size={40} style={{ color: "#ff4e00" }} />
              </div>
              <h3 className="deliver-title">MEAN Development</h3>
              <div className="deliver-text">
                <p>
                  With our MEAN stack expertise (MongoDB, Express.js, Angular,
                  and Node.js), we develop robust single-page applications.
                  Angular’s powerful features allow us to build interactive
                  applications that meet enterprise-level demands.
                </p>
              </div>
              <div className="deliver_more-item">
                <div className="deliver-nav">
                  <ul>
                    <li>Two-Way Binding</li>
                    <li>Modular Design</li>
                    <li>Cross-Platform Support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="deliver-single">
              <div className="icon">
                <RiReactjsLine size={40} style={{ color: "#ff4e00" }} />{" "}
                {/* Changed to #ff4e00 */}
              </div>
              <h3 className="deliver-title">MERN Development</h3>
              <div className="deliver-text">
                <p>
                  We leverage the MERN stack (MongoDB, Express.js, React.js, and
                  Node.js) to build dynamic and interactive web applications.
                  Our expertise in React.js allows us to create seamless user
                  interfaces that enhance user experience.
                </p>
              </div>
              <div className="deliver_more-item">
                <div className="deliver-nav">
                  <ul>
                    <li>Single Language</li>
                    <li>Scalable Architecture</li>
                    <li>Fast Development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deliver;
