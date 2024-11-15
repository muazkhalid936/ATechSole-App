import React from "react";

const Client = () => {
  return (
    <section className="service-client-lecture section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="project_example-title pb-60">
              <h3>What clients say </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1 align-self-center">
            <div className="client-video">
              <img src="assets/img/message/message.jpg" alt="video" />
              <div className="technology-video">
                <a
                  className="video-btn popup-youtube"
                  href="https://www.youtube.com/watch?v=Z0A7OMkYQf8"
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
