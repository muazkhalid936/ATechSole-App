import React from "react";

const ContactTeam = () => {
  return (
    <section className="contact-department">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="department-single">
              <div className="img">
                <img src="assets/img/mustansar.jpg" alt="deparment" />
              </div>
              <div className="department-content">
                <h5>Mustansar Riaz</h5>
                <p>CEO & Founder</p>
                <span>
                  <a className="email" href="#">
                    example@gmail.com
                  </a>
                </span>
                <span>
                  tel:{" "}
                  <a className="phone" href="#">
                    {" "}
                    +4565465742
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="department-single department-single2">
              <div className="img">
                <img src="assets/img/sardar wali.jpg" alt="deparment" />
              </div>
              <div className="department-content">
                <h5>Sardar Wali</h5>
                <p>Co-Founder & Digital Marketer</p>
                <span>
                  <a className="email" href="#">
                    example@gmail.com
                  </a>
                </span>
                <span>
                  tel:{" "}
                  <a className="phone" href="#">
                    {" "}
                    +4565465745
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="department-single">
              <div className="img">
                <img src="assets/img/ghazanfar.jpg" alt="deparment" />
              </div>
              <div className="department-content">
                <h5>Ghazanfar Riaz</h5>
                <p>Web Developer</p>
                <span>
                  <a className="email" href="#">
                    example@gmail.com
                  </a>
                </span>
                <span>
                  tel:{" "}
                  <a className="phone" href="#">
                    {" "}
                    +4565465747
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTeam;
