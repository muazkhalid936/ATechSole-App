import React from "react";

const Work = () => {
  return (
    <section
      className="process-section bg_img"
      style={{ backgroundImage: "url('assets/img/process/bg.png')" }}
    >
      <div className="container container-menu">
        <div className="row">
          <div className="col-lg-12">
            <div className="expart-title">
              <h2 className="text-light">
                how we <span>work</span>
              </h2>
              <p className="text-light">
                We build organization and provide quality software depending on
                your needs like software
              </p>
            </div>
          </div>
        </div>
        <div className="row pt-60">
          <div className="process_all-content ">
            <div className="process-left-column">
              <img
                className="chart--first chart-img"
                src="assets/img/process/left.png"
                alt="png"
              />
              <div className="process_all-icon icon__first hidden_process">
                <div className="prcess_icon-single">
                  <img src="assets/img/design/c3.png" alt="l.png" />
                  <p>free consultation</p>
                </div>
                <div className="prcess_icon-single">
                  <img src="assets/img/design/c2.png" alt="l.png" />
                  <p>Most exprience team</p>
                </div>
                <div className="prcess_icon-single">
                  <img src="assets/img/design/c1.png" alt="l.png" />
                  <p>UX/UI support from 2 day</p>
                </div>
                <div className="prcess_icon-single">
                  <img src="assets/img/design/c4.png" alt="l.png" />
                  <p>product map starting</p>
                </div>
              </div>
            </div>
            <div className="process-left-column column2">
              <img
                className="chart--second chart-img"
                src="assets/img/process/right.png"
                alt="png"
              />
              <div className="process_all-icon icon--second hidden_process">
                <div className="prcess_icon-single">
                  <img src="assets/img/design/c2.png" alt="l.png" />
                  <p>Fast Engineer Service</p>
                </div>
                <div className="prcess_icon-single">
                  <img src="assets/img/design/c4.png" alt="l.png" />
                  <p>Soft team onboarding in 5 days</p>
                </div>
                <div className="prcess_icon-single">
                  <img src="assets/img/design/c1.png" alt="l.png" />
                  <p>flexibility in resources</p>
                </div>
                <div className="prcess_icon-single">
                  <img src="assets/img/design/c3.png" alt="l.png" />
                  <p>2 weeks trial period</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
