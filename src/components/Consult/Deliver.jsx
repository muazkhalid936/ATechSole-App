import React from 'react';
import { FaLightbulb, FaBriefcase, FaDesktop, FaConnectdevelop, FaHandshake, FaPagelines, FaComments, FaPager } from 'react-icons/fa';

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
                  <FaLightbulb style={{ color: 'orange' }} />
                </div>
                <h5>Lean startup</h5>
                <p>ATechSole specializes in transforming ideas into successful startups by focusing on innovative and cost-effective solutions tailored to your needs.</p>
              </div>
              <div className="consulting-single wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="100ms">
                <div className="icon">
                  <FaBriefcase style={{ color: 'orange' }} />
                </div>
                <h5>Digital transformation</h5>
                <p>We empower businesses with cutting-edge technologies to revolutionize operations, enhance customer experiences, and drive growth.</p>
              </div>
              <div className="consulting-single wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="150ms">
                <div className="icon">
                  <FaDesktop style={{ color: 'orange' }} />
                </div>
                <h5>Agile consultancy</h5>
                <p>Our agile experts help streamline processes and improve efficiency by adopting flexible development methodologies.</p>
              </div>
              <div className="consulting-single wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="200ms">
                <div className="icon">
                  <FaConnectdevelop style={{ color: 'orange' }} />
                </div>
                <h5>DevOps consulting</h5>
                <p>ATechSole delivers seamless integration between development and operations, enhancing collaboration and productivity.</p>
              </div>
              <div className="consulting-single wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="250ms">
                <div className="icon">
                  <FaHandshake style={{ color: 'orange' }} />
                </div>
                <h5>Project takeover</h5>
                <p>We step in to rescue or optimize existing projects, ensuring their successful completion and alignment with business goals.</p>
              </div>
              <div className="consulting-single wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                <div className="icon">
                  <FaPagelines style={{ color: 'orange' }} />
                </div>
                <h5>Product scale up</h5>
                <p>Our team helps scale your products efficiently, enabling you to meet growing demand and expand your market presence.</p>
              </div>
              <div className="consulting-single wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="350ms">
                <div className="icon">
                  <FaComments style={{ color: 'orange' }} />
                </div>
                <h5>Tech stack recommendation</h5>
                <p>We provide expert guidance on the best technologies and frameworks to build and optimize your solutions.</p>
              </div>
              <div className="consulting-single wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="400ms">
                <div className="icon">
                  <FaPager style={{ color: 'orange' }} />
                </div>
                <h5>Software Audit</h5>
                <p>ATechSole conducts thorough audits to identify bottlenecks and provide actionable insights for improving software performance and security.</p>
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
