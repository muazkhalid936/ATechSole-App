import React from "react";
import { FaPlay } from "react-icons/fa";

const SectionClient = () => {
  return (
    <section className="section clients-area pb-40">
      <div className="container container-menu">
        <div className="row">
          <div className="col-lg-6">
            <div className="client-video">
              <h3 style={{ color: "#ff4e00" }}>
                {" "}
                Expert Solutions for Your Business
              </h3>
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="video"
               className="pic1"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="client-content">
              <div className="icon-title">
                <h2>Trusted by 250+ revolutionary businesses</h2>
              </div>

              <div className="client-animation">
                <div className="image-fader">
                  <img src="assets/img/work/easyzet.png" alt="fade" />
                  <img src="assets/img/work/agrifram.png" alt="fade" />
                </div>
                <div className="image-fader">
                  <img src="assets/img/work/army.png" alt="fade" />
                  <img src="assets/img/work/football.png" alt="fade" />
                </div>
                <div className="image-fader">
                  <img src="assets/img/work/ridezibe.png" alt="fade" />
                  <img src="assets/img/work/resturon.png" alt="fade" />
                </div>
                <div className="image-fader">
                  <img src="assets/img/work/mediplant.png" alt="fade" />
                  <img src="assets/img/work/sun.png" alt="fade" />
                </div>
                <div className="image-fader">
                  <img src="assets/img/work/easyzet.png" alt="fade" />
                  <img src="assets/img/work/agrifram.png" alt="fade" />
                </div>
                <div className="image-fader">
                  <img src="assets/img/work/easyzet.png" alt="fade" />
                  <img src="assets/img/work/agrifram.png" alt="fade" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionClient;
