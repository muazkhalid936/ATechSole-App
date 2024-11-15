import React from "react";

const StayWithUs = () => {
  return (
    <section className="benefit_startup-area section-padding">
      <div className="container container-menu">
        <div className="row">
          <div className="expart-title">
            <h2 className="text-light">
              Why stay with us and what improvements <br />{" "}
              <span>you can expect</span>
            </h2>
          </div>
        </div>
        <div className="row pt-60">
          <div className="col-xl-10 offset-xl-1 col-lg-12 col-md-12">
            <div className="startup-box">
              <div className="startup_mask"></div>
              <div className="startup-list">
                <ul>
                  <li>
                    Collaborate seamlessly with our expert design and
                    development teams
                  </li>
                  <li>
                    Access innovative solutions that enhance user engagement and
                    satisfaction
                  </li>
                  <li>
                    Leverage our commitment to quality for impactful and
                    reliable software
                  </li>
                  <li>
                    Experience tailored support to align with your unique
                    business goals
                  </li>
                  <li>
                    Stay ahead of the competition with cutting-edge technologies
                  </li>
                  <li>
                    Benefit from our continuous improvement mindset and feedback
                    integration
                  </li>
                </ul>
              </div>
              <img
                className="startup_img"
                src="assets/img/about/file.png"
                alt="file"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayWithUs;
