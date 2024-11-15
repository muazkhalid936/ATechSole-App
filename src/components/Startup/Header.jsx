import React from "react";

const Header = () => {
  return (
    <section
      className="modinaizer-header mechine_header bg-cover"
      style={{ backgroundImage: "url('assets/img/service/consol_bg.jpg')" }}
    >
      <div className="container container-menu">
        <div className="row">
          <div className="col-lg-12">
            <div className="clients-single mechine_header_top">
              <div className="client_item-single-left">
                <div className="client_t-img">
                  <figure className="testimonials-slider__avatar-figure">
                    <img
                      className="slider_img_avatar"
                      src="assets/img/developer2/1.png"
                      alt="client"
                    />
                  </figure>
                </div>
              </div>
              <div className="client_item-single-right">
                <div className="clients-descrip">
                  <p>
                    “They have a strong balance of professionalism, talent,
                    communication, and friendliness.”
                  </p>
                </div>
                <div className="clients-name">
                  <h4>Nurulhudha Nurul</h4>
                </div>
                <div className="clients-company">
                  <h4>CEO @ Blackberry Soft</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="modinaizer-content meching_content">
              <h2>machine learning & AI</h2>
              <h5>Invent from thought</h5>
              <div className="default-button">
                <a href="#" className="main_button modi_btn">
                  <span className="button__label">get a counsulation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
