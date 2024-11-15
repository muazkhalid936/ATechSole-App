import React from "react";

const ServiceDetailHeader = () => {
  return (
    <section
      className="all_page-header"
      style={{
        backgroundImage: "url('assets/img/service/service_detail.jpg');",
      }}
    >
      <div className="conatiner container-menu">
        <div className="row">
          <div className="col-lg-12">
            <div className="all_page-content carrer_page-content">
              <div className="all_page-text carrer_page-text">
                <h2>
                  Website & Mobile Apps<br/><span> The world is now at hand</span>
                </h2>
                <p>Work hard to achieve</p>
              </div>
              <div className="default-button">
                <a href="#" className="main_button service_detail_btn">
                  <span className="button__label">schedule a tech call</span>
                </a>
              </div>
              <h2 className="service_detail-title">
                Big software companies have big contacts with us and we don't
                bother to cooperate with them
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailHeader;
