import React from "react";
import { FaReact } from "react-icons/fa";
import AppInvent from "./Consult/AppInvent";
import WorkWithUs from "./Consult/WorkWithUs";

const DetailsHalfPage = () => {
  return (
    <>
      <div className="work_gallery-service">
        <div className="container container-menu">
          <div className="row">
            <div className="col-lg-12">
              <div className="work_gallery">
                <div className="gallery-single">
                  <img src="assets/img/gallery/w1.jpg" alt="" />
                </div>
                <div className="gallery-single">
                  <img src="assets/img/gallery/w2.jpg" alt="" />
                </div>
                <div className="gallery-single">
                  <img src="assets/img/gallery/w3.jpg" alt="" />
                </div>
                <div className="gallery-single">
                  <img src="assets/img/gallery/w4.jpg" alt="" />
                </div>
                <div className="gallery-single">
                  <img src="assets/img/gallery/w5.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="service_requirements section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="requirements-heding-title">
                <h2>First of all I will understand and then I will work</h2>
                <p>
                  At <strong>ATechSole</strong>, we prioritize thorough
                  comprehension before diving into action. Our approach ensures
                  that we address the unique needs and challenges of each
                  project with precision and care. By focusing on understanding
                  the specifics, we create tailored solutions that drive
                  success. We believe that a deep understanding is the
                  foundation of effective execution, leading to innovative and
                  impactful outcomes for our clients.
                </p>
                <a className="default-anchor" href="#">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="requirements-content">
                <h2 className="requirement_title">Main Requirements</h2>
                <div className="requirement_splitter"></div>
                <div className="requirement-daigram">
                  <div className="daigram_item-single">
                    <div className="daigram_item-name">
                      <h5>Innovation</h5>
                    </div>
                  </div>
                  <div className="daigram_item-single">
                    <div className="daigram_item-name">
                      <h5>Design</h5>
                    </div>
                  </div>
                  <div className="daigram_item-single">
                    <div className="daigram_item-name">
                      <h5>Development</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="deliver-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="expart-title">
                <h2 className="text-dark">
                  We deliver <span>even more</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row pt-60">
            <div className="col-lg-4 col-md-6">
              <div className="deliver-single">
                <div className="icon">
                  <FaReact />
                </div>
                <h3 className="deliver-title">Project Management</h3>
                <div className="deliver-text">
                  <p>
                    Our agile methodology and experienced project managers
                    enable us to create cutting-edge solutions tailored to
                    evolving needs and environments, achieving unprecedented
                    speed and quality in software development.
                  </p>
                </div>
                <div className="deliver_more-item">
                  <div className="deliver-nav">
                    <ul>
                      <li>Project Idea</li>
                      <li>Plan and Develop</li>
                      <li>Create and Lead</li>
                      <li>Project Progress</li>
                      <li>Scrum / Scrumban</li>
                    </ul>
                  </div>
                </div>
                <span className="deliver_item-url">
                  <a href="#">learn more</a>
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="deliver-single">
                <div className="icon">
                  <FaReact />
                </div>
                <h3 className="deliver-title">Quality Assurance</h3>
                <div className="deliver-text">
                  <p>
                    Through rigorous testing and continuous feedback, we ensure
                    our solutions meet the highest quality standards, adapting
                    swiftly to changes and maintaining excellence throughout the
                    development lifecycle.
                  </p>
                </div>
                <div className="deliver_more-item">
                  <div className="deliver-nav">
                    <ul>
                      <li>Project Outline</li>
                      <li>Create Measurable Goals</li>
                      <li>Establish Clear Processes</li>
                      <li>Collect Data</li>
                      <li>Check in Regularly</li>
                    </ul>
                  </div>
                </div>
                <span className="deliver_item-url">
                  <a href="#">learn more</a>
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="deliver-single">
                <div className="icon">
                  <FaReact />
                </div>
                <h3 className="deliver-title">Maintenance</h3>
                <div className="deliver-text">
                  <p>
                    We provide comprehensive maintenance services to ensure your
                    systems remain operational, secure, and optimized, including
                    infrastructure support, application updates, backup
                    recovery, and process automation.
                  </p>
                </div>
                <div className="deliver_more-item">
                  <div className="deliver-nav">
                    <ul>
                      <li>Infrastructure</li>
                      <li>Application</li>
                      <li>Backup Recovery</li>
                      <li>Product Optimization</li>
                      <li>Process Automation</li>
                    </ul>
                  </div>
                </div>
                <span className="deliver_item-url">
                  <a href="#">learn more</a>
                </span>
              </div>
            </div>
          </div>
        </div>
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
              <div className="transparent-grid__column"></div>
              <div className="transparent-grid__column"></div>
              <div className="transparent-grid__column"></div>
              <div className="transparent-grid__column"></div>
            </div>
          </div>
        </div>
      </section>
      <AppInvent />
      <WorkWithUs />
    </>
  );
};

export default DetailsHalfPage;
