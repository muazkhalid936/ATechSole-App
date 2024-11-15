import React from "react";

const SectionPartner = () => {
  return (
    <section
      className="section patnar_area bg-cover"
      style={{ backgroundImage: "url('assets/img/patnar/back.jpg')" }}
    >
      <div className="container">
        <div className="row">
          <h4 className="home-intro__overheading underlined-heading underlined-heading--animate">
            <span className="underlined-heading__wrapper">
              <span className="underlined-heading__content text-light">
                Market Preferences
              </span>
            </span>
          </h4>
        </div>
        <div className="row">
          <p className="home-intro__overheading underlined-heading underlined-heading--animate">
            <span className="underlined-heading__content text-light" style={{fontSize:"15px"}}>
              We Loved By Clients{" "}
            </span>
          </p>
          <p className="home-intro__overheading underlined-heading underlined-heading--animate">
            <span className="underlined-heading__content text-light" style={{fontSize:"12px",padding:"0px 20%"}}>
            We are trusted Web & Mobile App Development Company with decades of experience in steering clients through digital transformation.
Ratings & Reviews given by our esteemed clients empower and enable us to reach more people and influence the market.

            </span>
          </p>
        </div>
        <div className="row pt-60">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div
              className="patnar_item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="50ms"
            >
              <div className="image">
                <img src="assets/img/patnar/1.png" alt="patnar" />
              </div>
              <div className="patnar-content">
                <h5>
                  <a href="#">Top Mobile Development Company</a>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div
              className="patnar_item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <div className="image">
                <img src="assets/img/patnar/4.png" alt="patnar" />
              </div>
              <div className="patnar-content">
                <h5>
                  <a href="#">
                    The Most Reviewed App Development Company in USA
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div
              className="patnar_item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="150ms"
            >
              <div className="image">
                <img src="assets/img/patnar/2.png" alt="patnar" />
              </div>
              <div className="patnar-content">
                <h5>
                  <a href="#">Top Custom Software Development Company</a>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div
              className="patnar_item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="image">
                <img src="assets/img/patnar/3.png" alt="patnar" />
              </div>
              <div className="patnar-content">
                <h5>
                  <a href="#">Top Mobile App Developent in the USA</a>
                </h5>
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

export default SectionPartner;
