import React from "react";
import {
  FaApple,
  FaReact,
  FaMicrosoft,
  FaCogs,
  FaAndroid,
} from "react-icons/fa";

const ServiceDevelop = () => {
  return (
    <section className="what_we-develop section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-5 col-md-12 col-sm-12">
            <div className="whate_we-left">
              {/* Development images */}
              <div className="moblie_develop-single">
                <div className="img">
                  <img
                    src="assets/img/develop/m1.png"
                    alt="mobile development 1"
                  />
                </div>
              </div>
              <div className="moblie_develop-single moblie_develop-single2">
                <div className="img">
                  <img
                    src="assets/img/develop/m2.png"
                    alt="mobile development 2"
                  />
                </div>
              </div>

              <div className="moblie_develop-single moblie_develop-single2">
                <div className="img">
                  <img
                    src="assets/img/develop/m4.png"
                    alt="mobile development 4"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7 col-md-12 col-sm-12">
            <div className="we_develop-right">
              <div className="row">
                <div className="col-lg-12">
                  <div className="we_develop-title">
                    <h3>What We Develop</h3>
                    <p>
                      At ATechSole, we specialize in building comprehensive
                      technology solutions. From mobile and web applications to
                      cross-platform and enterprise solutions, our expertise
                      covers a wide range of development services that align
                      with modern industry standards.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="we_devlop-content-single">
                    <div className="icon">
                      <FaApple />
                    </div>
                    <h2>Mobile Backend Engineering</h2>
                    <p className="content_single-des">
                      Building robust and scalable backends for mobile
                      applications to handle data, user authentication, and
                      integrations with cloud services.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="we_devlop-content-single">
                    <div className="icon">
                      <FaReact />
                    </div>
                    <h2>Mobile Frontend Engineering</h2>
                    <p className="content_single-des">
                      Creating intuitive and responsive frontends for mobile
                      applications using modern frameworks to enhance user
                      experiences.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="we_devlop-content-single">
                    <div className="icon">
                      <FaMicrosoft />
                    </div>
                    <h2>Microsoft Development</h2>
                    <p className="content_single-des">
                      Developing customized applications and solutions on
                      Microsoft platforms, including Azure, .NET, and Office
                      integrations.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="we_devlop-content-single">
                    <div className="icon">
                      <FaCogs />
                    </div>
                    <h2>Cross-Platform Development</h2>
                    <p className="content_single-des">
                      Designing apps that work seamlessly across different
                      devices and operating systems, providing a consistent
                      experience for all users.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="we_devlop-content-single">
                    <div className="icon">
                      <FaApple />
                    </div>
                    <h2>iOS Development</h2>
                    <p className="content_single-des">
                      Crafting native iOS applications optimized for performance
                      and security, leveraging the latest tools and
                      technologies.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="we_devlop-content-single">
                    <div className="icon">
                      <FaAndroid />
                    </div>
                    <h2>Android Development</h2>
                    <p className="content_single-des">
                      Building Android applications tailored to Google’s
                      ecosystem, ensuring compatibility across various devices
                      and screen sizes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDevelop;
