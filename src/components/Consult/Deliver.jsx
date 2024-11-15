import React from 'react';
import { FaLightbulb, FaBriefcase, FaDesktop, FaConnectdevelop, FaHandshake, FaPagelines, FaComments, FaPager } from 'react-icons/fa'; // Importing necessary icons

const Deliver = () => {
  return (
    <section className="consulting_delivar-area section-padding">
      <div className="container container-menu">
        <div className="row">
          <div className="col-lg-12">
            <div className="project_example-title">
              <h3 className="text-dark">What we deliver</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="consulting_all-content">
              <div className="consulting-single wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="50ms">
                <div className="icon">
                  <FaLightbulb style={{ color: 'orange' }} /> {/* Orange lightbulb icon */}
                </div>
                <h5>Lean startup</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat est temporibus natus velit fugiat quam molestiae perferendis voluptas saepe aut itaque ut minus voluptate aspernatur exercitationem quibusdam, beatae sunt enim?</p>
              </div>
              <div className="consulting-single wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="100ms">
                <div className="icon">
                  <FaBriefcase style={{ color: 'orange' }} /> {/* Orange briefcase icon */}
                </div>
                <h5>Digital transformation</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat est temporibus natus velit fugiat quam molestiae perferendis voluptas saepe aut itaque ut minus voluptate aspernatur exercitationem quibusdam, beatae sunt enim?</p>
              </div>
              <div className="consulting-single wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="150ms">
                <div className="icon">
                  <FaDesktop style={{ color: 'orange' }} /> {/* Orange desktop icon */}
                </div>
                <h5>Agile consultancy</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat est temporibus natus velit fugiat quam molestiae perferendis voluptas saepe aut itaque ut minus voluptate aspernatur exercitationem quibusdam, beatae sunt enim?</p>
              </div>
              <div className="consulting-single wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="200ms">
                <div className="icon">
                  <FaConnectdevelop style={{ color: 'orange' }} /> {/* Orange connectdevelop icon */}
                </div>
                <h5>Devops consulting</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat est temporibus natus velit fugiat quam molestiae perferendis voluptas saepe aut itaque ut minus voluptate aspernatur exercitationem quibusdam, beatae sunt enim?</p>
              </div>
              <div className="consulting-single wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="250ms">
                <div className="icon">
                  <FaHandshake style={{ color: 'orange' }} /> {/* Orange handshake icon */}
                </div>
                <h5>Project takeover</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat est temporibus natus velit fugiat quam molestiae perferendis voluptas saepe aut itaque ut minus voluptate aspernatur exercitationem quibusdam, beatae sunt enim?</p>
              </div>
              <div className="consulting-single wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                <div className="icon">
                  <FaPagelines style={{ color: 'orange' }} /> {/* Orange pagelines icon */}
                </div>
                <h5>Product scale up</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat est temporibus natus velit fugiat quam molestiae perferendis voluptas saepe aut itaque ut minus voluptate aspernatur exercitationem quibusdam, beatae sunt enim?</p>
              </div>
              <div className="consulting-single wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="350ms">
                <div className="icon">
                  <FaComments style={{ color: 'orange' }} /> {/* Orange comments icon */}
                </div>
                <h5>Tech stack recommendation</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat est temporibus natus velit fugiat quam molestiae perferendis voluptas saepe aut itaque ut minus voluptate aspernatur exercitationem quibusdam, beatae sunt enim?</p>
              </div>
              <div className="consulting-single wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="400ms">
                <div className="icon">
                  <FaPager style={{ color: 'orange' }} /> {/* Orange pager icon */}
                </div>
                <h5>Software Audit</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat est temporibus natus velit fugiat quam molestiae perferendis voluptas saepe aut itaque ut minus voluptate aspernatur exercitationem quibusdam, beatae sunt enim?</p>
              </div>
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
  );
};

export default Deliver;
