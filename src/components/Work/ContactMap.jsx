import React from "react";

const ContactMap = () => {
  return (
    <div className="contact_map-area">
      <div className="container">
        <div className="row">
          <div className="">
            <div className="contact_map-full">
              <div className="contact-footer__map-dots">
                <p
                  className="contact-footer__map-dot map-dot map-dot--left-side map-dot--static"
                  style={{ top: "35.1%", left: "18%" }}
                >
                  <span className="map-dot__info">
                    <span className="map-dot__content">
                      <span className="map-dot__header">USA</span>
                    </span>
                  </span>
                </p>
                <p
                  className="contact-footer__map-dot map-dot map-dot--static map-dot--left-side map-dot--department"
                  style={{ top: "35.5%", left: "46.5%" }}
                >
                  <span className="map-dot__info">
                    <span className="map-dot__content">
                      <span className="map-dot__header">UK</span>
                    </span>
                  </span>
                </p>
                <p
                  className="contact-footer__map-dot map-dot map-dot--static map-dot--top-side map-dot--department"
                  style={{ top: "80%", left: "87%" }}
                >
                  <span className="map-dot__info">
                    <span className="map-dot__content">
                      <span className="map-dot__header">Australia</span>
                    </span>
                  </span>
                </p>
                <p
                  className="contact-footer__map-dot map-dot map-dot--static map-dot--down-side map-dot--department"
                  style={{ top: "45%", left: "66%" }}
                >
                  <span className="map-dot__info">
                    <span className="map-dot__content">
                      <span className="map-dot__header">Pakistan</span>
                    </span>
                  </span>
                </p>
                <p
                  className="contact-footer__map-dot map-dot map-dot--static map-dot--down-side map-dot--department"
                  style={{ top: "43%", left: "88%" }}
                >
                  <span className="map-dot__info">
                    <span className="map-dot__content">
                      <span className="map-dot__header">Japan</span>
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
