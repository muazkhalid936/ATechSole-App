import React from "react";

const Requironment = () => {
  return (
    <>
      <section className="service_requirements section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="requirements-heding-title">
                <h2>Understanding First, Delivering Excellence</h2>
                <p>
                  At ATechSole, we prioritize understanding your unique needs
                  before diving into solutions. Our approach is rooted in
                  thoughtful analysis, ensuring that every step aligns with your
                  goals. From addressing challenges to crafting innovative
                  strategies, we focus on delivering excellence tailored to your
                  requirements.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="requirements-content">
                <h2 className="requirement_title">Our Core Requirements</h2>
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
      <div
        className="talks-area"
        style={{ backgroundImage: "url('assets/img/service/talks.png')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <div className="talks-content">
                <p>
                  Have a software challenge or need expert advice? ATechSole is
                  here to help. Our team is dedicated to providing solutions and
                  guidance to ensure your success. Reach out to us for support
                  anytime!
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <div className="default-button">
                <a href="#" className="main_button service_btn">
                  <span className="button__label">Let's Talk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Requironment;
