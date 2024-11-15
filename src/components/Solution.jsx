import React from "react";
import { FaPlay } from "react-icons/fa6";
const Solution = () => {
  return (
    <section className="solution-area section">
      <div className="container">
        <div className="row">
          <div className="solution-head">
            <p>
              Since our Inception, We have been helping companies across all the
              industries to achieve their Business Goals with Impactful,
              BusinessCentric Software Solutions.
            </p>
            <h2 className="solution_title">
              Our Expertise in Modern Technology
            </h2>
            <div className="soluiton_line">
              <div className="solution-height"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="solution_nav">
            <ul className="nav nav-tabs" id="nav-tab2" role="tablist">
              <li>
                <a
                  className="nav-link"
                  id="nav-dna-tab"
                  data-bs-toggle="tab"
                  href="#nav-dna"
                  role="tab"
                  aria-controls="nav-modiernization"
                  aria-selected="false"
                >
                  Cyber Security
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  id="nav-modiernization-tab"
                  data-bs-toggle="tab"
                  href="#nav-modiernization"
                  role="tab"
                  aria-controls="nav-modiernization"
                  aria-selected="false"
                >
                  Development
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  id="nav-machine-tab"
                  data-bs-toggle="tab"
                  href="#nav-machine"
                  role="tab"
                  aria-controls="nav-modiernization"
                  aria-selected="false"
                >
                  Artificial Intelligence
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content all_solution_slider" id="nav-tabContent2">
            {/* <!-- single_slider --> */}
            <div
              className="solution_slider tab-pane fade active show"
              id="nav-dna"
              role="tabpanel"
              aria-labelledby="nav-dna-tab"
            >
              <div className="solution_slide_image">
                <img src="assets/img/solution/3.jpg" alt="solution" />
              </div>
              <div className="solution_slide_content">
                <h3>Cyber Security</h3>
                <p>
                  Protect your business with our comprehensive cyber security
                  services. We implement advanced security measures to safeguard
                  your data, prevent breaches, and ensure compliance, helping
                  you stay secure in a digital-first world.
                </p>
                <a href="Startup-Details" className="solution_btn">
                  read more
                </a>
              </div>
            </div>
            {/* <!-- single_slider --> */}
            <div
              className="solution_slider tab-pane fade"
              id="nav-modiernization"
              role="tabpanel"
              aria-labelledby="nav-modiernization-tab"
            >
              <div className="solution_slide_image">
                <img src="assets/img/solution/2.jpg" alt="solution" />
              </div>
              <div className="solution_slide_content">
                <h3> Web/App Development </h3>
                <p>
                  From web to mobile app development, we build robust, scalable
                  solutions tailored to your business needs. Our development
                  services are focused on delivering high-performance,
                  user-friendly digital products that meet modern standards.
                </p>
                <a href="Startup-Details" className="solution_btn">
                  read more
                </a>
              </div>
            </div>
            {/* <!-- single_slider --> */}
            <div
              className="solution_slider tab-pane fade"
              id="nav-machine"
              role="tabpanel"
              aria-labelledby="nav-machine-tab"
            >
              <div className="solution_slide_image">
                <img src="assets/img/solution/1.jpg" alt="solution" />
              </div>
              <div className="solution_slide_content">
                <h3>Artificial Intelligence</h3>
                <p>
                  Our AI services help businesses harness the power of
                  intelligent automation, data analysis, and predictive
                  modeling. We deliver custom AI solutions to optimize
                  workflows, improve decision-making, and drive innovation in
                  your industry.
                </p>
                <a href="Service" className="solution_btn">
                  read more
                </a>
              </div>
            </div>
          </div>
          <div className="solution-head solution-head2">
            <div className="soluiton_line soluiton_line_bottom">
              <div className="solution-height"></div>
            </div>
            <p>You have ideas. We have software solutions.</p>
            <h2 className="solution_title">Time to join forces.</h2>
            <a href="Work" className="main_button">
              <span className="button__label">Go Work</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
