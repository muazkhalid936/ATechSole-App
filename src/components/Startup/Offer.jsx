import React from "react";

const Offer = () => {
  return (
    <main className="careers_area main_offers">
      {/* <!-- we offer start --> */}
      <section className="what_we-offer">
        <div className="container container-menu">
          <div className="row">
            <div className="col-lg-12">
              <div className="offer-header">
                <h2 className="text-center">What We Offer</h2>
              </div>
            </div>
          </div>
          <div className="row pt-60">
            <div className="col-lg-7">
              <div className="client-video promo_video">
                <img src="assets/img/insight/v1.jpg" alt="video" />
                
              </div>
            </div>
            <div className="col-lg-5">
              <div className="we_offer-content">
                <p>
                  At <strong>ATechSole</strong>, we believe in transforming ideas into reality.
                  <strong className="text-dark">
                    {" "}
                    Our innovative solutions drive success
                  </strong>{" "}
                  and ensure a sustainable future for your business. Join us in
                  exploring the endless possibilities in technology and design.
                </p>
                <h3>Now is the time to elevate your organization</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- we offer end -->
       <!-- consulting-bulider start--> */}
      <section className="consultin-builders section-padding">
        <div className="container container-menu">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="builders_left-content">
                <h3>
                  Our Work is <br /> Our Passion
                </h3>
                <h2>Innovation Builders</h2>
                <p>
                  We are dedicated to creating user-centric designs and solutions
                  that enhance the experience for both clients and end-users.
                  Our team brings a wealth of experience and creativity to every
                  project, ensuring exceptional results that stand out in a
                  competitive market.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="builders-right">
                <div className="builders-img">
                  <img src="assets/img/service/builders.png" alt="png" />
                </div>
                <div className="builders-caption">
                  <div className="position">
                    <p>
                      <strong>UI/UX Designer</strong>
                    </p>
                    <p>5+ years of experience</p>
                  </div>
                  <div className="position">
                    <p>
                      <strong>Frontend Developer</strong>
                    </p>
                    <p>4+ years of experience</p>
                  </div>
                  <div className="position">
                    <p>
                      <strong>Backend Developer</strong>
                    </p>
                    <p>6+ years of experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- consulting-bulider end--> */}
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
    </main>
  );
};

export default Offer;
