import React from "react";

const WorkWithUs = () => {
  return (
    <section className="work_with-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="are_you-content">
                <div className="personal-info">
                  <div className="personal-details">
                    <h5>Ghazanfar Riaz</h5>
                    <p>Senior App Developer</p>
                  </div>
                  <div className="personal-img">
                    <img src="assets/img/membar/md.png" alt="personal" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 align-self-center">
              <div className="work_with-header">
                <h3>
                  Work with <span>US</span>
                </h3>
                <p></p>
                <div className="default-button">
                  <a href="#" className="main_button service_btn">
                    <span className="button__label">Contact Now</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="are_you-content are_you-content-right">
                <div className="personal-info">
                  <div className="personal-details">
                    <h5>Mustansar Riaz</h5>
                    <p>CEO of ATechSole</p>
                  </div>
                  <div className="personal-img">
                    <img src="assets/img/membar/founder.png" alt="personal" />
                  </div>
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

export default WorkWithUs;
