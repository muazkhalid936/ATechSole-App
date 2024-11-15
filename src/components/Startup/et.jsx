import React from "react";
import { RiReactjsLine } from "react-icons/ri"; // Import React Icon

const SetStartup = () => {
  return (
    <section className="set-startup section-padding">
      <div className="container">
        <div className="row">
          <div className="expart-title">
            <h2 className="text-light">
              What are you going to get with <br /> <span>Startup DNA?</span>
            </h2>
          </div>
        </div>
        <div className="row pt-60">
          <div className="col-lg-3 col-md-3">
            <div className="startup_dna-box startup_dna-side">
              <div className="startup_dna_mask"></div>
              <div className="dna-head">
                <h6>Optional</h6>
                <h4>Opinion</h4>
                <p>Discovery and validation</p>
              </div>
              <div className="dna-content">
                <h5>You get: </h5>
                <ul>
                  <li>
                    <span>
                      <RiReactjsLine style={{ color: "orange" }} /> {/* React icon with orange color */}
                    </span>
                    technical feasibility check
                  </li>
                  <li>
                    <span>
                      <RiReactjsLine style={{ color: "orange" }} />
                    </span>
                    research of needs
                  </li>
                  <li>
                    <span>
                      <RiReactjsLine style={{ color: "orange" }} />
                    </span>
                    idea validation
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="startup_dna-box startup_dna-box_center">
              <div className="startup_dna_mask"></div>
              <div className="dna-head">
                <h6>Product</h6>
              </div>
              <div className="startup_dna-box_center_container">
                <div className="dna-box_center__item">
                  <div className="dna-head">
                    <p>Brand & Prototyping </p>
                  </div>
                  <div className="dna-content">
                    <h5>You get: </h5>
                    <ul>
                      <li>
                        <span>
                          <RiReactjsLine style={{ color: "orange" }} />
                        </span>
                        logo, typography & colors
                      </li>
                      <li>
                        <span>
                          <RiReactjsLine style={{ color: "orange" }} />
                        </span>
                        brand direction manual
                      </li>
                      <li>
                        <span>
                          <RiReactjsLine style={{ color: "orange" }} />
                        </span>
                        high-fidelity design screens (10-12)
                      </li>
                      <li>
                        <span>
                          <RiReactjsLine style={{ color: "orange" }} />
                        </span>
                        interactive, clickable prototype
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="dna-box_center__item">
                  <div className="dna-head">
                    <p>Brand & Prototyping </p>
                  </div>
                  <div className="dna-content">
                    <h5>You get: </h5>
                    <ul>
                      <li>
                        <span>
                          <RiReactjsLine style={{ color: "orange" }} />
                        </span>
                        user stories & user journey
                      </li>
                      <li>
                        <span>
                          <RiReactjsLine style={{ color: "orange" }} />
                        </span>
                        PVP feature list
                      </li>
                      <li>
                        <span>
                          <RiReactjsLine style={{ color: "orange" }} />
                        </span>
                        estimate & timeline
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="startup_dna-box_img">
                <img src="assets/img/service/robot.png" alt="robot" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="startup_dna-box startup_dna-side">
              <div className="startup_dna_mask"></div>
              <div className="dna-head">
                <h6>Optional</h6>
                <h4>Financier</h4>
                <p>Discovery and validation</p>
              </div>
              <div className="dna-content">
                <h5>You get: </h5>
                <ul>
                  <li>
                    <span>
                      <RiReactjsLine style={{ color: "orange" }} />
                    </span>
                    multi page design
                  </li>
                  <li>
                    <span>
                      <RiReactjsLine style={{ color: "orange" }} />
                    </span>
                    landing page design
                  </li>
                  <li>
                    <span>
                      <RiReactjsLine style={{ color: "orange" }} />
                    </span>
                    Share your ideas in various ways
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border_box-bottom"></div>
      </div>
    </section>
  );
};

export default SetStartup;
